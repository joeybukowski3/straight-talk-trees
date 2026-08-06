import { Phone } from "lucide-react";
import { PRIMARY_SERVICES, SUPPORTING_SERVICES, SITE } from "@/lib/site-config";
import { trackConversion } from "@/lib/analytics";

const PRIMARY_LINKS: Record<string, string> = {
  "Tree Removal": "/tree-removal",
  "Dangerous Branch and Limb Removal": "/dangerous-branch-removal",
  "Fallen-Tree Removal": "/tree-removal",
  "Emergency Tree Service": "/emergency-tree-service",
  "Storm Cleanup": "/storm-cleanup",
};

const SUPPORTING_LINKS: Record<string, string> = {
  "Tree Trimming and Pruning": "/tree-trimming",
  "Stump Grinding": "/stump-grinding",
};

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-[color:var(--cream)]">
      <div className="section-shell section-pad">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] lg:items-start lg:gap-14 xl:gap-16">
          <div className="lg:sticky lg:top-28">
            <p className="type-eyebrow text-[color:var(--forest)]">Services</p>
            <h2 className="type-h2 mt-2 max-w-[16ch] text-[color:var(--forest)]">
              Tree Services in Houston & Southeast Texas
            </h2>
            <p className="type-body mt-4 max-w-md text-[color:var(--foreground)]/85">
              Bukowski Tree Company handles residential and commercial tree work throughout{" "}
              {SITE.region} — from urgent conditions and removal to storm cleanup and trimming.
              Recommendations and pricing may depend on access, tree condition, safety requirements,
              and an onsite evaluation.
            </p>
            <a
              href={SITE.phoneHref}
              onClick={() => trackConversion("phone_emergency_click")}
              className="btn-primary mt-6"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call about an urgent condition
            </a>
          </div>

          <div className="min-w-0">
            <ul className="divide-y divide-[color:var(--border)] border-y border-[color:var(--border)]">
              {PRIMARY_SERVICES.map((service) => (
                <li
                  key={service.title}
                  className="grid gap-1.5 py-5 sm:grid-cols-[minmax(0,13.5rem)_1fr] sm:gap-8 sm:py-5"
                >
                  <h3 className="type-h3 text-[color:var(--forest)]">
                    <a
                      href={PRIMARY_LINKS[service.title]}
                      className="rounded-sm underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)]"
                    >
                      {service.title}
                    </a>
                  </h3>
                  <div className="min-w-0">
                    <p className="type-body text-[color:var(--foreground)]/85">
                      {service.description}
                    </p>
                    <p className="type-meta mt-1.5 text-[color:var(--foreground)]/70">
                      <span className="font-medium text-[color:var(--forest)]">Urgent: </span>
                      {service.urgent}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <details className="group mt-8 border-t border-[color:var(--border)]">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 type-h3 text-[color:var(--forest)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)]">
                <span>More Tree Services</span>
                <span
                  aria-hidden
                  className="text-xl font-normal transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <ul className="grid gap-x-10 gap-y-6 border-t border-[color:var(--border)] pb-2 pt-6 md:grid-cols-2">
                {SUPPORTING_SERVICES.map((service) => {
                  const href = SUPPORTING_LINKS[service.title];

                  return (
                    <li key={service.title}>
                      <h3 className="font-semibold text-[color:var(--foreground)]">
                        {href ? (
                          <a
                            href={href}
                            className="rounded-sm underline-offset-4 hover:text-[color:var(--forest)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)]"
                          >
                            {service.title}
                          </a>
                        ) : (
                          service.title
                        )}
                      </h3>
                      <p className="type-meta mt-1 text-[color:var(--foreground)]/80">
                        {service.description}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
