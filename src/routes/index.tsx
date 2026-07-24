import { createFileRoute } from "@tanstack/react-router";
import { EmergencyBar } from "@/components/site/EmergencyBar";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { PriorityServices } from "@/components/site/PriorityServices";
import { ServicesList } from "@/components/site/ServicesList";
import { WhyBukowski } from "@/components/site/WhyBukowski";
import { Process } from "@/components/site/Process";
import { Emergency } from "@/components/site/Emergency";
import { Insurance } from "@/components/site/Insurance";
import { ServiceArea } from "@/components/site/ServiceArea";
import { About } from "@/components/site/About";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

const TITLE =
  "Bukowski Tree Company — Houston Tree Removal & Emergency Tree Service";
const DESC =
  "Professional tree removal, dangerous branch removal, trimming, storm cleanup, and 24/7 emergency tree service throughout Houston and Southeast Texas. Insured. Free consultations. Call 979-824-8240.";

const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Bukowski Tree Company",
  description: DESC,
  telephone: "+1-979-824-8240",
  areaServed: "Houston and Southeast Texas",
  founder: { "@type": "Person", name: "Jake Bukowski" },
  makesOffer: [
    "Tree removal",
    "Hazardous tree removal",
    "Branch and limb removal",
    "Fallen-tree removal",
    "Tree trimming and pruning",
    "Storm-damage cleanup",
    "Emergency tree service",
    "Stump grinding",
    "Brush and debris removal",
    "Lot and land clearing",
    "Roof and structure clearance",
    "Residential tree service",
    "Commercial tree service",
    "Tree-condition and safety consultations",
  ].map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(LOCAL_BUSINESS_JSONLD),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <EmergencyBar />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <PriorityServices />
        <ServicesList />
        <WhyBukowski />
        <Process />
        <Emergency />
        <Insurance />
        <ServiceArea />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
