import { SITE } from "@/lib/site-config";

export function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-4 py-16 sm:py-20 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--forest)]">
            Local ownership
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[color:var(--forest)] sm:text-4xl">
            {SITE.ownerName}, Owner
          </h2>
        </div>
        <div className="max-w-3xl space-y-4 text-[color:var(--foreground)]/85 sm:text-lg">
          <p>
            {SITE.businessName} is a locally owned tree-service company focused
            on professional work, straightforward communication, and practical
            recommendations for properties across {SITE.region}.
          </p>
          <p>
            Jake works with homeowners, landlords, property managers,
            businesses, and commercial-property customers who need tree
            removal, branch removal, trimming, storm cleanup, and related tree
            services. Customers receive a clear explanation of the next step
            before work is scheduled.
          </p>
        </div>
      </div>
    </section>
  );
}
