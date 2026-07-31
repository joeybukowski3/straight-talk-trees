import { PhoneCall } from "lucide-react";
import { SITE, WHEN_TO_CALL_ITEMS } from "@/lib/site-config";
import { trackConversion } from "@/lib/analytics";

export function WhenToCall() {
  return (
    <section className="bg-[color:var(--sage)]/45">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-4 py-16 sm:py-20 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--forest)]">
            Practical guidance
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[color:var(--forest)] sm:text-4xl">
            When to Call a Tree-Service Professional
          </h2>
          <p className="mt-4 text-[color:var(--foreground)]/85">
            Visible damage does not confirm a tree’s condition, but these signs
            may require professional evaluation. Stay clear of unstable areas
            and call immediately for an urgent or dangerous condition.
          </p>
          <a
            href={SITE.phoneHref}
            onClick={() => trackConversion("phone_emergency_click")}
            className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-md bg-[color:var(--forest)] px-5 py-3 text-sm font-semibold text-[color:var(--forest-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)] focus-visible:ring-offset-2"
          >
            <PhoneCall className="h-4 w-4" aria-hidden />
            Call {SITE.phoneDisplay}
          </a>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {WHEN_TO_CALL_ITEMS.map((item) => (
            <li
              key={item}
              className="rounded-md border border-[color:var(--border)] bg-white p-4 text-[color:var(--foreground)]/85"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
