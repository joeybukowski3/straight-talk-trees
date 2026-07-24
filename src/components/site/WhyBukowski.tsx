import { WHY_POINTS } from "./data";
import { TREE_MARK_PATH } from "./TreeMark";

export function WhyBukowski() {
  return (
    <section id="why" className="relative overflow-hidden bg-[color:var(--sage)]/60">
      <div className="absolute inset-0 opacity-[0.07]" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="why-tree-pattern" width="44" height="44" patternUnits="userSpaceOnUse">
              <g transform="translate(6 6)">
                <path d={TREE_MARK_PATH} fill="currentColor" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#why-tree-pattern)" />
        </svg>
      </div>
      <div className="relative mx-auto max-w-[1200px] px-4 py-16 sm:py-20">
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
