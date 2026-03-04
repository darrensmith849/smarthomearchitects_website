import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TrackedAnchor } from "@/components/ui/tracked-anchor";

const processStages = [
  {
    title: "Discovery",
    description:
      "We clarify project intent, lifestyle priorities, and architectural context before design decisions are made.",
  },
  {
    title: "System Design",
    description:
      "Detailed technical planning aligns control, lighting, AV, shading, and security with construction milestones.",
  },
  {
    title: "Installation",
    description:
      "Infrastructure and equipment are installed with strict site coordination and quality control.",
  },
  {
    title: "Handover",
    description:
      "Commissioning, calibration, and guided onboarding ensure immediate confidence and ease of use.",
  },
  {
    title: "Ongoing Support",
    description:
      "Proactive updates, remote diagnostics, and service continuity protect long-term system performance.",
  },
];

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "Explore Smart Home Architects' five-stage delivery process from discovery and design through installation, handover, and support.",
  alternates: {
    canonical: "/process",
  },
};

export default function ProcessPage() {
  return (
    <>
      <section className="section-space pb-14 pt-16 md:pb-20 md:pt-24">
        <Container>
          <span className="kicker">Our Process</span>
          <h1 className="h1-display mt-4 max-w-4xl text-5xl md:text-7xl">Structured Delivery, White-Glove Execution</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--color-text-muted)]">
            Every project follows a disciplined framework that protects design intent, technical reliability, and
            long-term service quality.
          </p>
        </Container>
      </section>

      <section className="section-space border-t border-[var(--color-border)] pt-12 md:pt-16">
        <Container>
          <SectionHeading
            kicker="Framework"
            title="Five-Stage Delivery"
            description="Clear milestones, clear accountability, and full coordination with architects, designers, and contractors."
          />
          <div className="grid gap-4 md:grid-cols-5">
            {processStages.map((stage, index) => (
              <article key={stage.title} className="surface-panel rounded-[var(--radius-md)] p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">Step {index + 1}</p>
                <h2 className="mt-3 font-serif text-3xl text-[var(--color-text)]">{stage.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{stage.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space border-t border-[var(--color-border)]">
        <Container>
          <div className="surface-panel rounded-[var(--radius-lg)] p-8 md:p-12">
            <span className="kicker">Project Planning</span>
            <h2 className="h1-display mt-4 text-4xl md:text-6xl">Book a Discovery Call</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-text-muted)] md:text-lg">
              Bring your plans, timeline, and scope. We will define the right next step and system strategy.
            </p>
            <div className="mt-8">
              <TrackedAnchor
                href="/contact"
                eventName="book_call_click"
                eventProps={{ source: "process_final_cta" }}
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
