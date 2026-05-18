import type { Metadata } from "next";
import Image from "next/image";
import { CalendlyButton } from "@/components/CalendlyButton";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { services, testimonial, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Live auctioneering, fund-a-need coaching, pre-event strategy, scriptwriting, emceeing, and branded materials for nonprofit fundraisers. Based in Austin, TX — serving events nationwide.",
  alternates: { canonical: "/services" },
  openGraph: { url: "/services", title: "Services" },
};

export default function Services() {
  const servicesSchema = services.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.blurb,
    provider: { "@id": `${site.url}/#business` },
    serviceType: "Fundraising / Benefit Auctioneering",
    areaServed: { "@type": "Country", name: "United States" },
  }));

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@id": `${site.url}/#business` },
    reviewBody: testimonial.quote,
    author: { "@type": "Person", name: testimonial.author },
    publisher: { "@type": "Organization", name: testimonial.org },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
    ],
  };

  return (
    <>
      <JsonLd data={[...servicesSchema, reviewSchema, breadcrumb]} />

      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-forest">Services</p>
          <h1 className="mt-6 font-serif text-6xl text-plum">Support that Goes Beyond the Stage</h1>
          <p className="mt-8 text-lg leading-relaxed text-ink/80">
            Your event deserves more than just a microphone moment. From messaging to momentum, I partner with you across the full scope of your event to build clarity, connection, and generosity from start to finish. Whether you&apos;re looking for a high-energy auctioneer, strategic storytelling support, or someone to help craft the perfect run-of-show, I&apos;m here to make your mission unforgettable.
          </p>
        </div>
      </section>

      <section className="bg-cream-light py-20">
        <div className="mx-auto max-w-6xl px-6">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.slug} className="rounded-lg border border-plum/10 bg-cream p-8">
                <h2 className="font-serif text-2xl text-plum">{s.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-ink/80">{s.blurb}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-forest py-24 text-cream">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-[1fr_2fr] md:items-center">
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
            <Image
              src="/images/folds-of-honor.jpg"
              alt="Folds of Honor fundraising event"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <blockquote>
            <p className="font-serif text-3xl leading-tight">&ldquo;{testimonial.quote}&rdquo;</p>
            <footer className="mt-6 text-xs uppercase tracking-[0.3em] text-cream/80">
              — {testimonial.author}, {testimonial.org}
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="bg-cream py-24" id="contact">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-forest">Get in touch</p>
            <h2 className="mt-4 font-serif text-4xl text-plum">Email me & start telling your story.</h2>
            <p className="mt-6 text-ink/80">Prefer to talk live? Book a free strategy call.</p>
            <div className="mt-8">
              <CalendlyButton />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
