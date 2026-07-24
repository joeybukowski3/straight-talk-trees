import { SERVICES } from "./data";

export function ServicesList() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:py-20">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-[color:var(--forest)] sm:text-4xl">
          Complete Tree Services
        </h2>
        <ul className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {SERVICES.map((s) => (
            <li key={s.title} className="border-t border-[color:var(--border)] pt-5">
              <h3 className="font-display text-lg font-semibold text-[color:var(--foreground)]">{s.title}</h3>
              <p className="mt-2 text-[color:var(--foreground)]/80">{s.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}