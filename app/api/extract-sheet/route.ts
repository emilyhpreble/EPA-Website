import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "epa_resources_unlocked";
const MAX_BYTES = 8 * 1024 * 1024; // 8MB, after the client's own downscale
const MODEL = "claude-sonnet-5";

// Each format mirrors the exact plain-text grammar the analyzer's own parser
// expects (see parseLive / parseUnderbid / parseAppeal in analyzer.part) —
// the model is only ever transcribing a photo into that same shape, never
// inventing a new one, so the existing parser can read its output unchanged.
const PROMPTS: Record<string, string> = {
  live: `You are transcribing a photo of a benefit auction clerking sheet — the card an auctioneer's clerk uses to record what each live-auction lot sold for and who won it.

Output ONLY the transcribed lots, one per line, in this exact format:
<lot number>) <item name> — $<price> — #<winning paddle number>

Rules:
- If a lot sold to more than one bidder, list every winning paddle number on that line (or a following line containing only paddle numbers), separated by commas.
- If present on the sheet, you may append, in this order, any of: "fmv $<amount>", "cat <category word>", "time <m>:<ss>" — otherwise omit them.
- If a price or paddle number is illegible, write ??? in its place rather than guessing.
- No commentary, no markdown, no headers, no code fences — just the lot lines.

Example of the exact output format:
1) Wine Country Weekend — $1800 — #316
2) Golf Foursome Package — $1000 — #114  cat experience
3) Mountain Cabin Stay — $1100 — #072  fmv $900  cat travel`,

  underbid: `You are transcribing a photo of a benefit auctioneer's underbid scratch page — a handwritten record of every paddle number that bid on one live-auction lot, written top to bottom in the order they bid.

Output ONLY the transcribed page(s) in this exact format:
Lot <number> — <item name, if written>
open $<opening bid, if written>
inc $<bid increment, if written>
<paddle number>
<paddle number>
...
sold <winning paddle number>
$<hammer price>

Rules:
- One paddle number per line, in the exact top-to-bottom order they appear on the page — this order is the whole point, never re-sort it.
- If a paddle number is illegible, write ??? on its own line rather than guessing or skipping it.
- If a table number is written next to a paddle, append " t<table number>" to that paddle's line.
- If there is more than one page/lot in the photo, separate them with a single blank line.
- "sold <paddle>" and the hammer price always come last for that lot.
- No commentary, no markdown, no code fences — just the transcribed lines.

Example of the exact output format:
Lot 3 — Weekend Getaway
open $2000
inc $500
101
320
420
sold 333
$10K`,

  appeal: `You are transcribing a photo of a benefit auction's special appeal / paddle raise tracking sheet — the sheet used during the fund-a-need to mark which paddle numbers gave at which dollar level.

Output ONLY the transcribed levels in this exact format:
$<giving level>: <paddle>, <paddle>, <paddle>

Rules:
- One giving level per line, highest to lowest if the sheet is ordered that way.
- List every paddle number that gave at that level, comma separated. Use a name instead of a number only if that is what is written.
- A lump sum (not tied to a specific printed level) goes on its own line using exactly one of these labels: "pre-commit:", "paddle drop:", "match:", or "other:", followed by the dollar amount, and the paddle number in parentheses if one is written.
- If a number is illegible, write ??? in its place rather than guessing.
- No commentary, no markdown, no code fences — just the transcribed lines.

Example of the exact output format:
$7,500: 6
$2,500: 3, 13, 26
$1,000: 2, 1
$500: 8, 25, 14
pre-commit: $10,000 #5
paddle drop: $1,950`,
};

export async function POST(req: NextRequest) {
  const unlocked = req.cookies.get(COOKIE_NAME)?.value === "1";
  if (!unlocked) {
    return NextResponse.json({ error: "Not authorized." }, { status: 401 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    // Misconfiguration — fail closed, but don't leak why to the client.
    return NextResponse.json(
      { error: "Photo reading isn't set up on the server yet." },
      { status: 500 }
    );
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: "Could not read the upload." }, { status: 400 });
  }

  const kind = form.get("kind");
  const prompt = typeof kind === "string" ? PROMPTS[kind] : undefined;
  if (!prompt) {
    return NextResponse.json({ error: "Unknown sheet type." }, { status: 400 });
  }

  const file = form.get("image");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No photo was attached." }, { status: 400 });
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: "That photo is too large." }, { status: 400 });
  }
  if (!/^image\/(jpeg|png|webp)$/.test(file.type)) {
    return NextResponse.json({ error: "Please upload a JPEG, PNG, or WebP photo." }, { status: 400 });
  }

  const bytes = Buffer.from(await file.arrayBuffer());
  const base64 = bytes.toString("base64");

  let anthropicRes: Response;
  try {
    anthropicRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 1024,
        temperature: 0,
        messages: [
          {
            role: "user",
            content: [
              { type: "image", source: { type: "base64", media_type: file.type, data: base64 } },
              { type: "text", text: prompt },
            ],
          },
        ],
      }),
    });
  } catch {
    return NextResponse.json({ error: "Could not reach the reading service." }, { status: 502 });
  }

  if (!anthropicRes.ok) {
    return NextResponse.json(
      { error: "The reading service could not process that photo." },
      { status: 502 }
    );
  }

  const data = await anthropicRes.json().catch(() => null);
  const text = data?.content?.[0]?.type === "text" ? (data.content[0].text as string) : "";
  if (!text.trim()) {
    return NextResponse.json({ error: "Could not read anything on that photo." }, { status: 422 });
  }

  return NextResponse.json({ text: text.trim() });
}
