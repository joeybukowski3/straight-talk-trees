import { SITE } from "@/lib/site-config";
import { trackConversion } from "@/lib/analytics";

const TICKER_MESSAGE = "Need urgent tree or branch removal? Emergency calls are answered 24/7.";

function TickerItem() {
  return (
    <div className="flex shrink-0 items-center gap-8 px-6">
      <span className="whitespace-nowrap opacity-90">{TICKER_MESSAGE}</span>
      <a href={SITE.phoneHref} onClick={() => trackConversion("phone_emergency_click")} className="whitespace-nowrap rounded-sm font-semibold text-[color:var(--amber-cta)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--amber-cta)]">Call {SITE.phoneDisplay}</a>
      <span className="text-[color:var(--amber-cta)]" aria-hidden="true">•</span>
    </div>
  );
}

export function EmergencyBar() {
  return (
    <aside className="w-full overflow-hidden bg-[color:var(--forest)] text-[color:var(--forest-foreground)]" aria-label="Emergency tree service">
      <div className="emergency-ticker flex w-max items-center py-2 text-sm" aria-label={`${TICKER_MESSAGE} Call ${SITE.phoneDisplay}.`}>
        {[0, 1].map((group) => <div key={group} className="flex min-w-[100vw] shrink-0 items-center" aria-hidden={group === 1}>{[0, 1, 2, 3].map((item) => <TickerItem key={item} />)}</div>)}
      </div>
    </aside>
  );
}
