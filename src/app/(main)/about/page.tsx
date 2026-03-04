import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${siteConfig.artistName} — worship artist and songwriter from South Africa.`,
};

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Portrait */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-light-gray">
              {/* PLACEHOLDER: Artist portrait — replace /images/artist-portrait.jpg (900×1200) */}
              <div className="absolute inset-0 bg-gradient-to-b from-charcoal/10 to-charcoal/5 flex items-end justify-center pb-8">
                <span className="text-warm-gray text-sm">Artist Portrait — 900×1200</span>
              </div>
            </div>

            {/* Bio */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
                About
              </p>
              <h1 className="text-4xl md:text-5xl font-light text-charcoal">
                {siteConfig.artistName}
              </h1>
              <div className="mt-6 space-y-4 text-warm-gray leading-relaxed">
                {siteConfig.epk.longBio.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Mission ───────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <Container className="max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">
            The Mission
          </p>
          <blockquote className="text-2xl md:text-3xl font-light italic text-charcoal leading-relaxed">
            &ldquo;To write songs that help people encounter God — in the church, in the car, in the quiet moments.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm text-warm-gray">
            — {siteConfig.artistName}
          </p>
        </Container>
      </section>

      {/* ── Testimonials ──────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
              Endorsements
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-charcoal">
              What People Say
            </h2>
          </div>
          <div className="space-y-12 max-w-2xl mx-auto">
            {siteConfig.testimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        heading={siteConfig.booking.headline}
        description={siteConfig.booking.description}
        primaryLabel="Book Now"
        primaryHref="/book"
        secondaryLabel="Listen to the Album"
        secondaryHref="/listen"
        dark
      />
    </>
  );
}
