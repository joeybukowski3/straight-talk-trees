# Bukowski Tree Company Pre-Launch Checklist

Use this checklist to separate code-complete work from tasks that require the permanent domain, production credentials, or external business accounts.

## Completed in code

- All intended public routes, including nine dedicated service pages, are implemented with the shared site design and conversion flow.
- Each indexable route has unique metadata, an absolute `https://bukowskitree.com` canonical, Open Graph and Twitter metadata, and `index, follow`.
- LocalBusiness/HomeAndConstructionBusiness, Service, FAQPage, BreadcrumbList, and service-area JSON-LD are implemented where appropriate using supported facts.
- `robots.txt` permits normal crawling and references `https://bukowskitree.com/sitemap.xml`.
- The sitemap is generated from the centralized public-route list and contains the 16 intended indexable routes.
- Header, footer, service cards, related services, breadcrumbs, consultation anchors, phone links, and mobile actions resolve to valid destinations.
- The consultation form has client and server validation, a honeypot, bounded input lengths, safe errors, success/failure states, and direct email delivery through Resend.
- Vercel Analytics, Speed Insights, Google Analytics, and anonymous conversion events are implemented without attaching consultation-form values to event data.
- Analytics-blocked Playwright coverage protects automated browser traffic from reaching Google Analytics or Google Tag Manager.
- Responsive, keyboard, form, breadcrumb, table, tab, live-region, 404, and route-error behavior has been audited at representative mobile and desktop widths.
- The favicon and social image exist in public assets and contain no public-facing Lovable branding.

## Must happen when domain is connected

- Connect `bukowskitree.com` to the production Vercel project.
- Configure DNS for the apex and preferred `www` redirect.
- Confirm HTTPS is valid and the preferred host redirects consistently.
- Configure production `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, and `CONTACT_TO_EMAIL` as server-only environment variables.
- Verify `bukowskitree.com` as an authorized sending domain in Resend.
- Redeploy after production environment variables are configured.
- Submit one controlled live consultation and confirm delivery to the intended private recipient, the on-page success state, and absence of personal data in analytics.
- Run one safe failure-path check and confirm the phone fallback without exposing configuration details.
- Inspect live canonical, Open Graph, robots, and sitemap output on the permanent HTTPS domain.

## After launch

- Verify the site in Google Search Console and submit `https://bukowskitree.com/sitemap.xml`.
- Verify the site in Bing Webmaster Tools and submit the sitemap.
- Create, claim, or complete the Google Business Profile using verified business information only.
- Monitor indexing, crawl errors, analytics, conversions, and live form delivery.
- Build a process for requesting and publishing genuine customer reviews.
- Collect approved, real project photos for future site and social-preview improvements.
- Research the first location pages using real query, service-area, and lead data before creating any city-specific content.
