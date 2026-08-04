import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { pageHead, SERVICE_PAGES } from "@/lib/service-pages";

const PAGE = SERVICE_PAGES["tree-trimming"];
const TITLE = "Tree Trimming in Houston, TX | Bukowski Tree Company";

export const Route = createFileRoute("/tree-trimming")({
  head: () => pageHead("/tree-trimming", TITLE, PAGE.description, PAGE.serviceName),
  component: TreeTrimmingPage,
});

function TreeTrimmingPage() {
  return <ServicePage page={PAGE} />;
}
