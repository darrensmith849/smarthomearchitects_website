import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TrackedAnchor } from "@/components/ui/tracked-anchor";
import { partnerBrands, siteConfig, solutions } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type SolutionPageProps = {
  params: Promise<{ slug: string }>;
};

function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) {
    return {
      title: "Solution Not Found",
    };
  }

  return {
    title: solution.title,
    description: solution.description,
    alternates: {
      canonical: `/solutions/${solution.slug}`,
    },
    openGraph: {
      title: `${solution.title} | Smart Home Architects`,
      description: solution.description,
      url: `/solutions/${solution.slug}`,
      images: [solution.heroImage],
    },
  };
}

export default async function SolutionDetailPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) {
    notFound();
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: solution.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

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
        name: "Solutions",
        item: `${siteConfig.url}/solutions`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: solution.title,
        item: `${siteConfig.url}/solutions/${solution.slug}`,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="section-space pb-14 pt-16 md:pb-20 md:pt-24">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Solutions", href: "/solutions" },
              { label: solution.shortTitle },
            ]}
          />

          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <span className="kicker">Solution</span>
              <h1 className="h1-display mt-4 text-5xl md:text-7xl">{solution.title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-muted)] md:text-xl">
                {solution.summary}
              </p>
              <p className="mt-6 text-sm uppercase tracking-[0.15em] text-[var(--color-accent-soft)]">{solution.outcome}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <TrackedAnchor
                  href="/#contact"
                  eventName="book_call_click"
                  eventProps={{ source: `solution_hero_${solution.slug}` }}
                  className="button-base button-primary"
                >
                  Book a Discovery Call
                </TrackedAnchor>
                <TrackedAnchor
                  href={buildWhatsAppUrl(siteConfig.whatsappNumber)}
                  eventName="whatsapp_click"
                  eventProps={{ source: `solution_hero_${solution.slug}` }}
                  target="_blank"
                  rel="noreferrer"
                  className="button-base button-secondary"
                >
                  WhatsApp Us
                </TrackedAnchor>
              </div>
            </div>

            <article className="surface-panel overflow-hidden rounded-[var(--radius-lg)] p-5">
              <div className="relative h-[20rem] overflow-hidden rounded-[var(--radius-md)] md:h-[24rem]">
                <Image
                  src={solution.heroImage}
                  alt={`${solution.title} installed in a premium residence`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="section-space border-t border-[var(--color-border)] pt-12 md:pt-16">
        <Container>
          <SectionHeading
            kicker="Scope"
            title="What This Solution Includes"
            description="Each package is calibrated to project constraints, design intent, and long-term serviceability standards."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {solution.capabilities.map((capability) => (
              <article key={capability} className="surface-panel rounded-[var(--radius-md)] p-5">
                <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{capability}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space border-t border-[var(--color-border)]">
        <Container>
          <SectionHeading
            kicker="Best Fit"
            title="Ideal Project Context"
            description="Typical scenarios where this solution delivers immediate value and long-term return."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {solution.idealFor.map((item) => (
              <article key={item} className="surface-panel rounded-[var(--radius-md)] p-5">
                <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{item}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space border-t border-[var(--color-border)]">
        <Container>
          <SectionHeading
            kicker="Technology"
            title="Partner Brands and Integration Standards"
            description="Vendor-neutral planning with premium integration partners selected for reliability, support, and design compatibility."
          />
          <div className="surface-panel rounded-[var(--radius-md)] p-6">
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
              {partnerBrands.map((brand) => (
                <span key={brand}>{brand}</span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space border-t border-[var(--color-border)]">
        <Container>
          <SectionHeading
            kicker="Frequently Asked"
            title="Client Questions"
            description="Straight answers to early-stage planning concerns for this solution category."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {solution.faqs.map((faq) => (
              <article key={faq.question} className="surface-panel rounded-[var(--radius-md)] p-5">
                <h3 className="font-serif text-2xl text-[var(--color-text)]">{faq.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space border-t border-[var(--color-border)]">
        <Container>
          <div className="surface-panel rounded-[var(--radius-lg)] p-8 md:p-12">
            <span className="kicker">Next Step</span>
            <h2 className="h1-display mt-4 text-4xl md:text-6xl">Discuss Your {solution.shortTitle} Scope</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-text-muted)] md:text-lg">
              Share your location, build stage, and objectives. We will provide a practical recommendation and suggest
              the right first technical workshop.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <TrackedAnchor
                href="/#contact"
                eventName="book_call_click"
                eventProps={{ source: `solution_final_${solution.slug}` }}
                className="button-base button-primary"
              >
                Book a Discovery Call
              </TrackedAnchor>
              <TrackedAnchor
                href="/solutions"
                className="button-base button-secondary"
                eventName="solutions_preview_click"
                eventProps={{ source: `solution_final_${solution.slug}` }}
              >
                View All Solutions
              </TrackedAnchor>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
