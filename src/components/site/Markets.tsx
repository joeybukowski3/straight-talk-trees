import { NowOpenBadge } from "./NowOpenBadge";
import { CHARLOTTE_HUB_PATH } from "@/lib/charlotte-market";

export function Markets() {
  return (
    <section className="border-y border-[color:var(--border)] bg-white">
      <div className="section-shell section-pad">
        <p className="type-eyebrow text-[color:var(--forest)]">Service markets</p>
        <h2 className="type-h2 mt-2 max-w-[18ch] text-[color:var(--forest)]">
          Houston and Charlotte Metro
        </h2>
        <p className="type-body mt-4 max-w-2xl text-[color:var(--foreground)]/85">
          Bukowski Tree Company takes residential and commercial tree work in two markets.
          Availability depends on the property, requested work, access, and current scheduling.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <article className="rounded-md border border-[color:var(--border)] bg-[color:var(--cream)] p-6">
            <h3 className="font-display text-xl font-semibold text-[color:var(--forest)]">
              Houston &amp; Southeast Texas
            </h3>
            <p className="mt-3 leading-7 text-[color:var(--foreground)]/80">
              Core coverage around South Houston, with extended reach across the broader Houston and
              Southeast Texas region for worthwhile projects.
            </p>
            <a
              href="/service-areas"
              className="mt-5 inline-flex min-h-11 items-center font-semibold text-[color:var(--forest)] underline decoration-[color:var(--amber-cta)] decoration-2 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)]"
            >
              Houston service areas
            </a>
          </article>
          <article className="rounded-md border border-[color:var(--border)] bg-[color:var(--cream)] p-6">
            <h3 className="flex flex-wrap items-center gap-2 font-display text-xl font-semibold text-[color:var(--forest)]">
              Charlotte Metro
              <NowOpenBadge />
            </h3>
            <p className="mt-3 leading-7 text-[color:var(--foreground)]/80">
              Tree removal, emergency calls, trimming, storm cleanup, and land clearing for
              Charlotte and nearby Metro communities.
            </p>
            <a
              href={CHARLOTTE_HUB_PATH}
              className="mt-5 inline-flex min-h-11 items-center font-semibold text-[color:var(--forest)] underline decoration-[color:var(--amber-cta)] decoration-2 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)]"
            >
              Charlotte Metro tree service
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
