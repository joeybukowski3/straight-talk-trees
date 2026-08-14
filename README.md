# Bukowski Tree Company website

Production domain: `https://bukowskitree.com`

TanStack Start, React, TypeScript, Tailwind CSS, Vercel Analytics, and Vercel Speed Insights power the site.

## Route architecture

Public customer-facing routes are file-based TanStack Router routes under `src/routes`. Shared brand, navigation, conversion, and service-page components live under `src/components/site`.

Indexable public routes:

- `/`
- `/services`
- `/about`
- `/tree-removal`
- `/fallen-tree-removal`
- `/emergency-tree-service`
- `/dangerous-branch-removal`
- `/tree-trimming`
- `/storm-cleanup`
- `/stump-grinding`
- `/commercial-tree-service`
- `/land-clearing`
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
npm run test
npm run test:e2e
npm run typecheck
npm run build
```

The GitHub Actions workflow performs strict changed-file Prettier and ESLint checks, keeps the known repository-wide lint baseline visible, builds the production app, and runs TypeScript validation.

Focused Vitest suites cover contact delivery, service SEO/schema data, service-area data, and the public route inventory. Playwright covers SEO rendering, analytics blocking, and service-area mobile behavior.

## Environment variables

Production requires these server-only environment variables:

- `RESEND_API_KEY` — Resend API key used to send delivery email.
- `CONTACT_FROM_EMAIL` — the verified sending address, for example `Jake <jake@bukowskitree.com>`.
- `CONTACT_TO_EMAIL` — one or more destination addresses. Multiple recipients are comma-separated, for example `bukowskitreeco@gmail.com,joeybuk03@gmail.com`. Whitespace around each address is trimmed and empty entries are discarded; at least one recipient is required.

`bukowskitree.com` must be a verified sending domain in Resend before production delivery will succeed.

None of these variables are ever exposed to client-side code — they are read only inside the server function in `src/lib/contact.functions.ts`.

Changing any of these variables in Vercel requires a new deployment to take effect.

## Analytics

Vercel Analytics and Vercel Speed Insights are initialized once in the root application shell. Conversion tracking uses anonymous event names only. Names, phone numbers, emails, ZIP codes, locations, selected services, urgency values, and project descriptions must not be attached to analytics events.

## SEO and public discovery

- Expected canonical production origin: `https://bukowskitree.com`.
- Each indexable route defines route-specific title, description, canonical, Open Graph, Twitter, and robots metadata.
- The homepage contains LocalBusiness/HomeAndConstructionBusiness and FAQ structured data.
- Dedicated service pages contain Service structured data.
- Pages with visible breadcrumbs emit matching BreadcrumbList structured data.
- `public/robots.txt` references the production sitemap.
- `public/sitemap.xml` is generated from `scripts/public-routes.js` before each production build.
- The existing real hero image is used as the current social-sharing image. A custom 1200×630 branded sharing asset is optional before or after launch.

## Vercel setup

1. Import this GitHub repository into Vercel.
2. Set the production domain to `bukowskitree.com` and configure the required DNS records. Vercel should redirect `www.bukowskitree.com` to the apex domain.
3. Open **Project Settings → Environment Variables**.
4. Add `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, and `CONTACT_TO_EMAIL` for Production and any Preview environment used for form testing.
5. Redeploy after changing environment variables.
6. Vercel Analytics and Speed Insights become available in the project dashboard after a production deployment receives traffic. Google Analytics is configured with Measurement ID `G-B3FP94XWK3`.

## Contact-form verification

Successful-delivery test:

1. Configure `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, and `CONTACT_TO_EMAIL` in a Preview environment.
2. Submit the form with clearly identified test data.
3. Confirm the configured recipients receive one email with the source page and submission timestamp, and the website displays its success message.
4. Confirm no form values appear in Vercel Analytics event properties.

Safe failure test:

1. In a Preview environment, temporarily remove or invalidate `RESEND_API_KEY`.
2. Submit test data.
3. Confirm the website displays the failure message and click-to-call fallback rather than reporting success.
4. Restore the valid Preview variable.

## Pre-launch checklist

Use [`docs/PRE-LAUNCH-CHECKLIST.md`](docs/PRE-LAUNCH-CHECKLIST.md) as the source of truth for code-complete work, required production configuration, and post-launch search/local-business tasks.

## Optional abuse hardening

The form uses server-side validation, maximum lengths, an off-screen honeypot, a Resend delivery timeout, and safe error handling. A durable distributed rate limiter can be added later through a service such as Vercel KV/Upstash. An in-memory server limiter is intentionally not presented as production protection because serverless instances do not share reliable process memory.
