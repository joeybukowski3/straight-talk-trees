const JUMP_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#when-to-call", label: "When to Call" },
  { href: "#why", label: "Why Bukowski" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

export function JumpNav() {
  return (
    <nav aria-label="Jump to section" className="border-b border-[color:var(--border)] bg-white">
      <div className="section-shell flex items-center gap-1 overflow-x-auto py-2.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {JUMP_LINKS.map((link, index) => (
          <span key={link.href} className="inline-flex shrink-0 items-center">
            {index > 0 && (
              <span className="mx-1 text-[color:var(--border)]" aria-hidden>
                |
              </span>
            )}
            <a
              href={link.href}
              className="inline-flex min-h-9 items-center px-2.5 py-1.5 text-sm font-medium text-[color:var(--forest)] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)]"
            >
              {link.label}
            </a>
          </span>
        ))}
      </div>
    </nav>
  );
}
