import { createFileRoute } from "@tanstack/react-router";
import { Search, Phone } from "lucide-react";
import { useMemo, useState } from "react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ContactForm } from "@/components/site/ContactForm";
import { EmergencyBar } from "@/components/site/EmergencyBar";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { MobileActionBar } from "@/components/site/MobileActionBar";
import { SkipLink } from "@/components/site/SkipLink";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { trackConversion } from "@/lib/analytics";
import { pageHead } from "@/lib/service-pages";
import {
  DEFAULT_ZIP_GROUP,
  LOCAL_FOCUS_NAMES,
  SERVICE_AREAS,
  SERVICE_AREA_ZIPS,
  ZIP_GROUPS,
} from "@/lib/service-areas";
import { SITE } from "@/lib/site-config";

const TITLE = "Houston and Southeast Texas Tree Service Areas | Bukowski Tree Company";
const DESCRIPTION =
  "Bukowski Tree Company serves Houston and Southeast Texas. Call or submit your ZIP code or general location to confirm service availability for your property.";
const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Service Areas", href: "/service-areas" },
] as const;

export const Route = createFileRoute("/service-areas")({
  head: () => {
    const head = pageHead("/service-areas", TITLE, DESCRIPTION);
    return {
      ...head,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
            "@id": `${SITE.url}/#business`,
            name: SITE.businessName,
            url: SITE.url,
            telephone: SITE.phoneE164,
            areaServed: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 29.661024,
                longitude: -95.228361,
              },
              geoRadius: "160934 metres",
              description:
                "Approximate service range from South Houston; availability varies by job.",
            },
            knowsAbout: [
              "Tree service",
              "Tree removal",
              "Tree trimming",
              "Emergency tree service",
              "Storm cleanup",
              "Dangerous branch and limb removal",
            ],
          }),
        },
      ],
    };
  },
  component: ServiceAreasPage,
});

function normalize(value: string) {
  return value.toLocaleLowerCase().trim();
}

function includesQuery(values: readonly string[], query: string) {
  return values.some((value) => normalize(value).includes(query));
}

function EmptyState() {
  return (
    <div className="border-t border-[color:var(--border)] bg-[color:var(--cream)] px-4 py-8 text-center">
      <h3 className="font-display text-xl font-semibold text-[color:var(--forest)]">
        Don&apos;t see your location?
      </h3>
      <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[color:var(--foreground)]/75">
        Call us or send your ZIP code and we&apos;ll confirm whether we can take the job.
      </p>
      <div className="mt-4 flex flex-wrap justify-center gap-3">
        <a
          href={SITE.phoneHref}
          onClick={() => trackConversion("phone_service_area_page_click")}
          className="inline-flex min-h-11 items-center gap-2 rounded-md bg-[color:var(--amber-cta)] px-4 py-2 text-sm font-semibold text-[color:var(--amber-cta-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)] focus-visible:ring-offset-2"
        >
          <Phone className="h-4 w-4" aria-hidden />
          Call {SITE.phoneDisplay}
        </a>
        <a
          href="#contact"
          onClick={() => trackConversion("consultation_cta_click")}
          className="inline-flex min-h-11 items-center rounded-md border border-[color:var(--forest)] px-4 py-2 text-sm font-semibold text-[color:var(--forest)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)] focus-visible:ring-offset-2"
        >
          Send your ZIP code
        </a>
      </div>
    </div>
  );
}

function ServiceAreasPage() {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("cities");
  const [zipGroup, setZipGroup] = useState(DEFAULT_ZIP_GROUP);
  const normalizedQuery = normalize(query);

  const filteredAreas = useMemo(() => {
    if (!normalizedQuery) return SERVICE_AREAS;
    return SERVICE_AREAS.filter((area) =>
      includesQuery([area.name, ...area.counties, ...area.zipCodes], normalizedQuery),
    );
  }, [normalizedQuery]);

  const visibleZips = useMemo(() => {
    if (normalizedQuery) {
      return SERVICE_AREA_ZIPS.filter((entry) =>
        includesQuery([entry.zipCode, ...entry.communities, ...entry.counties], normalizedQuery),
      );
    }
    return SERVICE_AREA_ZIPS.filter((entry) => entry.group === zipGroup);
  }, [normalizedQuery, zipGroup]);

  const resultCount = activeTab === "cities" ? filteredAreas.length : visibleZips.length;
  const resultLabel = `${resultCount} ${activeTab === "cities" ? "locations" : "ZIP codes"} shown`;

  return (
    <>
      <SkipLink />
      <EmergencyBar />
      <Header />
      <main
        id="main-content"
        className="overflow-x-clip bg-[color:var(--cream)] pb-32 text-[color:var(--foreground)] md:pb-0"
      >
        <section className="border-b border-[color:var(--border)] bg-[color:var(--forest)] text-[color:var(--forest-foreground)]">
          <div className="mx-auto max-w-[1200px] px-4 py-10 sm:py-14">
            <Breadcrumbs items={BREADCRUMBS} inverted />
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--amber-cta)]">
              Service areas
            </p>
            <h1 className="mt-2 max-w-4xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Tree Service Areas Around Houston &amp; Southeast Texas
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[color:var(--forest-foreground)]/85 sm:text-lg">
              Bukowski Tree Company works from South Houston into nearby Houston-area and Southeast
              Texas communities. Service can extend roughly 100 miles depending on the job, travel,
              scheduling, property access, and urgency.
            </p>
          </div>
        </section>

        <section className="border-b border-[color:var(--border)] bg-white">
          <div className="mx-auto max-w-[1200px] px-4 py-8 sm:py-10">
            <h2 className="font-display text-2xl font-semibold text-[color:var(--forest)] sm:text-3xl">
              Serving South Houston and Nearby Communities
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-[color:var(--foreground)]/70">
              These south and southeast Houston communities are closest to our day-to-day service
              area.
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-x-5 gap-y-2 text-sm sm:grid-cols-3 lg:grid-cols-5">
              {LOCAL_FOCUS_NAMES.map((name) => (
                <li
                  key={name}
                  className="border-l-2 border-[color:var(--amber-cta)] pl-2 font-medium"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          aria-labelledby="directory-heading"
          className="mx-auto max-w-[1200px] px-4 py-10 sm:py-14"
        >
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <h2
                id="directory-heading"
                className="font-display text-3xl font-semibold tracking-tight text-[color:var(--forest)]"
              >
                Service-Area Directory
              </h2>
              <p className="mt-2 text-sm leading-6 text-[color:var(--foreground)]/70">
                Listed locations are a practical guide, not a guaranteed service boundary.
              </p>
            </div>
            <p
              className="text-sm font-medium text-[color:var(--forest)]"
              aria-live="polite"
              aria-atomic="true"
            >
              {resultLabel}
            </p>
          </div>

          <div className="mt-5">
            <label
              htmlFor="service-area-search"
              className="block text-sm font-semibold text-[color:var(--forest)]"
            >
              Find your city or ZIP code
            </label>
            <div className="relative mt-2 max-w-xl">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--foreground)]/55"
                aria-hidden
              />
              <input
                id="service-area-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="City, community, county, or ZIP code"
                autoComplete="postal-code"
                className="min-h-12 w-full rounded-md border border-[color:var(--border)] bg-white py-3 pl-10 pr-3 text-base shadow-sm outline-none placeholder:text-[color:var(--foreground)]/45 focus-visible:border-[color:var(--forest)] focus-visible:ring-2 focus-visible:ring-[color:var(--forest)]/25"
              />
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
            <TabsList className="grid h-auto w-full max-w-md grid-cols-2 rounded-md bg-[color:var(--sage)] p-1">
              <TabsTrigger
                value="cities"
                className="min-h-11 rounded-sm px-2 text-sm data-[state=active]:bg-[color:var(--forest)] data-[state=active]:text-white"
              >
                Cities &amp; Towns
              </TabsTrigger>
              <TabsTrigger
                value="zips"
                className="min-h-11 rounded-sm px-2 text-sm data-[state=active]:bg-[color:var(--forest)] data-[state=active]:text-white"
              >
                ZIP Codes
              </TabsTrigger>
            </TabsList>

            <div className="mt-4 overflow-hidden rounded-md border border-[color:var(--border)] bg-white shadow-sm">
              <TabsContent value="cities" className="m-0 focus-visible:ring-inset">
                {filteredAreas.length ? (
                  <table className="w-full table-fixed text-left text-sm">
                    <caption className="sr-only">
                      Cities and communities in the approximate service area with counties and ZIP
                      codes
                    </caption>
                    <thead className="hidden bg-[color:var(--forest)] text-white sm:table-header-group">
                      <tr>
                        <th scope="col" className="w-[30%] px-3 py-3 font-semibold">
                          City / Community
                        </th>
                        <th scope="col" className="w-[27%] px-3 py-3 font-semibold">
                          County
                        </th>
                        <th scope="col" className="px-3 py-3 font-semibold">
                          ZIP Code(s)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="block divide-y divide-[color:var(--border)] sm:table-row-group">
                      {filteredAreas.map((area) => (
                        <tr
                          key={area.name}
                          className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-3 gap-y-1 px-3 py-3 sm:table-row sm:px-0 sm:py-0 odd:bg-[color:var(--cream)]/45"
                        >
                          <th
                            scope="row"
                            className="col-span-2 block font-semibold text-[color:var(--forest)] sm:table-cell sm:px-3 sm:py-2.5"
                          >
                            {area.name}
                          </th>
                          <td className="block min-w-0 text-xs text-[color:var(--foreground)]/70 sm:table-cell sm:px-3 sm:py-2.5 sm:text-sm">
                            <span className="sr-only sm:hidden">County: </span>
                            {area.counties.join(", ")}
                          </td>
                          <td className="block text-right font-mono text-xs leading-5 sm:table-cell sm:px-3 sm:py-2.5 sm:text-left sm:text-sm">
                            <span className="sr-only sm:hidden">ZIP codes: </span>
                            {area.zipCodes.join(", ")}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <EmptyState />
                )}
              </TabsContent>

              <TabsContent value="zips" className="m-0 focus-visible:ring-inset">
                <div className="border-b border-[color:var(--border)] bg-[color:var(--cream)] px-3 py-3">
                  <p
                    id="zip-group-label"
                    className="text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--forest)]"
                  >
                    ZIP group
                  </p>
                  <div
                    className="mt-2 flex max-w-full gap-2 overflow-x-auto pb-1"
                    role="toolbar"
                    aria-labelledby="zip-group-label"
                  >
                    {ZIP_GROUPS.map((group) => (
                      <button
                        key={group}
                        type="button"
                        aria-pressed={zipGroup === group}
                        onClick={() => setZipGroup(group)}
                        className="min-h-10 shrink-0 rounded-md border border-[color:var(--forest)] px-3 py-2 font-mono text-sm font-semibold text-[color:var(--forest)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)] focus-visible:ring-offset-2 aria-pressed:bg-[color:var(--forest)] aria-pressed:text-white"
                      >
                        {group}
                      </button>
                    ))}
                  </div>
                  {normalizedQuery ? (
                    <p className="mt-2 text-xs text-[color:var(--foreground)]/65">
                      Searching every ZIP group. Clear the search to return to {zipGroup}.
                    </p>
                  ) : null}
                </div>
                {visibleZips.length ? (
                  <table className="w-full table-fixed text-left text-sm">
                    <caption className="sr-only">
                      ZIP codes in the selected group with communities and counties
                    </caption>
                    <thead className="hidden bg-[color:var(--forest)] text-white sm:table-header-group">
                      <tr>
                        <th scope="col" className="w-[18%] px-3 py-3 font-semibold">
                          ZIP Code
                        </th>
                        <th scope="col" className="w-[50%] px-3 py-3 font-semibold">
                          Primary City / Community
                        </th>
                        <th scope="col" className="px-3 py-3 font-semibold">
                          County
                        </th>
                      </tr>
                    </thead>
                    <tbody className="block divide-y divide-[color:var(--border)] sm:table-row-group">
                      {visibleZips.map((entry) => (
                        <tr
                          key={entry.zipCode}
                          className="grid grid-cols-[5rem_minmax(0,1fr)] gap-x-3 gap-y-1 px-3 py-3 sm:table-row sm:px-0 sm:py-0 odd:bg-[color:var(--cream)]/45"
                        >
                          <th
                            scope="row"
                            className="row-span-2 block font-mono font-bold text-[color:var(--forest)] sm:table-cell sm:px-3 sm:py-2.5"
                          >
                            {entry.zipCode}
                          </th>
                          <td className="block min-w-0 font-medium sm:table-cell sm:px-3 sm:py-2.5">
                            <span className="sr-only sm:hidden">Communities: </span>
                            {entry.communities.join(", ")}
                          </td>
                          <td className="block text-xs text-[color:var(--foreground)]/70 sm:table-cell sm:px-3 sm:py-2.5 sm:text-sm">
                            <span className="sr-only sm:hidden">Counties: </span>
                            {entry.counties.join(", ")}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <EmptyState />
                )}
              </TabsContent>
            </div>
          </Tabs>
        </section>

        <section className="border-y border-[color:var(--border)] bg-[color:var(--sage)]/45">
          <div className="mx-auto max-w-[1200px] px-4 py-8">
            <h2 className="font-display text-2xl font-semibold text-[color:var(--forest)]">
              Tree work available across the area
            </h2>
            <p className="mt-2 max-w-4xl text-sm leading-6 text-[color:var(--foreground)]/75">
              Call for tree removal, tree trimming, emergency tree service, storm cleanup, stump
              grinding, or dangerous branch and limb removal.
            </p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-[color:var(--forest)]">
              <a
                href="/tree-removal"
                className="underline decoration-[color:var(--amber-cta)] decoration-2 underline-offset-4"
              >
                Tree Removal
              </a>
              <a
                href="/tree-trimming"
                className="underline decoration-[color:var(--amber-cta)] decoration-2 underline-offset-4"
              >
                Tree Trimming
              </a>
              <a
                href="/emergency-tree-service"
                className="underline decoration-[color:var(--amber-cta)] decoration-2 underline-offset-4"
              >
                Emergency Tree Service
              </a>
              <a
                href="/storm-cleanup"
                className="underline decoration-[color:var(--amber-cta)] decoration-2 underline-offset-4"
              >
                Storm Cleanup
              </a>
              <a
                href="/dangerous-branch-removal"
                className="underline decoration-[color:var(--amber-cta)] decoration-2 underline-offset-4"
              >
                Dangerous Limb Removal
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-[1200px] px-4 py-9">
            <div className="border-l-4 border-[color:var(--amber-cta)] pl-4">
              <h2 className="font-display text-2xl font-semibold text-[color:var(--forest)]">
                Don&apos;t see your city?
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-[color:var(--foreground)]/75">
                Our service range depends on the type of work, travel distance, scheduling, and
                urgency. Call or send us your ZIP code and we&apos;ll let you know whether we can
                take the job.
              </p>
              <a
                href={SITE.phoneHref}
                onClick={() => trackConversion("phone_service_area_page_click")}
                className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-md bg-[color:var(--amber-cta)] px-4 py-2 text-sm font-semibold text-[color:var(--amber-cta-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)] focus-visible:ring-offset-2"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Call {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-24 border-t border-[color:var(--border)] bg-[color:var(--cream)]"
        >
          <div className="mx-auto grid max-w-[1200px] gap-7 px-4 py-10 sm:py-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-[color:var(--forest)]">
                Send us your location
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-[color:var(--foreground)]/75">
                Include the property ZIP code and the tree work you need. For an urgent condition,
                call directly.
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
