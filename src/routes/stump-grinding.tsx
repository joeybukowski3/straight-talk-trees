import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { pageHead, SERVICE_PAGES } from "@/lib/service-pages";

const PAGE = SERVICE_PAGES["stump-grinding"];
const TITLE = "Stump Grinding in Houston, TX | Bukowski Tree Company";

export const Route = createFileRoute("/stump-grinding")({
  head: () => pageHead("/stump-grinding", TITLE, PAGE.description, PAGE.serviceName),
  component: StumpGrindingPage,
});

function StumpGrindingPage() {
  return <ServicePage page={PAGE} />;
}
