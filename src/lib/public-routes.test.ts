import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
// @ts-expect-error The sitemap source is intentionally plain JavaScript.
import { PRODUCTION_URL, PUBLIC_ROUTES } from "../../scripts/public-routes.js";

const EXPECTED_PUBLIC_ROUTES = [
  "/",
  "/services",
  "/about",
  "/tree-removal",
  "/fallen-tree-removal",
  "/emergency-tree-service",
  "/dangerous-branch-removal",
  "/tree-trimming",
  "/storm-cleanup",
  "/stump-grinding",
  "/commercial-tree-service",
  "/land-clearing",
  "/service-areas",
  "/contact",
  "/privacy",
  "/terms",
];

describe("public route inventory", () => {
  it("contains the complete indexable route set without city pages", () => {
    expect(PRODUCTION_URL).toBe("https://bukowskitrees.com");
    expect(PUBLIC_ROUTES).toEqual(EXPECTED_PUBLIC_ROUTES);
    expect(new Set(PUBLIC_ROUTES).size).toBe(PUBLIC_ROUTES.length);
    expect(PUBLIC_ROUTES.some((path: string) => path.startsWith("/tree-service-"))).toBe(false);
  });

  it("keeps the generated sitemap synchronized with the route source", async () => {
    const sitemap = await readFile(new URL("../../public/sitemap.xml", import.meta.url), "utf8");
    const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
    const expectedUrls = PUBLIC_ROUTES.map((path: string) =>
      new URL(path, PRODUCTION_URL).toString(),
    );

    expect(sitemapUrls).toEqual(expectedUrls);
    expect(sitemap).not.toContain("bukowskitree.com");
  });
});
