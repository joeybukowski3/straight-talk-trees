import { AlertTriangle, Phone } from "lucide-react";
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
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:py-16">
        <h2 className="max-w-3xl font-display text-3xl font-semibold tracking-tight text-[color:var(--forest)] sm:text-4xl">
          Tree Services in Houston & Southeast Texas
        </h2>
        <p className="mt-3 max-w-3xl text-[color:var(--foreground)]/85 sm:text-lg">
          Bukowski Tree Company handles residential and commercial tree work throughout{" "}
          {SITE.region} — from urgent conditions and removal to storm cleanup and trimming.
          Recommendations and pricing may depend on access, tree condition, safety requirements, and
          an onsite evaluation.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {PRIMARY_SERVICES.map((service) => (
            <article
              key={service.title}
              className="rounded-md border border-[color:var(--border)] bg-white p-5"
            >
              <h3 className="font-display text-lg font-semibold text-[color:var(--forest)]">
                <a
                  href={PRIMARY_LINKS[service.title]}
                  className="rounded-sm underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)]"
                >
                  {service.title}
                </a>
              </h3>
              <p className="mt-2 text-sm text-[color:var(--foreground)]/85">
                {service.description}
              </p>
              <p className="mt-3 flex gap-2 border-t border-[color:var(--border)] pt-3 text-xs text-[color:var(--foreground)]/75">
                <AlertTriangle
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[color:var(--amber-cta)]"
                  aria-hidden
                />
                <span>{service.urgent}</span>
              </p>
            </article>
          ))}
        </div>

        <a
          href={SITE.phoneHref}
          onClick={() => trackConversion("phone_emergency_click")}
          className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-md bg-[color:var(--amber-cta)] px-5 py-3 text-sm font-semibold text-[color:var(--amber-cta-foreground)] shadow-sm hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)] focus-visible:ring-offset-2"
        >
          <Phone className="h-4 w-4" aria-hidden />
          Call about an urgent condition
        </a>

        <details className="group mt-10 rounded-md border border-[color:var(--border)] bg-white">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-md px-5 py-4 font-display text-lg font-semibold text-[color:var(--forest)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)]">
            <span>More Tree Services</span>
            <span
              aria-hidden
              className="text-xl font-normal transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <ul className="grid gap-x-8 gap-y-6 border-t border-[color:var(--border)] px-5 py-6 md:grid-cols-2">
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
                  <p className="mt-1 text-sm text-[color:var(--foreground)]/80">
                    {service.description}
                  </p>
                </li>
              );
            })}
          </ul>
        </details>
      </div>
    </section>
  );
}
