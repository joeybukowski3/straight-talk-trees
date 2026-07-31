import { Phone } from "lucide-react";
import { SITE } from "@/lib/site-config";
import { trackConversion } from "@/lib/analytics";

export function MobileActionBar() {
  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[color:var(--border)] bg-white/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-8px_24px_rgba(0,0,0,0.08)] backdrop-blur md:hidden"
    >
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
        <a
          href={SITE.phoneHref}
          onClick={() => trackConversion("phone_mobile_click")}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[color:var(--amber-cta)] px-3 py-2 text-sm font-semibold text-[color:var(--amber-cta-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)] focus-visible:ring-offset-2"
          aria-label={`Call ${SITE.businessName} at ${SITE.phoneDisplay}`}
        >
          <Phone className="h-4 w-4" aria-hidden />
          Call Now
        </a>
        <a
          href="#contact"
          onClick={() => trackConversion("consultation_mobile_click")}
          className="inline-flex min-h-11 items-center justify-center rounded-md border border-[color:var(--forest)] px-3 py-2 text-center text-sm font-semibold text-[color:var(--forest)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)] focus-visible:ring-offset-2"
        >
          Request Consultation
        </a>
      </div>
    </aside>
  );
}
