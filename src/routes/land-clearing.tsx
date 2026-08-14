import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { pageHead, SERVICE_PAGES } from "@/lib/service-pages";

const PAGE = SERVICE_PAGES["land-clearing"];
const TITLE = "Land Clearing in Houston, TX | Bukowski Tree Company";

export const Route = createFileRoute("/land-clearing")({
  head: () => pageHead("/land-clearing", TITLE, PAGE.description, PAGE.serviceName),
  component: LandClearingPage,
});

function LandClearingPage() {
  return <ServicePage page={PAGE} />;
}
