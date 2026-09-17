import type { Metadata } from "next";
import { HoneybookForm } from "@/components/HoneybookForm";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Emily Preble Auctions — send a message and Emily will reach out soon. Austin, TX-based benefit auctioneer serving events nationwide.",
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

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-10">
          <HoneybookForm />
        </div>
      </section>
    </>
  );
}
