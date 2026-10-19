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
          "Nobody joins an event committee to stuff envelopes. Your members say yes because they believe in the mission and know people who might join it too, if someone asked.",
      },
      {
        title: "Build the Structure Before You Recruit",
        snippet: "Define the roles before anyone joins. At minimum, your committee needs:",
      },
      {
        title: "The Committee Job Description",
        snippet: "Clarity is kind. If your members don't know exactly what's expected of them, you can't expect them to deliver it.",
      },
      {
        title: "What a Table Host Actually Does",
        snippet:
          "Hosting a table means taking personal responsibility for filling and hosting one table of guests, typically eight to ten seats.",
      },
      {
        title: "Pre-Event Happy Hours",
        snippet:
          "A pre-event happy hour is more than a party. It thanks the sponsors and donors who have already said yes, builds buzz before the invitations go out, and gives your table hosts an easy, low-pressure way to introduce their guests to the mission.",
      },
    ],
  },
  {
    slug: "leading-the-charge",
    title: "Pre-Committed Giving",
    subtitle: "Ensuring Paddle Raise Success",
    blurb:
      "How to secure leadership gifts before the paddle raise begins, so the room follows their lead: benchmarks, timelines, call scripts, objection handling and templates.",
    cta: "Open the Guide",
    sections: [
      { title: "The Big Picture", snippet: "We are not asking people to fund line items. We are inviting them to fund impact." },
      {
        title: "What You Gain by Asking Early",
        snippet:
          "Every gift you secure before the doors open is a gift you can count on, for peace of mind and for momentum on event night.",
      },
      {
        title: "The Goal: What Pre-Commits Should Actually Cover",
        snippet: "Every percentage in this guide is a share of one number: your paddle raise goal, the amount you plan to raise in the paddle raise itself.",
      },
      {
        title: "Setting Your Levels",
        snippet: "Every audience has a rhythm. Guest count and your paddle raise goal will point you in the right direction, but conversations with key donors are what actually set the strategy.",
      },
      {
        title: "The Pre-Commit Tracker",
        snippet: "Hand this to your Development Lead and start it the day you name your top five prospects. Keep it live through event night and until the last pledge is paid.",
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
        snippet: "Before you make your wish list or send a single email, start here. You can't choose the right auction items until you know who you're choosing them for.",
      },
      { title: "Build Your Dream Item List", snippet: "Once you understand who you're inviting to bid, it's time to brainstorm what they'll actually want to bid on." },
      {
        title: "Finalize Your Donor-Facing Wish List",
        snippet: "Your dream list is what you want. Your wish list is what you ask for.",
      },
      {
        title: "Form Your Procurement Committee",
        snippet: "Now that you know what you're looking for, recruit the team that will hunt those items down.",
      },
    ],
  },
  {
    slug: "online-auction-playbook",
    title: "The Online Auction Playbook",
    subtitle: "A Guide to Maximizing Your Silent Auction's ROI",
    blurb:
      "How to replace the silent auction table with an online auction that reaches every supporter, plus a full promotion plan and ready-to-send templates.",
    cta: "Open the Guide",
    sections: [
      {
        title: "Introduction",
        snippet: "Lush, bundled baskets used to be the standard. After working so many galas each year, we've learned they rarely pay off.",
      },
      {
        title: "Why Go Online",
        snippet: "A silent auction table only reaches the people standing next to it. An online auction reaches everyone who loves your mission.",
      },
      {
        title: "Set the Calendar",
        snippet: "Open bidding seven to ten days before your gala, and close it after the gala ends.",
      },
      {
        title: "Start Every Item at $10",
        snippet: "Every item opens at $10, with $10 increments, no matter its value.",
      },
      {
        title: "Keep the Close Quiet",
        snippet: "We don't promote the closing date. When people know the deadline, they wait for it.",
      },
      {
        title: "Unbundle the Baskets",
        snippet: "A basket tells guests \"deal,\" so they go bargain hunting. Single items sell closer to what they're worth.",
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
        snippet: "Your clerk writes down the winning paddle numbers, and your event software records who is taking home each prize.",
      },
      { title: "Three Questions Worth Asking", snippet: "Before we talk about how to collect the data, it is worth seeing where your gaps are." },
      { title: "What Underbid Recording Is", snippet: "An underbidder is anyone who bid on a lot and didn't win. Most auctions never write their names down." },
      { title: "What You Capture", snippet: "Those messy scratch pages turn into four kinds of information, each answering a different question." },
      { title: "Reading Lot Performance", snippet: "Sale price tells you where a lot ended. It does not tell you how it got there, or what to do next." },
    ],
  },
  {
    slug: "gratitude-plan",
    title: "Donor Gratitude and Stewardship",
    subtitle: "A Framework for Donor Trust, Stewardship and Long-Term Revenue",
    blurb:
      "A stewardship framework built on Thank, Show, Invite, with a donor timeline, ten donor tracks, receipt guidance, and plug-and-play templates.",
    cta: "Open the Guide",
    sections: [
      { title: "Why Gratitude Needs a System", snippet: "Most organizations are grateful for every gift they receive. Far fewer have a system for saying so." },
      {
        title: "The Gratitude Plan (Thank. Show. Invite.)",
        snippet: "The whole framework fits in three questions. Answer each one for every gift, in this order, and you have the core of a healthy stewardship program.",
      },
      { title: "The Golden Rule of Gratitude", snippet: "To decide how to thank a donor, step outside fundraising for a moment and think about a birthday gift." },
      { title: "The Donor Stewardship Timeline", snippet: "Consistency is everything. Run this sequence for every donor." },
      { title: "How to Thank Different Gift Types", snippet: "The right gratitude, to the right donor, at the right time. Use this after any gala, campaign, or first-time gift." },
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
      { title: "Check Your Starting Percentages", snippet: "These starting percentages reflect typical events. Adjust them if your event leans differently." },
      { title: "Work Down Each Section", snippet: "Every section is pre-filled with a suggested starting point: sponsorship levels, ticket prices, giving tiers." },
      { title: "Watch the Running Total", snippet: "Once you scroll past the first step, a bar at the top tracks your projected revenue against your goal as you go." },
    ],
  },
  {
    slug: "event-data-analyzer",
    title: "Event Data Analyzer",
    subtitle: "Reading Your Results",
    blurb:
      "Put in what happened at your event (revenue, guest roster, clerking sheets and the underbid record) and get back a detailed report on what the data means, ready to download and share with your team.",
    cta: "Open the Tool",
    sections: [
      { title: "The Numbers", snippet: "What you set out to raise, and what you actually raised. Leave anything blank that doesn't apply. Blanks are ignored rather than counted as zero." },
      { title: "Live Auction Results", snippet: "The clerking card: what each lot sold for and who won it." },
      { title: "Underbid Record", snippet: "The scratch pages, typed up as they were written: one lot per page, paddle numbers and all." },
      { title: "Paddle Raise", snippet: "The paddle raise tracking sheet. Write the levels as they ended up on the night, not as they were printed." },
      { title: "What Worked, What Didn't", snippet: "Fill this out within 48 hours while the details are still fresh. Skip any row that isn't worth a note." },
      { title: "Your Report", snippet: "This rebuilds itself every time anything above changes, giving you a document you can hand to your board." },
    ],
  },
];

export function getResourceGuide(slug: string): ResourceGuide | undefined {
  return resourceGuides.find((g) => g.slug === slug);
}
