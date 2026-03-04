import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for purchases and use of ${siteConfig.artistName}'s website.`,
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Service" compact />

      <section className="py-16 md:py-24 bg-white">
        <Container className="max-w-2xl">
          <p className="text-sm text-warm-gray mb-2">
            Last updated: {new Date().toLocaleDateString("en-ZA", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="space-y-8 text-warm-gray leading-relaxed text-sm">
            <div>
              <h2 className="text-lg font-medium text-charcoal mb-3">
                1. Digital Products
              </h2>
              <p>
                All music and digital products sold on this website are for personal, non-commercial use unless otherwise stated. The Worship Team Pack includes a licence for use in church services and ministry contexts.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-charcoal mb-3">
                2. Purchases & Delivery
              </h2>
              <p>
                Digital products are delivered via download link sent to your email after successful payment. Delivery is instant for most orders. If you experience any issues, contact us at{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-accent hover:text-accent-dark">
                  {siteConfig.email}
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-charcoal mb-3">
                3. Refund Policy
              </h2>
              <p>
                Due to the nature of digital downloads, we do not offer refunds once files have been delivered. If you have not received your download or experienced a technical issue, please contact us and we will resolve it.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-charcoal mb-3">
                4. Payment
              </h2>
              <p>
                Payments are processed securely via PayFast (for South African transactions in ZAR) and PayPal (for international transactions in USD/EUR/GBP). We do not store your payment information.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-charcoal mb-3">
                5. Intellectual Property
              </h2>
              <p>
                All music, lyrics, artwork, and content on this website are the intellectual property of {siteConfig.artistName} unless otherwise attributed. Unauthorised reproduction, distribution, or commercial use is prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-charcoal mb-3">
                6. Church Use Licence
              </h2>
              <p>
                Purchases of the Worship Team Pack include a non-exclusive licence to perform the songs in church services, conferences, and ministry events. This licence does not extend to commercial recordings, broadcasts, or redistribution.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-charcoal mb-3">
                7. Contact
              </h2>
              <p>
                Questions about these terms? Email us at{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-accent hover:text-accent-dark">
                  {siteConfig.email}
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
