import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { BookingForm } from "./booking-form";

export const metadata: Metadata = {
  title: "Book",
  description: `Book ${siteConfig.artistName} for worship events, conferences, and church services.`,
};

export default function BookPage() {
  return (
    <>
      <PageHero
        title="Book"
        subtitle={siteConfig.booking.headline}
        compact
      />

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-light text-charcoal mb-6">
                What&apos;s Included
              </h2>
              <ul className="space-y-3">
                {siteConfig.booking.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-warm-gray">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#C8A97E"
                      strokeWidth="2"
                      className="shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-light text-charcoal mt-10 mb-4">
                Technical Requirements
              </h3>
              <ul className="space-y-2">
                {siteConfig.booking.techRequirements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-warm-gray">
                    <span className="text-accent text-sm">&bull;</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-2xl font-light text-charcoal mb-6">
                Send an Inquiry
              </h2>
              <BookingForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
