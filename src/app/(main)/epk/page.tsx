import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { SocialLinks } from "@/components/ui/social-links";

export const metadata: Metadata = {
  title: "Electronic Press Kit",
  description: `Press kit for ${siteConfig.artistName} — bio, photos, music, and contact information.`,
};

export default function EpkPage() {
  return (
    <>
      <PageHero
        title="Press Kit"
        subtitle={`Everything you need to feature ${siteConfig.artistName}.`}
        compact
      />

      <section className="py-16 md:py-24 bg-white">
        <Container className="max-w-3xl">
          {/* Short bio */}
          <div className="mb-16">
            <h2 className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
              Bio
            </h2>
            <p className="text-warm-gray leading-relaxed">
              {siteConfig.epk.shortBio}
            </p>
          </div>

          {/* Latest release */}
          <div className="mb-16">
            <h2 className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
              Latest Release
            </h2>
            <div className="flex items-start gap-6">
              <div className="w-32 h-32 shrink-0 rounded-lg bg-light-gray flex items-center justify-center">
                <span className="text-warm-gray text-xs">Cover</span>
              </div>
              <div>
                <h3 className="text-lg font-medium text-charcoal">
                  {siteConfig.album.title}
                </h3>
                <p className="text-sm text-warm-gray mt-1">
                  {siteConfig.album.subtitle}
                </p>
                <p className="text-sm text-warm-gray mt-1">
                  Release date: {siteConfig.album.releaseDate}
                </p>
                <p className="text-sm text-warm-gray mt-1">
                  {siteConfig.tracks.length} tracks
                </p>
              </div>
            </div>
          </div>

          {/* Photos */}
          <div className="mb-16">
            <h2 className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
              Press Photos
            </h2>
            <p className="text-sm text-warm-gray mb-4">
              High-resolution photos available for editorial use. Credit: PLACEHOLDER_PHOTOGRAPHER.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {siteConfig.epk.highResPhotos.map((photo, i) => (
                <div key={i} className="aspect-[4/3] rounded-lg bg-light-gray flex items-center justify-center">
                  {/* PLACEHOLDER: Replace with actual press photos */}
                  <span className="text-warm-gray text-xs">{photo.caption}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="mb-16">
            <h2 className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
              Links
            </h2>
            <SocialLinks />
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
              Press Contact
            </h2>
            <p className="text-warm-gray">
              For interviews, features, and collaborations:
            </p>
            <a
              href={`mailto:${siteConfig.epk.pressContact}`}
              className="inline-block mt-2 text-accent hover:text-accent-dark transition-colors"
            >
              {siteConfig.epk.pressContact}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
