import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TrackedAnchor } from "@/components/ui/tracked-anchor";
import { insightPosts } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Planning and design insights for luxury smart home automation projects in South Africa.",
  alternates: {
    canonical: "/insights",
  },
};

export default function InsightsPage() {
  return (
    <>
      <section className="section-space pb-14 pt-16 md:pb-20 md:pt-24">
        <Container>
          <span className="kicker">Insights</span>
          <h1 className="h1-display mt-4 max-w-4xl text-5xl md:text-7xl">Planning Intelligence for Premium Smart Homes</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--color-text-muted)]">
            Editorial guidance for homeowners, architects, and designers planning automation-led projects.
          </p>
        </Container>
      </section>

      <section className="section-space border-t border-[var(--color-border)] pt-12 md:pt-16">
        <Container>
          <SectionHeading
            kicker="Articles"
            title="Latest Insights"
            description="Focused guidance based on real project workflows and design coordination priorities."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {insightPosts.map((post) => (
              <article key={post.slug} className="surface-panel overflow-hidden rounded-[var(--radius-md)]">
                <div className="relative h-56">
                  <Image
                    src={post.heroImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-3 p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                    {post.category} · {post.readTime}
                  </p>
                  <h2 className="font-serif text-2xl text-[var(--color-text)]">{post.title}</h2>
                  <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{post.excerpt}</p>
                  <TrackedAnchor
                    href={`/insights/${post.slug}`}
                    className="inline-flex text-xs uppercase tracking-[0.18em] text-[var(--color-accent-soft)] transition-colors hover:text-[var(--color-accent)]"
                  >
                    Read Article
                  </TrackedAnchor>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
