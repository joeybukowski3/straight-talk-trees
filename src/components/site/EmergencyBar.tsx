export function EmergencyBar() {
  return (
    <div className="w-full bg-[color:var(--forest)] text-[color:var(--forest-foreground)]">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-2 text-sm">
        <span className="opacity-90">
          Need urgent tree or branch removal? Emergency calls are answered 24/7.
        </span>
        <a
          href="tel:9798248240"
          className="font-semibold text-[color:var(--amber-cta)] hover:underline"
        >
          979-824-8240
        </a>
      </div>
    </div>
  );
}