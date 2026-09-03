import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CharlotteHeroBackdrop } from "@/components/site/CharlotteHeroBackdrop";
import { NowOpenBadge } from "@/components/site/NowOpenBadge";
import { ContactForm } from "@/components/site/ContactForm";
import { EmergencyBar } from "@/components/site/EmergencyBar";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { MobileActionBar } from "@/components/site/MobileActionBar";
import { SkipLink } from "@/components/site/SkipLink";
import { trackConversion } from "@/lib/analytics";
import { CHARLOTTE_COMMUNITIES, CHARLOTTE_HUB_PATH } from "@/lib/charlotte-market";
import { pageHead } from "@/lib/service-pages";
import { SITE, TRUST_CLAIMS } from "@/lib/site-config";

const TITLE = "Tree Service in Charlotte, NC | Bukowski Tree Company";
const DESCRIPTION =
  "Tree removal, emergency tree service, trimming, storm cleanup, and land clearing for Charlotte Metro, including Matthews, Huntersville, Fort Mill, and nearby communities.";
const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Charlotte Metro Tree Service", href: CHARLOTTE_HUB_PATH },
] as const;
const HERO_TRUST = [TRUST_CLAIMS[1], TRUST_CLAIMS[0], TRUST_CLAIMS[2], TRUST_CLAIMS[4]] as const;

const CHARLOTTE_SERVICES = [
  {
    title: "Tree Removal",
    href: "/tree-removal",
    description:
      "Removal of dead, leaning, storm-damaged, or unwanted trees on Charlotte-area lots, including mature trees near homes and drives.",
  },
  {
    title: "Fallen Tree Removal",
    href: "/fallen-tree-removal",
    description:
      "Clear trees that have come down across yards, driveways, fences, or access after storms or high wind.",
  },
  {
    title: "Emergency Tree Service",
    href: "/emergency-tree-service",
    description:
      "Call for hanging limbs, blocked access, or a tree shifting toward a structure. Emergency calls are answered 24/7.",
  },
  {
    title: "Dangerous Branch Removal",
    href: "/dangerous-branch-removal",
    description:
      "Take down broken, hanging, or overextended limbs over roofs, sidewalks, parking, and other frequently used areas.",
  },
  {
    title: "Tree Trimming",
    href: "/tree-trimming",
    description:
      "Clearance and corrective trimming for street trees, HOA lots, and properties where canopy is crowding roofs or sight lines.",
  },
  {
    title: "Storm Cleanup",
    href: "/storm-cleanup",
    description:
      "Cleanup after storms and wind damage, including broken tops, debris, and trees left unstable in the canopy.",
  },
  {
    title: "Stump Grinding",
    href: "/stump-grinding",
    description:
      "Grind remaining stumps after removal so the yard, driveway edge, or future planting area can be used again.",
  },
  {
    title: "Commercial Tree Service",
    href: "/commercial-tree-service",
    description:
      "Tree work for apartments, retail, offices, HOAs, and other commercial sites around Charlotte Metro.",
  },
  {
    title: "Land Clearing",
    href: "/land-clearing",
    description:
      "Tree and brush clearing for lots, access, and construction preparation in growing Charlotte-area communities.",
  },
] as const;

const REASONS_TO_CALL = [
  "Split or freshly broken trees after a storm",
  "Hanging limbs after a storm or high wind",
  "A tree leaning toward a home, fence, or driveway after saturated ground",
  "A fallen tree blocking a driveway, sidewalk, or other access",
  "Limbs touching or hanging over a roof",
  "Dead, thinning, or visibly unstable sections in a mature tree",
  "Lot or land clearing before construction or a change in property use",
] as const;

const CHARLOTTE_SERVICE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Charlotte Metro Tree Service",
  description: DESCRIPTION,
  url: `${SITE.url}${CHARLOTTE_HUB_PATH}`,
  areaServed: CHARLOTTE_COMMUNITIES.map((name) => ({ "@type": "City", name })),
  provider: {
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${SITE.url}/#business`,
    name: SITE.businessName,
    url: SITE.url,
    telephone: SITE.phoneE164,
  },
};

export const Route = createFileRoute("/charlotte-tree-service")({
  head: () => {
    const head = pageHead(CHARLOTTE_HUB_PATH, TITLE, DESCRIPTION);

    return {
      ...head,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(CHARLOTTE_SERVICE_JSONLD),
        },
      ],
    };
  },
  component: CharlotteTreeServicePage,
});

function CharlotteTreeServicePage() {
  return (
    <>
      <SkipLink />
      <EmergencyBar />
      <Header />
      <main
        id="main-content"
        className="bg-[color:var(--cream)] pb-24 text-[color:var(--foreground)] md:pb-0"
      >
        <section className="relative overflow-hidden border-b border-[color:var(--forest-deep)] bg-[color:var(--forest-deep)] text-[color:var(--forest-foreground)]">
          <CharlotteHeroBackdrop />
          <div className="hero-shell relative py-10 sm:py-14 lg:py-16">
            <Breadcrumbs items={BREADCRUMBS} inverted />
            <div className="mt-6 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(17.5rem,22.5rem)] lg:gap-12">
              <div className="min-w-0">
                <p className="flex flex-wrap items-center gap-2 type-eyebrow text-[color:var(--amber-cta)]">
                  Charlotte Metro · Bukowski Tree Company
                  <NowOpenBadge />
                </p>
                <h1 className="type-h1 mt-3 max-w-[16ch] text-[color:var(--forest-foreground)]">
                  Tree Service in Charlotte, NC
                </h1>
                <p className="type-body-lg mt-4 max-w-xl text-[color:var(--forest-foreground)]/90">
                  Tree removal, emergency tree service, trimming, storm cleanup, and land clearing
                  for Charlotte and nearby Metro communities — including Matthews, Huntersville,
                  Fort Mill, and Rock Hill.
                </p>
                <p className="type-meta mt-3 max-w-xl text-[color:var(--forest-foreground)]/70">
                  For a fallen tree, hanging limb, blocked access, or another urgent condition,
                  call. For planned or nonurgent work, use the consultation form.
                </p>
                <div className="mt-6 flex w-full flex-col gap-3 sm:max-w-md sm:flex-row sm:flex-wrap">
                  <a
                    href={SITE.phoneHref}
                    onClick={() => trackConversion("phone_hero_click")}
                    className="btn-primary btn-primary-on-dark w-full text-base sm:w-auto sm:min-w-[12rem]"
                  >
                    <Phone className="h-4 w-4" aria-hidden />
                    Call {SITE.phoneDisplay}
                  </a>
                  <a
                    href="#contact"
                    onClick={() => trackConversion("consultation_hero_click")}
                    className="btn-secondary btn-secondary-on-dark w-full text-base sm:w-auto sm:min-w-[13.5rem]"
                  >
                    Request a Free Consultation
                  </a>
                </div>
                <ul className="hero-trust-row mt-6 border-t border-[color:var(--forest-foreground)]/15 pt-5">
                  {HERO_TRUST.map((claim) => (
                    <li key={claim}>{claim}</li>
                  ))}
                </ul>
              </div>
              <div className="hidden min-w-0 lg:block">
                <ContactForm variant="hero" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="section-shell section-pad">
            <h2 className="type-h2 max-w-[22ch] text-[color:var(--forest)]">
              Tree work for Charlotte Metro properties
            </h2>
            <p className="type-body mt-4 max-w-3xl text-[color:var(--foreground)]/85">
              Charlotte-area properties deal with mature trees, storm and wind damage, saturated
              ground, and lot clearing tied to growth and development. Bukowski Tree Company handles
              the urgent conditions and the planned work — then recommends a scope based on what is
              visible, how the property is accessed, and an onsite review when needed.
            </p>
          </div>
        </section>

        <section className="border-y border-[color:var(--border)] bg-[color:var(--cream)]">
          <div className="section-shell section-pad">
            <h2 className="type-h2 text-[color:var(--forest)]">Charlotte tree services</h2>
            <p className="type-body mt-4 max-w-3xl text-[color:var(--foreground)]/85">
              These are the tree services available for Charlotte-area properties. The linked
              service pages explain the work and what to expect in more detail. Call for anything
              that looks unstable or dangerous.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {CHARLOTTE_SERVICES.map((service) => (
                <article
                  key={service.href}
                  className="rounded-md border border-[color:var(--border)] bg-white p-6"
                >
                  <h3 className="font-display text-xl font-semibold text-[color:var(--forest)]">
                    <a
                      href={service.href}
                      className="rounded-sm underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)]"
                    >
                      {service.title}
                    </a>
                  </h3>
                  <p className="mt-3 leading-7 text-[color:var(--foreground)]/80">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="section-shell section-pad grid gap-10 lg:grid-cols-[minmax(0,0.36fr)_minmax(0,0.64fr)] lg:items-start">
            <div>
              <h2 className="type-h2 max-w-[16ch] text-[color:var(--forest)]">
                Common reasons to call in Charlotte
              </h2>
              <p className="type-body mt-4 text-[color:var(--foreground)]/85">
                Stay clear of unstable areas. If the condition appears active or dangerous, call
                rather than using the form.
              </p>
              <a
                href={SITE.phoneHref}
                onClick={() => trackConversion("phone_service_page_click")}
                className="btn-primary mt-6"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Call {SITE.phoneDisplay}
              </a>
            </div>
            <ul className="divide-y divide-[color:var(--border)] border-y border-[color:var(--border)]">
              {REASONS_TO_CALL.map((item) => (
                <li key={item} className="flex gap-3 py-3.5 leading-7">
                  <span
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--amber-cta)]"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-y border-[color:var(--border)] bg-[color:var(--sage)]/45">
          <div className="section-shell section-pad">
            <h2 className="type-h2 text-[color:var(--forest)]">Charlotte Metro service area</h2>
            <p className="type-body mt-4 max-w-3xl text-[color:var(--foreground)]/85">
              Work is taken in Charlotte and nearby Metro communities when the job, access, travel,
              and current schedule line up. Confirm the property location by phone or in the
              consultation form. This is a coverage guide, not a guaranteed service boundary.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-5 gap-y-2 text-sm sm:grid-cols-3 lg:grid-cols-4">
              {CHARLOTTE_COMMUNITIES.map((name) => (
                <li
                  key={name}
                  className="border-l-2 border-[color:var(--amber-cta)] pl-2 font-medium"
                >
                  {name}
                </li>
              ))}
            </ul>
            <a
              href="/service-areas"
              className="mt-6 inline-flex min-h-11 items-center font-semibold text-[color:var(--forest)] underline decoration-[color:var(--amber-cta)] decoration-2 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)]"
            >
              Compare both service markets
            </a>
          </div>
        </section>

        <section className="bg-[color:var(--forest)] text-[color:var(--forest-foreground)]">
          <div className="section-shell section-pad text-center">
            <h2 className="type-h2 mx-auto max-w-2xl tracking-tight">
              Need tree work in Charlotte Metro?
            </h2>
            <p className="type-body-lg mx-auto mt-4 max-w-2xl text-[color:var(--forest-foreground)]/85">
              Call for an urgent or dangerous condition. For planned removal, trimming, or clearing,
              send a free consultation request with the property location.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={SITE.phoneHref}
                onClick={() => trackConversion("phone_final_click")}
                className="btn-primary btn-primary-on-dark text-base"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Call {SITE.phoneDisplay}
              </a>
              <a
                href="#contact"
                onClick={() => trackConversion("consultation_final_click")}
                className="btn-secondary btn-secondary-on-dark text-base"
              >
                Request a Free Consultation
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
                Tell us about the Charlotte-area property
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-[color:var(--foreground)]/80">
                Include the city or ZIP code and what you can see from a safe area. For an urgent or
                dangerous condition, call directly.
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
