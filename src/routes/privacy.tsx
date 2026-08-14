import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { SkipLink } from "@/components/site/SkipLink";
import { SITE, absoluteUrl } from "@/lib/site-config";

const TITLE = `Privacy Policy | ${SITE.businessName}`;
const DESCRIPTION = `How ${SITE.businessName} handles consultation requests and website analytics information.`;
const IMAGE = absoluteUrl(SITE.socialImagePath);

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: absoluteUrl("/privacy") },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE.businessName },
      { property: "og:image", content: IMAGE },
      { property: "og:image:alt", content: SITE.socialImageAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: IMAGE },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/privacy") }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content" className="bg-[color:var(--cream)] text-[color:var(--foreground)]">
        <article className="mx-auto max-w-3xl px-4 py-14 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--forest)]">
            Legal
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-[color:var(--muted-foreground)]">
            Effective July 31, 2026
          </p>

          <div className="mt-10 space-y-8 leading-7">
            <section>
              <h2 className="font-display text-2xl font-semibold">Information we collect</h2>
              <p className="mt-2">
                When you request a consultation, the form may collect your name, phone number, email
                address, requested service, urgency, general location or ZIP code, and a description
                of the work.
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-semibold">How we use information</h2>
              <p className="mt-2">
                We use consultation information to review and respond to service inquiries,
                communicate about requested work, and determine whether an onsite evaluation may be
                appropriate.
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-semibold">Email delivery provider</h2>
              <p className="mt-2">
                Form submissions are sent through an email-delivery provider used to deliver the
                inquiry to the company. That provider may process the submitted information as part
                of delivering the request.
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-semibold">Analytics and technical data</h2>
              <p className="mt-2">
                The website may collect basic technical and analytics information, such as page
                visits, device or browser information, performance measurements, and anonymous
                interactions with calls-to-action. Form contents are not intentionally sent to
                analytics services.
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-semibold">Selling information</h2>
              <p className="mt-2">
                Bukowski Tree Company does not sell customer information submitted through the
                consultation form.
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-semibold">Security limitations</h2>
              <p className="mt-2">
                Reasonable measures are used to protect information, but no website, transmission
                method, or third-party service can promise absolute security. This policy provides
                general business information and is not a guarantee of complete data security.
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-semibold">Contact and updates</h2>
              <p className="mt-2">
                Questions about this policy may be directed to the company by calling{" "}
                <a className="font-semibold underline" href={SITE.phoneHref}>
                  {SITE.phoneDisplay}
                </a>
                . This policy may be updated as website practices or service providers change.
              </p>
            </section>
          </div>

          <Link
            to="/"
            className="mt-10 inline-flex font-semibold text-[color:var(--forest)] underline"
          >
            Return to the homepage
          </Link>
        </article>
      </main>
      <Footer />
    </>
  );
}
