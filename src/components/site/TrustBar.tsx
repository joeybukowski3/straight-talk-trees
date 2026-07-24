const ITEMS = ["Insured", "Locally Owned", "Free Consultations", "Fast Scheduling", "24/7 Emergency Calls"];

export function TrustBar() {
  return (
    <div className="border-b border-[color:var(--border)] bg-white">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-10 gap-y-2 px-4 py-4 text-sm font-medium text-[color:var(--foreground)]">
        {ITEMS.map((i) => (
          <span key={i}>{i}</span>
        ))}
      </div>
    </div>
  );
}