import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "./data";

export function ServiceArea() {
  return (
    <section id="service-area" className="bg-[color:var(--sage)]/60">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:py-20">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-[color:var(--forest)] sm:text-4xl">
          Serving Houston and Southeast Texas
        </h2>
        <p className="mt-4 max-w-3xl text-[color:var(--foreground)]/85 sm:text-lg">
          Bukowski Tree Company provides residential and commercial tree services throughout Houston and the broader Southeast Texas region.
        </p>
        <p className="mt-3 max-w-3xl text-[color:var(--foreground)]/85">
          Contact us to confirm availability for your property or project location.
        </p>
        <a href={PHONE_HREF} className="mt-6 inline-flex items-center gap-2 rounded-md bg-[color:var(--amber-cta)] px-5 py-3 text-sm font-semibold text-[color:var(--amber-cta-foreground)] shadow-sm hover:brightness-95">
          <Phone className="h-4 w-4" aria-hidden />
          Call {PHONE_DISPLAY}
        </a>
      </div>
    </section>
  );
}