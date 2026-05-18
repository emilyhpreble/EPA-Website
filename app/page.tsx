import Image from "next/image";
import Link from "next/link";
import { CalendlyButton } from "@/components/CalendlyButton";
import { JsonLd } from "@/components/JsonLd";
import { services, testimonial, site } from "@/lib/site";

export default function Home() {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@id": `${site.url}/#business` },
    reviewBody: testimonial.quote,
    author: { "@type": "Person", name: testimonial.author },
    publisher: { "@type": "Organization", name: testimonial.org },
  };

  return (
    <>
      <JsonLd data={reviewSchema} />

      {/* HERO: coral panel + photo */}
      <section className="bg-plum">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          <div className="bg-coral px-10 py-24 md:px-16 md:py-32">
            <h1 className="display-headline text-6xl text-cream md:text-7xl lg:text-8xl">
              Energizing<br />Your Cause.
              <br />
              <span className="block mt-8">Elevating<br />Your Impact.</span>
            </h1>
            <p className="mt-10 max-w-md text-lg text-cream/95">
              Helping nonprofits <strong className="font-semibold">raise more</strong> through charisma, strategy, and heart.
            </p>
            <div className="mt-10">
              <CalendlyButton variant="cream">Let&apos;s Tell Your Story</CalendlyButton>
            </div>
          </div>
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px] bg-cream">
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

      {/* MISSION / VALUES / PROCESS */}
      <section className="bg-cream py-24" aria-labelledby="story-heading">
        <div className="mx-auto max-w-4xl px-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-coral">Approach</p>
          <h2 id="story-heading" className="display-headline mt-6 text-5xl text-plum md:text-6xl">
            Storytelling that drives generosity.
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-12 px-8 md:grid-cols-3">
          <Pillar
            tag="Mission"
            title="Connecting your audience to your vision."
            body="Every successful fundraiser starts with a story that resonates emotionally. Through strategic storytelling and compelling delivery, we'll work to connect your supporters with the deeper purpose behind your work, transforming an event audience into active, inspired advocates."
          />
          <Pillar
            tag="Values"
            title="Inspired by the joy of giving."
            body="People give when they feel connected. I lead with authenticity, warmth, and relentless enthusiasm — because generosity grows when your audience feels emotionally invested and inspired. Your mission is the priority; I'm here to elevate it with intention and heart."
          />
          <Pillar
            tag="Process"
            title="Your message, made unforgettable."
            body="What makes an audience care deeply enough to give — and keep giving? Together, we'll uncover the most compelling thread of your mission and bring it to life with the right tone, structure, and energy for your room."
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-plum py-24 text-cream" aria-labelledby="services-heading">
        <div className="mx-auto max-w-6xl px-8">
          <div className="md:flex md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-coral">Services</p>
              <h2 id="services-heading" className="display-headline mt-6 max-w-2xl text-5xl md:text-6xl">
                Support that goes beyond the stage.
              </h2>
            </div>
            <Link
              href="/services"
              className="mt-6 inline-block text-xs uppercase tracking-[0.25em] text-coral hover:text-cream md:mt-0"
            >
              See all services →
            </Link>
          </div>

          <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug} className="border-t border-cream/20 pt-6">
                <h3 className="font-serif text-2xl text-cream" style={{ fontStyle: "italic" }}>
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/80">{s.blurb}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-coral py-24 text-cream" aria-labelledby="testimonial-heading">
        <div className="mx-auto max-w-4xl px-8 text-center">
          <h2 id="testimonial-heading" className="sr-only">Testimonial</h2>
          <blockquote>
            <p className="display-headline text-3xl leading-snug md:text-4xl lg:text-5xl">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <footer className="mt-8 text-xs uppercase tracking-[0.3em] text-cream/90">
              — {testimonial.author}, {testimonial.org}
            </footer>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-3xl px-8 text-center">
          <h2 className="display-headline text-5xl text-plum md:text-6xl">Ready to raise more?</h2>
          <p className="mt-6 text-lg text-ink/80">
            Book a free strategy call and let&apos;s work together to elevate your impact.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CalendlyButton variant="plum" />
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-plum px-10 py-4 text-xs uppercase tracking-[0.25em] text-plum hover:bg-plum hover:text-cream"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Pillar({ tag, title, body }: { tag: string; title: string; body: string }) {
  return (
    <article>
      <p className="text-xs uppercase tracking-[0.3em] text-coral">{tag}</p>
      <h3 className="display-headline mt-3 text-3xl text-plum">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-ink/80">{body}</p>
    </article>
  );
}
