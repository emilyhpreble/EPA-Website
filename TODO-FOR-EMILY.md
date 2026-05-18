# What's left to turn on (Emily's to-do list)

Welcome! Your new site is built and looks great. Here's what's left to wire up so it's fully functional. Each item explains *what*, *why*, and *roughly how long*. Work through them at your own pace — you can do them in any order.

If anything feels unclear, just ask Claude Code in your terminal and it will walk you through it step by step. You don't need any technical background.

---

## 1. Turn on the contact form (15 min)

**Right now**, when someone fills out the contact form on your site, nothing is delivered to your inbox. The form looks live but is a placeholder. To turn it on:

1. Go to [resend.com](https://resend.com) and create a free account (3,000 emails/month free — plenty for you).
2. Once signed in, go to **API Keys** → **Create API Key**. Copy the key (it starts with `re_`).
3. In your Vercel dashboard, open this project → **Settings** → **Environment Variables**. Add two variables:
   - `RESEND_API_KEY` = paste your key
   - `CONTACT_TO_EMAIL` = the email address where you want submissions delivered (likely your Honeybook intake address — see #2)
4. In `app/api/contact/route.ts`, follow the commented-out instructions to enable real delivery. Or just ask Claude Code: *"Enable the Resend integration in the contact form route."*

**Why it matters**: without this, leads disappear into the void.

---

## 2. Connect Honeybook (15 min)

You mentioned you run client intake through Honeybook. The cleanest setup is to have the contact form email Honeybook's intake address directly so every lead lands in your CRM automatically.

1. In Honeybook, find your **contact form / intake email address** (Honeybook → Settings → Contact Form → look for the forwarding email).
2. Use that address as the `CONTACT_TO_EMAIL` value in step 1 above.

Alternative: you can route through Zapier/Make for more flexibility (e.g., also Slack-ping yourself). Ask Claude Code if you want that setup.

---

## 3. Verify your sender domain in Resend (10 min, do once)

This makes emails from your contact form come from `hello@emilyprebleauctions.com` instead of a generic Resend address — better trust, less likely to land in spam.

1. In Resend, go to **Domains** → **Add Domain** → enter `emilyprebleauctions.com`.
2. Resend will show you DNS records (SPF, DKIM) to add. Add them in your domain registrar (Wix or wherever your domain DNS lives).
3. Wait ~5–60 minutes for verification.

You only need to do this once.

---

## 4. Claim your Google Business Profile (15 min)

This is the single biggest local-search lift you can do. When someone in Austin searches "benefit auctioneer" Google's Business Profile listings show up above almost everything else.

Go to [business.google.com](https://business.google.com) → claim "Emily Preble Auctions" → fill out everything: services, hours, photos, service area (Austin + nearby), website link. Verify by mail or phone.

---

## 5. Set up Google Search Console (10 min)

This is how you tell Google "this site exists, please index it" and how you watch your search traffic over time.

1. Go to [search.google.com/search-console](https://search.google.com/search-console).
2. Add your domain.
3. Verify ownership — Claude Code can paste the verification meta tag into your site for you. Just ask: *"Add Google Search Console verification token \[paste your token\]."*
4. Submit your sitemap: enter `sitemap.xml` and click submit.

---

## 6. Claim Bing Webmaster Tools (5 min)

Same as Google but for Bing. Bing also powers ChatGPT's web search, so this matters for AI visibility too.

Go to [bing.com/webmasters](https://www.bing.com/webmasters), sign in with a Microsoft account, import directly from your Google Search Console for one-click setup.

---

## 7. Update social bios (5 min)

Once you cut DNS over to the new site, make sure your Instagram bio link and LinkedIn website field point to the new `emilyprebleauctions.com`. (No change needed if you're using the same domain.)

---

## When you're ready to switch from Wix to this new site

That's a separate document — Jacob/Claude Code will write you a step-by-step walkthrough for "domain cutover day" when you're ready. The short version: lower your Wix DNS TTL, point your domain at Vercel, verify the new site loads, done. About 30 minutes of active work plus a few hours of DNS propagation.

---

## Editing the site after launch

You can edit anything on the site by running Claude Code on your computer:

1. Open Terminal.
2. `cd` into the project folder.
3. Run `claude` and tell it what to change: *"Update the headline on the home page to read X"* or *"Add a new testimonial from Y."*
4. Claude commits the change, pushes to GitHub, Vercel auto-deploys, and your site is updated in ~2 minutes.

You never have to touch code if you don't want to.
