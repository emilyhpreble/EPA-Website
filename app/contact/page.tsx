import type { Metadata } from "next";
import { CalendlyButton } from "@/components/CalendlyButton";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Emily Preble Auctions — book a free strategy call, send a message, or connect on social. Austin, TX-based benefit auctioneer serving events nationwide.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact", title: "Contact" },
};

export default function Contact() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${site.url}/contact`,
    about: { "@id": `${site.url}/#business` },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${site.url}/contact` },
    ],
  };

  return (
    <>
      <JsonLd data={[contactSchema, breadcrumb]} />

      <section className="bg-coral py-24 text-cream">
        <div className="mx-auto max-w-3xl px-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-cream/80">Contact</p>
          <h1 className="display-headline mt-6 text-6xl md:text-7xl">Let&apos;s tell your story.</h1>
          <p className="mt-6 text-lg text-cream/95">
            Send a message, book a free strategy call, or find Emily on Instagram and LinkedIn.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto grid max-w-5xl gap-12 px-8 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="display-headline text-3xl text-plum md:text-4xl">Book a free strategy call</h2>
            <p className="mt-4 text-ink/85">
              The fastest way to get on Emily&apos;s calendar. Pick a time that works for you.
            </p>
            <div className="mt-6">
              <CalendlyButton variant="plum" />
            </div>

            <div className="mt-12">
              <h3 className="display-headline text-2xl text-plum">Or find Emily online</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href={site.socials.instagram} target="_blank" rel="noopener" className="text-plum hover:text-coral">
                    Instagram → @emilyprebleauctions
                  </a>
                </li>
                <li>
                  <a href={site.socials.linkedin} target="_blank" rel="noopener" className="text-plum hover:text-coral">
                    LinkedIn → emilypreble
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="display-headline text-3xl text-plum md:text-4xl">Send a message</h2>
            <p className="mt-4 text-ink/85">Tell Emily a little about your event and she&apos;ll be in touch.</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
