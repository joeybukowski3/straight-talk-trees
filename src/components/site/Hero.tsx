import { Phone } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { TREE_MARK_PATH } from "./TreeMark";
import { SITE } from "@/lib/site-config";
import { trackConversion } from "@/lib/analytics";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[color:var(--forest)] text-[color:var(--forest-foreground)]"
    >
      <div className="absolute inset-0 opacity-[0.08]" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="hero-tree-pattern"
              width="44"
              height="44"
              patternUnits="userSpaceOnUse"
            >
              <g transform="translate(6 6)">
                <path d={TREE_MARK_PATH} fill="currentColor" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-tree-pattern)" />
        </svg>
      </div>
      <div className="relative mx-auto grid max-w-[1200px] gap-9 px-4 py-12 sm:py-18 lg:grid-cols-[1.12fr_1fr] lg:gap-12 lg:py-20">
        <div className="self-center">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-[color:var(--amber-cta)]">
            Local tree service · {SITE.region}
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            {SITE.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-base text-[color:var(--forest-foreground)]/88 sm:text-lg">
            Tree removal, dangerous branch and limb removal, storm cleanup, and
            trimming for homes and commercial properties across {SITE.region}.
          </p>
          <p className="mt-4 max-w-xl text-sm text-[color:var(--forest-foreground)]/75">
            For a fallen tree, hanging limb, blocked access, or another urgent
            condition, call directly. For nonurgent work, use the consultation
            form.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={SITE.phoneHref}
              onClick={() => trackConversion("phone_hero_click")}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[color:var(--amber-cta)] px-5 py-3 text-base font-semibold text-[color:var(--amber-cta-foreground)] shadow-sm hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--forest)]"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call {SITE.phoneDisplay}
            </a>
            <a
              href="#contact"
              onClick={() => trackConversion("consultation_hero_click")}
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-[color:var(--forest-foreground)]/40 px-5 py-3 text-base font-medium text-[color:var(--forest-foreground)] hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Request a Free Consultation
            </a>
          </div>
        </div>
        <div id="contact" className="scroll-mt-24 lg:mt-2">
          <ContactForm variant="hero" />
        </div>
      </div>
    </section>
  );
}
