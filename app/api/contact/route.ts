import { NextResponse } from "next/server";

// WIREFRAME ONLY — does not currently send email.
// To enable: set RESEND_API_KEY + CONTACT_TO_EMAIL in Vercel env vars,
// then uncomment the Resend block below and `npm install resend`.

export async function POST(req: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { firstName, lastName, email, message } = payload as Record<string, string>;
  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  // ─── TODO (Emily): enable real delivery ──────────────────────────────────
  // 1. Sign up at https://resend.com (free).
  // 2. Verify a sender domain (e.g. emilyprebleauctions.com).
  // 3. Add to Vercel project env vars:
  //      RESEND_API_KEY=re_xxx
  //      CONTACT_TO_EMAIL=your@inbox.com  (or Honeybook intake address)
  // 4. `npm install resend`
  // 5. Uncomment:
  //
  // const { Resend } = await import("resend");
  // const resend = new Resend(process.env.RESEND_API_KEY!);
  // await resend.emails.send({
  //   from: "Emily Preble Auctions <hello@emilyprebleauctions.com>",
  //   to: process.env.CONTACT_TO_EMAIL!,
  //   replyTo: email,
  //   subject: `New inquiry from ${firstName} ${lastName}`,
  //   text: `From: ${firstName} ${lastName} <${email}>\n\n${message}`,
  // });

  console.log("[contact-form][wireframe]", { firstName, lastName, email, message });

  return NextResponse.json({ ok: true, wireframe: true });
}
