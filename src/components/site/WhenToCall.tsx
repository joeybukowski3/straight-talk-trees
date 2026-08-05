import { PhoneCall } from "lucide-react";
import { SITE, WHEN_TO_CALL_ITEMS } from "@/lib/site-config";
import { trackConversion } from "@/lib/analytics";

const VISIBLE_ITEMS = WHEN_TO_CALL_ITEMS.slice(0, 6);
const MORE_ITEMS = WHEN_TO_CALL_ITEMS.slice(6);

export function WhenToCall() {
  return (
    <section id="when-to-call" className="scroll-mt-24 bg-[color:var(--sage)]/45">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-4 py-14 sm:py-16 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--forest)]">
            Practical guidance
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[color:var(--forest)] sm:text-4xl">
            When Should You Call a Tree-Service Professional?
          </h2>
          <p className="mt-4 text-[color:var(--foreground)]/85">
            Visible damage does not confirm a tree&rsquo;s condition, but these signs often call for
            professional evaluation. Stay clear of unstable areas and call immediately for an urgent
            or dangerous condition.
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
        <div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {VISIBLE_ITEMS.map((item) => (
              <li
                key={item}
                className="rounded-md border border-[color:var(--border)] bg-white p-4 text-[color:var(--foreground)]/85"
              >
                {item}
              </li>
            ))}
          </ul>

          <details className="group mt-4 rounded-md border border-[color:var(--border)] bg-white">
            <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 rounded-md px-4 py-3 text-sm font-semibold text-[color:var(--forest)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)]">
              <span>See more warning signs</span>
              <span
                aria-hidden
                className="text-lg font-normal transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <div className="border-t border-[color:var(--border)] px-4 py-4 text-sm text-[color:var(--foreground)]/85">
              <ul className="grid gap-3 sm:grid-cols-2">
                {MORE_ITEMS.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-[color:var(--border)] bg-[color:var(--cream)] p-3"
                  >
                    {item}
                  </li>
                ))}
                <li className="rounded-md border border-[color:var(--border)] bg-[color:var(--cream)] p-3">
                  Large debris or branch buildup after a storm
                </li>
              </ul>
              <p className="mt-4">
                Stay clear of unstable trees, hanging branches, damaged structures, and downed
                utility lines. Contact emergency services or the appropriate utility provider when
                there is an immediate life-safety or electrical hazard.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
