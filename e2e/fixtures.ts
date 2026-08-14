import { test as base, expect } from "@playwright/test";

const BLOCKED_ANALYTICS_HOSTS = ["google-analytics.com", "googletagmanager.com"] as const;

export function isBlockedAnalyticsUrl(url: URL): boolean {
  const hostname = url.hostname.toLowerCase();

  return BLOCKED_ANALYTICS_HOSTS.some(
    (blockedHost) => hostname === blockedHost || hostname.endsWith(`.${blockedHost}`),
  );
}

type AnalyticsBlockingFixtures = {
  blockedAnalyticsRequests: string[];
};

export const test = base.extend<AnalyticsBlockingFixtures>({
  blockedAnalyticsRequests: [
    async ({ context }, use) => {
      const blockedRequests: string[] = [];

      await context.route(isBlockedAnalyticsUrl, async (route) => {
        blockedRequests.push(route.request().url());
        await route.abort("blockedbyclient");
      });

      await use(blockedRequests);
    },
    { auto: true },
  ],
});

export { expect };
