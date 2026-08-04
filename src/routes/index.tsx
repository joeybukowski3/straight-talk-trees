import { createFileRoute } from "@tanstack/react-router";
import { EmergencyBar } from "@/components/site/EmergencyBar";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { PriorityServices } from "@/components/site/PriorityServices";
import { ServicesList } from "@/components/site/ServicesList";
import { WhenToCall } from "@/components/site/WhenToCall";
import { WhyBukowski } from "@/components/site/WhyBukowski";
import { Process } from "@/components/site/Process";
import { Emergency } from "@/components/site/Emergency";
import { Insurance } from "@/components/site/Insurance";
import { ServiceArea } from "@/components/site/ServiceArea";
import { About } from "@/components/site/About";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { MobileActionBar } from "@/components/site/MobileActionBar";
import { FAQS, SITE, SERVICES, absoluteUrl } from "@/lib/site-config";

const TITLE = "Tree Service in Houston, TX | Bukowski Tree Company";
const DESCRIPTION =
  "Tree removal, dangerous branch removal, trimming, storm cleanup, and emergency calls throughout Houston and Southeast Texas.";

const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": `${SITE.url}/#business`,
  name: SITE.businessName,
  url: SITE.url,
  telephone: SITE.phoneE164,
  description: DESCRIPTION,
  founder: { "@type": "Person", name: SITE.ownerName },
  areaServed: [
    { "@type": "City", name: "Houston" },
    { "@type": "AdministrativeArea", name: "Southeast Texas" },
  ],
  image: absoluteUrl(SITE.socialImagePath),
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE.phoneE164,
    contactType: "customer service",
    areaServed: "US-TX",
  },
  makesOffer: SERVICES.map((name) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name, areaServed: SITE.region },
  })),
};

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE.url },
      { property: "og:site_name", content: SITE.businessName },
      { property: "og:image", content: absoluteUrl(SITE.socialImagePath) },
      { property: "og:image:alt", content: SITE.socialImageAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: absoluteUrl(SITE.socialImagePath) },
    ],
    links: [{ rel: "canonical", href: SITE.url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(LOCAL_BUSINESS_JSONLD),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(FAQ_JSONLD),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="pb-24 md:pb-0">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-md bg-white px-4 py-3 font-semibold text-[color:var(--forest)] shadow-lg transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[color:var(--forest)]"
      >
        Skip to main content
      </a>
      <EmergencyBar />
      <Header />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <PriorityServices />
        <ServicesList />
        <WhenToCall />
        <WhyBukowski />
        <Process />
        <Emergency />
        <Insurance />
        <ServiceArea />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}
