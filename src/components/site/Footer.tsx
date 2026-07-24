import { PHONE_DISPLAY, PHONE_HREF } from "./data";

export function Footer() {
  return (
    <footer className="bg-[color:var(--charcoal)] text-[color:var(--cream)]/85">
      <div className="mx-auto max-w-[1200px] px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="font-display text-lg font-semibold text-[color:var(--cream)]">Bukowski Tree Company</div>
            <p className="mt-2 text-sm">Owner: Jake Bukowski</p>
            <p className="mt-1 text-sm">
              Phone: <a href={PHONE_HREF} className="underline hover:text-[color:var(--amber-cta)]">{PHONE_DISPLAY}</a>
            </p>
            <p className="mt-1 text-sm">Serving Houston and Southeast Texas</p>
          </div>
          <div>
            <div className="text-sm font-semibold text-[color:var(--cream)]">Company</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Insured</li>
              <li>Free consultations</li>
              <li>24/7 emergency call availability</li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-[color:var(--cream)]">Explore</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#services" className="hover:text-[color:var(--amber-cta)]">Services</a></li>
              <li><a href="#why" className="hover:text-[color:var(--amber-cta)]">Why Bukowski</a></li>
              <li><a href="#emergency" className="hover:text-[color:var(--amber-cta)]">Emergency Service</a></li>
              <li><a href="#service-area" className="hover:text-[color:var(--amber-cta)]">Service Area</a></li>
              <li><a href="#about" className="hover:text-[color:var(--amber-cta)]">About</a></li>
              <li><a href="#contact" className="hover:text-[color:var(--amber-cta)]">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-[color:var(--cream)]/60 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Bukowski Tree Company. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-[color:var(--amber-cta)]">Privacy Policy</a>
            <a href="/terms" className="hover:text-[color:var(--amber-cta)]">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}