import { PhoneCall } from "lucide-react";
import { SITE, WHEN_TO_CALL_ITEMS } from "@/lib/site-config";
import { trackConversion } from "@/lib/analytics";

const VISIBLE_ITEMS = WHEN_TO_CALL_ITEMS.slice(0, 6);
const MORE_ITEMS = WHEN_TO_CALL_ITEMS.slice(6);

export function WhenToCall() {
  return (
    <section
      id="when-to-call"
      className="scroll-mt-24 border-y border-[color:var(--border)] bg-white"
    >
      <div className="section-shell section-pad grid gap-10 lg:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] lg:items-start lg:gap-14 xl:gap-16">
        <div className="lg:sticky lg:top-28">
          <p className="type-eyebrow text-[color:var(--forest)]">Practical guidance</p>
          <h2 className="type-h2 mt-2 max-w-[18ch] text-[color:var(--forest)]">
            When Should You Call a Tree-Service Professional?
          </h2>
          <p className="type-body mt-4 max-w-md text-[color:var(--foreground)]/85">
            Visible damage does not confirm a tree&rsquo;s condition, but these signs often call for
            professional evaluation. Stay clear of unstable areas and call immediately for an urgent
            or dangerous condition.
          </p>
          <a
            href={SITE.phoneHref}
            onClick={() => trackConversion("phone_emergency_click")}
            className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-[var(--radius)] bg-[color:var(--forest)] px-5 py-3 text-sm font-semibold text-[color:var(--forest-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)] focus-visible:ring-offset-2"
          >
            <PhoneCall className="h-4 w-4" aria-hidden />
            Call {SITE.phoneDisplay}
          </a>
        </div>

        <div className="min-w-0">
          <ul className="divide-y divide-[color:var(--border)] border-y border-[color:var(--border)]">
            {VISIBLE_ITEMS.map((item) => (
              <li
                key={item}
                className="type-body flex gap-3 py-3.5 text-[color:var(--foreground)]/90"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--forest)]"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <details className="group mt-6 border-t border-[color:var(--border)]">
            <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-3 text-sm font-semibold text-[color:var(--forest)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)]">
              <span>See more warning signs</span>
              <span
                aria-hidden
                className="text-lg font-normal transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <div className="border-t border-[color:var(--border)] pb-1 pt-4 type-meta text-[color:var(--foreground)]/85">
              <ul className="divide-y divide-[color:var(--border)]">
                {MORE_ITEMS.map((item) => (
                  <li key={item} className="flex gap-3 py-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--forest)]"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
                <li className="flex gap-3 py-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--forest)]"
                    aria-hidden
                  />
                  <span>Large debris or branch buildup after a storm</span>
                </li>
              </ul>
              <p className="mt-4 border-t border-[color:var(--border)] pt-4">
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
