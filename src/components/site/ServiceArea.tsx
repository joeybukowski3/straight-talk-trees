import { Phone } from "lucide-react";
import { SITE } from "@/lib/site-config";
import { trackConversion } from "@/lib/analytics";

export function ServiceArea() {
  return (
    <section id="service-area" className="bg-[color:var(--sage)]/60">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:py-20">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-[color:var(--forest)] sm:text-4xl">
          Serving Houston and Southeast Texas
        </h2>
        <p className="mt-4 max-w-3xl text-[color:var(--foreground)]/85 sm:text-lg">
          Bukowski Tree Company provides residential and commercial tree services across Houston and
          Southeast Texas. Availability depends on the specific property location and current
          scheduling.
        </p>
        <p className="mt-3 max-w-3xl text-[color:var(--foreground)]/85">
          Customers outside the immediate area are welcome to call to confirm coverage. You can also
          enter a ZIP code or general location in the consultation form.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
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
      </div>
    </section>
  );
}
