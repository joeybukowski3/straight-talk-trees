import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site-config";
import { trackConversion } from "@/lib/analytics";

export function Footer() {
  return (
    <footer className="bg-[color:var(--charcoal)] text-[color:var(--cream)]/85">
      <div className="section-shell py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              to="/"
              className="rounded-sm font-display text-lg font-semibold text-[color:var(--cream)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--amber-cta)]"
            >
              {SITE.businessName}
            </Link>
            <p className="mt-2 text-sm">Owner: {SITE.ownerName}</p>
            <p className="mt-1 text-sm">
              Phone:{" "}
              <a
                href={SITE.phoneHref}
                onClick={() => trackConversion("phone_footer_click")}
                className="rounded-sm underline hover:text-[color:var(--amber-cta)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--amber-cta)]"
              >
                {SITE.phoneDisplay}
              </a>
            </p>
            <p className="mt-1 text-sm">Serving {SITE.region}</p>
          </div>

          <nav aria-label="Footer services">
            <h2 className="text-sm font-semibold text-[color:var(--cream)]">Services</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link to="/services" className="hover:text-[color:var(--amber-cta)]">
                  All Tree Services
                </Link>
              </li>
              <li>
                <Link to="/tree-removal" className="hover:text-[color:var(--amber-cta)]">
                  Tree Removal
                </Link>
              </li>
              <li>
                <Link to="/emergency-tree-service" className="hover:text-[color:var(--amber-cta)]">
                  Emergency Tree Service
                </Link>
              </li>
              <li>
                <Link
                  to="/dangerous-branch-removal"
                  className="hover:text-[color:var(--amber-cta)]"
                >
                  Dangerous Branch Removal
                </Link>
              </li>
              <li>
                <Link to="/tree-trimming" className="hover:text-[color:var(--amber-cta)]">
                  Tree Trimming
                </Link>
              </li>
              <li>
                <Link to="/storm-cleanup" className="hover:text-[color:var(--amber-cta)]">
                  Storm Cleanup
                </Link>
              </li>
              <li>
                <Link to="/stump-grinding" className="hover:text-[color:var(--amber-cta)]">
                  Stump Grinding
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold text-[color:var(--cream)]">Company</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Insured</li>
              <li>Free consultations</li>
              <li>Emergency call availability</li>
            </ul>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-sm font-semibold text-[color:var(--cream)]">Explore</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-[color:var(--amber-cta)]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[color:var(--amber-cta)]">
                  About
                </Link>
              </li>
              <li>
                <Link to="/service-areas" className="hover:text-[color:var(--amber-cta)]">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[color:var(--amber-cta)]">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-[color:var(--amber-cta)]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[color:var(--amber-cta)]">
                  Terms
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-[color:var(--cream)]/60 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} {SITE.businessName}. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-[color:var(--amber-cta)]">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[color:var(--amber-cta)]">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
