import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CalendlyButton } from "@/components/CalendlyButton";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Emily",
  description:
    "Emily Preble is a Certified Benefit Auctioneer Specialist (BAS) in Austin, Texas. Former D-I softball captain, journalist, and brand strategist helping nonprofits raise more.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", title: "About Emily" },
};

export default function About() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Emily Preble",
    jobTitle: "Benefit Auctioneer & Fundraising Consultant",
    award: "Certified Benefit Auctioneer Specialist (BAS)",
    worksFor: { "@id": `${site.url}/#business` },
    address: { "@type": "PostalAddress", addressLocality: "Austin", addressRegion: "TX", addressCountry: "US" },
    sameAs: [site.socials.instagram, site.socials.linkedin],
    image: `${site.url}/images/emily-headshot.jpg`,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "About", item: `${site.url}/about` },
    ],
  };

  return (
    <>
      <JsonLd data={[personSchema, breadcrumb]} />

      <section className="bg-plum">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          <div className="bg-coral px-10 py-24 md:px-16 md:py-32 text-cream">
            <p className="text-xs uppercase tracking-[0.3em] text-cream/80">About</p>
            <h1 className="display-headline mt-6 text-6xl md:text-7xl">Hi, I&apos;m Emily.</h1>
            <p className="mt-8 text-lg leading-relaxed text-cream/95">
              A Portland, Oregon native, I&apos;m now proudly situated in the sunny, twang-filled city of Austin, Texas. I&apos;m a certified Benefit Auctioneer Specialist (BAS) and licensed auctioneer who firmly believes that with the right energy and the help of a well-timed joke, there&apos;s no limit to what a group of likeminded people can achieve.
            </p>
            <div className="mt-10">
              <CalendlyButton variant="cream">Let&apos;s Talk</CalendlyButton>
            </div>
          </div>
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px]">
            <Image
              src="/images/emily-headshot.jpg"
              alt="Portrait of Emily Preble"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <article className="mx-auto max-w-3xl px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-coral">My Story</p>
          <h2 className="display-headline mt-6 text-4xl text-plum md:text-5xl">
            Everything is more compelling with a beginning, a middle, and an appropriately dramatic ending.
          </h2>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink/85">
            <p>
              For as long as I can remember, I&apos;ve believed in the magic of a well-told story. My passion for storytelling began with humble roots (just ask my family; 10-year-old Emily could spin quite the yarn at the dinner table about my day&apos;s adventures). Over time, that passion became a practiced skill I now wield on behalf of missions that inspire me.
            </p>
            <p>
              As a Division I softball captain (and a catcher, to boot!) I learned to command the field and motivate a team with energy and presence. My training as a professional journalist sharpened my ability to ask the right questions and craft narratives that inform, inspire, and entertain.
            </p>
            <p>
              Now, as a brand strategist, designer, and fundraising consultant, I bring leadership, curiosity, charisma, and creativity together to uncover the through-line that connects audiences to purpose. I believe heart and humor are the foundations of every great story; laughter unites us, invites empathy, and persuades us to care and connect.
            </p>
            <p className="display-headline text-2xl text-coral md:text-3xl">
              If your cause has a story to tell and a mission worth rallying around, let&apos;s bring it to life, together.
            </p>
          </div>
        </article>
      </section>

      <section className="bg-plum py-24 text-cream">
        <div className="mx-auto max-w-3xl px-8 text-center">
          <h2 className="display-headline text-4xl md:text-5xl">Let&apos;s connect!</h2>
          <p className="mt-6 text-lg text-cream/85">
            If you&apos;re ready to take your fundraising to the next level, I&apos;d love to chat more.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CalendlyButton variant="cream" />
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-cream px-10 py-4 text-xs uppercase tracking-[0.25em] text-cream hover:bg-cream hover:text-plum"
            >
              Connect via Email
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
