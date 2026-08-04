# Bukowski Tree Company Pre-Launch Checklist

This checklist separates code-complete work from operational launch work that requires production access, a connected public domain, or external business accounts.

## Completed in code

- Shared Bukowski Tree Company header, footer, brand palette, typography, focus styles, and responsive layout conventions.
- Homepage conversion sections and mobile quick-contact behavior.
- Dedicated service pages for tree removal, emergency tree service, dangerous branch removal, tree trimming, storm cleanup, and stump grinding.
- Dedicated `/services`, `/about`, `/service-areas`, and `/contact` routes.
- Privacy policy and website terms.
- Unique route metadata, canonical URLs, Open Graph metadata, Twitter metadata, and index/follow directives for indexable pages.
- LocalBusiness/HomeAndConstructionBusiness structured data on the homepage.
- Service structured data on dedicated service pages.
- FAQ structured data matching the visible homepage FAQ.
- Visible breadcrumb navigation with matching BreadcrumbList structured data on service, service-area, contact, services, and about pages.
- Branded 404 and route-error experiences with safe recovery paths.
- Branded SVG favicon with no Lovable branding.
- Existing real site image used for social metadata; no fabricated people, crews, reviews, or worksite imagery.
- Centralized public-route list and build-generated sitemap without fabricated last-modified dates.
- `robots.txt` referencing `https://bukowskitrees.com/sitemap.xml`.
- Vercel Analytics and Speed Insights integration.
- Anonymous conversion event tracking without consultation-form values.
- Server-side contact-form validation, honeypot handling, timeout handling, and private webhook delivery architecture.
- Keyboard-accessible navigation, skip links, visible focus states, native form labels, accessible status messages, and reduced-motion handling.
- Safe-area-aware mobile action bar and mobile bottom spacing where the fixed bar is present.
- GitHub Actions checks for changed-file Prettier, changed-file ESLint, repository lint baseline, production build, and TypeScript.

## Must be completed before public launch

- Connect `bukowskitrees.com` to the production Vercel project.
- Configure the required DNS records for the production domain.
- Configure the production `CONTACT_WEBHOOK_URL` as a private server-side environment variable.
- Confirm the production form reaches the intended private business destination.
- Run one controlled successful production form submission and verify the success state.
- Run a controlled failure-path test in a safe environment and verify the phone fallback.
- Confirm all public business claims with the owner, including insured status, locally owned positioning, free consultations, fast scheduling, 24/7 emergency-call availability, Houston and Southeast Texas coverage, residential and commercial service, and cleanup/debris-removal language.
- Verify HTTPS and the preferred production host after the domain is connected.
- Inspect live canonical URLs and confirm they resolve to the preferred production host.
- Confirm `https://bukowskitrees.com/robots.txt` loads successfully.
- Confirm `https://bukowskitrees.com/sitemap.xml` loads successfully as XML and contains only intended public routes.
- Verify Vercel Analytics and Speed Insights receive production traffic without personal form information.
- Test every production phone link on mobile and desktop-capable calling environments.
- Review all public routes on representative mobile and desktop viewport sizes.
- Verify the sticky mobile action bar does not cover content and its consultation action reaches the correct form or contact route.
- Verify social previews on major sharing debuggers. The existing hero image is a valid fallback; a purpose-built 1200×630 brand image remains an optional improvement.
- Confirm the favicon and page titles display correctly in production browser tabs.

## After public launch

- Add and verify the production property in Google Search Console.
- Submit the production sitemap in Google Search Console.
- Add and verify the site in Bing Webmaster Tools and submit the sitemap.
- Create, claim, or complete the Google Business Profile using verified business information only.
- Review acquisition channels after real traffic and lead data are available.
- Maintain consistent business name, phone number, service area, and other verified information across legitimate local citations.
- Replace or expand website imagery with real project photos when suitable photos are available and permission is confirmed.
- Add genuine customer reviews only after they exist and can be represented accurately.
- Plan location-specific pages only after actual service areas are confirmed; do not create thin or fabricated city pages.
- Revisit the optional custom 1200×630 social-sharing image using real brand assets.
