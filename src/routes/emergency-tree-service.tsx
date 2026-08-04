import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { pageHead, SERVICE_PAGES } from "@/lib/service-pages";

const PAGE = SERVICE_PAGES["emergency-tree-service"];
const TITLE = "Emergency Tree Service in Houston, TX | Bukowski Tree Company";

export const Route = createFileRoute("/emergency-tree-service")({
  head: () => pageHead("/emergency-tree-service", TITLE, PAGE.description, PAGE.serviceName),
  component: EmergencyTreeServicePage,
});

function EmergencyTreeServicePage() {
  return <ServicePage page={PAGE} />;
}
