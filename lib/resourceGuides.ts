export type GuideSection = { title: string; snippet: string };

export type ResourceGuide = {
  slug: string;
  title: string;
  subtitle: string;
  blurb: string;
  cta: string;
  sections: GuideSection[];
};

// Preview content pulled from the real guides — real section titles and
// opening lines, enough for search engines (and readers) to see genuine
// substance, without giving away the full interactive guide, which sits
// behind the access-code gate.
export const resourceGuides: ResourceGuide[] = [
  {
    slug: "build-the-team",
    title: "Building Successful Event Committees",
    subtitle: "A Guide for Event Committees",
    blurb:
      "Structure, roles, table hosting, sponsorships and accountability for a working event committee.",
    cta: "Open the Guide",
    sections: [
      {
        title: "Why This Matters",
        snippet:
          "You didn't join this committee to stuff envelopes. You joined because you believe in the mission, and you know other fantastic people who might agree to join the mission when asked.",
      },
      {
        title: "Build the Structure Before You Recruit",
        snippet: "A working event committee needs defined roles before anyone joins. At minimum, here's who's on the team.",
      },
      {
        title: "The Committee Job Description",
        snippet: "Clarity is kind. If your committee doesn't know exactly what's expected of them, they can't be expected to deliver it.",
      },
      {
        title: "What a Table Host Actually Does",
        snippet:
          "Hosting a table means taking personal responsibility for filling and hosting one table of guests, typically eight to ten seats.",
      },
      {
        title: "Pre-Event Happy Hours",
        snippet:
          "A pre-event happy hour isn't just a party. It's how you thank the sponsors and donors who already said yes, and build real buzz before invitations even go out.",
      },
    ],
  },
  {
    slug: "leading-the-charge",
    title: "Pre-Committed Giving",
    subtitle: "A Pre-Commit Strategy Guide",
    blurb:
      "How to set the tone for generosity before the appeal begins: benchmarks, scripts, objections and templates.",
    cta: "Open the Guide",
    sections: [
      { title: "The Big Picture", snippet: "We are not asking people to fund line items. We are inviting them to fund impact." },
      {
        title: "What You Gain by Asking Early",
        snippet:
          "Every gift you secure before the doors open is a gift you can count on for both peace of mind and giving momentum on event night.",
      },
      {
        title: "The Goal: What Pre-Commits Should Actually Cover",
        snippet: "Your pre-commit target depends on where your event stands. Use the tier that matches your history.",
      },
      {
        title: "Setting Your Levels",
        snippet: "Every audience has a rhythm. Your conversations with key donors are what actually set the strategy.",
      },
      {
        title: "The Pre-Commit Tracker",
        snippet: "Hand this to your Development Lead and keep it live from week 8 through event night.",
      },
    ],
  },
  {
    slug: "live-auction-101",
    title: "Live Auction 101",
    subtitle: "A Guide to Selecting, Procuring and Selling Live Auction Items",
    blurb:
      "Know your audience, build the dream item list, choose a procurement method, make the ask, and learn from the results.",
    cta: "Open the Guide",
    sections: [
      { title: "Introduction", snippet: "A successful live auction doesn't begin on stage. It begins with a keen understanding of your audience and thoughtful procurement." },
      {
        title: "Understand Your Audience",
        snippet: "Before you make your wishlist or send a single email, start here — you can't choose the right items if you don't know who you're choosing them for.",
      },
      { title: "Build Your Dream Item List", snippet: "Once you understand who you're inviting to bid, it's time to brainstorm what they'll actually want to bid on." },
      {
        title: "Finalize Your Donor-Facing Wish List",
        snippet: "Your dream list is what you want. Your wish list is what you ask for — they are not the same document.",
      },
      {
        title: "Form Your Procurement Committee",
        snippet: "A strong committee is your auction's engine. They bring ideas, relationships, and hustle to the table.",
      },
    ],
  },
  {
    slug: "underbid-recording",
    title: "Auction Data & Underbid Recording",
    subtitle: "Learning from Non-Winning Bids",
    blurb:
      "How to capture every bid placed in your live auction, read what the numbers say, and turn losing bidders into your best cultivation list.",
    cta: "Open the Guide",
    sections: [
      {
        title: "Introduction",
        snippet: "Your clerk jots down winning paddle numbers, and your event software records who's taking home the big prize. But what can we learn from the almost-winning ones?",
      },
      { title: "Three Questions Worth Asking", snippet: "Before we talk about how to collect data, it's worth seeing where you might have gaps to fill." },
      { title: "What Underbid Recording Is", snippet: "An underbidder is simply someone who bid on an item and didn't win. Underbid recording is the practice of capturing every one of them." },
      { title: "What You Capture", snippet: "Those messy scratch pages turn into four different kinds of information, each answering a different question." },
      { title: "Reading Lot Performance", snippet: "Sale price tells you what the end result was. It does not tell you how you got there, or what to do next." },
    ],
  },
  {
    slug: "gratitude-plan",
    title: "Donor Gratitude and Stewardship",
    subtitle: "A Framework for Donor Trust, Stewardship and Long-Term Revenue",
    blurb:
      "A stewardship framework built on Thank, Show, Invite — with a donor timeline, ten donor tracks, and plug-and-play templates.",
    cta: "Open the Guide",
    sections: [
      { title: "Why Gratitude Needs a System", snippet: "Most organizations are grateful for every gift they receive. Few organizations have a system for expressing their gratitude." },
      {
        title: "The Gratitude Plan (Thank. Show. Invite.)",
        snippet: "The whole framework fits in three questions. Answer each for every donor gift, in order, and you have a healthy stewardship program.",
      },
      { title: "The Golden Rule of Gratitude", snippet: "When thinking about how to appropriately thank a donor, consider gifting outside of the fundraising context." },
      { title: "The Donor Stewardship Timeline", snippet: "Consistency is everything. Run this same sequence for every donor, regardless of gift size." },
      { title: "How to Thank Different Gift Types", snippet: "The right gratitude avenues, to the right donor, at the right time. Use this after any gala, campaign, or first-time gift." },
    ],
  },
  {
    slug: "event-budget-calculator",
    title: "Event Budget Calculator",
    subtitle: "A Planning Tool",
    blurb:
      "Enter your fundraising goal and guest count, then see what your sponsorship levels, ticket prices and giving tiers need to be to hit it.",
    cta: "Open the Tool",
    sections: [
      { title: "Set Your Goal", snippet: "Start with the number you actually need to raise, then tell us roughly who's in the room." },
      { title: "Check Your Starting Percentages", snippet: "These starting percentages reflect typical events — adjust them if your event leans differently." },
      { title: "Work Down Each Section", snippet: "Every section is pre-filled with a suggested starting point: sponsorship levels, ticket prices, giving tiers." },
      { title: "Watch the Running Total", snippet: "Once you scroll past the first step, a bar at the top tracks your projected revenue against your goal as you go." },
    ],
  },
];

export function getResourceGuide(slug: string): ResourceGuide | undefined {
  return resourceGuides.find((g) => g.slug === slug);
}
