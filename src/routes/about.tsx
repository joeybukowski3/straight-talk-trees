import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { EmergencyBar } from "@/components/site/EmergencyBar";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { MobileActionBar } from "@/components/site/MobileActionBar";
import { SkipLink } from "@/components/site/SkipLink";
import { trackConversion } from "@/lib/analytics";
import { pageHead } from "@/lib/service-pages";
import { SITE } from "@/lib/site-config";

const TITLE = "About Bukowski Tree Company | Houston Tree Service";
const DESCRIPTION =
  "Learn about Bukowski Tree Company, owner Jake Bukowski, and the straightforward tree-service approach used for Houston and Southeast Texas properties.";
const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
] as const;

export const Route = createFileRoute("/about")({
  head: () => pageHead("/about", TITLE, DESCRIPTION),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <SkipLink />
      <EmergencyBar />
      <Header />
      <main
        id="main-content"
        className="bg-[color:var(--cream)] pb-24 text-[color:var(--foreground)] md:pb-0"
      >
        <section className="border-b border-[color:var(--border)] bg-[color:var(--forest)] text-[color:var(--forest-foreground)]">
          <div className="mx-auto max-w-[1200px] px-4 py-14 sm:py-20">
            <Breadcrumbs items={BREADCRUMBS} inverted />
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--amber-cta)]">
              About the company
            </p>
            <h1 className="mt-3 max-w-4xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Straightforward tree service with a local owner
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-[color:var(--forest-foreground)]/85 sm:text-lg">
              {SITE.businessName} is locally owned by {SITE.ownerName} and focused on professional
              tree service, clear communication, and practical recommendations for properties across
              {SITE.region}.
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-14 sm:py-20 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--forest)]">
                Owner
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[color:var(--forest)]">
                {SITE.ownerName}
              </h2>
            </div>
            <div className="space-y-5 text-base leading-7 text-[color:var(--foreground)]/85 sm:text-lg">
              <p>
                The company works with homeowners, landlords, property managers, businesses, and
                commercial-property customers who need tree removal, dangerous branch removal,
                trimming, storm cleanup, stump grinding, and related tree services.
              </p>
              <p>
                The approach is intentionally straightforward: understand the visible concern and
                property location, review access and surrounding conditions, explain the proposed
                scope, and confirm pricing before work is scheduled.
              </p>
              <p>
                Online descriptions and photos can help explain a concern, but they do not replace a
                property-specific evaluation when tree condition, access, or safety requirements
                need to be reviewed onsite.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-[color:var(--border)] bg-[color:var(--sage)]/45">
          <div className="mx-auto grid max-w-[1200px] gap-8 px-4 py-14 sm:py-20 md:grid-cols-3">
            <div>
              <h2 className="font-display text-2xl font-semibold text-[color:var(--forest)]">
                Services
              </h2>
              <p className="mt-3 leading-7 text-[color:var(--foreground)]/80">
                Review the supported tree-service categories and dedicated service pages.
              </p>
              <a
                href="/services"
                className="mt-4 inline-flex font-semibold text-[color:var(--forest)] underline"
              >
                Explore services
              </a>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-[color:var(--forest)]">
                Service area
              </h2>
              <p className="mt-3 leading-7 text-[color:var(--foreground)]/80">
                Service is focused on Houston and Southeast Texas, subject to property-specific
                availability.
              </p>
              <a
                href="/service-areas"
                className="mt-4 inline-flex font-semibold text-[color:var(--forest)] underline"
              >
                Review service areas
              </a>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-[color:var(--forest)]">
                Contact
              </h2>
              <p className="mt-3 leading-7 text-[color:var(--foreground)]/80">
                Call for an urgent condition or send a consultation request for planned work.
              </p>
              <a
                href="/contact"
                className="mt-4 inline-flex font-semibold text-[color:var(--forest)] underline"
              >
                Contact the company
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[color:var(--forest)] text-[color:var(--forest-foreground)]">
          <div className="mx-auto max-w-[1200px] px-4 py-14 sm:py-16">
            <h2 className="max-w-3xl font-display text-3xl font-semibold tracking-tight">
              Need to discuss a tree or property concern?
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/80">
              Call directly for an urgent condition. For nonurgent work, the contact form collects
              the property location and the details needed to start the conversation.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={SITE.phoneHref}
                onClick={() => trackConversion("phone_final_click")}
                className="inline-flex min-h-12 items-center gap-2 rounded-md bg-[color:var(--amber-cta)] px-5 py-3 text-sm font-semibold text-[color:var(--amber-cta-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Call {SITE.phoneDisplay}
              </a>
              <a
                href="/contact"
                onClick={() => trackConversion("consultation_final_click")}
                className="inline-flex min-h-12 items-center rounded-md border border-white/40 px-5 py-3 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Request a Free Consultation
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileActionBar consultationHref="/contact" />
    </>
  );
}
