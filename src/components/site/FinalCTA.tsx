import { Phone } from "lucide-react";
import { SITE } from "@/lib/site-config";
import { trackConversion } from "@/lib/analytics";

export function FinalCTA() {
  return (
    <section className="bg-[color:var(--forest)] text-[color:var(--forest-foreground)]">
      <div className="mx-auto max-w-[1200px] px-4 py-16 text-center sm:py-20">
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Ready to Discuss the Tree Concern?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[color:var(--forest-foreground)]/85 sm:text-lg">
          Call for an urgent or dangerous condition. For planned or nonurgent work, send a free
          consultation request with the property location and a brief description.
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={SITE.phoneHref}
            onClick={() => trackConversion("phone_final_click")}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[color:var(--amber-cta)] px-5 py-3 text-base font-semibold text-[color:var(--amber-cta-foreground)] shadow-sm hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call {SITE.phoneDisplay}
          </a>
          <a
            href="#contact"
            onClick={() => trackConversion("consultation_final_click")}
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-[color:var(--forest-foreground)]/40 px-5 py-3 text-base font-medium hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Request a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
