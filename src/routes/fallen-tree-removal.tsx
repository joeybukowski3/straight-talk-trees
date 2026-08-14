import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { pageHead, SERVICE_PAGES } from "@/lib/service-pages";

const PAGE = SERVICE_PAGES["fallen-tree-removal"];
const TITLE = "Fallen Tree Removal in Houston, TX | Bukowski Tree Company";

export const Route = createFileRoute("/fallen-tree-removal")({
  head: () => pageHead("/fallen-tree-removal", TITLE, PAGE.description, PAGE.serviceName),
  component: FallenTreeRemovalPage,
});

function FallenTreeRemovalPage() {
  return <ServicePage page={PAGE} />;
}
