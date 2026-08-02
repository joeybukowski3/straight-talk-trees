import { Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ContactForm } from "@/components/site/ContactForm";
import { EmergencyBar } from "@/components/site/EmergencyBar";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { MobileActionBar } from "@/components/site/MobileActionBar";
import { SkipLink } from "@/components/site/SkipLink";
import { trackConversion } from "@/lib/analytics";
import type { ServicePageData } from "@/lib/service-pages";
import { SITE } from "@/lib/site-config";

export function ServicePage({ page }: { page: ServicePageData }) {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: page.serviceName, href: `/${page.slug}` },
  ] as const;

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
            <Breadcrumbs items={breadcrumbs} inverted />
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--amber-cta)]">
              {page.serviceName}
            </p>
            <h1 className="mt-3 max-w-4xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              {page.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-[color:var(--forest-foreground)]/85 sm:text-lg">
              {page.intro}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={SITE.phoneHref}
                onClick={() => trackConversion("phone_service_page_click")}
                className="inline-flex min-h-12 items-center gap-2 rounded-md bg-[color:var(--amber-cta)] px-5 py-3 text-sm font-semibold text-[color:var(--amber-cta-foreground)] shadow-sm hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--forest)]"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Call {SITE.phoneDisplay}
              </a>
              <a
                href="#contact"
                onClick={() => trackConversion("consultation_service_page_click")}
                className="inline-flex min-h-12 items-center rounded-md border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Request a Free Consultation
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-14 sm:py-18 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-[color:var(--forest)]">
                When this service may be needed
              </h2>
              <ul className="mt-6 space-y-4">
                {page.situations.map((item) => (
                  <li key={item} className="flex gap-3 leading-7">
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[color:var(--amber-cta)]"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-[color:var(--forest)]">
                What to expect
              </h2>
              <ol className="mt-6 space-y-4">
                {page.approach.map((item, index) => (
                  <li key={item} className="flex gap-4 leading-7">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[color:var(--sage)] text-sm font-semibold text-[color:var(--forest)]">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="border-y border-[color:var(--border)] bg-[color:var(--sage)]/45">
          <div className="mx-auto max-w-[1200px] px-4 py-14 sm:py-16">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-[color:var(--forest)]">
              Property and safety considerations
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {page.considerations.map((item) => (
                <div
                  key={item}
                  className="rounded-md border border-[color:var(--border)] bg-white p-5 leading-7"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-[1200px] px-4 py-14 sm:py-16">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-[color:var(--forest)]">
              Related tree services
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {page.related.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-md border border-[color:var(--border)] bg-[color:var(--cream)] px-4 py-3 text-sm font-semibold text-[color:var(--forest)] hover:border-[color:var(--forest)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/services"
                className="rounded-md border border-[color:var(--border)] bg-[color:var(--cream)] px-4 py-3 text-sm font-semibold text-[color:var(--forest)] hover:border-[color:var(--forest)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)]"
              >
                All Services
              </a>
              <a
                href="/service-areas"
                className="rounded-md border border-[color:var(--border)] bg-[color:var(--cream)] px-4 py-3 text-sm font-semibold text-[color:var(--forest)] hover:border-[color:var(--forest)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)]"
              >
                Service Areas
              </a>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-24 border-t border-[color:var(--border)] bg-[color:var(--cream)]"
        >
          <div className="mx-auto grid max-w-[1200px] gap-8 px-4 py-14 sm:py-18 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--forest)]">
                Next step
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[color:var(--forest)]">
                Tell us about the property
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-[color:var(--foreground)]/80">
                Include the property location and what you can see from a safe area. For an urgent
                or dangerous condition, call directly.
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
