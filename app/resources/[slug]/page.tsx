import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { getResourceGuide, resourceGuides } from "@/lib/resourceGuides";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return resourceGuides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getResourceGuide(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.blurb,
    alternates: { canonical: `${site.guidesUrl}/resources/${guide.slug}` },
    openGraph: { url: `${site.guidesUrl}/resources/${guide.slug}`, title: guide.title },
  };
}

export default async function GuidePreview({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getResourceGuide(slug);
  if (!guide) notFound();

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Resources", item: `${site.guidesUrl}/resources` },
      { "@type": "ListItem", position: 2, name: guide.title, item: `${site.guidesUrl}/resources/${guide.slug}` },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.blurb,
    author: { "@type": "Person", name: "Emily Preble" },
    publisher: { "@id": `${site.url}/#business` },
  };

  return (
    <>
      <JsonLd data={[breadcrumb, articleSchema]} />

      <section className="pattern-flood py-24 text-cream">
        <div className="mx-auto max-w-3xl px-10 md:px-12">
          <Link href="/resources" className="text-xs font-semibold uppercase tracking-wide text-coral">
            ← All Resources
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-coral">{guide.subtitle}</p>
          <h1 className="display-headline mt-2 text-5xl italic md:text-6xl">{guide.title}</h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream/85">{guide.blurb}</p>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-3xl px-10 md:px-12">
          <h2 className="display-headline text-2xl text-plum italic">What's Inside</h2>
          <div className="mt-8 space-y-8 border-t border-plum/15 pt-8">
            {guide.sections.map((s) => (
              <div key={s.title}>
                <h3 className="text-lg font-semibold text-plum">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-plum/80">{s.snippet}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white p-10 text-center">
            <p className="text-lg text-plum">
              Want access to the full guide, complete with worked examples, templates, and the interactive
              tools? Let me know below!
            </p>
            <Link
              href={`/resources/unlock?next=/resources/${guide.slug}.html`}
              className="mt-6 inline-block rounded-full bg-coral px-8 py-4 text-sm font-semibold uppercase tracking-wide text-cream hover:bg-plum"
            >
              {guide.cta === "Open the Tool" ? "Get Access to the Tool" : "Get Access to the Full Guide"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
