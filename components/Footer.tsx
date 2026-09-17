import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="bg-olive">
        <div className="mx-auto grid max-w-7xl gap-10 px-10 py-20 md:grid-cols-3 md:py-24">
          <div>
            <Link href="https://www.emilyprebleauctions.com/" className="font-serif text-4xl text-plum md:text-5xl" aria-label={`${site.name} — home`}>
              <span style={{ fontStyle: "normal" }}>Emily Preble </span>
              <span style={{ fontStyle: "italic" }}>Auctions</span>
            </Link>
          </div>

          <div>
            <ul className="space-y-3 text-sm uppercase tracking-normal text-plum">
              <li>
                <a href={site.calendly} target="_blank" rel="noopener" className="hover:text-coral">
                  Book a Free<br />Strategy Call
                </a>
              </li>
              <li className="pt-4">
                <Link href="https://www.emilyprebleauctions.com/contact" className="hover:text-coral">Contact Me</Link>
              </li>
            </ul>

            <ul className="mt-8 flex gap-4" aria-label="Social">
              <li>
                <a href={site.socials.instagram} target="_blank" rel="noopener" aria-label="Instagram" className="text-plum hover:text-coral">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden>
                    <path d="M12 2c2.7 0 3 0 4.1.1 1.1 0 1.8.2 2.4.4.7.3 1.3.6 1.8 1.2.6.6.9 1.1 1.2 1.8.2.6.4 1.3.4 2.4C22 9 22 9.3 22 12s0 3-.1 4.1c0 1.1-.2 1.8-.4 2.4-.3.7-.6 1.3-1.2 1.8-.6.6-1.1.9-1.8 1.2-.6.2-1.3.4-2.4.4C15 22 14.7 22 12 22s-3 0-4.1-.1c-1.1 0-1.8-.2-2.4-.4-.7-.3-1.3-.6-1.8-1.2-.6-.6-.9-1.1-1.2-1.8-.2-.6-.4-1.3-.4-2.4C2 15 2 14.7 2 12s0-3 .1-4.1c0-1.1.2-1.8.4-2.4.3-.7.6-1.3 1.2-1.8.6-.6 1.1-.9 1.8-1.2.6-.2 1.3-.4 2.4-.4C9 2 9.3 2 12 2zm0 1.8c-2.7 0-3 0-4 .1-1 0-1.5.2-1.9.3-.5.2-.8.4-1.2.8-.4.4-.6.7-.8 1.2-.1.4-.3.9-.3 1.9 0 1 0 1.3 0 4s0 3 .1 4c0 1 .2 1.5.3 1.9.2.5.4.8.8 1.2.4.4.7.6 1.2.8.4.1.9.3 1.9.3 1 0 1.3 0 4 0s3 0 4-.1c1 0 1.5-.2 1.9-.3.5-.2.8-.4 1.2-.8.4-.4.6-.7.8-1.2.1-.4.3-.9.3-1.9 0-1 0-1.3 0-4s0-3-.1-4c0-1-.2-1.5-.3-1.9-.2-.5-.4-.8-.8-1.2-.4-.4-.7-.6-1.2-.8-.4-.1-.9-.3-1.9-.3-1 0-1.3-.1-4-.1zm0 3.3a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2zm5.1-2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href={site.socials.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className="text-plum hover:text-coral">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden>
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v15.5H.22V8zm7.4 0h4.37v2.12h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v8.74H17.3v-7.74c0-1.85-.03-4.23-2.58-4.23-2.58 0-2.98 2.01-2.98 4.09v7.88H7.62V8z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-3 text-sm text-plum">
              <li>
                <Link href="/accessibility" className="hover:text-coral">Accessibility Statement</Link>
              </li>
              <li>{site.license}</li>
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Image
                src="/images/naa-logo.png"
                alt="National Auctioneers Association"
                width={120}
                height={48}
                className="h-12 w-auto"
              />
              <Image
                src="/images/bas-logo.png"
                alt="Benefit Auction Specialist"
                width={120}
                height={48}
                className="h-12 w-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-plum">
        <p className="mx-auto max-w-7xl px-10 py-6 text-xs uppercase tracking-normal text-cream/80">
          © {site.copyrightYear} by {site.legalName.toUpperCase()}
        </p>
      </div>
    </footer>
  );
}
