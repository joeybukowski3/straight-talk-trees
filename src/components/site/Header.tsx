import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Bukowski" },
  { href: "#emergency", label: "Emergency Service" },
  { href: "#service-area", label: "Service Area" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--border)] bg-[color:var(--cream)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3">
        <a href="#top" className="flex items-center gap-2">
          <TreeMark className="h-7 w-7 text-[color:var(--forest)]" />
          <span className="font-display text-base font-semibold tracking-tight text-[color:var(--forest)] sm:text-lg">
            Bukowski Tree Company
          </span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-[color:var(--foreground)] hover:text-[color:var(--forest)]">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="tel:9798248240"
            className="inline-flex items-center gap-2 rounded-md bg-[color:var(--amber-cta)] px-3 py-2 text-sm font-semibold text-[color:var(--amber-cta-foreground)] shadow-sm hover:brightness-95 sm:px-4"
          >
            <Phone className="h-4 w-4" aria-hidden />
            <span className="hidden sm:inline">Call 979-824-8240</span>
            <span className="sm:hidden">Call</span>
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[color:var(--border)] text-[color:var(--foreground)] lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-[color:var(--border)] bg-[color:var(--cream)] lg:hidden">
          <ul className="mx-auto max-w-[1200px] px-4 py-2">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setOpen(false)} className="block py-3 text-base text-[color:var(--foreground)]">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

function TreeMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path fill="currentColor" d="M16 2c4 3 7 6 7 10a7 7 0 0 1-5 6.7V22h3a1 1 0 0 1 0 2h-3v5a1 1 0 0 1-2 0v-5h-3a1 1 0 0 1 0-2h3v-3.3A7 7 0 0 1 9 12c0-4 3-7 7-10Z" />
    </svg>
  );
}