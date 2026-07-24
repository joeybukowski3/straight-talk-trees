import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "./data";

export function PriorityServices() {
  return (
    <section id="services" className="bg-[color:var(--cream)]">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:py-20">
        <h2 className="max-w-3xl font-display text-3xl font-semibold tracking-tight text-[color:var(--forest)] sm:text-4xl">
          Professional Tree and Branch Removal
        </h2>
        <p className="mt-4 max-w-3xl text-base text-[color:var(--muted-foreground)] sm:text-lg">
          From dangerous limbs to complete tree removal, Bukowski Tree Company provides practical recommendations and dependable service for residential and commercial properties.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <PriorityCard title="Tree Removal" body="Removal of dead, damaged, unwanted, fallen, or hazardous trees with careful attention to surrounding homes, structures, vehicles, fences, and landscaping." />
          <PriorityCard title="Branch and Limb Removal" body="Removal of broken, storm-damaged, overhanging, or dangerous limbs near roofs, driveways, fences, structures, and frequently used areas." />
        </div>
        <div className="mt-8">
          <a href={PHONE_HREF} className="inline-flex items-center gap-2 rounded-md bg-[color:var(--amber-cta)] px-5 py-3 text-sm font-semibold text-[color:var(--amber-cta-foreground)] shadow-sm hover:brightness-95">
            <Phone className="h-4 w-4" aria-hidden />
            Call for a Free Consultation — {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}

function PriorityCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-md border border-[color:var(--border)] bg-white p-6">
      <h3 className="font-display text-xl font-semibold text-[color:var(--forest)]">{title}</h3>
      <p className="mt-2 text-[color:var(--foreground)]/85">{body}</p>
    </div>
  );
}