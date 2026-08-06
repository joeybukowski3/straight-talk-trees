import { TRUST_CLAIMS } from "@/lib/site-config";

export function TrustBar() {
  return (
    <section
      aria-label="Company service highlights"
      className="border-b border-[color:var(--border)] bg-white"
    >
      <ul className="mx-auto grid max-w-[72rem] grid-cols-2 gap-x-6 gap-y-2.5 px-4 py-4 text-sm font-medium text-[color:var(--foreground)] sm:grid-cols-3 lg:grid-cols-5 lg:py-5">
        {TRUST_CLAIMS.map((claim) => (
          <li key={claim} className="flex items-center gap-2">
            <span className="h-1 w-1 shrink-0 rounded-full bg-[color:var(--forest)]" aria-hidden />
            <span>{claim}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
