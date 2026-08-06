import { Phone } from "lucide-react";
import { SITE } from "@/lib/site-config";
import { trackConversion } from "@/lib/analytics";

export function FinalCTA() {
  return (
    <section className="bg-[color:var(--forest)] text-[color:var(--forest-foreground)]">
      <div className="section-shell section-pad text-center">
        <h2 className="type-h2 mx-auto max-w-2xl tracking-tight">
          Ready to Discuss the Tree Concern?
        </h2>
        <p className="type-body-lg mx-auto mt-4 max-w-2xl text-[color:var(--forest-foreground)]/85">
          Call for an urgent or dangerous condition. For planned or nonurgent work, send a free
          consultation request with the property location and a brief description.
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
  );
}
