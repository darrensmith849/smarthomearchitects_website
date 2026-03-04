import Image from "next/image";
import { SolutionGrid } from "@/components/solutions/solution-grid";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TrackedAnchor } from "@/components/ui/tracked-anchor";
import {
  featuredProjects,
  partnerBrands,
  siteConfig,
  testimonials,
} from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const processSteps = [
  "Discovery",
  "Design",
  "Install",
  "Handover",
  "Support",
];

export default function Home() {
  return (
    <>
      <section className="section-space pb-20 pt-20 md:pb-24 md:pt-28" id="top">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="space-y-8">
              <span className="kicker fade-in">Cape Town & Garden Route</span>
              <h1 className="h1-display fade-in text-5xl text-[var(--color-text)] md:text-7xl" style={{ ["--delay" as string]: "80ms" }}>
                Intelligent Homes,
                <br />
                Architected with Quiet Precision.
              </h1>
              <p
                className="fade-in max-w-2xl text-lg leading-relaxed text-[var(--color-text-muted)] md:text-xl"
                style={{ ["--delay" as string]: "160ms" }}
              >
                Smart Home Architects designs and installs bespoke automation for discerning homes and hospitality
                environments, integrating lighting, cinema, AV, shading, and security into a seamless daily experience.
              </p>
              <div className="fade-in flex flex-wrap gap-4" style={{ ["--delay" as string]: "220ms" }}>
                <TrackedAnchor
                  href="#contact"
                  eventName="book_call_click"
                  eventProps={{ source: "hero" }}
                  className="button-base button-primary"
                >
                  Book a Discovery Call
                </TrackedAnchor>
                <TrackedAnchor
                  href={buildWhatsAppUrl(siteConfig.whatsappNumber)}
                  eventName="whatsapp_click"
                  eventProps={{ source: "hero" }}
                  target="_blank"
                  rel="noreferrer"
                  className="button-base button-secondary"
                >
                  WhatsApp Us
                </TrackedAnchor>
              </div>
            </div>

            <article className="surface-panel fade-in overflow-hidden rounded-[var(--radius-lg)] p-5" style={{ ["--delay" as string]: "200ms" }}>
              <div className="relative h-[20rem] overflow-hidden rounded-[var(--radius-md)] md:h-[25rem]">
                <Image
                  src="/images/hero-interior.jpg"
                  alt="Luxury architectural living room with integrated smart lighting"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-3 px-1 pt-5">
                <p className="kicker">White-Glove Delivery</p>
                <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                  From first concept to long-term support, every detail is managed in coordination with architects,
                  interior studios, and contractors.
                </p>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--color-border)] py-8">
        <Container>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3 text-sm uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
            <span className="text-xs tracking-[0.2em]">Trusted Integrations</span>
            {partnerBrands.map((brand) => (
              <span key={brand}>{brand}</span>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space" id="solutions">
        <Container>
          <SectionHeading
            kicker="Solutions"
            title="Bespoke Systems, Unified Through One Design Language"
            description="Every solution is engineered around architecture, lifestyle, and long-term reliability rather than device-led complexity."
          />

          <SolutionGrid compact />

          <div className="mt-10">
            <TrackedAnchor
              href="#contact"
              className="button-base button-secondary"
              eventName="solutions_preview_click"
              eventProps={{ source: "solutions_section" }}
            >
              Discuss Your Scope
            </TrackedAnchor>
          </div>
        </Container>
      </section>

      <section className="section-space border-t border-[var(--color-border)]" id="projects">
        <Container>
          <SectionHeading
            kicker="Featured Projects"
            title="Proof of Craftsmanship in Every Detail"
            description="Selected residences and retreats where technology supports atmosphere, comfort, and architectural intent."
            action={
              <TrackedAnchor
                href="/projects"
                className="button-base button-secondary"
                eventName="project_teaser_click"
                eventProps={{ source: "projects_heading" }}
              >
                View All Projects
              </TrackedAnchor>
            }
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <article key={project.name} className="surface-panel overflow-hidden rounded-[var(--radius-md)]">
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={`${project.name} smart home automation installation`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">{project.location}</p>
                  <h3 className="font-serif text-2xl text-[var(--color-text)]">{project.name}</h3>
                  <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{project.outcome}</p>
                  <TrackedAnchor
                    href={project.href}
                    className="inline-flex text-xs uppercase tracking-[0.18em] text-[var(--color-accent-soft)] transition-colors hover:text-[var(--color-accent)]"
                    eventName="project_teaser_click"
                    eventProps={{ source: "home_projects", project: project.name }}
                  >
                    View Project Story
                  </TrackedAnchor>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space border-t border-[var(--color-border)]" id="process">
        <Container>
          <SectionHeading
            kicker="Our Process"
            title="A Structured Journey from Concept to Lifelong Support"
            description="Your project is handled through a disciplined five-stage framework with transparent communication and technical accountability."
          />

          <div className="grid gap-4 md:grid-cols-5">
            {processSteps.map((step, index) => (
              <article key={step} className="surface-panel rounded-[var(--radius-md)] p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">Step {index + 1}</p>
                <h3 className="mt-2 font-serif text-2xl text-[var(--color-text)]">{step}</h3>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space border-t border-[var(--color-border)]">
        <Container>
          <SectionHeading
            kicker="Client Perspective"
            title="Trusted by Homeowners and Design Professionals"
          />

          <div className="grid gap-5 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.author} className="surface-panel rounded-[var(--radius-md)] p-6">
                <p className="font-serif text-2xl leading-snug text-[var(--color-text)]">“{testimonial.quote}”</p>
                <footer className="mt-6 text-sm text-[var(--color-text-muted)]">
                  <p>{testimonial.author}</p>
                  <p>{testimonial.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space border-t border-[var(--color-border)]" id="contact">
        <Container>
          <div className="surface-panel rounded-[var(--radius-lg)] p-8 md:p-12">
            <span className="kicker">Start Your Project</span>
            <h2 className="h1-display mt-4 text-4xl md:text-6xl">Book Your Discovery Call</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-text-muted)] md:text-lg">
              Share your timeline, build stage, and ambitions. We will recommend a practical next step and coordinate
              with your architect, interior designer, or project team.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <TrackedAnchor
                href="mailto:hello@smarthomearchitects.co.za?subject=Discovery%20Call%20Request"
                eventName="book_call_click"
                eventProps={{ source: "final_cta" }}
                className="button-base button-primary"
              >
                Book a Discovery Call
              </TrackedAnchor>
              <TrackedAnchor
                href={buildWhatsAppUrl(siteConfig.whatsappNumber)}
                eventName="whatsapp_click"
                eventProps={{ source: "final_cta" }}
                target="_blank"
                rel="noreferrer"
                className="button-base button-secondary"
              >
                WhatsApp Us
              </TrackedAnchor>
              <TrackedAnchor
                href="/smart-home-planning-guide.pdf"
                eventName="guide_download_click"
                eventProps={{ source: "final_cta" }}
                className="button-base button-secondary"
              >
                Download Planning Guide
              </TrackedAnchor>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
