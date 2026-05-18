export const site = {
  name: "Emily Preble Auctions",
  legalName: "Emily Preble Auctions",
  tagline: "Benefit Auctioneer + Consultant",
  description:
    "Emily Preble Auctions helps nonprofits raise more through charisma, humor, and strategy as a benefit auctioneer and fundraising consultant.",
  url: "https://emilyprebleauctions.com",
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
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
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
      "Huge thanks to Emily Preble! Emily's unmatched energy and enthusiasm totally lit up our event. She tailored her approach to our mission and audience, connected with attendees, and handled every detail seamlessly. A true pro. If you're looking for an auctioneer who brings passion, professionalism, foresight, and results, Emily is the one!",
    author: "Pamela Raines",
    org: "NVOP",
  },
  {
    quote:
      "Witty and contagiously energetic. Emily doubled our fundraising efforts– such a memorable event and memorable experience watching her do her thing. I highly recommend her for your next event!",
    author: "Greg Spencer",
    org: "Folds of Honor",
  },
] as const;

export const testimonial = testimonials[1];
