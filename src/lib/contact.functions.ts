import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";
import { z } from "zod";
import { buildContactEmailHtml, buildContactEmailText, buildContactSubject } from "./contact-email";
import { parseRecipients } from "./contact-recipients";

const submissionSchema = z.object({
  name: z.string().trim().min(1).max(120),
  phone: z.string().trim().min(7).max(40),
  email: z.string().trim().toLowerCase().email().max(200),
  service: z.string().trim().min(1).max(80),
  urgency: z.string().trim().min(1).max(40),
  location: z.string().trim().min(1).max(120),
  description: z.string().trim().min(1).max(2000),
  website: z.string().trim().max(200).optional().default(""),
  sourcePath: z.string().trim().max(300).optional().default("/"),
});

export type ContactSubmissionInput = z.infer<typeof submissionSchema>;
export { submissionSchema };

export const PUBLIC_ERROR = "We could not deliver your request. Please call us for assistance.";
const DELIVERY_TIMEOUT_MS = 8_000;

class TimeoutError extends Error {}

function withTimeout<T>(promise: Promise<T>, timeoutMs: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new TimeoutError("Delivery timed out")), timeoutMs);
    promise.then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      (error) => {
        clearTimeout(timer);
        reject(error);
      },
    );
  });
}

export async function deliverContactSubmission(
  data: ContactSubmissionInput,
): Promise<{ ok: true; discarded: boolean }> {
  if (data.website) {
    console.info("[contact] Honeypot submission discarded");
    return { ok: true, discarded: true };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromAddress = process.env.CONTACT_FROM_EMAIL;
  const recipients = parseRecipients(process.env.CONTACT_TO_EMAIL ?? "");

  if (!apiKey || !fromAddress || recipients.length === 0) {
    console.error("[contact] Resend delivery is not fully configured");
    throw new Error(PUBLIC_ERROR);
  }

  const submittedAt = new Date().toISOString();
  const submission = {
    name: data.name,
    phone: data.phone,
    email: data.email,
    service: data.service,
    urgency: data.urgency,
    location: data.location,
    description: data.description,
    sourcePath: data.sourcePath || "/",
  };

  const resend = new Resend(apiKey);

  try {
    const result = await withTimeout(
      resend.emails.send({
        from: fromAddress,
        to: recipients,
        replyTo: submission.email,
        subject: buildContactSubject(submission),
        html: buildContactEmailHtml(submission, submittedAt),
        text: buildContactEmailText(submission, submittedAt),
      }),
      DELIVERY_TIMEOUT_MS,
    );

    if (result.error) {
      console.error("[contact] Resend rejected submission", { name: result.error.name });
      throw new Error(PUBLIC_ERROR);
    }

    console.info("[contact] Delivered submission", {
      messageId: result.data?.id,
      sourcePath: submission.sourcePath,
    });

    return { ok: true, discarded: false };
  } catch (error) {
    if (error instanceof TimeoutError) {
      console.error("[contact] Resend delivery timed out");
    } else if (!(error instanceof Error) || error.message !== PUBLIC_ERROR) {
      console.error("[contact] Resend delivery failed", {
        name: error instanceof Error ? error.name : "UnknownError",
      });
    }
    throw new Error(PUBLIC_ERROR);
  }
}

export const submitContact = createServerFn({ method: "POST" })
  .validator((data) => submissionSchema.parse(data))
  .handler(async ({ data }) => deliverContactSubmission(data));
