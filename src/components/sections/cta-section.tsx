import { Container } from "@/components/ui/container";
import Link from "next/link";

interface CtaSectionProps {
  heading: string;
  description?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  dark?: boolean;
}

export function CtaSection({
  heading,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  dark = false,
}: CtaSectionProps) {
  return (
    <section
      className={`py-20 md:py-28 ${
        dark ? "bg-charcoal text-white" : "bg-cream"
      }`}
    >
      <Container className="text-center">
        <h2 className="text-3xl md:text-4xl font-light">{heading}</h2>
        {description && (
          <p
            className={`mt-4 text-base max-w-xl mx-auto ${
              dark ? "text-white/60" : "text-warm-gray"
            }`}
          >
            {description}
          </p>
        )}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center px-8 py-3.5 bg-accent text-white text-sm font-medium tracking-wide rounded-lg hover:bg-accent-dark transition-colors"
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className={`inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium tracking-wide rounded-lg border transition-colors ${
                dark
                  ? "border-white/20 text-white/80 hover:border-white/50"
                  : "border-light-gray text-warm-gray hover:border-charcoal hover:text-charcoal"
              }`}
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
}
