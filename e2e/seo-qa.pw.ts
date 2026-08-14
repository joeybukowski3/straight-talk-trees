import { expect, test } from "./fixtures";

const SERVICE_ROUTES = [
  ["/tree-removal", "Tree Removal"],
  ["/fallen-tree-removal", "Fallen Tree Removal"],
  ["/emergency-tree-service", "Emergency Tree Service"],
  ["/dangerous-branch-removal", "Dangerous Branch Removal"],
  ["/tree-trimming", "Tree Trimming and Pruning"],
  ["/storm-cleanup", "Storm Cleanup"],
  ["/stump-grinding", "Stump Grinding"],
  ["/commercial-tree-service", "Commercial Tree Service"],
  ["/land-clearing", "Land and Lot Clearing"],
] as const;

test("public service routes expose unique complete metadata and one schema of each type", async ({
  page,
}) => {
  const titles = new Set<string>();
  const descriptions = new Set<string>();

  for (const [path, serviceName] of SERVICE_ROUTES) {
    await page.goto(path);

    const title = await page.title();
    const description = await page.locator('meta[name="description"]').getAttribute("content");
    const schemas = await page
      .locator('script[type="application/ld+json"]')
      .allTextContents()
      .then((values) => values.map((value) => JSON.parse(value)));

    expect(title).toBeTruthy();
    expect(description).toBeTruthy();
    expect(titles.has(title)).toBe(false);
    expect(descriptions.has(description!)).toBe(false);
    titles.add(title);
    descriptions.add(description!);

    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      `https://bukowskitree.com${path}`,
    );
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", "index, follow");
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
      "content",
      `https://bukowskitree.com${path}`,
    );
    await expect(page.locator('meta[name="twitter:title"]')).toHaveCount(1);
    await expect(page.locator('meta[name="twitter:description"]')).toHaveCount(1);
    await expect(page.locator('meta[name="twitter:image"]')).toHaveCount(1);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.getByRole("navigation", { name: "Breadcrumb" })).toBeVisible();

    expect(schemas.filter((schema) => schema["@type"] === "Service")).toHaveLength(1);
    expect(schemas.filter((schema) => schema["@type"] === "BreadcrumbList")).toHaveLength(1);
    expect(schemas.find((schema) => schema["@type"] === "Service")).toMatchObject({
      name: serviceName,
      url: `https://bukowskitree.com${path}`,
    });
    expect(await page.content()).not.toContain("bukowskitrees.com");
  }
});

test("homepage and services hub use the dedicated expansion-page destinations", async ({
  page,
}) => {
  const destinations = [
    ["Fallen Tree Removal", "/fallen-tree-removal"],
    ["Commercial Tree Service", "/commercial-tree-service"],
    ["Land and Lot Clearing", "/land-clearing"],
  ] as const;

  for (const pagePath of ["/", "/services"]) {
    await page.goto(pagePath);

    for (const [name, href] of destinations) {
      await expect(
        page.locator(`a[href="${href}"]`).filter({ hasText: name }).first(),
      ).toHaveAttribute("href", href);
    }
  }
});
