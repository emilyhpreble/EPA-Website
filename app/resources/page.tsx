import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { resourceGuides } from "@/lib/resourceGuides";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Free guides for nonprofit fundraising teams: event committees, pre-committed giving, live auction procurement, underbid data, donor stewardship, and a budget calculator.",
  alternates: { canonical: `${site.guidesUrl}/resources` },
  openGraph: { url: `${site.guidesUrl}/resources`, title: "Resources" },
};

export default function Resources() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Resources", item: `${site.guidesUrl}/resources` },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumb} />

      <section className="pattern-flood py-24 text-cream">
        <div className="mx-auto max-w-6xl px-10 md:px-12">
          <h1 className="display-headline display-headline-upright text-6xl md:text-7xl">
            Resource Guides
          </h1>
          <p className="display-headline mt-6 text-2xl text-coral italic md:text-3xl">
            For Fundraising Teams
          </p>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-cream/85">
            Practical guides for nonprofit teams running benefit auctions and fundraising
            events — built from what actually works in the room. Free to use, from event
            committee structure to donor stewardship.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-6xl px-10 md:px-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {resourceGuides.map((g) => (
              <Link
                key={g.slug}
                href={`/resources/${g.slug}`}
                className="block border border-plum/15 bg-white p-8 transition hover:border-coral"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-coral">
                  {g.subtitle}
                </p>
                <h2 className="display-headline mt-2 text-2xl text-plum italic">{g.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-plum/80">{g.blurb}</p>
                <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-coral">
                  {g.cta} →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
