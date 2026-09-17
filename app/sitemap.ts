import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { resourceGuides } from "@/lib/resourceGuides";

// This sitemap is served from guides.emilyprebleauctions.com. It must only
// list pages actually reachable at THAT domain — the main site (home,
// about, services, contact) still lives on Wix, not here, so claiming
// those URLs in this sitemap would be false and could hurt indexing
// rather than help it. Only the public Resources pages belong here; the
// gated full guides are intentionally excluded (they're not indexable —
// that's the whole point of gating them).
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const resourcesIndex: MetadataRoute.Sitemap[number] = {
    url: `${site.guidesUrl}/resources`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  };

  const guidePages: MetadataRoute.Sitemap = resourceGuides.map((g) => ({
    url: `${site.guidesUrl}/resources/${g.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [resourcesIndex, ...guidePages];
}
