export const SITE = {
  businessName: "Bukowski Tree Company",
  ownerName: "Jake Bukowski",
  phoneDisplay: "979-824-8240",
  phoneHref: "tel:+19798248240",
  phoneE164: "+19798248240",
  url: "https://bukowskitrees.com",
  tagline: "Houston’s Straightforward Tree Service Company.",
  defaultTitle: "Bukowski Tree Company | Houston Tree Service",
  defaultDescription:
    "Tree removal, dangerous branch removal, trimming, storm cleanup, and emergency calls for Houston and Southeast Texas.",
  region: "Houston and Southeast Texas",
  socialImagePath: "/houston-tree-hero.jpg",
  socialImageAlt: "Tree service work in Houston and Southeast Texas",
} as const;

export const SITE_URL = new URL(SITE.url);

export function absoluteUrl(path: string = "/") {
  return new URL(path, SITE_URL).toString();
}

export const TRUST_CLAIMS = [
  "Insured",
  "Locally owned",
  "Free consultations",
  "Fast scheduling",
  "24/7 emergency calls",
] as const;

export const PRIMARY_SERVICES = [
  {
    title: "Tree Removal",
    description:
      "Removal planning for dead, damaged, fallen, unwanted, or potentially hazardous trees, with the surrounding property considered.",
    urgent:
      "Call immediately when a tree has fallen, is shifting toward a structure, or is blocking safe access.",
  },
  {
    title: "Dangerous Branch and Limb Removal",
    description:
      "Removal of large broken, hanging, storm-damaged, or overhanging limbs near roofs, driveways, fences, and frequently used areas.",
    urgent:
      "Call immediately for hanging limbs, fresh breaks, or branches threatening people, structures, vehicles, or utility lines.",
  },
  {
    title: "Fallen-Tree Removal",
    description:
      "Removal of trees that have fallen across yards, driveways, fences, structures, or other areas of the property.",
    urgent:
      "Call immediately when access is blocked or the fallen tree is affecting a structure or utility line.",
  },
  {
    title: "Emergency Tree Service",
    description:
      "Urgent assistance for storm damage, fallen trees, hanging limbs, blocked access, and other immediate property concerns.",
    urgent:
      "Call rather than using the form when the condition appears active, unstable, or immediately dangerous.",
  },
  {
    title: "Storm Cleanup",
    description:
      "Removal of damaged trees, broken branches, brush, and debris included in the agreed service scope after severe weather.",
    urgent:
      "Call immediately when storm damage creates blocked access, hanging material, or a threat to a home or structure.",
  },
] as const;

export const SUPPORTING_SERVICES = [
  {
    title: "Tree Trimming and Pruning",
    description:
      "Routine or corrective trimming to improve clearance and address unwanted or unsafe growth around the property.",
  },
  {
    title: "Stump Grinding",
    description:
      "Grinding of remaining stumps to improve safety, appearance, and future use of the surrounding area.",
  },
  {
    title: "Brush and Debris Removal",
    description:
      "Removal of tree limbs, brush, and debris included within the agreed service scope.",
  },
  {
    title: "Lot and Land Clearing",
    description:
      "Tree, brush, and vegetation removal for property access, cleanup, construction preparation, or land management.",
  },
  {
    title: "Roof and Structure Clearance",
    description:
      "Removal or trimming of branches touching, overhanging, or threatening roofs, buildings, fences, and other structures.",
  },
  {
    title: "Residential Tree Service",
    description:
      "Tree work for homeowners, landlords, rental properties, and residential communities.",
  },
  {
    title: "Commercial Tree Service",
    description:
      "Tree removal, trimming, cleanup, and property-clearance services for businesses, property managers, and commercial sites.",
  },
  {
    title: "Tree-Condition and Safety Consultations",
    description:
      "A practical review of the visible concern, property access, and service options before recommendations and pricing are finalized.",
  },
] as const;

export const SERVICES = [
  ...PRIMARY_SERVICES.map(({ title }) => title),
  ...SUPPORTING_SERVICES.map(({ title }) => title),
] as const;

export const WHEN_TO_CALL_ITEMS = [
  "Large broken or hanging limbs",
  "A tree leaning toward a home, fence, driveway, or other structure",
  "Storm-damaged trees or newly exposed breaks",
  "Limbs contacting or threatening a roof",
  "A fallen tree blocking access",
  "Dead-looking or visibly unstable sections",
  "Overgrowth affecting structures, vehicles, or property access",
] as const;

export const FAQS = [
  {
    question: "What types of tree work do you handle?",
    answer:
      "Bukowski Tree Company handles tree removal, dangerous branch and limb removal, fallen-tree removal, emergency tree service, storm cleanup, trimming, stump grinding, debris removal, land clearing, structure clearance, and residential or commercial tree work.",
  },
  {
    question: "Do you provide emergency tree service?",
    answer:
      "Emergency calls are answered 24/7 for urgent conditions such as fallen trees, hanging limbs, blocked access, and storm damage. Call directly when the condition appears dangerous or actively unstable.",
  },
  {
    question: "How do I know whether a damaged limb is urgent?",
    answer:
      "A broken or hanging limb near people, structures, vehicles, access points, or utility lines may require prompt professional evaluation. Stay clear of the area and call when you are unsure. Contact emergency services or the utility provider for immediate life-safety or electrical hazards.",
  },
  {
    question: "Do you serve my area?",
    answer:
      "The company serves Houston and Southeast Texas. Availability depends on the property location and current scheduling, so call to confirm coverage or include your ZIP code or general location in the consultation form.",
  },
  {
    question: "Are consultations free?",
    answer:
      "Yes. You can call or submit the consultation form with the property location and a brief description of the tree concern.",
  },
  {
    question: "What information should I provide?",
    answer:
      "Provide your contact information, property location, the type of service you may need, how urgent the concern is, and a brief description of what you see. Final recommendations and pricing may require an onsite evaluation.",
  },
  {
    question: "Do you handle cleanup?",
    answer:
      "Cleanup and debris removal can be included in the agreed service scope. The exact work should be confirmed with the recommendation and pricing before scheduling.",
  },
  {
    question: "Do you serve residential and commercial properties?",
    answer:
      "Yes. The company provides supported tree services for homeowners, landlords, property managers, businesses, and commercial sites.",
  },
] as const;
