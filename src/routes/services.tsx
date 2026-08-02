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
import { PRIMARY_SERVICES, SITE, SUPPORTING_SERVICES } from "@/lib/site-config";

const TITLE = "Tree Services in Houston and Southeast Texas | Bukowski Tree Company";
const DESCRIPTION =
  "Explore tree removal, emergency tree service, dangerous branch removal, trimming, storm cleanup, stump grinding, and related services from Bukowski Tree Company.";
const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
] as const;
const SERVICE_LINKS: Record<string, string> = {
  "Tree Removal": "/tree-removal",
  "Dangerous Branch and Limb Removal": "/dangerous-branch-removal",
  "Fallen-Tree Removal": "/tree-removal",
  "Emergency Tree Service": "/emergency-tree-service",
  "Storm Cleanup": "/storm-cleanup",
  "Tree Trimming and Pruning": "/tree-trimming",
  "Stump Grinding": "/stump-grinding",
};

export const Route = createFileRoute("/services")({
  head: () => pageHead("/services", TITLE, DESCRIPTION),
  component: ServicesPage,
});

function ServicesPage() {
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
              Tree services
            </p>
            <h1 className="mt-3 max-w-4xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Tree service for Houston and Southeast Texas properties
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-[color:var(--forest-foreground)]/85 sm:text-lg">
              Bukowski Tree Company handles urgent tree concerns, planned removal and trimming, storm
              cleanup, stump work, and related property tree-service needs. The appropriate scope
              depends on the visible condition, access, surrounding property, and an onsite review
              when needed.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={SITE.phoneHref}
                onClick={() => trackConversion("phone_service_page_click")}
                className="inline-flex min-h-12 items-center gap-2 rounded-md bg-[color:var(--amber-cta)] px-5 py-3 text-sm font-semibold text-[color:var(--amber-cta-foreground)] shadow-sm hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Call {SITE.phoneDisplay}
              </a>
              <a
                href="/contact"
                onClick={() => trackConversion("consultation_cta_click")}
                className="inline-flex min-h-12 items-center rounded-md border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Request a Free Consultation
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-[1200px] px-4 py-14 sm:py-20">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-[color:var(--forest)]">
              Primary services
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-[color:var(--foreground)]/80">
              These services cover the most common urgent and removal-focused reasons customers
              contact the company.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {PRIMARY_SERVICES.map((service) => {
                const href = SERVICE_LINKS[service.title];

                return (
                  <article
                    key={service.title}
                    className="rounded-md border border-[color:var(--border)] bg-[color:var(--cream)] p-6"
                  >
                    <h3 className="font-display text-xl font-semibold text-[color:var(--forest)]">
                      {href ? (
                        <a className="underline-offset-4 hover:underline" href={href}>
                          {service.title}
                        </a>
                      ) : (
                        service.title
                      )}
                    </h3>
                    <p className="mt-3 leading-7 text-[color:var(--foreground)]/80">
                      {service.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-[color:var(--border)] bg-[color:var(--sage)]/45">
          <div className="mx-auto max-w-[1200px] px-4 py-14 sm:py-20">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-[color:var(--forest)]">
              Supporting services
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {SUPPORTING_SERVICES.map((service) => {
                const href = SERVICE_LINKS[service.title];

                return (
                  <article
                    key={service.title}
                    className="rounded-md border border-[color:var(--border)] bg-white p-6"
                  >
                    <h3 className="font-display text-xl font-semibold text-[color:var(--forest)]">
                      {href ? (
                        <a className="underline-offset-4 hover:underline" href={href}>
                          {service.title}
                        </a>
                      ) : (
                        service.title
                      )}
                    </h3>
                    <p className="mt-3 leading-7 text-[color:var(--foreground)]/80">
                      {service.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-[1200px] gap-8 px-4 py-14 sm:py-20 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-[color:var(--forest)]">
                Confirm service availability
              </h2>
              <p className="mt-4 leading-7 text-[color:var(--foreground)]/80">
                Service is focused on Houston and Southeast Texas. Availability depends on the
                property location, requested work, access, urgency, and current scheduling.
              </p>
              <a
                href="/service-areas"
                className="mt-5 inline-flex font-semibold text-[color:var(--forest)] underline"
              >
                Review service-area guidance
              </a>
            </div>
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-[color:var(--forest)]">
                Ready to discuss the property?
              </h2>
              <p className="mt-4 leading-7 text-[color:var(--foreground)]/80">
                Call for an urgent condition or send the property location and a brief description
                through the consultation form.
              </p>
              <a
                href="/contact"
                className="mt-5 inline-flex min-h-12 items-center rounded-md bg-[color:var(--forest)] px-5 py-3 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)] focus-visible:ring-offset-2"
              >
                Go to Contact
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
