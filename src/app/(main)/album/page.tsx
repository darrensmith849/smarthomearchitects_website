import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";
import { TrackList } from "@/components/ui/track-list";
import { PricingCard } from "@/components/ui/pricing-card";
import { EmailCapture } from "@/components/ui/email-capture";
import { FaqAccordion } from "@/components/ui/faq-accordion";

export const metadata: Metadata = {
  title: `${siteConfig.album.title} — Buy the Album`,
  description: `${siteConfig.album.subtitle}. Available now in MP3, WAV/FLAC, and Worship Team Pack.`,
};

export default function AlbumPage() {
  return (
    <>
      {/* ── Album Hero ────────────────────────────────────── */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-charcoal to-charcoal/95 text-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Album cover */}
            <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden bg-charcoal/50 shadow-2xl">
              {/* PLACEHOLDER: Album cover — replace /images/album-cover.jpg (1200×1200) */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-charcoal/30 flex items-center justify-center">
                <span className="text-white/40 text-sm">Album Cover — 1200×1200</span>
              </div>
            </div>

            {/* Info */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
                Debut Album
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
                {siteConfig.album.title}
              </h1>
              <p className="mt-2 text-white/60">
                by {siteConfig.artistName}
              </p>
              <p className="mt-4 text-white/70 leading-relaxed">
                {siteConfig.album.subtitle}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-accent text-white text-sm font-medium tracking-wide rounded-lg hover:bg-accent-dark transition-colors"
                >
                  Buy Now
                </a>
                <a
                  href="#tracklist"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/30 text-white text-sm font-medium tracking-wide rounded-lg hover:bg-white/10 transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Preview Tracks
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── The Story ─────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <Container className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">
            The Story
          </p>
          <div className="space-y-5">
            {siteConfig.album.storyParagraphs.map((p, i) => (
              <p key={i} className="text-warm-gray leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          <blockquote className="mt-10 pl-6 border-l-2 border-accent">
            <p className="text-xl md:text-2xl font-light italic text-charcoal leading-relaxed">
              &ldquo;{siteConfig.album.pullQuote}&rdquo;
            </p>
          </blockquote>
        </Container>
      </section>

      {/* ── Tracklist ─────────────────────────────────────── */}
      <section id="tracklist" className="py-20 md:py-28 bg-white scroll-mt-20">
        <Container className="max-w-2xl">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
              {siteConfig.tracks.length} Tracks
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-charcoal">
              Tracklist
            </h2>
          </div>
          <TrackList tracks={siteConfig.tracks} />
        </Container>
      </section>

      {/* ── Pricing Tiers ─────────────────────────────────── */}
      <section id="pricing" className="py-20 md:py-28 scroll-mt-20">
        <Container>
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
              Choose Your Edition
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-charcoal">
              Get the Album
            </h2>
            <p className="mt-3 text-warm-gray max-w-lg mx-auto">
              Pay with PayFast (South Africa, ZAR) or PayPal (international, USD). Instant digital delivery.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {siteConfig.products.map((product) => (
              <PricingCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── Email Capture ─────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <EmailCapture />
        </Container>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <Container className="max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-charcoal">
              Frequently Asked Questions
            </h2>
          </div>
          <FaqAccordion items={siteConfig.faq} />
        </Container>
      </section>
    </>
  );
}
