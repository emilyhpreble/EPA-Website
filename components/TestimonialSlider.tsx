"use client";

import { useState } from "react";

export type Testimonial = { quote: string; author: string; org: string };

export function TestimonialSlider({
  items,
  variant = "split",
}: {
  items: Testimonial[];
  variant?: "split" | "centered";
}) {
  const [i, setI] = useState(0);
  const prev = () => setI((p) => (p - 1 + items.length) % items.length);
  const next = () => setI((p) => (p + 1) % items.length);
  const t = items[i];

  if (variant === "centered") {
    // Cream italic quote on olive bg, with arrow buttons + dots
    return (
      <figure className="relative">
        <div className="flex items-center justify-center gap-8">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="text-cream text-4xl leading-none hover:text-plum"
          >
            ‹
          </button>

          <blockquote className="max-w-2xl">
            <p className="display-headline display-headline-upright whitespace-pre-line text-2xl leading-snug text-cream md:text-3xl">
              {t.quote}
            </p>
            <figcaption className="mt-8 text-sm text-plum">
              {t.author}, {t.org}
            </figcaption>
          </blockquote>

          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="text-cream text-4xl leading-none hover:text-plum"
          >
            ›
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2" aria-hidden>
          {items.map((_, idx) => (
            <span
              key={idx}
              className={`block h-2 w-2 rounded-full ${idx === i ? "bg-plum" : "bg-plum/30"}`}
            />
          ))}
        </div>
      </figure>
    );
  }

  // Split variant — used on homepage testimonials right column
  return (
    <figure className="relative">
      <span aria-hidden className="display-headline block text-7xl text-coral leading-none">&ldquo;</span>

      <blockquote className="mt-4">
        <p className="display-headline display-headline-upright whitespace-pre-line text-2xl leading-snug text-plum md:text-3xl">{t.quote}</p>
        <figcaption className="mt-8 text-sm text-coral">
          {t.author}, {t.org}
        </figcaption>
      </blockquote>

      {items.length > 1 && (
        <div className="mt-12 flex items-center gap-6">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="text-coral text-2xl hover:text-plum"
          >
            ‹
          </button>
          <span className="text-xs uppercase tracking-normal text-plum/60">
            {i + 1} / {items.length}
          </span>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="text-coral text-2xl hover:text-plum"
          >
            ›
          </button>
        </div>
      )}
    </figure>
  );
}
