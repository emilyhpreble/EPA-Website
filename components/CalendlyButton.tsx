import { site } from "@/lib/site";

type Variant = "cream" | "plum" | "coral" | "outline-cream" | "outline-plum";

export function CalendlyButton({
  children = "Book a Free Strategy Call",
  variant = "cream",
  className = "",
}: {
  children?: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-10 py-4 text-xs uppercase tracking-[0.25em] transition-colors";
  const styles =
    variant === "cream"
      ? "bg-cream text-plum hover:bg-cream-light"
      : variant === "plum"
      ? "bg-plum text-cream hover:bg-plum-deep"
      : variant === "coral"
      ? "bg-coral text-cream hover:bg-coral-dark"
      : variant === "outline-cream"
      ? "border border-cream text-cream hover:bg-cream hover:text-plum"
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
