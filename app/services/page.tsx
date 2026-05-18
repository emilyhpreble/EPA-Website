import Image from "next/image";
import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { JsonLd } from "@/components/JsonLd";
import { services, testimonials, site } from "@/lib/site";

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
      <JsonLd data={[...servicesSchema, breadcrumb]} />

      {/* SERVICES LIST — cream bg, intro left, items right */}
      <section className="bg-cream py-24">
        <div className="mx-auto grid max-w-6xl gap-16 px-10 md:grid-cols-2 md:px-12">
          <div>
            <h1 className="display-headline text-6xl text-plum md:text-7xl">
              <em className="italic">Services</em>
            </h1>
            <p className="display-headline mt-6 text-2xl text-plum italic md:text-3xl">
              Support that Goes Beyond the Stage
            </p>
            <p className="mt-8 text-base leading-relaxed text-plum">
              Your event deserves more than just a microphone moment. From messaging to momentum, I partner with you across the full scope of your event to build clarity, connection, and generosity from start to finish. Whether you&apos;re looking for a high-energy auctioneer, strategic storytelling support, or someone to help craft the perfect run-of-show, I&apos;m here to make your mission unforgettable.
            </p>
          </div>

          <ul className="space-y-10">
            {services.map((s) => (
              <li key={s.slug}>
                <h2 className="display-headline text-2xl text-coral italic md:text-3xl">{s.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-plum">{s.blurb}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TESTIMONIAL SLIDER — olive bg, centered */}
      <section className="bg-olive py-24">
        <div className="mx-auto max-w-4xl px-10 text-center">
          <TestimonialSlider items={[...testimonials]} variant="centered" />
        </div>
      </section>

      {/* CONTACT FORM — plum bg, photo left, form right */}
      <section className="bg-plum" id="contact">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[720px] bg-forest">
            <Image
              src="/images/emily-stage.png"
              alt="Emily Preble on stage at a benefit auction"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="px-10 py-20 md:px-16 md:py-24">
            <h2 className="display-headline text-4xl text-coral italic md:text-5xl">
              Email me &amp; start telling your story.
            </h2>

            <div className="mt-10">
              <ContactForm onDark />
            </div>

            <ul className="mt-10 flex gap-8 text-sm text-coral">
              <li>
                <a href={site.socials.instagram} target="_blank" rel="noopener" className="hover:text-cream">
                  Instagram
                </a>
              </li>
              <li>
                <a href={site.socials.linkedin} target="_blank" rel="noopener" className="hover:text-cream">
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
