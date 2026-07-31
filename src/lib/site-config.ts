export const SITE = {
  businessName: "Bukowski Tree Company",
  ownerName: "Jake Bukowski",
  phoneDisplay: "979-824-8240",
  phoneHref: "tel:+19798248240",
  phoneE164: "+19798248240",
  url: "https://bukowskitree.com",
  tagline: "Houston’s Straightforward Tree Service Company.",
  defaultTitle: "Bukowski Tree Company | Houston Tree Service",
  defaultDescription:
    "Tree removal, dangerous branch removal, trimming, storm cleanup, and emergency calls for Houston and Southeast Texas.",
  region: "Houston and Southeast Texas",
  socialImagePath: "/houston-tree-hero.jpg",
  socialImageAlt: "Bukowski Tree Company tree service in Houston and Southeast Texas",
} as const;

export const SITE_URL = new URL(SITE.url);

export function absoluteUrl(path: string = "/") {
  return new URL(path, SITE_URL).toString();
}

export const SERVICES = [
  "Tree removal",
  "Dangerous branch removal",
  "Tree trimming and pruning",
  "Storm-damage cleanup",
  "Emergency tree service",
  "Stump grinding",
  "Brush and debris removal",
  "Lot and land clearing",
  "Roof and structure clearance",
  "Residential tree service",
  "Commercial tree service",
] as const;
