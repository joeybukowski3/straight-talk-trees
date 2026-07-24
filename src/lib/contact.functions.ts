import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/**
 * Contact form submission handler.
 *
 * SETUP: Set the CONTACT_WEBHOOK_URL environment variable to a private
 * webhook (e.g. a Zapier/Make/Formspree/n8n endpoint, or a personal mail
 * relay) that forwards submissions to Jake's private email address.
 * The recipient email itself is NEVER placed in client code.
 *
 * The server function only reports success when the webhook responds 2xx.
 */
const submissionSchema = z.object({
  name: z.string().trim().min(1).max(120),
  phone: z.string().trim().min(7).max(40),
  email: z.string().trim().email().max(200),
  service: z.string().trim().min(1).max(80),
  urgency: z.string().trim().min(1).max(40),
  location: z.string().trim().min(1).max(120),
  description: z.string().trim().min(1).max(2000),
  website: z.string().max(0).optional().or(z.literal("")), // honeypot
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data) => submissionSchema.parse(data))
  .handler(async ({ data }) => {
    // Honeypot: silently accept but do nothing.
    if (data.website && data.website.length > 0) {
      return { ok: true };
    }

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error(
        "[contact] CONTACT_WEBHOOK_URL is not configured. Submission not delivered.",
      );
      throw new Error("Contact endpoint not configured");
    }

    const payload = {
      source: "bukowskitree.com landing page",
      submittedAt: new Date().toISOString(),
      name: data.name,
      phone: data.phone,
      email: data.email,
      service: data.service,
      urgency: data.urgency,
      location: data.location,
      description: data.description,
    };

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("[contact] Webhook failed", res.status, body);
      throw new Error("Delivery failed");
    }

    return { ok: true };
  });