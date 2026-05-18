"use client";

import { useState } from "react";

export type Testimonial = { quote: string; author: string; org: string };

export function TestimonialSlider({ items }: { items: Testimonial[] }) {
  const [i, setI] = useState(0);
  const prev = () => setI((p) => (p - 1 + items.length) % items.length);
  const next = () => setI((p) => (p + 1) % items.length);
  const t = items[i];

  return (
    <figure className="relative">
      <span aria-hidden className="display-headline block text-7xl text-coral leading-none">&ldquo;</span>

      <blockquote className="mt-4">
        <p className="display-headline text-2xl leading-snug text-plum md:text-3xl">{t.quote}</p>
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
          <span className="text-xs uppercase tracking-[0.2em] text-plum/60">
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
