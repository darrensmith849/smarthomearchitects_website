import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TrackedAnchor } from "@/components/ui/tracked-anchor";
import { projects, siteConfig } from "@/lib/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.name,
    description: `${project.name} case study in ${project.location}. ${project.outcomes[0]}`,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.name} | Smart Home Architects`,
      description: project.outcomes[0],
      url: `/projects/${project.slug}`,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${siteConfig.url}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${siteConfig.url}/projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.name,
        item: `${siteConfig.url}/projects/${project.slug}`,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="section-space pb-14 pt-16 md:pb-20 md:pt-24">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Projects", href: "/projects" },
              { label: project.name },
            ]}
          />

          <span className="kicker">Case Study</span>
          <h1 className="h1-display mt-4 max-w-4xl text-5xl md:text-7xl">{project.name}</h1>
          <p className="mt-5 text-sm uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
            {project.location} · {project.sector}
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--color-text-muted)]">{project.outcomes[0]}</p>
        </Container>
      </section>

      <section className="border-y border-[var(--color-border)] py-6">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {project.outcomes.map((outcome) => (
              <p key={outcome} className="text-sm leading-relaxed text-[var(--color-accent-soft)]">
                {outcome}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space pt-12 md:pt-16">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {project.gallery.map((image, index) => (
              <article key={`${image}-${index}`} className="surface-panel overflow-hidden rounded-[var(--radius-md)] p-2">
                <div className="relative h-72 overflow-hidden rounded-[var(--radius-sm)]">
                  <Image
                    src={image}
                    alt={`${project.name} gallery image ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space border-t border-[var(--color-border)]">
        <Container>
          <SectionHeading
            kicker="Project Story"
            title="Design Intent, Engineering Response"
            description="A concise overview of brief constraints, integration strategy, and delivery decisions."
          />
          <div className="grid gap-5 md:grid-cols-2">
            <article className="surface-panel rounded-[var(--radius-md)] p-6">
              <h2 className="font-serif text-3xl text-[var(--color-text)]">Challenge</h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">{project.challenge}</p>
            </article>
            <article className="surface-panel rounded-[var(--radius-md)] p-6">
              <h2 className="font-serif text-3xl text-[var(--color-text)]">Solution</h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">{project.solutionStory}</p>
            </article>
          </div>
        </Container>
      </section>

      <section className="section-space border-t border-[var(--color-border)]">
        <Container>
          <SectionHeading
            kicker="System Stack"
            title="Installed Technology"
            description="Representative integration stack used to achieve the project outcome."
          />
          <div className="surface-panel rounded-[var(--radius-md)] p-6">
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
              {project.stack.map((stackItem) => (
                <span key={stackItem}>{stackItem}</span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space border-t border-[var(--color-border)]">
        <Container>
          <div className="surface-panel rounded-[var(--radius-lg)] p-8 md:p-12">
            <span className="kicker">Next Step</span>
            <h2 className="h1-display mt-4 text-4xl md:text-6xl">Plan Your Project Brief</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-text-muted)] md:text-lg">
              We can map your automation scope with your architect, interior designer, or contractor team.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <TrackedAnchor
                href="/contact"
                eventName="book_call_click"
                eventProps={{ source: `project_final_${project.slug}` }}
                className="button-base button-primary"
              >
                Book a Discovery Call
              </TrackedAnchor>
              <TrackedAnchor
                href="/projects"
                eventName="project_teaser_click"
                eventProps={{ source: `project_final_${project.slug}` }}
                className="button-base button-secondary"
              >
                Explore More Projects
              </TrackedAnchor>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
