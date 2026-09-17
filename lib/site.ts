export const site = {
  name: "Emily Preble Auctions",
  legalName: "Emily Preble Auctions",
  tagline: "Benefit Auctioneer + Consultant",
  description:
    "Emily Preble Auctions helps nonprofits raise more through charisma, humor, and strategy as a benefit auctioneer and fundraising consultant.",
  url: "https://emilyprebleauctions.com",
  // The Resources section is the one part of this codebase actually live
  // and reachable right now — at its own subdomain, not the main site
  // (which is still Wix). Its canonical/OG/sitemap URLs must say so, or
  // Google sees a canonical tag pointing at a domain that isn't serving
  // the page, which undermines indexing rather than helping it.
  guidesUrl: "https://guides.emilyprebleauctions.com",
  locale: "en_US",
  license: "TX License #: 18523",
  copyrightYear: 2026,
  city: "Austin",
  region: "TX",
  country: "US",
  serviceArea: ["Austin", "Houston", "Dallas", "San Antonio", "Texas", "United States"],
  socials: {
    instagram: "https://www.instagram.com/emilyprebleauctions/",
    linkedin: "https://www.linkedin.com/in/emilypreble",
  },
  calendly: "https://calendly.com/emilyprebleauctions",
  email: "hello@emilyprebleauctions.com",
  // Every nav item except Resources points at the real, live Wix site —
  // this codebase's own home/about/services/contact pages are a design
  // preview, not where visitors should actually land. Resources is the one
  // genuine exception: it's the part of this deployment that's actually
  // live and meant to be visited directly.
  nav: [
    { href: "https://www.emilyprebleauctions.com/", label: "Home" },
    { href: "https://www.emilyprebleauctions.com/about", label: "About" },
    { href: "https://www.emilyprebleauctions.com/services", label: "Services" },
    { href: "/resources", label: "Resources" },
    { href: "https://www.emilyprebleauctions.com/contact", label: "Contact" },
  ],
} as const;

export const pillars = [
  {
    tag: "Mission",
    title: "Connecting your audience to your vision.",
    body: "Every successful fundraiser starts with a story that resonates emotionally. Through strategic storytelling and compelling delivery, we'll work to connect your supporters with the deeper purpose behind your work, transforming an event audience into active, inspired advocates.",
  },
  {
    tag: "Values",
    title: "Inspired by the joy of giving.",
    body: "People give when they feel connected. I lead with authenticity, warmth, and relentless enthusiasm —because generosity grows when your audience feels emotionally invested and inspired. Your mission is the priority; I’m here to elevate it with intention and heart.",
  },
  {
    tag: "Process",
    title: "Your message, made unforgettable.",
    body: "What makes an audience care deeply enough to give—and keep giving? Together, we'll uncover the most important idea that anchors every touchpoint of your event. From pre-event planning to on-stage delivery, we’ll shape each moment with strategy, creativity, and care so that your story resonates, your message lands, and your fundraising efforts drive real results.",
  },
  {
    tag: "Impact",
    title: "Turning moments into momentum.",
    body: "Your cause deserves more than a script and a stage – it deserves a partner who can bring it to life. With humor, heart, and strategy, I guide the room through your story so that generosity flows from a place of real connection. Intentional energy turns a mission into a movement.",
  },
] as const;

export const services = [
  {
    slug: "live-auctioneering",
    title: "Live Auctioneering",
    blurb:
      "Commanding the room with charisma, clarity, and confidence to raise the funds you need and make giving feel like fun.",
  },
  {
    slug: "fund-a-need-coaching",
    title: "Fund-a-Need Coaching",
    blurb:
      "Partnering with your team to craft a high-impact, emotionally resonant appeal that connects your audience to the mission.",
  },
  {
    slug: "pre-event-strategy",
    title: "Pre-Event Strategy & Consulting",
    blurb:
      "From run-of-show planning to donor strategy and event flow, we'll work together to fine-tune the details that drive generosity.",
  },
  {
    slug: "scriptwriting-messaging",
    title: "Scriptwriting & Messaging",
    blurb:
      "Clean, creative, mission-driven language to highlight your story and keep your purpose front and center.",
  },
  {
    slug: "emceeing",
    title: "Emceeing & On-Site Leadership",
    blurb:
      "Providing warmth, structure, and presence throughout your program—from welcome to closing remarks.",
  },
  {
    slug: "branded-materials",
    title: "Branded Materials & Visual Assets",
    blurb:
      "Designing custom, on-brand visuals and materials to elevate and polish every touchpoint of your event, whether it's signage, slide decks, social graphics, banners, or custom donor thank you notes.",
  },
  {
    slug: "guides-takeaways",
    title: "Guides & Strategic Takeaways",
    blurb:
      "Providing your team with tools that go the distance — donor mindset guides, gratitude planning worksheets, auction planning checklists, silent auction best practices, item acquisition strategies, and more — to streamline event success year after year.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Working with Emily Preble as an event emcee and auctioneer for a gala was a dream! Our fundraising event was a huge success and Emily was instrumental in helping us surpass our fundraising goal. From the start, Emily invested herself in the mission of our organization and made personal connections to help her tell our story, connect to our gala guests, and lead a successful live auction and paddle raise. She was not only a true professional, but brought humor and heart to our event. Our guests loved her! From an event planning perspective, she checked in every step of the way and offered helpful suggestions and planning tips to help the event run smoothly. I'd gladly work with Emily again and again!",
    author: "Sabina Corrigan",
    org: "Family Houston",
  },
  {
    quote:
      "We had the absolute BEST experience working with Emily Preble! From our very first meeting, she made the entire process feel easy, exciting, and completely manageable. She took the time to truly listen to our story and understand who we are and why we were hosting our event. That care and attention made all the difference.\n\nDuring the event, Emily was the perfect balance of energetic and professional. She brought incredible enthusiasm without ever feeling pushy or over-the-top. She read the room beautifully, connected with our guests, and communicated our mission in a way that genuinely resonated with everyone there.\n\nNot only was she a joy to work with, but she also helped us raise more money than we ever thought possible. Our guests truly enjoyed her, and we are so grateful for the impact she made on our event's success.\n\nIf you're considering working with Emily—do it! She is outstanding at what she does.",
    author: "Brenda Hull",
    org: "Santa Cruz",
  },
] as const;

export const testimonial = testimonials[1];
