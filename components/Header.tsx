import Link from "next/link";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="border-b border-plum/10 bg-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link
          href="/"
          className="font-serif text-xl tracking-wide text-plum hover:text-plum-deep"
          aria-label={`${site.name} — home`}
        >
          {site.name}
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-8 text-sm uppercase tracking-[0.15em] text-plum">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-forest transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
