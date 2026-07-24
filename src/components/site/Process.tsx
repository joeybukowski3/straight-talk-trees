import { PHONE_DISPLAY } from "./data";

const STEPS = [
  { title: "Call or Send a Request", body: `Call ${PHONE_DISPLAY} or submit the consultation form with a short description of the tree or branch issue.` },
  { title: "Get a Clear Recommendation", body: "Jake Bukowski or a member of the team will review the situation and explain the recommended service." },
  { title: "Schedule the Work", body: "Choose a practical service time and receive clear communication about the next steps." },
  { title: "Complete the Job", body: "The agreed work is completed with attention to safety, surrounding property, and cleanup." },
];

export function Process() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:py-20">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-[color:var(--forest)] sm:text-4xl">
          A Simple, Straightforward Process
        </h2>
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.title}>
              <div className="text-sm font-semibold text-[color:var(--amber-cta)]">Step {i + 1}</div>
              <h3 className="mt-1 font-display text-lg font-semibold text-[color:var(--forest)]">{s.title}</h3>
              <p className="mt-2 text-[color:var(--foreground)]/85">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}