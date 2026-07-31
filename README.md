# Bukowski Tree Company website

Production domain: `https://bukowskitree.com`

TanStack Start, React, TypeScript, Tailwind CSS, Vercel Analytics, and Vercel Speed Insights power the site.

## Local development

Requirements: a current Node.js LTS release and npm.

```sh
git clone https://github.com/joeybukowski3/straight-talk-trees.git
cd straight-talk-trees
npm install
cp .env.example .env.local
npm run dev
```

Open the local URL printed by Vite.

## Quality commands

```sh
npm run lint
npm run typecheck
npm run build
```

## Environment variables

### `CONTACT_WEBHOOK_URL` — required for production form delivery

This must be a private, server-side HTTPS endpoint. It can be provided by a form-delivery service, private automation workflow, or mail relay. The endpoint must accept a JSON `POST` request and return a `2xx` response only after it accepts the submission for delivery.

Expected payload:

```json
{
  "source": "Bukowski Tree Company website",
  "sourcePage": "/",
  "submittedAt": "ISO-8601 timestamp",
  "name": "customer-entered value",
  "phone": "customer-entered value",
  "email": "customer-entered value",
  "service": "selected service",
  "urgency": "selected urgency",
  "location": "customer-entered ZIP or area",
  "description": "customer-entered project description"
}
```

Never expose the webhook URL in browser code or commit its real value.

## Vercel setup

1. Import this GitHub repository into Vercel.
2. Set the production domain to `bukowskitree.com` and configure the required DNS records.
3. Open **Project Settings → Environment Variables**.
4. Add `CONTACT_WEBHOOK_URL` for Production and any Preview environment used for form testing.
5. Redeploy after changing environment variables.
6. Vercel Analytics and Speed Insights become available in the project dashboard after a production deployment receives traffic. No Google Analytics identifier is configured.

## Contact-form verification

Successful-delivery test:

1. Configure a controlled test webhook that records received requests without emailing a real customer.
2. Submit the form with clearly identified test data.
3. Confirm one payload arrives, the source page and timestamp are present, and the website displays its success message.
4. Confirm no form values appear in Vercel Analytics event properties.

Safe failure test:

1. In a Preview environment, point `CONTACT_WEBHOOK_URL` to a controlled endpoint that returns `500`, or temporarily remove the Preview variable.
2. Submit test data.
3. Confirm the website displays the failure message and click-to-call fallback rather than reporting success.
4. Restore the valid Preview variable.

## Post-deployment checklist

- Confirm `/`, `/privacy`, and `/terms` render without console or hydration errors.
- Confirm canonical, Open Graph, Twitter, and JSON-LD output use `https://bukowskitree.com`.
- Confirm `/robots.txt` and `/sitemap.xml` return successfully.
- Confirm the social preview uses a real image asset and is readable on major sharing debuggers.
- Confirm every phone link dials `+1 979-824-8240`.
- Confirm successful and failed form behavior in production.
- Confirm the webhook routes to the intended private destination email.
- Confirm Vercel Analytics events appear without personal information.
- Confirm the owner has verified insured status, emergency availability, service coverage, residential/commercial positioning, free-consultation language, and scheduling claims.

## Optional abuse hardening

The form uses server-side validation, maximum lengths, an off-screen honeypot, an outbound request timeout, and safe error handling. A durable distributed rate limiter can be added later through a service such as Vercel KV/Upstash. An in-memory server limiter is intentionally not presented as production protection because serverless instances do not share reliable process memory.
