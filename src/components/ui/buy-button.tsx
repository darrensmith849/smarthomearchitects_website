interface BuyButtonProps {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "accent";
  fullWidth?: boolean;
}

export function BuyButton({
  label,
  href,
  variant = "primary",
  fullWidth = true,
}: BuyButtonProps) {
  const base = `inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide rounded-lg transition-all duration-200 ${
    fullWidth ? "w-full" : ""
  }`;

  const variants = {
    primary:
      "bg-charcoal text-white hover:bg-charcoal/90",
    secondary:
      "bg-transparent border border-light-gray text-warm-gray hover:border-charcoal hover:text-charcoal",
    accent:
      "bg-accent text-white hover:bg-accent-dark",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]}`}
    >
      {label}
    </a>
  );
}
