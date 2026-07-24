import { Phone } from "lucide-react";
import { EMERGENCY_ITEMS, PHONE_DISPLAY, PHONE_HREF } from "./data";

export function Emergency() {
  return (
    <section id="emergency" className="bg-[color:var(--charcoal)] text-[color:var(--cream)]">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-16 sm:py-20 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Storm Damage or a Dangerous Tree?
          </h2>
          <p className="mt-4 text-base text-[color:var(--cream)]/85 sm:text-lg">
            Call Bukowski Tree Company for urgent tree and branch removal throughout Houston and Southeast Texas.
          </p>
          <a href={PHONE_HREF} className="mt-6 inline-flex items-center gap-2 rounded-md bg-[color:var(--amber-cta)] px-5 py-3 text-base font-semibold text-[color:var(--amber-cta-foreground)] shadow-sm hover:brightness-95">
            <Phone className="h-4 w-4" aria-hidden />
            Call the 24/7 Emergency Line — {PHONE_DISPLAY}
          </a>
          <p className="mt-6 max-w-xl text-sm text-[color:var(--cream)]/70">
            Stay clear of unstable trees, hanging branches, damaged structures, and downed utility lines. Contact emergency services or the appropriate utility provider when there is an immediate life-safety or electrical hazard.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {EMERGENCY_ITEMS.map((i) => (
            <li key={i} className="border-l-2 border-[color:var(--amber-cta)] pl-3 text-[color:var(--cream)]/90">
              {i}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}