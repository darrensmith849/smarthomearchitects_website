import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Terms",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <section className="section-space pb-20 pt-16 md:pt-24">
      <Container className="max-w-3xl space-y-6">
        <h1 className="h1-display text-5xl md:text-6xl">Terms</h1>
        <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">Last updated: March 4, 2026</p>
        <p className="text-base leading-relaxed text-[var(--color-text-muted)]">
          This placeholder terms page outlines service terms and project engagement principles. Replace this section
          with final legal copy from counsel before production launch.
        </p>
      </Container>
    </section>
  );
}
