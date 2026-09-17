import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "epa_resources_unlocked";
const MAX_AGE = 60 * 60 * 24 * 90; // 90 days

export async function POST(req: NextRequest) {
  const { code } = await req.json().catch(() => ({ code: "" }));
  const expected = process.env.RESOURCES_ACCESS_CODE;

  if (!expected) {
    // Misconfiguration — fail closed, but don't leak why to the client.
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  if (typeof code !== "string" || code.trim().toLowerCase() !== expected.trim().toLowerCase()) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE_NAME, "1", {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: MAX_AGE,
    path: "/",
  });
  return res;
}
