import type { Metadata } from "next";
import { site } from "@/lib/site";

// The unlock page is just a code form, reached with a different ?next= for
// every gated guide. Without this it inherits the root layout's canonical
// ("/" on the main Wix domain), which made Google flag it as "Duplicate,
// Google chose different canonical than user". Keep it out of the index.
export const metadata: Metadata = {
  title: "Enter Your Access Code",
  alternates: { canonical: `${site.guidesUrl}/resources/unlock` },
  robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
};

export default function UnlockLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
