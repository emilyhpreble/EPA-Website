# Emily Preble Auctions — Website

Marketing site for Emily Preble Auctions (benefit auctioneer + fundraising consultant, Austin TX).

**Stack**: Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript · deployed on Vercel.

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Build

```bash
npm run build && npm start
```

## Editing content

Most copy lives in two places:

- `lib/site.ts` — site-wide constants (services list, testimonial, social links, license).
- `app/<route>/page.tsx` — page-specific copy and layout.

Change a value, save, and Vercel auto-deploys on push to `main`.

## What's wired up

- ✅ All five pages: Home, About, Services, Contact, Accessibility
- ✅ Brand palette + fonts matched to the existing Wix design
- ✅ SEO: per-page metadata, canonical URLs, OG tags, Twitter cards
- ✅ AEO: JSON-LD structured data (ProfessionalService, Person, Service, Review, BreadcrumbList, WebSite), `llms.txt`, AI crawler allow-list in robots
- ✅ Sitemap + robots auto-generated
- ✅ Favicon set + dynamic OG image (Next.js conventions)
- ✅ Vercel Speed Insights and Analytics-ready (add the components in `app/layout.tsx` after deploy)
- ✅ Contact form UI (currently a wireframe — see `TODO-FOR-EMILY.md`)

## What's NOT wired up yet

See `TODO-FOR-EMILY.md` for the full punch-list. Short version:

- Contact form submissions are not yet delivered to an inbox (Resend integration is stubbed in `app/api/contact/route.ts` with step-by-step enabling instructions).
- Google Search Console / Bing Webmaster verification (do at domain cutover).
- Domain is still on Wix — current Vercel build is a `*.vercel.app` staging preview.

## Project structure

```
app/
  layout.tsx           # global shell, metadata, JSON-LD
  page.tsx             # Home
  about/page.tsx
  services/page.tsx
  contact/page.tsx
  accessibility/page.tsx
  sitemap.ts           # auto-generated /sitemap.xml
  robots.ts            # auto-generated /robots.txt with AI crawler allow-list
  icon.tsx             # favicon
  apple-icon.tsx       # iOS home-screen icon
  opengraph-image.tsx  # default social-share image
  manifest.ts          # PWA manifest
  api/contact/route.ts # contact form handler (wireframed)
components/
  Header.tsx
  Footer.tsx
  ContactForm.tsx
  CalendlyButton.tsx
  JsonLd.tsx
lib/
  site.ts              # site-wide constants
public/
  llms.txt             # site summary for LLM crawlers
  images/              # logo, headshot, photography
```
