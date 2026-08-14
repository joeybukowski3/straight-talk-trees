import { describe, expect, it } from "vitest";
import {
  SERVICE_AREA_BUSINESS_SCHEMA,
  SERVICE_AREA_PAGE_DESCRIPTION,
  SERVICE_AREA_RADIUS_METRES,
  SERVICE_AREA_SCHEMA_DESCRIPTION,
  serviceAreaPageHead,
} from "./service-area-page";

describe("service-area SEO", () => {
  it("uses the permanent canonical domain and complete social metadata", () => {
    const head = serviceAreaPageHead();
    const canonical = "https://bukowskitrees.com/service-areas";

    expect(head.links).toContainEqual({ rel: "canonical", href: canonical });
    expect(head.meta).toEqual(
      expect.arrayContaining([
        { name: "description", content: SERVICE_AREA_PAGE_DESCRIPTION },
        { name: "robots", content: "index, follow" },
        { property: "og:url", content: canonical },
        { name: "twitter:card", content: "summary_large_image" },
      ]),
    );
  });

  it("keeps the GeoCircle aligned with the visible approximate reach", () => {
    const head = serviceAreaPageHead();
    const schema = JSON.parse(head.scripts[0]!.children);

    expect(SERVICE_AREA_RADIUS_METRES).toBe(160934);
    expect(schema).toEqual(SERVICE_AREA_BUSINESS_SCHEMA);
    expect(schema).toMatchObject({
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": "https://bukowskitrees.com/#business",
      url: "https://bukowskitrees.com",
      areaServed: {
        "@type": "GeoCircle",
        geoRadius: SERVICE_AREA_RADIUS_METRES,
        description: SERVICE_AREA_SCHEMA_DESCRIPTION,
      },
    });
    expect(JSON.stringify(schema)).not.toContain("bukowskitree.com");
    expect(schema).not.toHaveProperty("address");
    expect(schema).not.toHaveProperty("aggregateRating");
  });
});
