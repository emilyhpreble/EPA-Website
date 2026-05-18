export const site = {
  name: "Emily Preble Auctions",
  legalName: "Emily Preble Auctions",
  tagline: "Benefit Auctioneer + Consultant",
  description:
    "Emily Preble Auctions helps nonprofits raise more through charisma, humor, and strategy as a benefit auctioneer and fundraising consultant.",
  url: "https://emilyprebleauctions.com",
  locale: "en_US",
  license: "TX License #18523",
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
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

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

export const testimonial = {
  quote:
    "Witty and contagiously energetic. Emily doubled our fundraising efforts — such a memorable event and memorable experience watching her do her thing. I highly recommend her for your next event!",
  author: "Greg Spencer",
  org: "Folds of Honor",
};
