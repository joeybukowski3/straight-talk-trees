import { SUPPORTING_SERVICES } from "@/lib/site-config";

export function ServicesList() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:py-20">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-[color:var(--forest)] sm:text-4xl">
          Additional Tree Services
        </h2>
        <p className="mt-4 max-w-3xl text-[color:var(--foreground)]/80 sm:text-lg">
          Supporting services can be recommended on their own or included with
          a larger tree-removal or cleanup project.
        </p>
        <ul className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {SUPPORTING_SERVICES.map((service) => (
            <li
              key={service.title}
              className="border-t border-[color:var(--border)] pt-5"
            >
              <h3 className="font-display text-lg font-semibold text-[color:var(--foreground)]">
                {service.title}
              </h3>
              <p className="mt-2 text-[color:var(--foreground)]/80">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
