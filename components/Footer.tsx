import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-plum/10 bg-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-plum">{site.name}</p>
          <p className="mt-3 text-sm text-muted">Benefit Auctioneer + Consultant</p>
          <p className="mt-2 text-sm text-muted">{site.license}</p>
          <address className="not-italic mt-2 text-sm text-muted">
            {site.city}, {site.region}
          </address>
        </div>

        <nav aria-label="Footer">
          <p className="text-xs uppercase tracking-[0.2em] text-forest">Site</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/contact" className="hover:text-plum">Contact</Link></li>
            <li>
              <a href={site.calendly} target="_blank" rel="noopener" className="hover:text-plum">
                Book a Strategy Call
              </a>
            </li>
            <li><Link href="/accessibility" className="hover:text-plum">Accessibility Statement</Link></li>
          </ul>
        </nav>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-forest">Connect</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={site.socials.instagram} target="_blank" rel="noopener" className="hover:text-plum">
                Instagram
              </a>
            </li>
            <li>
              <a href={site.socials.linkedin} target="_blank" rel="noopener" className="hover:text-plum">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-plum/10">
        <p className="mx-auto max-w-6xl px-6 py-6 text-xs uppercase tracking-[0.2em] text-muted">
          © {site.copyrightYear} by {site.legalName.toUpperCase()}
        </p>
      </div>
    </footer>
  );
}
