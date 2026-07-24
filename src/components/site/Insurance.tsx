import { INSURANCE_ITEMS } from "./data";

export function Insurance() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:py-20">
        <h2 className="max-w-3xl font-display text-3xl font-semibold tracking-tight text-[color:var(--forest)] sm:text-4xl">
          Documentation for Storm and Property Claims
        </h2>
        <p className="mt-4 max-w-3xl text-[color:var(--foreground)]/85 sm:text-lg">
          When tree damage may involve a property insurance claim, Bukowski Tree Company can help provide practical service documentation for the work performed.
        </p>
        <ul className="mt-8 grid max-w-3xl gap-2 sm:grid-cols-2">
          {INSURANCE_ITEMS.map((i) => (
            <li key={i} className="text-[color:var(--foreground)]/85">— {i}</li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl border-l-2 border-[color:var(--sage)] pl-4 text-sm text-[color:var(--muted-foreground)]">
          Bukowski Tree Company can provide service documentation that may help support a property insurance claim. Coverage and payment decisions are made by the property owner's insurance carrier. Bukowski Tree Company does not guarantee claim approval, coverage, or reimbursement.
        </p>
      </div>
    </section>
  );
}