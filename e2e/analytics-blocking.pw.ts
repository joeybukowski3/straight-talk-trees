import { expect, test } from "./fixtures";

const analyticsUrls = [
  "https://google-analytics.com/collect",
  "https://www.google-analytics.com/g/collect",
  "https://googletagmanager.com/gtm.js?id=GTM-TEST",
  "https://www.googletagmanager.com/gtm.js?id=GTM-TEST",
];

test("aborts Google Analytics and Google Tag Manager requests", async ({
  blockedAnalyticsRequests,
  page,
}) => {
  const failedRequests: string[] = [];
  page.on("requestfailed", (request) => failedRequests.push(request.url()));

  const fetchResults = await page.evaluate(
    async (urls) =>
      Promise.all(
        urls.map(async (url) => {
          try {
            await fetch(url, { mode: "no-cors" });
            return "completed";
          } catch {
            return "failed";
          }
        }),
      ),
    analyticsUrls,
  );

  await expect.poll(() => blockedAnalyticsRequests).toEqual(analyticsUrls);
  expect(fetchResults).toEqual(analyticsUrls.map(() => "failed"));
  expect(failedRequests).toEqual(expect.arrayContaining(analyticsUrls));
});
