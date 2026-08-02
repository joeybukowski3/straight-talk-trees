import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { EmergencyBar } from "@/components/site/EmergencyBar";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { MobileActionBar } from "@/components/site/MobileActionBar";
import { trackConversion } from "@/lib/analytics";
import { pageHead } from "@/lib/service-pages";
import { SITE } from "@/lib/site-config";

const TITLE = "Contact Bukowski Tree Company | Houston Tree Service";
const DESCRIPTION =
  "Call Bukowski Tree Company or request a free consultation for tree removal, branch removal, trimming, storm cleanup, and related tree service.";

export const Route = createFileRoute("/contact")({
  head: () => pageHead("/contact", TITLE, DESCRIPTION),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <EmergencyBar />
      <Header />
      <main className="bg-[color:var(--cream)] text-[color:var(--foreground)] pb-24 md:pb-0">
        <section className="border-b border-[color:var(--border)] bg-[color:var(--forest)] text-[color:var(--forest-foreground)]">
          <div className="mx-auto max-w-[1200px] px-4 py-14 sm:py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--amber-cta)]">
              Contact
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Tell us what is happening on the property
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-[color:var(--forest-foreground)]/85 sm:text-lg">
              For an urgent or dangerous tree condition, call directly. For nonurgent work, use the consultation form and include the property location and a brief description of what you see.
            </p>
            <a
              href={SITE.phoneHref}
              onClick={() => trackConversion("phone_contact_page_click")}
              className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-md bg-[color:var(--amber-cta)] px-5 py-3 text-sm font-semibold text-[color:var(--amber-cta-foreground)] shadow-sm hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-white">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-14 sm:py-20 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-[color:var(--forest)]">
                What to include
              </h2>
              <ul className="mt-6 space-y-4 leading-7">
                <li>Property ZIP code or general location.</li>
                <li>The type of tree work you may need.</li>
                <li>Whether the concern is urgent or changing.</li>
                <li>What is damaged, hanging, fallen, leaning, overgrown, or affecting access.</li>
              </ul>
              <p className="mt-6 leading-7 text-[color:var(--foreground)]/75">
                Final recommendations and pricing may depend on property access, tree condition, safety requirements, and an onsite evaluation.
              </p>
            </div>
            <ContactForm variant="section" />
          </div>
        </section>
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
