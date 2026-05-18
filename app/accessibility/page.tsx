import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Emily Preble Auctions is committed to making this site accessible to people with disabilities. WCAG 2.1 AA compliance.",
  alternates: { canonical: "/accessibility" },
  openGraph: { url: "/accessibility", title: "Accessibility Statement" },
};

export default function Accessibility() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-xs uppercase tracking-[0.3em] text-forest">Accessibility</p>
      <h1 className="display-headline mt-6 text-5xl text-plum">Accessibility Statement</h1>
      <p className="mt-4 text-sm text-muted">Last updated: 2026</p>

      <div className="prose mt-10 max-w-none space-y-6 text-lg leading-relaxed text-ink/85">
        <p>
          We at {site.name} are working to make our site accessible to people with disabilities.
        </p>

        <h2 className="display-headline text-2xl text-plum">What web accessibility is</h2>
        <p>
          An accessible site allows visitors with disabilities to browse the site with the same or a similar level of ease and enjoyment as other visitors. This can be achieved through the capabilities of the system on which the site is operating, and through assistive technologies.
        </p>

        <h2 className="display-headline text-2xl text-plum">Accessibility adjustments on this site</h2>
        <p>
          We have adapted this site in accordance with WCAG 2.1 guidelines, and have made the site accessible to the level of AA. This site&apos;s contents have been adapted to work with assistive technologies, such as screen readers and keyboard use. As part of this effort, we have also:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Set the language of the site</li>
          <li>Set the content order of the site&apos;s pages</li>
          <li>Defined clear heading structures on all of the site&apos;s pages</li>
          <li>Added alternative text to images</li>
          <li>Implemented color combinations that meet the required color contrast</li>
          <li>Reduced the use of motion on the site</li>
          <li>Ensured all videos, audio, and files on the site are accessible</li>
        </ul>

        <h2 className="display-headline text-2xl text-plum">Contact us</h2>
        <p>
          If you encounter an accessibility barrier or have suggestions for improving the experience, please reach out via the <a href="/contact" className="text-plum underline">contact page</a>.
        </p>
      </div>
    </article>
  );
}
