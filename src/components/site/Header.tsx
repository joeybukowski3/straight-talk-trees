import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { TreeMark } from "./TreeMark";
import { SITE } from "@/lib/site-config";
import { trackConversion } from "@/lib/analytics";

const NAV = [
  { href: "/#services", label: "Services" },
  { href: "/#why", label: "Why Bukowski" },
  { href: "/#emergency", label: "Emergency Service" },
  { href: "/#service-area", label: "Service Area" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--border)] bg-[color:var(--cream)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)] focus-visible:ring-offset-2" aria-label={`${SITE.businessName} home`}>
          <TreeMark className="h-7 w-7 text-[color:var(--forest)]" />
          <span className="font-display text-base font-semibold tracking-tight text-[color:var(--forest)] sm:text-lg">{SITE.businessName}</span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {NAV.map((item) => <a key={item.href} href={item.href} className="rounded-sm text-sm hover:text-[color:var(--forest)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)]">{item.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={SITE.phoneHref} onClick={() => trackConversion("phone_header_click")} className="inline-flex items-center gap-2 rounded-md bg-[color:var(--amber-cta)] px-3 py-2 text-sm font-semibold text-[color:var(--amber-cta-foreground)] shadow-sm hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)] focus-visible:ring-offset-2 sm:px-4">
            <Phone className="h-4 w-4" aria-hidden />
            <span className="hidden sm:inline">Call {SITE.phoneDisplay}</span><span className="sm:hidden">Call</span>
          </a>
          <button type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)} className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[color:var(--border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)] lg:hidden">
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </div>
      {open && <nav id="mobile-navigation" aria-label="Mobile" className="border-t border-[color:var(--border)] bg-[color:var(--cream)] lg:hidden"><ul className="mx-auto max-w-[1200px] px-4 py-2">{NAV.map((item) => <li key={item.href}><a href={item.href} onClick={() => setOpen(false)} className="block rounded-sm py-3 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)]">{item.label}</a></li>)}</ul></nav>}
    </header>
  );
}
