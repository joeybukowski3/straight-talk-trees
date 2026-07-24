const TICKER_MESSAGE =
  "Need urgent tree or branch removal? Emergency calls are answered 24/7.";

export function EmergencyBar() {
  return (
    <div className="w-full overflow-hidden bg-[color:var(--forest)] text-[color:var(--forest-foreground)]">
      <div
        className="emergency-ticker flex w-max items-center py-2 text-sm"
        aria-label={`${TICKER_MESSAGE} Call 979-824-8240.`}
      >
        {[0, 1].map((group) => (
          <div
            key={group}
            className="flex shrink-0 items-center gap-8 px-4"
            aria-hidden={group === 1}
          >
            <span className="whitespace-nowrap opacity-90">{TICKER_MESSAGE}</span>
            <a
              href="tel:9798248240"
              className="whitespace-nowrap font-semibold text-[color:var(--amber-cta)] hover:underline"
            >
              Call 979-824-8240
            </a>
            <span className="text-[color:var(--amber-cta)]" aria-hidden="true">
              •
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
