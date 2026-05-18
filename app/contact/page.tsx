import type { Metadata } from "next";
import { CalendlyButton } from "@/components/CalendlyButton";
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
      <JsonLd data={breadcrumb} />

      <section className="bg-cream py-32">
        <div className="mx-auto max-w-3xl px-10 text-center">
          <h1 className="display-headline text-5xl text-plum md:text-6xl">
            <em className="italic">Let&apos;s connect.</em>
          </h1>
          <p className="mt-8 text-base leading-relaxed text-plum">
            The fastest way to reach Emily is to book a free strategy call, or send a message through the form on the Services page. You can also find her on Instagram and LinkedIn.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <CalendlyButton variant="coral">Book a Free Strategy Call</CalendlyButton>
            <a
              href="/services#contact"
              className="inline-flex items-center justify-center rounded-full border border-plum px-10 py-4 text-xs uppercase tracking-[0.25em] text-plum hover:bg-plum hover:text-cream"
            >
              Send a Message
            </a>
          </div>

          <ul className="mt-16 flex justify-center gap-8 text-sm text-coral">
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
      </section>
    </>
  );
}
