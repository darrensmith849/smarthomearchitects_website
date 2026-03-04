import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { PricingCard } from "@/components/ui/pricing-card";
import { BuyButton } from "@/components/ui/buy-button";

export const metadata: Metadata = {
  title: "Shop & Support",
  description: `Buy ${siteConfig.album.title} by ${siteConfig.artistName}. MP3, lossless, and worship team packs available. Support the music directly.`,
};

export default function ShopPage() {
  return (
    <>
      <PageHero
        title="Shop & Support"
        subtitle="Buy the album, get worship resources, or support future projects directly."
        compact
      />

      {/* ── Product Tiers ─────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-charcoal">
              {siteConfig.album.title}
            </h2>
            <p className="mt-2 text-warm-gray">
              Pay with PayFast (ZAR) or PayPal (USD). Instant digital delivery.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {siteConfig.products.map((product) => (
              <PricingCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── Support / Donate ──────────────────────────────── */}
      <section className="py-16 md:py-24">
        <Container className="max-w-xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
            Give
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-charcoal">
            Support the Music
          </h2>
          <p className="mt-4 text-warm-gray leading-relaxed">
            {siteConfig.donate.description}
          </p>
          <div className="mt-8 space-y-3 max-w-xs mx-auto">
            <BuyButton
              label="Support via PayFast (ZAR)"
              href={siteConfig.donate.payfast}
              variant="primary"
            />
            <BuyButton
              label="Support via PayPal (USD)"
              href={siteConfig.donate.paypal}
              variant="secondary"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
