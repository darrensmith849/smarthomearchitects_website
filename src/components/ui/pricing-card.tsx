import { BuyButton } from "./buy-button";
import type { Product } from "@/data/site";

export function PricingCard({ product }: { product: Product }) {
  const isFeatured = "featured" in product && product.featured;

  return (
    <div
      className={`relative rounded-2xl p-6 md:p-8 flex flex-col ${
        isFeatured
          ? "bg-charcoal text-white ring-2 ring-accent"
          : "bg-white border border-light-gray"
      }`}
    >
      {isFeatured && (
        <span className="absolute -top-3 left-6 text-[11px] uppercase tracking-widest font-medium bg-accent text-white px-3 py-1 rounded-full">
          Most Popular
        </span>
      )}

      <h3 className="text-lg font-medium">{product.name}</h3>
      <p
        className={`text-sm mt-1 ${
          isFeatured ? "text-white/60" : "text-warm-gray"
        }`}
      >
        {product.subtitle}
      </p>

      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-3xl font-light">{product.priceZAR}</span>
        <span
          className={`text-sm ${
            isFeatured ? "text-white/50" : "text-warm-gray"
          }`}
        >
          / {product.priceUSD}
        </span>
      </div>

      <ul className="mt-6 space-y-2 flex-1">
        {product.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke={isFeatured ? "#C8A97E" : "#C8A97E"}
              strokeWidth="2"
              className="shrink-0 mt-0.5"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className={isFeatured ? "text-white/80" : "text-warm-gray"}>
              {f}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-6 space-y-2">
        <BuyButton
          label={`Buy — ${product.priceZAR}`}
          href={product.payfast}
          variant={isFeatured ? "accent" : "primary"}
        />
        <BuyButton
          label={`Buy — ${product.priceUSD} (PayPal)`}
          href={product.paypal}
          variant="secondary"
        />
      </div>
    </div>
  );
}
