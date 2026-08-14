import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { pageHead, SERVICE_PAGES } from "@/lib/service-pages";

const PAGE = SERVICE_PAGES["commercial-tree-service"];
const TITLE = "Commercial Tree Service in Houston, TX | Bukowski Tree Company";

export const Route = createFileRoute("/commercial-tree-service")({
  head: () => pageHead("/commercial-tree-service", TITLE, PAGE.description, PAGE.serviceName),
  component: CommercialTreeServicePage,
});

function CommercialTreeServicePage() {
  return <ServicePage page={PAGE} />;
}
