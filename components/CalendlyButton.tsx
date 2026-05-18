import { site } from "@/lib/site";

type Variant = "primary" | "outline";

export function CalendlyButton({
  children = "Book a Free Strategy Call",
  variant = "primary",
  className = "",
}: {
  children?: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-8 py-4 text-xs uppercase tracking-[0.2em] transition-colors";
  const styles =
    variant === "primary"
      ? "bg-plum text-cream hover:bg-plum-deep"
      : "border border-plum text-plum hover:bg-plum hover:text-cream";
  return (
    <a
      href={site.calendly}
      target="_blank"
      rel="noopener"
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
}
