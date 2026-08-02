import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ContactForm } from "@/components/site/ContactForm";
import { EmergencyBar } from "@/components/site/EmergencyBar";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { MobileActionBar } from "@/components/site/MobileActionBar";
import { SkipLink } from "@/components/site/SkipLink";
import { trackConversion } from "@/lib/analytics";
import { pageHead } from "@/lib/service-pages";
import { SITE } from "@/lib/site-config";

const TITLE = "Houston and Southeast Texas Tree Service Areas | Bukowski Tree Company";
const DESCRIPTION =
  "Bukowski Tree Company serves Houston and Southeast Texas. Call or submit your ZIP code or general location to confirm service availability for your property.";
const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Service Areas", href: "/service-areas" },
] as const;

export const Route = createFileRoute("/service-areas")({
  head: () => pageHead("/service-areas", TITLE, DESCRIPTION),
  component: ServiceAreasPage,
});

function ServiceAreasPage() {
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
              Service area
            </p>
            <h1 className="mt-3 max-w-4xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Tree service across Houston and Southeast Texas
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-[color:var(--forest-foreground)]/85 sm:text-lg">
              Service availability depends on the property location, the requested work, current
              scheduling, and access. Call to confirm coverage or include your ZIP code or general
              location in the consultation form.
            </p>
            <a
              href={SITE.phoneHref}
              onClick={() => trackConversion("phone_service_area_page_click")}
              className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-md bg-[color:var(--amber-cta)] px-5 py-3 text-sm font-semibold text-[color:var(--amber-cta-foreground)] shadow-sm hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Confirm Service Availability
            </a>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-[1200px] gap-8 px-4 py-14 sm:py-20 lg:grid-cols-3">
            <div className="rounded-md border border-[color:var(--border)] bg-[color:var(--cream)] p-6">
              <h2 className="font-display text-2xl font-semibold text-[color:var(--forest)]">
                Houston-focused service
              </h2>
              <p className="mt-3 leading-7 text-[color:var(--foreground)]/80">
                The company is positioned to serve Houston and surrounding Southeast Texas
                properties rather than claiming statewide coverage.
              </p>
            </div>
            <div className="rounded-md border border-[color:var(--border)] bg-[color:var(--cream)] p-6">
              <h2 className="font-display text-2xl font-semibold text-[color:var(--forest)]">
                Property-specific availability
              </h2>
              <p className="mt-3 leading-7 text-[color:var(--foreground)]/80">
                Distance, access, service type, urgency, and current scheduling can affect whether a
                job can be accepted at a particular location.
              </p>
            </div>
            <div className="rounded-md border border-[color:var(--border)] bg-[color:var(--cream)] p-6">
              <h2 className="font-display text-2xl font-semibold text-[color:var(--forest)]">
                Not sure if you are covered?
              </h2>
              <p className="mt-3 leading-7 text-[color:var(--foreground)]/80">
                Call or send the property ZIP code or general location. You do not need to guess
                whether your address falls within the service area.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-[color:var(--border)] bg-[color:var(--sage)]/45">
          <div className="mx-auto max-w-[1200px] px-4 py-14 sm:py-16">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-[color:var(--forest)]">
              Services available within the service area
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="rounded-md border border-[color:var(--border)] bg-white px-4 py-3 text-sm font-semibold text-[color:var(--forest)] hover:border-[color:var(--forest)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)]"
                href="/services"
              >
                All Services
              </a>
              <a
                className="rounded-md border border-[color:var(--border)] bg-white px-4 py-3 text-sm font-semibold text-[color:var(--forest)] hover:border-[color:var(--forest)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)]"
                href="/tree-removal"
              >
                Tree Removal
              </a>
              <a
                className="rounded-md border border-[color:var(--border)] bg-white px-4 py-3 text-sm font-semibold text-[color:var(--forest)] hover:border-[color:var(--forest)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)]"
                href="/emergency-tree-service"
              >
                Emergency Tree Service
              </a>
              <a
                className="rounded-md border border-[color:var(--border)] bg-white px-4 py-3 text-sm font-semibold text-[color:var(--forest)] hover:border-[color:var(--forest)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)]"
                href="/dangerous-branch-removal"
              >
                Dangerous Branch Removal
              </a>
              <a
                className="rounded-md border border-[color:var(--border)] bg-white px-4 py-3 text-sm font-semibold text-[color:var(--forest)] hover:border-[color:var(--forest)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)]"
                href="/tree-trimming"
              >
                Tree Trimming
              </a>
              <a
                className="rounded-md border border-[color:var(--border)] bg-white px-4 py-3 text-sm font-semibold text-[color:var(--forest)] hover:border-[color:var(--forest)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)]"
                href="/storm-cleanup"
              >
                Storm Cleanup
              </a>
              <a
                className="rounded-md border border-[color:var(--border)] bg-white px-4 py-3 text-sm font-semibold text-[color:var(--forest)] hover:border-[color:var(--forest)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)]"
                href="/stump-grinding"
              >
                Stump Grinding
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-[color:var(--cream)]">
          <div className="mx-auto grid max-w-[1200px] gap-8 px-4 py-14 sm:py-18 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-[color:var(--forest)]">
                Confirm your property location
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-[color:var(--foreground)]/80">
                Include the ZIP code or general area along with the type of tree work you need. For
                an urgent condition, call directly.
              </p>
            </div>
            <ContactForm variant="section" />
          </div>
        </section>
      </main>
      <Footer />
      <MobileActionBar consultationHref="#contact" />
    </>
  );
}
