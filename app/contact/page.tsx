import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";
import {
  budgetRanges,
  projectStages,
  scopeRanges,
  timelineRanges,
} from "@/lib/contact";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a discovery call with Smart Home Architects. Share your project location, stage, scope, timeline, and goals.",
  alternates: {
    canonical: "/contact",
  },
};

type ContactPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

function getParamValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const resolvedParams = searchParams ? await searchParams : {};
  const status = getParamValue(resolvedParams.status);
  const error = getParamValue(resolvedParams.error);

  return (
    <>
      <section className="section-space pb-14 pt-16 md:pb-20 md:pt-24">
        <Container>
          <span className="kicker">Contact</span>
          <h1 className="h1-display mt-4 max-w-4xl text-5xl md:text-7xl">Book Your Discovery Call</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--color-text-muted)]">
            Share your project brief and we will recommend a practical next step aligned with your timeline,
            architecture, and scope.
          </p>
        </Container>
      </section>

      <section className="section-space border-t border-[var(--color-border)] pt-12 md:pt-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="surface-panel rounded-[var(--radius-lg)] p-6 md:p-8">
              <h2 className="font-serif text-4xl text-[var(--color-text)]">Project Enquiry</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                Complete the form below to receive a response from our team.
              </p>

              {status === "success" ? (
                <p className="mt-5 rounded-[var(--radius-sm)] border border-[var(--color-success)]/40 bg-[rgba(124,165,130,0.1)] p-3 text-sm text-[var(--color-text)]">
                  Thank you. Your enquiry has been received and we will be in touch shortly.
                </p>
              ) : null}

              {status === "error" ? (
                <p className="mt-5 rounded-[var(--radius-sm)] border border-[var(--color-danger)]/45 bg-[rgba(210,130,121,0.1)] p-3 text-sm text-[var(--color-text)]">
                  {error === "validation"
                    ? "Please complete all required fields and try again."
                    : "Submission failed. Please try again or contact us directly via WhatsApp."}
                </p>
              ) : null}

              <form action="/contact/submit" method="post" className="mt-6 space-y-4" noValidate>
                <div className="hidden" aria-hidden>
                  <label htmlFor="website">Website</label>
                  <input id="website" name="website" type="text" autoComplete="off" tabIndex={-1} />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block text-sm text-[var(--color-text-muted)]">
                    Full Name *
                    <input
                      name="fullName"
                      required
                      className="mt-2 w-full rounded-[var(--radius-sm)] border bg-[var(--color-surface)] px-3 py-2 text-[var(--color-text)]"
                    />
                  </label>
                  <label className="block text-sm text-[var(--color-text-muted)]">
                    Email *
                    <input
                      name="email"
                      type="email"
                      required
                      className="mt-2 w-full rounded-[var(--radius-sm)] border bg-[var(--color-surface)] px-3 py-2 text-[var(--color-text)]"
                    />
                  </label>
                  <label className="block text-sm text-[var(--color-text-muted)]">
                    Phone *
                    <input
                      name="phone"
                      required
                      className="mt-2 w-full rounded-[var(--radius-sm)] border bg-[var(--color-surface)] px-3 py-2 text-[var(--color-text)]"
                    />
                  </label>
                  <label className="block text-sm text-[var(--color-text-muted)]">
                    Location *
                    <input
                      name="location"
                      required
                      placeholder="Cape Town, Garden Route, etc."
                      className="mt-2 w-full rounded-[var(--radius-sm)] border bg-[var(--color-surface)] px-3 py-2 text-[var(--color-text)]"
                    />
                  </label>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block text-sm text-[var(--color-text-muted)]">
                    Project Stage *
                    <select
                      name="projectStage"
                      required
                      defaultValue=""
                      className="mt-2 w-full rounded-[var(--radius-sm)] border bg-[var(--color-surface)] px-3 py-2 text-[var(--color-text)]"
                    >
                      <option value="" disabled>
                        Select stage
                      </option>
                      {projectStages.map((stage) => (
                        <option key={stage} value={stage}>
                          {stage}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block text-sm text-[var(--color-text-muted)]">
                    Scope *
                    <select
                      name="scope"
                      required
                      defaultValue=""
                      className="mt-2 w-full rounded-[var(--radius-sm)] border bg-[var(--color-surface)] px-3 py-2 text-[var(--color-text)]"
                    >
                      <option value="" disabled>
                        Select scope
                      </option>
                      {scopeRanges.map((scope) => (
                        <option key={scope} value={scope}>
                          {scope}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block text-sm text-[var(--color-text-muted)]">
                    Timeline *
                    <select
                      name="timeline"
                      required
                      defaultValue=""
                      className="mt-2 w-full rounded-[var(--radius-sm)] border bg-[var(--color-surface)] px-3 py-2 text-[var(--color-text)]"
                    >
                      <option value="" disabled>
                        Select timeline
                      </option>
                      {timelineRanges.map((timeline) => (
                        <option key={timeline} value={timeline}>
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block text-sm text-[var(--color-text-muted)]">
                    Budget Range
                    <select
                      name="budgetRange"
                      defaultValue=""
                      className="mt-2 w-full rounded-[var(--radius-sm)] border bg-[var(--color-surface)] px-3 py-2 text-[var(--color-text)]"
                    >
                      <option value="">Prefer not to say</option>
                      {budgetRanges.map((budget) => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="block text-sm text-[var(--color-text-muted)]">
                  Project Summary *
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project goals, property type, and preferred outcomes."
                    className="mt-2 w-full rounded-[var(--radius-sm)] border bg-[var(--color-surface)] px-3 py-2 text-[var(--color-text)]"
                  />
                </label>

                <button type="submit" className="button-base button-primary">
                  Submit Enquiry
                </button>
              </form>
            </article>

            <aside className="space-y-5">
              <article className="surface-panel rounded-[var(--radius-md)] p-6">
                <p className="kicker">WhatsApp</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  Prefer a faster channel for initial planning?
                </p>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  className="button-base button-secondary mt-5"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp Us
                </a>
              </article>

              <article className="surface-panel rounded-[var(--radius-md)] p-6">
                <p className="kicker">Contact Details</p>
                <div className="mt-4 space-y-2 text-sm text-[var(--color-text-muted)]">
                  <p>hello@smarthomearchitects.co.za</p>
                  <p>+27 21 000 0000</p>
                  <p>{siteConfig.location}</p>
                </div>
              </article>

              <article className="surface-panel rounded-[var(--radius-md)] p-6">
                <p className="kicker">Response Time</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  Typical initial response within one business day.
                </p>
              </article>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
