import { absoluteUrl } from "@/lib/site-config";

type BreadcrumbItem = {
  label: string;
  href: string;
};

export function Breadcrumbs({
  items,
  inverted = false,
}: {
  items: readonly BreadcrumbItem[];
  inverted?: boolean;
}) {
  const linkClass = inverted
    ? "rounded-sm text-white/75 underline-offset-4 hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
    : "rounded-sm text-[color:var(--foreground)]/65 underline-offset-4 hover:text-[color:var(--forest)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)]";
  const currentClass = inverted ? "text-white" : "text-[color:var(--foreground)]";
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="text-sm">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {items.map((item, index) => {
            const isCurrent = index === items.length - 1;

            return (
              <li key={item.href} className="flex items-center gap-2">
                {index > 0 && (
                  <span aria-hidden className={inverted ? "text-white/45" : "text-black/35"}>
                    /
                  </span>
                )}
                {isCurrent ? (
                  <span aria-current="page" className={currentClass}>
                    {item.label}
                  </span>
                ) : (
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </>
  );
}
