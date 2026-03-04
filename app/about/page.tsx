import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TrackedAnchor } from "@/components/ui/tracked-anchor";
import { siteConfig } from "@/lib/site";

const principles = [
  "Design-led engineering that respects architecture and interiors",
  "Precision installation standards and commissioning discipline",
  "Long-term reliability through structured support and monitoring",
];

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Smart Home Architects, a South African smart home integration studio focused on premium design-led delivery.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="section-space pb-14 pt-16 md:pb-20 md:pt-24">
        <Container>
          <span className="kicker">About Us</span>
          <h1 className="h1-display mt-4 max-w-4xl text-5xl md:text-7xl">A Specialist Integration Studio for Luxury Homes</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--color-text-muted)]">
            Smart Home Architects delivers complete automation systems for high-value residences and boutique
            hospitality spaces, with service centered around design integrity and technical confidence.
          </p>
        </Container>
      </section>

      <section className="section-space border-t border-[var(--color-border)] pt-12 md:pt-16">
        <Container>
          <SectionHeading
            kicker="Principles"
            title="How We Work"
            description="Our approach is calm, methodical, and accountable from concept through long-term support."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {principles.map((item) => (
              <article key={item} className="surface-panel rounded-[var(--radius-md)] p-6">
                <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{item}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space border-t border-[var(--color-border)]">
        <Container>
          <div className="surface-panel rounded-[var(--radius-lg)] p-8 md:p-12">
            <span className="kicker">Service Area</span>
            <h2 className="h1-display mt-4 text-4xl md:text-6xl">{siteConfig.location}</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-text-muted)] md:text-lg">
              We support private clients, architects, and developers across premium residential corridors in the Western Cape.
            </p>
            <div className="mt-8">
              <TrackedAnchor
                href="/contact"
                eventName="book_call_click"
                eventProps={{ source: "about_final_cta" }}
                className="button-base button-primary"
              >
                Book a Discovery Call
              </TrackedAnchor>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
