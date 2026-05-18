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

      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:py-32">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-forest">Benefit Auctioneer + Consultant</p>
            <h1 className="mt-6 font-serif text-6xl text-plum md:text-7xl">
              Energizing<br />Your Cause.<br />
              <span className="text-forest">Elevating Your Impact.</span>
            </h1>
            <p className="mt-8 max-w-md text-lg text-ink/80">
              Helping nonprofits raise more through charisma, strategy, and heart.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <CalendlyButton>Let&apos;s Tell Your Story</CalendlyButton>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-plum px-8 py-4 text-xs uppercase tracking-[0.2em] text-plum hover:bg-plum hover:text-cream"
              >
                Explore Services
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
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

      <section className="bg-cream-light py-24" aria-labelledby="story-heading">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-forest">Mission</p>
          <h2 id="story-heading" className="mt-4 font-serif text-5xl text-plum">
            Storytelling that drives generosity.
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-12 px-6 md:grid-cols-3">
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

      <section className="bg-cream py-24" aria-labelledby="services-heading">
        <div className="mx-auto max-w-6xl px-6">
          <div className="md:flex md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-forest">Services</p>
              <h2 id="services-heading" className="mt-4 max-w-2xl font-serif text-5xl text-plum">
                Support that goes beyond the stage.
              </h2>
            </div>
            <Link
              href="/services"
              className="mt-6 inline-block text-xs uppercase tracking-[0.2em] text-forest hover:text-plum md:mt-0"
            >
              See all services →
            </Link>
          </div>

          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug} className="rounded-lg border border-plum/10 bg-cream-light p-8">
                <h3 className="font-serif text-2xl text-plum">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/80">{s.blurb}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-forest py-24 text-cream" aria-labelledby="testimonial-heading">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 id="testimonial-heading" className="sr-only">Testimonial</h2>
          <blockquote>
            <p className="font-serif text-3xl leading-tight md:text-4xl">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <footer className="mt-6 text-xs uppercase tracking-[0.3em] text-cream/80">
              — {testimonial.author}, {testimonial.org}
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-5xl text-plum">Ready to raise more?</h2>
          <p className="mt-6 text-lg text-ink/80">
            Book a free strategy call and let&apos;s work together to elevate your impact.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CalendlyButton />
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-plum px-8 py-4 text-xs uppercase tracking-[0.2em] text-plum hover:bg-plum hover:text-cream"
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
      <p className="text-xs uppercase tracking-[0.3em] text-forest">{tag}</p>
      <h3 className="mt-3 font-serif text-2xl text-plum">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-ink/80">{body}</p>
    </article>
  );
}
