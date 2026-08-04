# Bukowski Tree Company website

Production domain: `https://bukowskitrees.com`

TanStack Start, React, TypeScript, Tailwind CSS, Vercel Analytics, and Vercel Speed Insights power the site.

## Route architecture

Public customer-facing routes are file-based TanStack Router routes under `src/routes`. Shared brand, navigation, conversion, and service-page components live under `src/components/site`.

Indexable public routes:

- `/`
- `/services`
- `/about`
- `/tree-removal`
- `/emergency-tree-service`
- `/dangerous-branch-removal`
- `/tree-trimming`
- `/storm-cleanup`
- `/stump-grinding`
- `/service-areas`
- `/contact`
- `/privacy`
- `/terms`

The canonical public-route list used to generate the sitemap lives in `scripts/public-routes.js`. `npm run build` runs the sitemap generator before the production build so `public/sitemap.xml` stays synchronized with that list.

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
npm run generate:sitemap
npx prettier --check .
npm run lint
npm run typecheck
npm run build
```

The GitHub Actions workflow performs strict changed-file Prettier and ESLint checks, keeps the known repository-wide lint baseline visible, builds the production app, and runs TypeScript validation.

No automated test suite is currently configured.

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

## Analytics

Vercel Analytics and Vercel Speed Insights are initialized once in the root application shell. Conversion tracking uses anonymous event names only. Names, phone numbers, emails, ZIP codes, locations, selected services, urgency values, and project descriptions must not be attached to analytics events.

## SEO and public discovery

- Expected canonical production origin: `https://bukowskitrees.com`.
- Each indexable route defines route-specific title, description, canonical, Open Graph, Twitter, and robots metadata.
- The homepage contains LocalBusiness/HomeAndConstructionBusiness and FAQ structured data.
- Dedicated service pages contain Service structured data.
- Pages with visible breadcrumbs emit matching BreadcrumbList structured data.
- `public/robots.txt` references the production sitemap.
- `public/sitemap.xml` is generated from `scripts/public-routes.js` before each production build.
- The existing real hero image is used as the current social-sharing image. A custom 1200×630 branded sharing asset is optional before or after launch.

## Vercel setup

1. Import this GitHub repository into Vercel.
2. Set the production domain to `bukowskitrees.com` and configure the required DNS records. Vercel should redirect `www.bukowskitrees.com` to the apex domain.
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

## Pre-launch checklist

Use [`docs/PRE-LAUNCH-CHECKLIST.md`](docs/PRE-LAUNCH-CHECKLIST.md) as the source of truth for code-complete work, required production configuration, and post-launch search/local-business tasks.

## Optional abuse hardening

The form uses server-side validation, maximum lengths, an off-screen honeypot, an outbound request timeout, and safe error handling. A durable distributed rate limiter can be added later through a service such as Vercel KV/Upstash. An in-memory server limiter is intentionally not presented as production protection because serverless instances do not share reliable process memory.
