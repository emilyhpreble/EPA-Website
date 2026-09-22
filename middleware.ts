import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "epa_resources_unlocked";
const GUIDES_HOST = "guides.emilyprebleauctions.com";

// The public preview pages (/resources, /resources/<slug>, /resources/unlock)
// and the hub listing page stay open — only the raw interactive guide files
// require the access code. Keeping the hub/preview pages ungated is what lets
// this content still be found and indexed for SEO/AEO purposes.
const GATED_FILES = [
  "/resources/build-the-team.html",
  "/resources/leading-the-charge.html",
  "/resources/live-auction-101.html",
  "/resources/underbid-recording.html",
  "/resources/gratitude-plan.html",
  "/resources/event-budget-calculator.html",
  "/resources/event-data-analyzer.html",
];

// Anything that isn't a page — crawler files, API routes, and every static
// asset folder (images, fonts, etc.) — must keep working on every host
// regardless of the guides-host redirect below. An exact-filename list bit
// us twice already (sitemap.xml, then /images/pattern-purple.png); matching
// by *shape* instead — a file extension, or a known asset prefix — is the
// fix that doesn't need remembering to extend every time a new asset shows
// up somewhere in the site.
const STATIC_PREFIXES = ["/api/", "/images/", "/fonts/"];
const STATIC_EXTENSION = /\.[a-zA-Z0-9]+$/;

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // guides.emilyprebleauctions.com only exists to be the resource library —
  // the rest of this deployment (home/about/services/contact) is a design
  // preview of the main site, never meant to be reachable from this
  // branded domain. Anything outside /resources on this host sends people
  // to the resources hub instead of the unfinished homepage replica.
  const host = req.headers.get("host") ?? "";
  const isStaticPath =
    STATIC_PREFIXES.some((p) => pathname.startsWith(p)) ||
    STATIC_EXTENSION.test(pathname);
  if (
    host.startsWith(GUIDES_HOST) &&
    !pathname.startsWith("/resources") &&
    !isStaticPath
  ) {
    const url = req.nextUrl.clone();
    url.pathname = "/resources";
    url.search = "";
    return NextResponse.redirect(url);
  }

  if (!GATED_FILES.includes(pathname)) return NextResponse.next();

  const unlocked = req.cookies.get(COOKIE_NAME)?.value === "1";
  if (unlocked) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = "/resources/unlock";
  url.search = `?next=${encodeURIComponent(pathname)}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // Everything except static assets, so the guides-host redirect above
    // can catch any path, not just the gated files.
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
