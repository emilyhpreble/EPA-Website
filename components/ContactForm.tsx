"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body?.error ?? "Submission failed");
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-forest/20 bg-cream-light p-8 text-center">
        <p className="font-serif text-2xl text-plum">Thanks — message received.</p>
        <p className="mt-2 text-muted">Emily will be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field name="firstName" label="First Name" required />
        <Field name="lastName" label="Last Name" required />
      </div>
      <Field name="email" type="email" label="Email" required />
      <Field name="message" label="Message" as="textarea" required />

      <button
        type="submit"
        disabled={status === "sending"}
        className="justify-self-start rounded-full bg-plum px-10 py-4 text-xs uppercase tracking-[0.2em] text-cream transition-colors hover:bg-plum-deep disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Send"}
      </button>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-700">
          {error}
        </p>
      )}
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
  as = "input",
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  as?: "input" | "textarea";
}) {
  const className =
    "w-full rounded-md border border-plum/20 bg-cream-light px-4 py-3 text-ink placeholder:text-muted focus:border-plum focus:outline-none";
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.15em] text-forest">
        {label}
        {required && <span aria-hidden> *</span>}
      </span>
      {as === "textarea" ? (
        <textarea name={name} required={required} rows={6} className={className} />
      ) : (
        <input name={name} type={type} required={required} className={className} />
      )}
    </label>
  );
}
