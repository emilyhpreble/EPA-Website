"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-plum text-cream">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <Link
          href="https://www.emilyprebleauctions.com/"
          className="font-serif text-2xl tracking-tight text-cream hover:text-cream-light"
          aria-label={`${site.name} — home`}
        >
          <span style={{ fontStyle: "normal" }}>Emily Preble </span>
          <span style={{ fontStyle: "italic" }}>Auctions</span>
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="primary-menu"
          className="text-sm font-semibold uppercase tracking-normal text-cream hover:text-coral"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav
          id="primary-menu"
          aria-label="Primary"
          className="border-t border-cream/10 bg-plum"
        >
          <ul className="mx-auto flex max-w-7xl flex-col gap-4 px-8 py-8 text-base font-semibold uppercase tracking-normal">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-cream hover:text-coral"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.calendly}
                target="_blank"
                rel="noopener"
                className="block py-1 text-coral hover:text-cream"
              >
                Book a Strategy Call →
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
