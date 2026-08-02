import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { pageHead, SERVICE_PAGES } from "@/lib/service-pages";

const PAGE = SERVICE_PAGES["storm-cleanup"];
const TITLE = "Houston Storm-Damage Tree Cleanup | Bukowski Tree Company";

export const Route = createFileRoute("/storm-cleanup")({
  head: () => pageHead("/storm-cleanup", TITLE, PAGE.description, PAGE.serviceName),
  component: StormCleanupPage,
});

function StormCleanupPage() {
  return <ServicePage page={PAGE} />;
}
