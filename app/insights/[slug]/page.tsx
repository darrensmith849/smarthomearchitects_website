import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { insightPosts } from "@/lib/insights";
import { siteConfig } from "@/lib/site";

function getPost(slug: string) {
  return insightPosts.find((post) => post.slug === slug);
}

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return insightPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/insights/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Smart Home Architects`,
      description: post.excerpt,
      url: `/insights/${post.slug}`,
      images: [post.heroImage],
      type: "article",
    },
  };
}

export default async function InsightDetailPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    image: `${siteConfig.url}${post.heroImage}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="section-space pb-14 pt-16 md:pb-20 md:pt-24">
        <Container className="max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Insights", href: "/insights" },
              { label: post.category },
            ]}
          />
          <p className="kicker">{post.category}</p>
          <h1 className="h1-display mt-4 text-5xl md:text-7xl">{post.title}</h1>
          <p className="mt-4 text-sm uppercase tracking-[0.16em] text-[var(--color-text-muted)]">{post.readTime}</p>
          <div className="relative mt-8 h-[22rem] overflow-hidden rounded-[var(--radius-lg)] md:h-[28rem]">
            <Image src={post.heroImage} alt={post.title} fill priority className="object-cover" />
          </div>
          <div className="mt-8 space-y-5">
            {post.body.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-[var(--color-text-muted)] md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-10 border-t border-[var(--color-border)] pt-6">
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-text-muted)]">Related Solutions</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {post.relatedSolutions.map((href) => (
                <a key={href} href={href} className="button-base button-secondary">
                  {href.replace("/solutions/", "").replaceAll("-", " ")}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
