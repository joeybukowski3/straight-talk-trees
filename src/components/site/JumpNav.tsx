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
      <div className="mx-auto flex max-w-[1200px] gap-2 overflow-x-auto px-4 py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {JUMP_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="inline-flex min-h-9 shrink-0 items-center rounded-full border border-[color:var(--border)] px-4 py-1.5 text-sm font-medium text-[color:var(--forest)] hover:border-[color:var(--forest)] hover:bg-[color:var(--sage)]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)]"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
