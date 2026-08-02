import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { pageHead, SERVICE_PAGES } from "@/lib/service-pages";

const PAGE = SERVICE_PAGES["dangerous-branch-removal"];
const TITLE = "Houston Dangerous Branch Removal | Bukowski Tree Company";

export const Route = createFileRoute("/dangerous-branch-removal")({
  head: () => pageHead("/dangerous-branch-removal", TITLE, PAGE.description, PAGE.serviceName),
  component: DangerousBranchRemovalPage,
});

function DangerousBranchRemovalPage() {
  return <ServicePage page={PAGE} />;
}
