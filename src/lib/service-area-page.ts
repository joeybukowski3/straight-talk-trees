import { pageHead } from "@/lib/service-pages";
import { SITE } from "@/lib/site-config";

export const SERVICE_AREA_PAGE_TITLE =
  "Houston and Southeast Texas Tree Service Areas | Bukowski Tree Company";
export const SERVICE_AREA_PAGE_DESCRIPTION =
  "Review Bukowski Tree Company's core South Houston service area and extended roughly 100-mile reach across Houston and Southeast Texas, subject to job-specific availability.";
export const SERVICE_AREA_RADIUS_METRES = 160934;
export const SERVICE_AREA_SCHEMA_DESCRIPTION =
  "Approximate 100-mile service reach from South Houston for worthwhile projects; availability varies by job scope, travel, scheduling, access, and urgency.";

export const SERVICE_AREA_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": `${SITE.url}/#business`,
  name: SITE.businessName,
  url: SITE.url,
  telephone: SITE.phoneE164,
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 29.661024,
      longitude: -95.228361,
    },
    geoRadius: SERVICE_AREA_RADIUS_METRES,
    description: SERVICE_AREA_SCHEMA_DESCRIPTION,
  },
  knowsAbout: [
    "Tree service",
    "Tree removal",
    "Fallen tree removal",
    "Tree trimming",
    "Emergency tree service",
    "Storm cleanup",
    "Dangerous branch and limb removal",
    "Stump grinding",
    "Commercial tree service",
    "Land and lot clearing",
  ],
} as const;

export function serviceAreaPageHead() {
  const head = pageHead("/service-areas", SERVICE_AREA_PAGE_TITLE, SERVICE_AREA_PAGE_DESCRIPTION);

  return {
    ...head,
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(SERVICE_AREA_BUSINESS_SCHEMA),
      },
    ],
  };
}
