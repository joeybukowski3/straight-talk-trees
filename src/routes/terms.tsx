import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SITE, absoluteUrl } from "@/lib/site-config";

const TITLE = `Website Terms | ${SITE.businessName}`;
const DESCRIPTION = `Terms governing use of the ${SITE.businessName} website and consultation request form.`;

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: absoluteUrl("/terms") },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE.businessName },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/terms") }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-[color:var(--cream)] text-[color:var(--foreground)]">
        <article className="mx-auto max-w-3xl px-4 py-14 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--forest)]">Legal</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">Website Terms</h1>
          <p className="mt-3 text-sm text-[color:var(--muted-foreground)]">Effective July 31, 2026</p>

          <div className="mt-10 space-y-8 leading-7">
            <section><h2 className="font-display text-2xl font-semibold">Informational website</h2><p className="mt-2">This website provides general information about tree services. Online information cannot account for every property, tree condition, access issue, hazard, or project requirement.</p></section>
            <section><h2 className="font-display text-2xl font-semibold">Consultation requests</h2><p className="mt-2">Submitting a form does not create a service agreement or guarantee that work will be accepted or scheduled. Work is subject to consultation, availability, scope, site access, safety conditions, and mutually agreed pricing.</p></section>
            <section><h2 className="font-display text-2xl font-semibold">Emergency situations</h2><p className="mt-2">For urgent or dangerous tree conditions, call <a className="font-semibold underline" href={SITE.phoneHref}>{SITE.phoneDisplay}</a> rather than relying exclusively on the website form. The website is not an emergency dispatch system.</p></section>
            <section><h2 className="font-display text-2xl font-semibold">Onsite evaluation</h2><p className="mt-2">Tree work may require an onsite evaluation before recommendations, scope, scheduling, or pricing can be confirmed.</p></section>
            <section><h2 className="font-display text-2xl font-semibold">Customer information and authorization</h2><p className="mt-2">Customers are responsible for providing accurate information and confirming that they have authority to request work at the property.</p></section>
            <section><h2 className="font-display text-2xl font-semibold">Website content</h2><p className="mt-2">Unless otherwise stated, website text, branding, graphics, and original content belong to Bukowski Tree Company and may not be reproduced for commercial use without permission.</p></section>
            <section><h2 className="font-display text-2xl font-semibold">Reliance and third-party services</h2><p className="mt-2">Do not rely on website information as a substitute for a property-specific assessment. Links, analytics, hosting, form delivery, or other third-party services are governed by their own terms and practices.</p></section>
            <section><h2 className="font-display text-2xl font-semibold">Changes and contact</h2><p className="mt-2">These terms may be updated as the website or business practices change. Questions may be directed to the company by calling <a className="font-semibold underline" href={SITE.phoneHref}>{SITE.phoneDisplay}</a>.</p></section>
          </div>

          <Link to="/" className="mt-10 inline-flex font-semibold text-[color:var(--forest)] underline">Return to the homepage</Link>
        </article>
      </main>
      <Footer />
    </>
  );
}
