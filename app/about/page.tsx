import Image from "next/image";
import type { Metadata } from "next";
import { CalendlyButton } from "@/components/CalendlyButton";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Emily Preble is a Certified Benefit Auctioneer Specialist (BAS) in Austin, Texas. Former D-I softball captain, journalist, and brand strategist helping nonprofits raise more.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", title: "About" },
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
    image: `${site.url}/images/emily-about.jpg`,
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

      <div className="bg-olive">
        {/* INTRO CARD: cream card with photo left + text right, sitting on olive */}
        <section className="mx-auto max-w-6xl px-6 pt-16 pb-10">
          <div className="grid bg-cream md:grid-cols-2">
            <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[520px]">
              <Image
                src="/images/emily-about.jpg"
                alt="Emily Preble"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="px-10 py-16 md:px-14 md:py-20">
              <h1 className="display-headline text-5xl text-plum md:text-6xl">
                <span className="not-italic">Hi, I&apos;m </span>
                <em className="italic">Emily.</em>
              </h1>
              <p className="mt-8 text-base leading-relaxed text-plum">
                A Portland, Oregon native, I&apos;m now proudly situated in sunny, twang-filled city of Austin, Texas. I&apos;m a certified Benefit Auctioneer Specialist (BAS) and licensed auctioneer who firmly believes that with the right energy and the help of a well-timed joke, there&apos;s no limit to what a group of likeminded people can achieve.
              </p>
              <div className="mt-10">
                <CalendlyButton variant="coral">Let&apos;s Talk</CalendlyButton>
              </div>
            </div>
          </div>
        </section>

        {/* STORY CARD: cream card with long-form body */}
        <section className="mx-auto max-w-6xl px-6 pb-10">
          <div className="bg-cream px-10 py-20 md:px-24 md:py-24">
            <h2 className="display-headline text-4xl text-plum md:text-5xl">
              <span className="not-italic">My </span>
              <em className="italic">Story</em>
            </h2>

            <div className="mt-10 space-y-6 text-base leading-relaxed text-plum">
              <p>
                For as long as I can remember, I&rsquo;ve believed in the magic of a well-told story. Everything is more compelling with a beginning, a middle, and an appropriately dramatic ending, right? My passion for storytelling began with humble roots (just ask my family; 10-year-old Emily could spin <em className="italic">quite</em> the yarn at the dinner table about my day&rsquo;s adventures). Over time, that passion became a practiced skill I now wield on behalf of missions that inspire me.
              </p>
              <p>
                As a Division I softball captain (and a catcher, to boot!) I learned to command the field and motivate a team with energy and presence. My training as a professional journalist sharpened my ability to ask the right questions and craft narratives that inform, inspire, and entertain. Now, as a brand strategist, designer, and fundraising consultant, I bring leadership, curiosity, charisma, and creativity together to uncover the through-line that <em className="italic">connects audiences to purpose</em>. I believe heart and humor are the foundations of every great story; laughter unites us, invites empathy, and persuades us to care and connect.
              </p>
              <p>
                If your cause has a story to tell and a mission worth rallying around, let&rsquo;s bring it to life, together.
              </p>
            </div>
          </div>
        </section>

        {/* CONNECT CARD */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="grid bg-cream gap-10 px-10 py-16 md:grid-cols-2 md:items-center md:px-20 md:py-20">
            <div>
              <h2 className="display-headline text-4xl text-plum md:text-5xl">
                <span className="not-italic">Let&apos;s </span>
                <em className="italic">connect!</em>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-plum">
                If you&apos;re ready to take your fundraising to the next level, I&apos;d love to chat more. Book a free strategy call and let&apos;s work together to elevate your impact.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:items-end">
              <CalendlyButton variant="coral">Book a Free Strategy Call</CalendlyButton>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center justify-center rounded-full bg-coral px-10 py-4 text-sm font-semibold uppercase tracking-normal text-cream hover:bg-coral-dark"
              >
                Connect with Me via Email
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
