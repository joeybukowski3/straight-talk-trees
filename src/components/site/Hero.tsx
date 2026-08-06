import { Phone } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { TREE_MARK_PATH } from "./TreeMark";
import { SITE } from "@/lib/site-config";
import { trackConversion } from "@/lib/analytics";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[color:var(--forest)]/20 bg-[color:var(--forest)] text-[color:var(--forest-foreground)]"
    >
      <div className="absolute inset-0 opacity-[0.05]" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-tree-pattern" width="48" height="48" patternUnits="userSpaceOnUse">
              <g transform="translate(8 8)">
                <path d={TREE_MARK_PATH} fill="currentColor" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-tree-pattern)" />
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-[72rem] gap-8 px-4 py-10 sm:gap-10 sm:py-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,24.5rem)] lg:items-start lg:gap-14 lg:py-16 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,26rem)]">
        <div className="flex min-w-0 flex-col justify-center lg:min-h-[28rem] lg:py-2">
          <p className="type-eyebrow text-[color:var(--amber-cta)]">
            Bukowski Tree Company · Local tree service
          </p>

          <h1 className="type-h1 mt-4 max-w-[18ch] text-[color:var(--forest-foreground)]">
            {SITE.tagline.replace(/\.$/, "")}
          </h1>

          <p className="type-body-lg mt-5 max-w-xl text-[color:var(--forest-foreground)]/90">
            Tree removal, storm cleanup, dangerous limb removal, trimming, and emergency tree
            service throughout South Houston and Southeast Texas.
          </p>

          <p className="type-meta mt-4 max-w-xl text-[color:var(--forest-foreground)]/72">
            For a fallen tree, hanging limb, blocked access, or another urgent condition, call
            directly. For nonurgent work, use the consultation form.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#contact"
              onClick={() => trackConversion("consultation_hero_click")}
              className="btn-primary btn-primary-on-dark text-base"
            >
              Request a Free Consultation
            </a>
            <a
              href={SITE.phoneHref}
              onClick={() => trackConversion("phone_hero_click")}
              className="btn-secondary btn-secondary-on-dark text-base"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>

        <div id="contact" className="min-w-0 scroll-mt-24 lg:sticky lg:top-24">
          <ContactForm variant="hero" />
        </div>
      </div>
    </section>
  );
}
