import { Phone } from "lucide-react";
import { WHY_POINTS, INSURANCE_ITEMS } from "./data";
import { SITE } from "@/lib/site-config";
import { trackConversion } from "@/lib/analytics";

export function WhyBukowski() {
  return (
    <section id="why" className="scroll-mt-24 bg-[color:var(--sage)]/60">
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:py-16">
        <h2 className="max-w-3xl font-display text-3xl font-semibold tracking-tight text-[color:var(--forest)] sm:text-4xl">
          Why Bukowski Tree Company
        </h2>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--forest)]">
              Tree work without the runaround
            </h3>
            <ul className="mt-4 space-y-4">
              {WHY_POINTS.map((point) => (
                <li key={point.title}>
                  <p className="font-semibold text-[color:var(--forest)]">{point.title}</p>
                  <p className="mt-0.5 text-sm text-[color:var(--foreground)]/85">
                    {point.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--forest)]">
              Local ownership & service area
            </h3>
            <p className="mt-4 text-[color:var(--foreground)]/85">
              {SITE.businessName} is locally owned by {SITE.ownerName} and serves residential and
              commercial properties across {SITE.region}. Availability depends on the specific
              property location and current scheduling — call to confirm coverage, or enter your ZIP
              code or general location in the consultation form.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={SITE.phoneHref}
                onClick={() => trackConversion("phone_emergency_click")}
                className="inline-flex min-h-12 items-center gap-2 rounded-md bg-[color:var(--amber-cta)] px-5 py-3 text-sm font-semibold text-[color:var(--amber-cta-foreground)] shadow-sm hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)] focus-visible:ring-offset-2"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Call to confirm availability
              </a>
              <a
                href="#contact"
                onClick={() => trackConversion("consultation_cta_click")}
                className="inline-flex min-h-12 items-center rounded-md border border-[color:var(--forest)] px-5 py-3 text-sm font-semibold text-[color:var(--forest)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)] focus-visible:ring-offset-2"
              >
                Enter your location
              </a>
            </div>

            <details className="group mt-6 rounded-md border border-[color:var(--border)] bg-white">
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 rounded-md px-4 py-3 text-sm font-semibold text-[color:var(--forest)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)]">
                <span>More About Bukowski Tree Company</span>
                <span
                  aria-hidden
                  className="text-lg font-normal transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="space-y-4 border-t border-[color:var(--border)] px-4 py-4 text-sm text-[color:var(--foreground)]/85">
                <p>
                  Jake works with homeowners, landlords, property managers, businesses, and
                  commercial-property customers who need tree removal, branch removal, trimming,
                  storm cleanup, and related tree services. Customers receive a clear explanation of
                  the next step before work is scheduled.
                </p>
                <div>
                  <p className="font-semibold text-[color:var(--forest)]">
                    Documentation for storm and property claims
                  </p>
                  <p className="mt-1">
                    When tree damage may involve a property insurance claim, Bukowski Tree Company
                    can help provide practical service documentation for the work performed,
                    including:
                  </p>
                  <ul className="mt-2 grid gap-1 sm:grid-cols-2">
                    {INSURANCE_ITEMS.map((item) => (
                      <li key={item}>— {item}</li>
                    ))}
                  </ul>
                  <p className="mt-2 text-xs text-[color:var(--muted-foreground)]">
                    Coverage and payment decisions are made by the property owner&rsquo;s insurance
                    carrier. Bukowski Tree Company does not guarantee claim approval, coverage, or
                    reimbursement.
                  </p>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
