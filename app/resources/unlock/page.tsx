"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function UnlockForm() {
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get("next") || "/resources";
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const res = await fetch("/api/unlock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });
    setLoading(false);
    if (res.ok) {
      window.location.href = next;
    } else {
      setError(true);
    }
  }

  return (
    <section className="bg-plum py-24 text-cream">
      <div className="mx-auto max-w-md px-10 text-center">
        <h1 className="display-headline text-4xl italic">Enter Your Access Code</h1>
        <p className="mt-4 text-sm text-cream/80">
          Don&apos;t have a code?{" "}
          <a
            href="mailto:emily@emilyprebleauctions.com?subject=EPA%20Resource%20Guide%20code"
            className="underline hover:text-coral"
          >
            Send me an email
          </a>{" "}
          to request access.
        </p>
        <form onSubmit={submit} className="mt-10">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Access code"
            autoFocus
            className="w-full border-b border-cream/40 bg-transparent px-2 py-3 text-center text-lg text-cream placeholder:text-cream/40 focus:border-coral focus:outline-none"
          />
          {error && (
            <p className="mt-3 text-sm text-coral">That code didn&apos;t work — check it and try again.</p>
          )}
          <button
            type="submit"
            disabled={loading || !code}
            className="mt-8 w-full bg-coral px-8 py-4 text-sm font-semibold uppercase tracking-wide text-cream hover:bg-cream hover:text-plum disabled:opacity-50"
          >
            {loading ? "Checking…" : "Unlock"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default function UnlockPage() {
  return (
    <Suspense fallback={null}>
      <UnlockForm />
    </Suspense>
  );
}
