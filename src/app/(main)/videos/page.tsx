import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { VideoEmbed } from "@/components/ui/video-embed";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Videos",
  description: `Watch music videos, live sessions, and behind-the-scenes content from ${siteConfig.artistName}.`,
};

export default function VideosPage() {
  return (
    <>
      <PageHero
        title="Videos"
        subtitle="Music videos, live acoustic sessions, and behind-the-scenes stories."
        compact
      />

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {siteConfig.videos.map((video, i) => (
              <VideoEmbed key={i} video={video} />
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        heading="Hear the full album"
        primaryLabel="Listen Now"
        primaryHref="/listen"
        secondaryLabel="Buy Album"
        secondaryHref="/album"
      />
    </>
  );
}
