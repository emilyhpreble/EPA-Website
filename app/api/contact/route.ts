import { NextResponse } from "next/server";

// WIREFRAME ONLY — does not currently send email. Enable real delivery
// later by wiring in Resend (or another provider) here.

export async function POST(req: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { firstName, lastName, email, message } = payload as Record<string, string>;
  if (!email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  console.log("[contact-form][wireframe]", { firstName, lastName, email, message });

  return NextResponse.json({ ok: true, wireframe: true });
}
