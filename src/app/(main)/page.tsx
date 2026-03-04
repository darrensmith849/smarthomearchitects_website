import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";
import { TrackList } from "@/components/ui/track-list";
import { VideoEmbed } from "@/components/ui/video-embed";
import { EmailCapture } from "@/components/ui/email-capture";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { CtaSection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative py-28 md:py-44 overflow-hidden">
        {/* Background gradient placeholder — replace with image */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/80" />
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay" />
        <Container className="relative z-10 text-white">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
            The Debut Album
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight">
            {siteConfig.album.title}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/70 font-light max-w-xl">
            {siteConfig.album.subtitle}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/listen"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-white text-sm font-medium tracking-wide rounded-lg hover:bg-accent-dark transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Listen Now
            </Link>
            <Link
              href="/album"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-white/30 text-white text-sm font-medium tracking-wide rounded-lg hover:bg-white/10 transition-colors"
            >
              Buy Album
            </Link>
          </div>
        </Container>
      </section>

      {/* ── Featured Release ──────────────────────────────── */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square max-w-md mx-auto md:mx-0 rounded-2xl overflow-hidden bg-light-gray">
              {/* PLACEHOLDER: Album cover — replace /images/album-cover.jpg (1200×1200) */}
              <div className="absolute inset-0 bg-gradient-to-br from-charcoal/20 to-charcoal/5 flex items-center justify-center">
                <span className="text-warm-gray text-sm">Album Cover — 1200×1200</span>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
                Featured Release
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-charcoal">
                {siteConfig.album.title}
              </h2>
              <p className="mt-2 text-warm-gray">
                by {siteConfig.artistName}
              </p>
              <p className="mt-4 text-warm-gray leading-relaxed">
                {siteConfig.album.storyParagraphs[0]}
              </p>
              <div className="mt-6 space-y-3">
                {siteConfig.products.slice(0, 2).map((p) => (
                  <div key={p.id} className="flex items-center justify-between py-2 border-b border-light-gray/60">
                    <div>
                      <span className="text-sm font-medium text-charcoal">{p.name}</span>
                      <span className="text-xs text-warm-gray ml-2">{p.subtitle}</span>
                    </div>
                    <Link
                      href="/album"
                      className="text-sm text-accent hover:text-accent-dark transition-colors"
                    >
                      {p.priceZAR}
                    </Link>
                  </div>
                ))}
              </div>
              <Link
                href="/album"
                className="inline-flex items-center mt-6 text-sm text-accent hover:text-accent-dark transition-colors"
              >
                View all options &rarr;
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Listen (Previews) ─────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
              Preview
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-charcoal">
              Listen
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <TrackList tracks={siteConfig.tracks} limit={5} />
          </div>
          <div className="text-center mt-8">
            <Link
              href="/listen"
              className="inline-flex items-center text-sm text-accent hover:text-accent-dark transition-colors"
            >
              See all tracks &rarr;
            </Link>
          </div>
        </Container>
      </section>

      {/* ── Email Capture ─────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <Container>
          <EmailCapture />
        </Container>
      </section>

      {/* ── Watch ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
              Watch
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-charcoal">
              Videos
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {siteConfig.videos.slice(0, 2).map((v, i) => (
              <VideoEmbed key={i} video={v} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/videos"
              className="inline-flex items-center text-sm text-accent hover:text-accent-dark transition-colors"
            >
              More videos &rarr;
            </Link>
          </div>
        </Container>
      </section>

      {/* ── The Heart Behind It ───────────────────────────── */}
      <section className="py-20 md:py-28">
        <Container className="text-center max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">
            The Heart Behind It
          </p>
          <blockquote className="text-2xl md:text-3xl font-light italic text-charcoal leading-relaxed">
            &ldquo;{siteConfig.album.pullQuote}&rdquo;
          </blockquote>
          <p className="mt-4 text-sm text-warm-gray">
            — {siteConfig.artistName}
          </p>
          <Link
            href="/about"
            className="inline-flex items-center mt-6 text-sm text-accent hover:text-accent-dark transition-colors"
          >
            Read more &rarr;
          </Link>
        </Container>
      </section>

      {/* ── Testimonials ──────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
              What People Are Saying
            </p>
          </div>
          <div className="space-y-12">
            {siteConfig.testimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── Booking CTA ───────────────────────────────────── */}
      <CtaSection
        heading={siteConfig.booking.headline}
        description={siteConfig.booking.description}
        primaryLabel="Book Now"
        primaryHref="/book"
        secondaryLabel="Learn More"
        secondaryHref="/about"
        dark
      />
    </>
  );
}
