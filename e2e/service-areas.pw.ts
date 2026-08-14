import { expect, test } from "./fixtures";

test.use({ viewport: { width: 320, height: 800 } });

test("service-area search and navigation remain usable at a narrow mobile width", async ({
  page,
}) => {
  await page.goto("/service-areas");
  await page.waitForLoadState("networkidle");

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Tree Service Areas Around Houston & Southeast Texas",
    }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "Core Service Area" })).toBeVisible();
  await expect(
    page.getByRole("heading", { level: 2, name: "Extended Service Area" }),
  ).toBeVisible();

  const search = page.getByRole("searchbox", { name: "Find your city or ZIP code" });
  const cityTab = page.getByRole("tab", { name: "Cities & Towns" });
  const zipTab = page.getByRole("tab", { name: "ZIP Codes" });

  await expect(search).toBeVisible();
  await cityTab.click();
  await cityTab.press("ArrowRight");
  await expect(zipTab).toHaveAttribute("aria-selected", "true");

  await search.fill("77583");
  await expect(page.getByText(/1 ZIP code shown/)).toBeVisible();
  await expect(
    page.getByRole("table", {
      name: "ZIP codes in the selected group with communities and counties",
    }),
  ).toBeVisible();
  await expect(page.getByRole("rowheader", { name: "77583" })).toBeVisible();

  await search.clear();
  await expect(page.getByRole("group", { name: "ZIP group" })).toBeVisible();

  const serviceLinks = [
    "Tree Removal",
    "Fallen Tree Removal",
    "Emergency Tree Service",
    "Dangerous Branch Removal",
    "Storm Cleanup",
    "Tree Trimming",
    "Stump Grinding",
    "Commercial Tree Service",
    "Land and Lot Clearing",
  ];

  for (const name of serviceLinks) {
    await expect(page.getByRole("link", { name, exact: true }).first()).toBeVisible();
  }

  const layout = await page.evaluate(() => {
    const main = document.querySelector("main");
    const actionBar = document.querySelector('[aria-label="Quick contact actions"]');

    return {
      viewportWidth: document.documentElement.clientWidth,
      documentWidth: document.documentElement.scrollWidth,
      mainBottomPadding: main ? Number.parseFloat(getComputedStyle(main).paddingBottom) : 0,
      actionBarHeight: actionBar?.getBoundingClientRect().height ?? 0,
    };
  });

  expect(layout.documentWidth).toBeLessThanOrEqual(layout.viewportWidth);
  expect(layout.mainBottomPadding).toBeGreaterThanOrEqual(layout.actionBarHeight);
  await expect(page.getByRole("complementary", { name: "Quick contact actions" })).toBeVisible();
  await expect(
    page.getByRole("heading", { level: 2, name: "Send us your location" }),
  ).toBeAttached();
});
