import { FAQS } from "@/lib/site-config";

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 bg-[color:var(--cream)]">
      <div className="mx-auto max-w-[48rem] px-4 py-14 sm:py-16">
        <p className="type-eyebrow text-[color:var(--forest)]">FAQ</p>
        <h2 className="type-h2 mt-2 text-[color:var(--forest)]">Frequently Asked Questions</h2>
        <div className="mt-8 divide-y divide-[color:var(--border)] border-y border-[color:var(--border)]">
          {FAQS.map((item) => (
            <details key={item.question} className="group">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold text-[color:var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)]">
                <span>{item.question}</span>
                <span
                  aria-hidden
                  className="text-xl font-normal text-[color:var(--forest)] transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="type-body max-w-3xl pb-5 pr-8 text-[color:var(--foreground)]/80">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
