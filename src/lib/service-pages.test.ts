import { describe, expect, it } from "vitest";
import { pageHead, SERVICE_PAGES } from "./service-pages";

describe("fallen tree removal service page", () => {
  it("targets trees that are already down and links the urgent-service cluster", () => {
    const page = SERVICE_PAGES["fallen-tree-removal"];

    expect(page.title).toContain("Fallen Tree Removal");
    expect(page.intro).toContain("already fallen");
    expect(page.related).toEqual([
      { label: "Emergency Tree Service", href: "/emergency-tree-service" },
      { label: "Storm Cleanup", href: "/storm-cleanup" },
      { label: "Dangerous Branch Removal", href: "/dangerous-branch-removal" },
      { label: "Tree Removal", href: "/tree-removal" },
    ]);
  });

  it("creates canonical metadata and matching service and breadcrumb schema", () => {
    const page = SERVICE_PAGES["fallen-tree-removal"];
    const title = "Fallen Tree Removal in Houston, TX | Bukowski Tree Company";
    const head = pageHead("/fallen-tree-removal", title, page.description, page.serviceName);

    expect(head.links).toContainEqual({
      rel: "canonical",
      href: "https://bukowskitree.com/fallen-tree-removal",
    });
    expect(head.meta).toEqual(
      expect.arrayContaining([
        { title },
        { name: "robots", content: "index, follow" },
        {
          property: "og:url",
          content: "https://bukowskitree.com/fallen-tree-removal",
        },
        { name: "twitter:card", content: "summary_large_image" },
      ]),
    );

    const scripts = head.scripts ?? [];
    const service = JSON.parse(scripts[0]!.children);
    const breadcrumbs = JSON.parse(scripts[1]!.children);

    expect(service).toMatchObject({
      "@type": "Service",
      name: "Fallen Tree Removal",
      url: "https://bukowskitree.com/fallen-tree-removal",
    });
    expect(breadcrumbs.itemListElement).toEqual([
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://bukowskitree.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://bukowskitree.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Fallen Tree Removal",
        item: "https://bukowskitree.com/fallen-tree-removal",
      },
    ]);
  });
});
