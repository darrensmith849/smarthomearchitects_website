import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.artistName}'s website.`,
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" compact />

      <section className="py-16 md:py-24 bg-white">
        <Container className="max-w-2xl prose-warm">
          <p className="text-sm text-warm-gray mb-2">
            Last updated: {new Date().toLocaleDateString("en-ZA", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="space-y-8 text-warm-gray leading-relaxed text-sm">
            <div>
              <h2 className="text-lg font-medium text-charcoal mb-3">
                1. Information We Collect
              </h2>
              <p>
                When you subscribe to our email list, we collect your email address and optionally your name. When you make a purchase, payment is processed by PayFast or PayPal — we do not store your payment card details.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-charcoal mb-3">
                2. How We Use Your Information
              </h2>
              <p>
                We use your email address to send you music updates, new releases, and occasional promotions. We use purchase information to deliver your digital downloads. We do not sell or share your personal information with third parties.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-charcoal mb-3">
                3. Email Communications
              </h2>
              <p>
                We use MailerLite to manage our email list. You can unsubscribe at any time using the link in any email. For more on how MailerLite handles data, see their privacy policy.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-charcoal mb-3">
                4. Payment Processing
              </h2>
              <p>
                Payments are processed securely by PayFast (South Africa) and PayPal (international). These services have their own privacy policies governing the handling of your payment data.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-charcoal mb-3">
                5. Cookies
              </h2>
              <p>
                This website uses minimal cookies for basic functionality. We do not use advertising trackers. Analytics, if enabled, are privacy-friendly and anonymised.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-charcoal mb-3">
                6. Your Rights
              </h2>
              <p>
                Under the Protection of Personal Information Act (POPIA), you have the right to access, correct, or delete your personal data. Contact us at{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-accent hover:text-accent-dark">
                  {siteConfig.email}
                </a>{" "}
                for any data requests.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-charcoal mb-3">
                7. Contact
              </h2>
              <p>
                For privacy-related questions, contact us at{" "}
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
