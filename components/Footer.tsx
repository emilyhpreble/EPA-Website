import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-plum text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-8 py-16 md:grid-cols-3">
        <div>
          <p className="font-serif text-3xl">
            <span style={{ fontStyle: "normal" }}>Emily Preble </span>
            <span style={{ fontStyle: "italic" }}>Auctions</span>
          </p>
          <p className="mt-4 text-sm text-cream/70">Benefit Auctioneer + Consultant</p>
          <p className="mt-2 text-sm text-cream/70">{site.license}</p>
          <address className="not-italic mt-2 text-sm text-cream/70">
            {site.city}, {site.region}
          </address>
        </div>

        <nav aria-label="Footer">
          <p className="text-xs uppercase tracking-[0.25em] text-coral">Site</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/contact" className="hover:text-coral">Contact</Link></li>
            <li>
              <a href={site.calendly} target="_blank" rel="noopener" className="hover:text-coral">
                Book a Strategy Call
              </a>
            </li>
            <li><Link href="/accessibility" className="hover:text-coral">Accessibility Statement</Link></li>
          </ul>
        </nav>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-coral">Connect</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={site.socials.instagram} target="_blank" rel="noopener" className="hover:text-coral">
                Instagram
              </a>
            </li>
            <li>
              <a href={site.socials.linkedin} target="_blank" rel="noopener" className="hover:text-coral">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <p className="mx-auto max-w-7xl px-8 py-6 text-xs uppercase tracking-[0.25em] text-cream/60">
          © {site.copyrightYear} by {site.legalName.toUpperCase()}
        </p>
      </div>
    </footer>
  );
}
