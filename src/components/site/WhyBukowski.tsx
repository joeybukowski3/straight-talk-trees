import { WHY_POINTS } from "./data";

export function WhyBukowski() {
  return (
    <section id="why" className="bg-[color:var(--sage)]/60">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:py-20">
        <h2 className="max-w-3xl font-display text-3xl font-semibold tracking-tight text-[color:var(--forest)] sm:text-4xl">
          Tree Work Without the Runaround
        </h2>
        <p className="mt-4 max-w-3xl text-base text-[color:var(--foreground)]/85 sm:text-lg">
          Bukowski Tree Company is built around clear communication, practical recommendations, dependable scheduling, and respect for your property.
        </p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_POINTS.map((p) => (
            <div key={p.title}>
              <h3 className="font-display text-lg font-semibold text-[color:var(--forest)]">{p.title}</h3>
              <p className="mt-2 text-[color:var(--foreground)]/85">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}