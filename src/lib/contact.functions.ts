import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { SITE } from "./site-config";

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

const PUBLIC_ERROR = "We could not deliver your request. Please call us for assistance.";

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data) => submissionSchema.parse(data))
  .handler(async ({ data }) => {
    if (data.website) {
      console.info("[contact] Honeypot submission discarded");
      return { ok: true, discarded: true };
    }

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("[contact] CONTACT_WEBHOOK_URL is not configured");
      throw new Error(PUBLIC_ERROR);
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8_000);

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "content-type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          source: `${SITE.businessName} website`,
          sourcePage: data.sourcePath || "/",
          submittedAt: new Date().toISOString(),
          name: data.name,
          phone: data.phone,
          email: data.email,
          service: data.service,
          urgency: data.urgency,
          location: data.location,
          description: data.description,
        }),
      });

      if (!response.ok) {
        console.error("[contact] Webhook rejected submission", { status: response.status });
        throw new Error(PUBLIC_ERROR);
      }

      return { ok: true, discarded: false };
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        console.error("[contact] Webhook request timed out");
      } else {
        console.error("[contact] Webhook delivery failed", {
          name: error instanceof Error ? error.name : "UnknownError",
        });
      }
      throw new Error(PUBLIC_ERROR);
    } finally {
      clearTimeout(timeout);
    }
  });
