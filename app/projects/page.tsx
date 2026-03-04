import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TrackedAnchor } from "@/components/ui/tracked-anchor";
import { projects, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore luxury smart home case studies from Smart Home Architects across Cape Town and the Garden Route.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Smart Home Architects",
    description:
      "Proof-first case studies covering integrated control, lighting, cinema, AV, shading, and security.",
    url: "/projects",
    images: [siteConfig.ogImage],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="section-space pb-14 pt-16 md:pb-20 md:pt-24">
        <Container>
          <span className="kicker">Case Studies</span>
          <h1 className="h1-display mt-4 max-w-4xl text-5xl md:text-7xl">Proof of Craftsmanship, Documented in Detail</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--color-text-muted)]">
            Selected homes and estates where technology was integrated to support atmosphere, comfort, and long-term
            reliability.
          </p>
        </Container>
      </section>

      <section className="section-space border-t border-[var(--color-border)] pt-12 md:pt-16">
        <Container>
          <SectionHeading
            kicker="Featured Work"
            title="Recent Luxury Projects"
            description="Each project reflects a tailored engineering response to architecture, client lifestyle, and operational requirements."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.slug} className="surface-panel overflow-hidden rounded-[var(--radius-md)]">
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={`${project.name} smart home project`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-3 p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                    {project.location} · {project.sector}
                  </p>
                  <h2 className="font-serif text-2xl text-[var(--color-text)]">{project.name}</h2>
                  <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{project.outcomes[0]}</p>
                  <TrackedAnchor
                    href={`/projects/${project.slug}`}
                    className="inline-flex text-xs uppercase tracking-[0.18em] text-[var(--color-accent-soft)] transition-colors hover:text-[var(--color-accent)]"
                    eventName="project_teaser_click"
                    eventProps={{ source: "projects_index", project: project.slug }}
                  >
                    View Project Story
                  </TrackedAnchor>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space border-t border-[var(--color-border)]">
        <Container>
          <div className="surface-panel rounded-[var(--radius-lg)] p-8 md:p-12">
            <span className="kicker">Private Portfolio</span>
            <h2 className="h1-display mt-4 text-4xl md:text-6xl">Request Additional Project References</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-text-muted)] md:text-lg">
              A broader project portfolio can be shared during discovery, including system architecture details and
              outcomes relevant to your property type.
            </p>
            <div className="mt-8">
              <TrackedAnchor
                href="/#contact"
                eventName="book_call_click"
                eventProps={{ source: "projects_final_cta" }}
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
