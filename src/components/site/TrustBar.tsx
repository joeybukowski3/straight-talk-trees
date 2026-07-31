import { CheckCircle2 } from "lucide-react";
import { TRUST_CLAIMS } from "@/lib/site-config";

export function TrustBar() {
  return (
    <section
      aria-label="Company service highlights"
      className="border-b border-[color:var(--border)] bg-white"
    >
      <ul className="mx-auto grid max-w-[1200px] grid-cols-2 gap-x-4 gap-y-3 px-4 py-5 text-sm font-medium text-[color:var(--foreground)] sm:grid-cols-3 lg:grid-cols-5">
        {TRUST_CLAIMS.map((claim) => (
          <li key={claim} className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-[color:var(--forest)]" aria-hidden />
            <span>{claim}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
