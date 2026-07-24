import { Phone } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { PHONE_DISPLAY, PHONE_HREF } from "./data";
import { TREE_MARK_PATH } from "./TreeMark";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[color:var(--forest)] text-[color:var(--forest-foreground)]">
      <div className="absolute inset-0 opacity-[0.08]" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-tree-pattern" width="44" height="44" patternUnits="userSpaceOnUse">
              <g transform="translate(6 6)">
                <path d={TREE_MARK_PATH} fill="currentColor" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-tree-pattern)" />
        </svg>
      </div>
      <div className="relative mx-auto grid max-w-[1200px] gap-10 px-4 py-14 sm:py-20 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-[color:var(--amber-cta)]">
            Local · Insured · Houston and Southeast Texas
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Houston's Straightforward Tree Service Company.
          </h1>
          <p className="mt-5 max-w-xl text-base text-[color:var(--forest-foreground)]/85 sm:text-lg">
            Professional tree removal, dangerous branch removal, trimming, storm cleanup, and emergency tree service throughout Houston and Southeast Texas.
          </p>
          <p className="mt-4 text-sm text-[color:var(--forest-foreground)]/70">
            Insured · Free Consultations · Fast Scheduling · 24/7 Emergency Calls
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 rounded-md bg-[color:var(--amber-cta)] px-5 py-3 text-base font-semibold text-[color:var(--amber-cta-foreground)] shadow-sm hover:brightness-95">
              <Phone className="h-4 w-4" aria-hidden />
              Call {PHONE_DISPLAY}
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-[color:var(--forest-foreground)]/40 px-5 py-3 text-base font-medium text-[color:var(--forest-foreground)] hover:bg-white/5">
              Request a Free Consultation
            </a>
          </div>
        </div>
        <div id="contact" className="lg:mt-2">
          <ContactForm variant="hero" />
        </div>
      </div>
    </section>
  );
}
