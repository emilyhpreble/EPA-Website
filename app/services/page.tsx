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

      <section className="bg-coral py-24 text-cream">
        <div className="mx-auto max-w-4xl px-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-cream/80">Services</p>
          <h1 className="display-headline mt-6 text-6xl md:text-7xl">Support that Goes Beyond the Stage</h1>
          <p className="mt-8 text-lg leading-relaxed text-cream/95">
            Your event deserves more than just a microphone moment. From messaging to momentum, I partner with you across the full scope of your event to build clarity, connection, and generosity from start to finish. Whether you&apos;re looking for a high-energy auctioneer, strategic storytelling support, or someone to help craft the perfect run-of-show, I&apos;m here to make your mission unforgettable.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-8">
          <ul className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.slug} className="border-t border-plum/20 pt-6">
                <h2 className="display-headline text-2xl text-plum md:text-3xl">{s.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-ink/85">{s.blurb}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-plum py-24 text-cream">
        <div className="mx-auto grid max-w-5xl gap-12 px-8 md:grid-cols-[1fr_2fr] md:items-center">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/folds-of-honor.jpg"
              alt="Folds of Honor fundraising event"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <blockquote>
            <p className="display-headline text-3xl leading-tight md:text-4xl">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <footer className="mt-6 text-xs uppercase tracking-[0.3em] text-coral">
              — {testimonial.author}, {testimonial.org}
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="bg-cream py-24" id="contact">
        <div className="mx-auto grid max-w-5xl gap-12 px-8 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-coral">Get in touch</p>
            <h2 className="display-headline mt-4 text-4xl text-plum md:text-5xl">Email me & start telling your story.</h2>
            <p className="mt-6 text-ink/85">Prefer to talk live? Book a free strategy call.</p>
            <div className="mt-8">
              <CalendlyButton variant="plum" />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
