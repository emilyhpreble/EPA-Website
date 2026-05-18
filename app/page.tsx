import Image from "next/image";
import { CalendlyButton } from "@/components/CalendlyButton";
import { JsonLd } from "@/components/JsonLd";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { pillars, testimonials, site } from "@/lib/site";

export default function Home() {
  const reviewSchemas = testimonials.map((t) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@id": `${site.url}/#business` },
    reviewBody: t.quote,
    author: { "@type": "Person", name: t.author },
    publisher: { "@type": "Organization", name: t.org },
  }));

  return (
    <>
      <JsonLd data={reviewSchemas} />

      {/* HERO — coral left + photo right on dark forest */}
      <section className="bg-plum">
        <div className="grid md:grid-cols-2">
          <div className="bg-coral px-10 py-24 md:px-20 md:py-32 text-cream">
            <h1 className="display-headline text-6xl leading-[1.05] md:text-7xl lg:text-8xl">
              <em className="not-italic-no italic">Energizing</em>
              <br />
              <span className="not-italic">Your Cause.</span>
              <br />
              <span className="block mt-6">
                <em className="italic">Elevating</em>
                <br />
                <span className="not-italic">Your Impact.</span>
              </span>
            </h1>
            <p className="mt-10 max-w-md text-lg text-cream">
              Helping nonprofits <strong className="font-semibold">raise more</strong> through charisma, strategy, and heart.
            </p>
            <div className="mt-10">
              <CalendlyButton variant="cream">Let&apos;s Tell Your Story</CalendlyButton>
            </div>
          </div>

          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[700px] bg-forest">
            <Image
              src="/images/emily-headshot.jpg"
              alt="Emily Preble, Certified Benefit Auctioneer Specialist"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* STORYTELLING — mic photo left + headline & 4 pillars right, on plum bg */}
      <section className="bg-plum text-cream" aria-labelledby="story-heading">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[1000px] bg-forest">
            <Image
              src="/images/emily-mic.jpg"
              alt="Emily Preble speaking at a benefit auction"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="px-10 py-24 md:px-20 md:py-32">
            <h2 id="story-heading" className="display-headline text-5xl text-cream md:text-6xl">
              <span className="not-italic">Storytelling that drives </span>
              <em className="italic">generosity.</em>
            </h2>

            <div className="mt-16 space-y-12">
              {pillars.map((p) => (
                <article key={p.tag}>
                  <p className="font-serif text-lg not-italic text-cream">{p.tag}</p>
                  <p className="display-headline mt-1 text-2xl text-coral">{p.title}</p>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/95">{p.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — olive left + cream right */}
      <section className="bg-olive" aria-labelledby="testimonials-heading">
        <div className="grid md:grid-cols-2">
          <div className="px-10 py-20 md:px-20 md:py-28">
            <h2 id="testimonials-heading" className="display-headline text-5xl text-plum md:text-6xl">
              Testimonials
            </h2>
            <p className="mt-8 max-w-md text-lg text-plum/85">
              Great partnerships start with shared purpose; when your auctioneer cares as much about your cause as you do, good things are bound to happen!
            </p>
          </div>

          <div className="bg-cream px-10 py-20 md:px-16 md:py-28">
            <TestimonialSlider items={[...testimonials]} />
          </div>
        </div>
      </section>
    </>
  );
}
