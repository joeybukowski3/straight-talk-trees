import { Phone } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { SITE } from "@/lib/site-config";
import { trackConversion } from "@/lib/analytics";

export function FinalCTA() {
  return (
    <section className="bg-[color:var(--forest)] text-[color:var(--forest-foreground)]">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-16 sm:py-20 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Need a Tree or Dangerous Branch Removed?</h2>
          <p className="mt-4 max-w-xl text-[color:var(--forest-foreground)]/85 sm:text-lg">Call {SITE.businessName} for a free consultation and a straightforward recommendation.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={SITE.phoneHref} onClick={() => trackConversion("phone_emergency_click")} className="inline-flex items-center gap-2 rounded-md bg-[color:var(--amber-cta)] px-5 py-3 text-base font-semibold text-[color:var(--amber-cta-foreground)] shadow-sm hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"><Phone className="h-4 w-4" aria-hidden />Call {SITE.phoneDisplay}</a>
            <a href="#contact" onClick={() => trackConversion("consultation_cta_click")} className="inline-flex items-center gap-2 rounded-md border border-[color:var(--forest-foreground)]/40 px-5 py-3 text-base font-medium hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Request a Free Consultation</a>
          </div>
        </div>
        <ContactForm variant="section" />
      </div>
    </section>
  );
}
