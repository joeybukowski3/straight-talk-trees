import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useEffect, type ReactNode } from "react";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { SkipLink } from "@/components/site/SkipLink";
import { SITE } from "@/lib/site-config";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <>
      <SkipLink />
      <Header />
      <main
        id="main-content"
        className="flex min-h-[70vh] items-center bg-[color:var(--cream)] px-4 py-16 text-[color:var(--foreground)]"
      >
        <div className="mx-auto w-full max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--forest)]">
            Page not found
          </p>
          <h1 className="mt-3 font-display text-5xl font-semibold tracking-tight text-[color:var(--forest)] sm:text-6xl">
            404
          </h1>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-[color:var(--foreground)]/75">
            The page may have moved or the address may be incorrect. Use one of the links below or
            call {SITE.businessName} if you need help with a tree-service request.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="inline-flex min-h-12 items-center rounded-md bg-[color:var(--forest)] px-5 py-3 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)] focus-visible:ring-offset-2"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="inline-flex min-h-12 items-center rounded-md border border-[color:var(--forest)] px-5 py-3 text-sm font-semibold text-[color:var(--forest)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)] focus-visible:ring-offset-2"
            >
              Services
            </Link>
            <Link
              to="/service-areas"
              className="inline-flex min-h-12 items-center rounded-md border border-[color:var(--forest)] px-5 py-3 text-sm font-semibold text-[color:var(--forest)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)] focus-visible:ring-offset-2"
            >
              Service Areas
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center rounded-md border border-[color:var(--forest)] px-5 py-3 text-sm font-semibold text-[color:var(--forest)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)] focus-visible:ring-offset-2"
            >
              Contact
            </Link>
          </div>
          <p className="mt-7 text-sm">
            Prefer to call?{" "}
            <a className="font-semibold text-[color:var(--forest)] underline" href={SITE.phoneHref}>
              {SITE.phoneDisplay}
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    if (import.meta.env.DEV) {
      console.error("[app] Root error boundary", { name: error.name });
    }
  }, [error.name]);

  function retry() {
    router.invalidate();
    reset();
  }

  return (
    <>
      <SkipLink />
      <Header />
      <main
        id="main-content"
        className="flex min-h-[70vh] items-center bg-[color:var(--cream)] px-4 py-16 text-[color:var(--foreground)]"
      >
        <div className="mx-auto w-full max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--forest)]">
            Website error
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-[color:var(--forest)] sm:text-5xl">
            This page did not load correctly
          </h1>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-[color:var(--foreground)]/75">
            Try loading the page again or return to the homepage. If you need to discuss a tree or
            property concern, you can also call the company directly.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={retry}
              className="inline-flex min-h-12 items-center rounded-md bg-[color:var(--forest)] px-5 py-3 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)] focus-visible:ring-offset-2"
            >
              Try again
            </button>
            <Link
              to="/"
              className="inline-flex min-h-12 items-center rounded-md border border-[color:var(--forest)] px-5 py-3 text-sm font-semibold text-[color:var(--forest)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)] focus-visible:ring-offset-2"
            >
              Go home
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex min-h-12 items-center rounded-md border border-[color:var(--forest)] px-5 py-3 text-sm font-semibold text-[color:var(--forest)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)] focus-visible:ring-offset-2"
            >
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: SITE.businessName },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-B3FP94XWK3",
      },
      {
        children: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-B3FP94XWK3');
        `,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
