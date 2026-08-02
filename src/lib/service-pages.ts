import { absoluteUrl, SITE } from "@/lib/site-config";

export type ServicePageData = {
  slug: string;
  serviceName: string;
  title: string;
  description: string;
  intro: string;
  situations: readonly string[];
  approach: readonly string[];
  considerations: readonly string[];
  related: readonly { label: string; href: string }[];
};

export const SERVICE_PAGES = {
  "tree-removal": {
    slug: "tree-removal",
    serviceName: "Tree Removal",
    title: "Tree Removal in Houston and Southeast Texas",
    description:
      "Professional tree removal for dead, damaged, fallen, unwanted, or potentially hazardous trees in Houston and Southeast Texas.",
    intro:
      "Tree removal can be appropriate when a tree is badly damaged, has failed, interferes with safe property use, or cannot reasonably remain where it is. Bukowski Tree Company reviews the visible concern, access, nearby structures, and the requested cleanup scope before recommendations and pricing are finalized.",
    situations: [
      "A tree has fallen or partially failed after a storm.",
      "A tree is leaning toward a home, driveway, fence, or frequently used area.",
      "Large sections are dead, broken, or visibly unstable.",
      "A tree is interfering with planned property use or safe access.",
      "Removal has been recommended after an onsite evaluation.",
    ],
    approach: [
      "Start with a phone call or consultation request describing the property and the visible concern.",
      "Review access, nearby structures, utility concerns, tree condition, and the amount of material involved.",
      "Discuss the recommended scope, pricing, and what cleanup is included before work is scheduled.",
      "Complete the agreed removal and cleanup with the surrounding property in mind.",
    ],
    considerations: [
      "Tree size, location, access, surrounding structures, and equipment needs can affect the scope.",
      "A photo or description can help explain the concern, but final recommendations may require an onsite evaluation.",
      "For an actively falling tree, electrical hazard, or immediate life-safety concern, stay clear of the area and contact the appropriate emergency or utility provider when necessary.",
    ],
    related: [
      { label: "Emergency Tree Service", href: "/emergency-tree-service" },
      { label: "Dangerous Branch Removal", href: "/dangerous-branch-removal" },
      { label: "Storm Cleanup", href: "/storm-cleanup" },
      { label: "Stump Grinding", href: "/stump-grinding" },
    ],
  },
  "emergency-tree-service": {
    slug: "emergency-tree-service",
    serviceName: "Emergency Tree Service",
    title: "Emergency Tree Service in Houston and Southeast Texas",
    description:
      "Emergency tree service for fallen trees, hanging limbs, blocked access, and urgent storm damage in Houston and Southeast Texas.",
    intro:
      "Storms and sudden tree failures can leave hanging limbs, blocked driveways, damaged trees, and other conditions that need prompt attention. For urgent or dangerous conditions, call Bukowski Tree Company directly rather than relying only on the online form.",
    situations: [
      "A tree or large limb has fallen across a driveway, entrance, fence, or structure.",
      "A broken limb is hanging over a roof, vehicle, walkway, or frequently used area.",
      "A storm has created fresh breaks or visibly unstable sections.",
      "Tree damage is preventing normal access to the property.",
      "A condition appears to be changing, shifting, or actively unstable.",
    ],
    approach: [
      "Call and describe what happened, where the damage is located, and whether access or a structure is affected.",
      "Stay clear of unstable trees and hanging material while the condition is evaluated.",
      "Review the immediate work needed to make the agreed area manageable and the cleanup included in the scope.",
      "Discuss any additional nonurgent trimming, removal, or stump work separately when appropriate.",
    ],
    considerations: [
      "Emergency response depends on location, current demand, property access, and the nature of the condition.",
      "Do not approach downed utility lines or trees contacting electrical equipment; contact the utility provider or emergency services as appropriate.",
      "Online descriptions cannot determine whether a tree is safe. When in doubt, keep people and vehicles away from the affected area.",
    ],
    related: [
      { label: "Tree Removal", href: "/tree-removal" },
      { label: "Dangerous Branch Removal", href: "/dangerous-branch-removal" },
      { label: "Storm Cleanup", href: "/storm-cleanup" },
    ],
  },
  "dangerous-branch-removal": {
    slug: "dangerous-branch-removal",
    serviceName: "Dangerous Branch Removal",
    title: "Dangerous Branch Removal in Houston and Southeast Texas",
    description:
      "Removal of broken, hanging, storm-damaged, and overhanging tree limbs near homes, driveways, fences, and access areas.",
    intro:
      "Large limbs can become a property concern when they break, hang over structures, obstruct access, or shift after severe weather. Bukowski Tree Company provides branch and limb removal based on the visible condition, location, access, and the surrounding property.",
    situations: [
      "A large limb has cracked, split, or partially detached.",
      "A branch is hanging over a roof, driveway, vehicle, fence, or walkway.",
      "Storm damage has left fresh breaks or suspended material.",
      "Branches are contacting or threatening a structure.",
      "Overgrowth is limiting access or creating a recurring property concern.",
    ],
    approach: [
      "Describe the branch location, approximate size, and what is below or around it.",
      "Evaluate access, the surrounding tree, nearby structures, and the requested removal area.",
      "Confirm whether the scope is limited to branch removal or whether additional trimming or tree removal should be discussed.",
      "Review cleanup expectations before scheduling the work.",
    ],
    considerations: [
      "A broken branch may be under tension or supported unpredictably by other limbs.",
      "Keep people, pets, and vehicles away from hanging or recently broken material.",
      "Branches near utility lines require additional caution and may require coordination with the utility provider.",
    ],
    related: [
      { label: "Tree Trimming", href: "/tree-trimming" },
      { label: "Emergency Tree Service", href: "/emergency-tree-service" },
      { label: "Tree Removal", href: "/tree-removal" },
    ],
  },
  "tree-trimming": {
    slug: "tree-trimming",
    serviceName: "Tree Trimming and Pruning",
    title: "Tree Trimming in Houston and Southeast Texas",
    description:
      "Tree trimming and pruning for clearance, overgrowth, damaged limbs, and property-management needs in Houston and Southeast Texas.",
    intro:
      "Tree trimming can address unwanted growth, improve clearance around structures and access areas, and remove selected damaged or problematic limbs. The appropriate scope depends on the tree, the reason for trimming, surrounding property features, and safe access to the work area.",
    situations: [
      "Branches are touching or overhanging a roof, fence, driveway, or structure.",
      "Growth is interfering with access, visibility, or normal use of the property.",
      "Selected limbs are broken, dead-looking, or damaged after weather events.",
      "A property owner wants routine or corrective trimming discussed before growth becomes a larger concern.",
      "Clearance is needed around buildings or commonly used areas.",
    ],
    approach: [
      "Identify the areas where clearance, damaged-limb removal, or growth management is needed.",
      "Review the tree and surrounding property before defining the trimming scope.",
      "Explain the recommended work and pricing before scheduling.",
      "Complete the agreed trimming and cleanup while avoiding unnecessary work outside the approved scope.",
    ],
    considerations: [
      "Not every overhanging branch requires removal, and the appropriate cut depends on the tree and objective.",
      "Trimming near roofs, structures, or utility lines may require additional planning.",
      "If a tree appears broadly unstable rather than simply overgrown, a removal or safety evaluation may be more appropriate.",
    ],
    related: [
      { label: "Dangerous Branch Removal", href: "/dangerous-branch-removal" },
      { label: "Tree Removal", href: "/tree-removal" },
      { label: "Storm Cleanup", href: "/storm-cleanup" },
    ],
  },
  "storm-cleanup": {
    slug: "storm-cleanup",
    serviceName: "Storm Cleanup",
    title: "Storm-Damage Tree Cleanup in Houston and Southeast Texas",
    description:
      "Tree and branch cleanup after storms, including damaged trees, broken limbs, brush, and debris within the agreed service scope.",
    intro:
      "Severe weather can leave a property with broken branches, fallen trees, scattered brush, and damaged sections that are difficult to assess from the ground. Bukowski Tree Company helps property owners address tree-related storm debris and determine which damaged material should be handled first.",
    situations: [
      "A storm has dropped branches or trees across the yard or access areas.",
      "Broken limbs remain attached or suspended in the canopy.",
      "Tree debris is affecting driveways, fences, roofs, or normal property use.",
      "Multiple trees or areas of the property need cleanup after severe weather.",
      "A property owner needs help separating urgent tree work from nonurgent cleanup.",
    ],
    approach: [
      "Start with the areas affecting safety, access, structures, or active property use.",
      "Review fallen material, damaged trees, hanging limbs, and access conditions.",
      "Define the cleanup and removal scope before work begins.",
      "Address additional trimming, stump grinding, or future tree work separately when it is outside the immediate cleanup scope.",
    ],
    considerations: [
      "Storm-damaged trees can continue to shift after the weather has passed.",
      "Stay away from downed lines, leaning utility poles, and trees contacting electrical equipment.",
      "Photographing damage from a safe location can be useful for your records, but do not enter an unstable area to obtain photos.",
    ],
    related: [
      { label: "Emergency Tree Service", href: "/emergency-tree-service" },
      { label: "Tree Removal", href: "/tree-removal" },
      { label: "Dangerous Branch Removal", href: "/dangerous-branch-removal" },
    ],
  },
  "stump-grinding": {
    slug: "stump-grinding",
    serviceName: "Stump Grinding",
    title: "Stump Grinding in Houston and Southeast Texas",
    description:
      "Stump grinding for remaining tree stumps that interfere with property use, appearance, mowing, access, or future plans.",
    intro:
      "After a tree is removed, the remaining stump may interfere with mowing, landscaping, access, or future use of the area. Stump grinding can reduce the visible stump below the surrounding grade, with the exact scope depending on stump size, location, access, and nearby obstacles.",
    situations: [
      "A stump remains after a recent or previous tree removal.",
      "The stump interferes with mowing, walking, landscaping, or property use.",
      "A property owner wants to prepare the area for future landscaping or cleanup.",
      "Exposed stump material is creating an unwanted obstacle in a frequently used area.",
    ],
    approach: [
      "Provide the property location and information about the stump size and surrounding area.",
      "Review machine access, nearby structures, visible utilities, roots, and other obstacles.",
      "Confirm the grinding depth, debris expectations, and scope before scheduling.",
      "Discuss tree removal separately when a standing tree still needs to be addressed.",
    ],
    considerations: [
      "Stump grinding is different from complete root-system removal.",
      "Access width, fences, slopes, landscaping, and underground utilities can affect the work area.",
      "The intended use of the area after grinding should be discussed before the scope is finalized.",
    ],
    related: [
      { label: "Tree Removal", href: "/tree-removal" },
      { label: "Storm Cleanup", href: "/storm-cleanup" },
    ],
  },
} as const satisfies Record<string, ServicePageData>;

export function pageHead(path: string, title: string, description: string, serviceName?: string) {
  const url = absoluteUrl(path);
  const image = absoluteUrl(SITE.socialImagePath);
  const scripts = serviceName
    ? [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: serviceName,
            description,
            url,
            areaServed: SITE.region,
            provider: {
              "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
              name: SITE.businessName,
              url: SITE.url,
              telephone: SITE.phoneE164,
            },
          }),
        },
      ]
    : undefined;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE.businessName },
      { property: "og:image", content: image },
      { property: "og:image:alt", content: SITE.socialImageAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts,
  };
}
