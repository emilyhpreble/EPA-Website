"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm({ onDark = false }: { onDark?: boolean }) {
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

  const labelColor = onDark ? "text-cream/80" : "text-plum";
  const inputClass = onDark
    ? "w-full border-0 border-b border-cream/40 bg-transparent px-0 py-2 text-cream placeholder:text-cream/40 focus:border-cream focus:outline-none"
    : "w-full border-0 border-b border-plum/40 bg-transparent px-0 py-2 text-plum placeholder:text-plum/40 focus:border-plum focus:outline-none";

  if (status === "success") {
    return (
      <div className={onDark ? "text-cream" : "text-plum"}>
        <p className="display-headline display-headline-upright text-2xl">Thanks — message received.</p>
        <p className="mt-2 opacity-80">Emily will be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Field name="firstName" label="First Name" labelColor={labelColor} inputClass={inputClass} />
        <Field name="lastName" label="Last Name" labelColor={labelColor} inputClass={inputClass} />
      </div>
      <Field name="email" type="email" label="Email" required labelColor={labelColor} inputClass={inputClass} />
      <Field name="message" label="Message" as="textarea" labelColor={labelColor} inputClass={inputClass} />

      <button
        type="submit"
        disabled={status === "sending"}
        className={`mt-2 justify-self-start rounded-full px-10 py-4 text-sm font-semibold uppercase tracking-normal transition-colors disabled:opacity-50 ${
          onDark ? "bg-cream text-plum hover:bg-cream-light" : "bg-plum text-cream hover:bg-plum-deep"
        }`}
      >
        {status === "sending" ? "Sending…" : "Send"}
      </button>

      {status === "error" && (
        <p role="alert" className={onDark ? "text-cream/90 text-sm" : "text-red-700 text-sm"}>
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
  labelColor,
  inputClass,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  as?: "input" | "textarea";
  labelColor: string;
  inputClass: string;
}) {
  return (
    <label className="block">
      <span className={`mb-2 block text-xs uppercase tracking-normal ${labelColor}`}>
        {label}
        {required && <span aria-hidden> *</span>}
      </span>
      {as === "textarea" ? (
        <textarea name={name} required={required} rows={4} className={inputClass} />
      ) : (
        <input name={name} type={type} required={required} className={inputClass} />
      )}
    </label>
  );
}
