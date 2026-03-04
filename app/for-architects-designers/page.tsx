import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TrackedAnchor } from "@/components/ui/tracked-anchor";

const valuePoints = [
  "Specification-ready lighting, control, AV, and security documentation",
  "Early-stage coordination to reduce site revisions and variation risk",
  "Interface and hardware recommendations aligned with interior language",
  "Commissioning standards and support plans suitable for premium clients",
];

export const metadata: Metadata = {
  title: "For Architects & Designers",
  description:
    "Trade-focused collaboration for architects and interior designers delivering premium automation-ready projects.",
  alternates: {
    canonical: "/for-architects-designers",
  },
};

export default function ArchitectsDesignersPage() {
  return (
    <>
      <section className="section-space pb-14 pt-16 md:pb-20 md:pt-24">
        <Container>
          <span className="kicker">Trade Partnerships</span>
          <h1 className="h1-display mt-4 max-w-4xl text-5xl md:text-7xl">For Architects and Interior Designers</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--color-text-muted)]">
            We collaborate as a technical design partner, helping teams protect visual intent while delivering reliable
            smart infrastructure.
          </p>
        </Container>
      </section>

      <section className="section-space border-t border-[var(--color-border)] pt-12 md:pt-16">
        <Container>
          <SectionHeading
            kicker="Collaboration"
            title="Specification Support"
            description="Clear documentation, predictable installation standards, and disciplined site coordination."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {valuePoints.map((point) => (
              <article key={point} className="surface-panel rounded-[var(--radius-md)] p-5">
                <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{point}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space border-t border-[var(--color-border)]">
        <Container>
          <div className="surface-panel rounded-[var(--radius-lg)] p-8 md:p-12">
            <span className="kicker">Trade Resources</span>
            <h2 className="h1-display mt-4 text-4xl md:text-6xl">Request Specification Pack</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-text-muted)] md:text-lg">
              Receive our planning guide and specification baseline for premium residential and boutique hospitality
              projects.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <TrackedAnchor
                href="/smart-home-planning-guide.pdf"
                eventName="guide_download_click"
                eventProps={{ source: "trade_page" }}
                className="button-base button-secondary"
              >
                Download Planning Guide
              </TrackedAnchor>
              <TrackedAnchor
                href="/contact"
                eventName="book_call_click"
                eventProps={{ source: "trade_page" }}
                className="button-base button-primary"
              >
                Book Trade Consultation
              </TrackedAnchor>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
