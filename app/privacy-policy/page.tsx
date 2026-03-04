import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section-space pb-20 pt-16 md:pt-24">
      <Container className="max-w-3xl space-y-6">
        <h1 className="h1-display text-5xl md:text-6xl">Privacy Policy</h1>
        <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">Last updated: March 4, 2026</p>
        <p className="text-base leading-relaxed text-[var(--color-text-muted)]">
          This placeholder privacy policy describes how Smart Home Architects may collect and process enquiry data for
          service delivery and communication. Replace this content with approved legal text before launch.
        </p>
      </Container>
    </section>
  );
}
