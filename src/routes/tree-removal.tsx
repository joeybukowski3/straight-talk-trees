import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { pageHead, SERVICE_PAGES } from "@/lib/service-pages";

const PAGE = SERVICE_PAGES["tree-removal"];
const TITLE = "Tree Removal in Houston, TX | Bukowski Tree Company";

export const Route = createFileRoute("/tree-removal")({
  head: () => pageHead("/tree-removal", TITLE, PAGE.description, PAGE.serviceName),
  component: TreeRemovalPage,
});

function TreeRemovalPage() {
  return <ServicePage page={PAGE} />;
}
