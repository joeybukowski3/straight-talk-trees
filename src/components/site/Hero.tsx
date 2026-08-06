import { Phone } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { SITE, TRUST_CLAIMS } from "@/lib/site-config";
import { trackConversion } from "@/lib/analytics";

/** Factual trust anchors already defined in site config — compact hero strip only. */
const HERO_TRUST = [
  TRUST_CLAIMS[1], // Locally owned
  TRUST_CLAIMS[0], // Insured
  TRUST_CLAIMS[2], // Free consultations
  TRUST_CLAIMS[4], // 24/7 emergency calls
] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[color:var(--forest-deep)] bg-[color:var(--forest-deep)] text-[color:var(--forest-foreground)]"
    >
      {/* Subtle tonal separation on desktop only — no wallpaper, gradients, or decorative icons */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-[56%] bg-[color:var(--forest)]/40 lg:block"
        aria-hidden="true"
      />

      <div className="hero-shell relative py-8 sm:py-10 lg:py-12">
        <div className="grid items-start gap-7 sm:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(17.5rem,22.5rem)] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(18rem,24rem)] xl:gap-16">
          <div className="flex min-w-0 flex-col lg:pt-1">
            <p className="type-eyebrow text-[color:var(--amber-cta)]">
              Bukowski Tree Company · Local tree service
            </p>

            <h1 className="type-h1 mt-3 max-w-[16ch] text-[color:var(--forest-foreground)] sm:mt-4">
              {SITE.tagline.replace(/\.$/, "")}
            </h1>

            <p className="type-body-lg mt-4 max-w-xl text-[color:var(--forest-foreground)]/90 sm:mt-5">
              Tree removal, storm cleanup, dangerous limb removal, trimming, and emergency tree
              service throughout South Houston and Southeast Texas.
            </p>

            <p className="type-meta mt-3 max-w-xl text-[color:var(--forest-foreground)]/70 sm:mt-4">
              For a fallen tree, hanging limb, blocked access, or another urgent condition, call
              directly. For nonurgent work, use the consultation form.
            </p>

            <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:max-w-md sm:flex-row sm:flex-wrap sm:items-stretch">
              <a
                href="#contact"
                onClick={() => trackConversion("consultation_hero_click")}
                className="btn-primary btn-primary-on-dark w-full text-base sm:w-auto sm:min-w-[13.5rem]"
              >
                Request a Free Consultation
              </a>
              <a
                href={SITE.phoneHref}
                onClick={() => trackConversion("phone_hero_click")}
                className="btn-secondary btn-secondary-on-dark w-full text-base sm:w-auto sm:min-w-[12rem]"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Call {SITE.phoneDisplay}
              </a>
            </div>

            <ul className="hero-trust-row mt-6 border-t border-[color:var(--forest-foreground)]/15 pt-5 sm:mt-7">
              {HERO_TRUST.map((claim) => (
                <li key={claim}>{claim}</li>
              ))}
            </ul>
          </div>

          <div id="contact" className="min-w-0 scroll-mt-24 lg:sticky lg:top-24">
            <ContactForm variant="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
