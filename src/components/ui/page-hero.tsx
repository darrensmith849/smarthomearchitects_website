import { Container } from "./container";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  backgroundImage?: string;
  overlay?: boolean;
  compact?: boolean;
}

export function PageHero({
  title,
  subtitle,
  children,
  backgroundImage,
  overlay = true,
  compact = false,
}: PageHeroProps) {
  return (
    <section
      className={`relative ${compact ? "py-16 md:py-24" : "py-24 md:py-40"} ${
        backgroundImage ? "text-white" : "text-charcoal"
      }`}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {backgroundImage && overlay && (
        <div className="absolute inset-0 bg-black/50" />
      )}
      <Container className="relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p
            className={`mt-4 text-lg md:text-xl font-light max-w-2xl ${
              backgroundImage ? "text-white/80" : "text-warm-gray"
            }`}
          >
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </section>
  );
}
