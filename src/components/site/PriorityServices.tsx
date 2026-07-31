import { AlertTriangle, Phone } from "lucide-react";
import { PRIMARY_SERVICES, SITE } from "@/lib/site-config";
import { trackConversion } from "@/lib/analytics";

export function PriorityServices() {
  return (
    <section id="services" className="bg-[color:var(--cream)]">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:py-20">
        <h2 className="max-w-3xl font-display text-3xl font-semibold tracking-tight text-[color:var(--forest)] sm:text-4xl">
          Tree Removal and Urgent Tree Service
        </h2>
        <p className="mt-4 max-w-3xl text-base text-[color:var(--muted-foreground)] sm:text-lg">
          Start with the condition affecting your property. Recommendations and
          pricing may depend on access, tree condition, safety requirements,
          and an onsite evaluation.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {PRIMARY_SERVICES.map((service) => (
            <article
              key={service.title}
              className="rounded-md border border-[color:var(--border)] bg-white p-6"
            >
              <h3 className="font-display text-xl font-semibold text-[color:var(--forest)]">
                {service.title}
              </h3>
              <p className="mt-2 text-[color:var(--foreground)]/85">
                {service.description}
              </p>
              <p className="mt-4 flex gap-2 border-t border-[color:var(--border)] pt-4 text-sm text-[color:var(--foreground)]/75">
                <AlertTriangle
                  className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--amber-cta)]"
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
          className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-md bg-[color:var(--amber-cta)] px-5 py-3 text-sm font-semibold text-[color:var(--amber-cta-foreground)] shadow-sm hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)] focus-visible:ring-offset-2"
        >
          <Phone className="h-4 w-4" aria-hidden />
          Call about an urgent condition
        </a>
      </div>
    </section>
  );
}
