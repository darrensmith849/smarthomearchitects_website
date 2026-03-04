import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SolutionGrid } from "@/components/solutions/solution-grid";
import { TrackedAnchor } from "@/components/ui/tracked-anchor";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore premium smart home automation solutions from Smart Home Architects, from lighting and cinema to integrated control and security.",
  alternates: {
    canonical: "/solutions",
  },
  openGraph: {
    title: "Solutions | Smart Home Architects",
    description:
      "Integrated luxury home automation solutions for design-led properties in Cape Town and the Garden Route.",
    url: "/solutions",
    images: [siteConfig.ogImage],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you work with architects and interior designers from concept stage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We coordinate from early design phases to ensure infrastructure, aesthetics, and performance requirements align before construction milestones.",
      },
    },
    {
      "@type": "Question",
      name: "Can multiple solutions be phased across one project timeline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We stage infrastructure, control, and commissioning around practical build windows to avoid delays and preserve design quality.",
      },
    },
  ],
};

export default function SolutionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="section-space pb-14 pt-16 md:pb-20 md:pt-24">
        <Container>
          <span className="kicker">Solutions Overview</span>
          <h1 className="h1-display mt-4 max-w-4xl text-5xl md:text-7xl">
            Integrated Systems Built Around Architecture, Lifestyle, and Reliability
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--color-text-muted)]">
            Every solution is designed as part of a complete ecosystem. We focus on refined operation, invisible
            integration, and long-term serviceability for high-value properties.
          </p>
        </Container>
      </section>

      <section className="section-space border-t border-[var(--color-border)] pt-12 md:pt-16">
        <Container>
          <SectionHeading
            kicker="Capabilities"
            title="Choose a Solution Path"
            description="Select the discipline most relevant to your project. Each solution can be delivered independently or as part of a full-home strategy."
          />
          <SolutionGrid />
        </Container>
      </section>

      <section className="section-space border-t border-[var(--color-border)]">
        <Container>
          <div className="surface-panel rounded-[var(--radius-lg)] p-8 md:p-12">
            <span className="kicker">Plan with Confidence</span>
            <h2 className="h1-display mt-4 text-4xl md:text-6xl">Book a Discovery Call</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-text-muted)] md:text-lg">
              We will recommend a practical system roadmap based on your location, build stage, design direction, and
              performance goals.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <TrackedAnchor
                href="/contact"
                eventName="book_call_click"
                eventProps={{ source: "solutions_page_final_cta" }}
                className="button-base button-primary"
              >
                Book a Discovery Call
              </TrackedAnchor>
              <TrackedAnchor
                href="/contact"
                eventName="guide_download_click"
                eventProps={{ source: "solutions_page_final_cta" }}
                className="button-base button-secondary"
              >
                Get Planning Guide
              </TrackedAnchor>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
