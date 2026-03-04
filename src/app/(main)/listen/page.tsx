import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { TrackList } from "@/components/ui/track-list";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Listen",
  description: `Preview tracks from ${siteConfig.album.title} by ${siteConfig.artistName}. Stream singles and buy the full album.`,
};

export default function ListenPage() {
  const singles = siteConfig.tracks.filter((t) => t.isFullSingle);
  const allTracks = siteConfig.tracks;

  return (
    <>
      <PageHero
        title="Listen"
        subtitle={`Preview tracks from ${siteConfig.album.title}. Full singles marked below.`}
        compact
      />

      {/* ── Singles ────────────────────────────────────────── */}
      {singles.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <Container className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
              Singles — Full Length
            </p>
            <h2 className="text-2xl md:text-3xl font-light text-charcoal mb-8">
              Available Now
            </h2>
            <TrackList tracks={singles} />
          </Container>
        </section>
      )}

      {/* ── All Tracks ────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <Container className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
            Full Album
          </p>
          <h2 className="text-2xl md:text-3xl font-light text-charcoal mb-8">
            All Tracks
          </h2>
          <TrackList tracks={allTracks} />
        </Container>
      </section>

      <CtaSection
        heading="Love what you hear?"
        description="Get the full album in MP3 or lossless quality. Instant digital delivery."
        primaryLabel="Buy the Album"
        primaryHref="/album"
        secondaryLabel="View Shop"
        secondaryHref="/shop"
        dark
      />
    </>
  );
}
