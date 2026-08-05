import { SITE } from "@/lib/site-config";

const STEPS = [
  {
    title: "Contact the company",
    body: `Call ${SITE.phoneDisplay} for urgent work or send a consultation request for a nonurgent project.`,
  },
  {
    title: "Describe the concern",
    body: "Share the property location, what you can see, the service you may need, and how urgent the condition appears.",
  },
  {
    title: "Schedule an evaluation",
    body: "An onsite evaluation or consultation may be arranged when access, tree condition, or safety requirements need review.",
  },
  {
    title: "Review scope and pricing",
    body: "Receive a straightforward recommendation describing the proposed work and pricing before scheduling.",
  },
  {
    title: "Schedule the work",
    body: "Choose an available service time after the scope, access needs, and other project details are agreed.",
  },
  {
    title: "Complete agreed cleanup",
    body: "The work and cleanup included in the agreed scope are completed with attention to the surrounding property.",
  },
] as const;

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:py-16">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-[color:var(--forest)] sm:text-4xl">
          What Happens After You Contact Us
        </h2>
        <p className="mt-3 max-w-3xl text-[color:var(--foreground)]/80 sm:text-lg">
          Every project starts with a conversation and, when needed, an onsite evaluation before
          work is scheduled. Final recommendations and pricing can depend on property access, tree
          condition, safety requirements, and that evaluation.
        </p>

        <details className="group mt-8 rounded-md border border-[color:var(--border)] bg-[color:var(--cream)]">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-md px-5 py-4 font-display text-lg font-semibold text-[color:var(--forest)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)]">
            <span>View the 6-Step Process</span>
            <span
              aria-hidden
              className="text-xl font-normal transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <ol className="grid gap-6 border-t border-[color:var(--border)] px-5 py-6 sm:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((step, index) => (
              <li key={step.title}>
                <div className="text-sm font-semibold text-[color:var(--amber-cta)]">
                  Step {index + 1}
                </div>
                <h3 className="mt-1 font-semibold text-[color:var(--forest)]">{step.title}</h3>
                <p className="mt-1 text-sm text-[color:var(--foreground)]/85">{step.body}</p>
              </li>
            ))}
          </ol>
        </details>
      </div>
    </section>
  );
}
