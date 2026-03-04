import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Launch Checklist",
  robots: { index: false, follow: false },
};

const checklist = [
  {
    category: "Content",
    items: [
      "Replace PLACEHOLDER_ARTIST_NAME in src/data/site.ts",
      "Replace PLACEHOLDER_ALBUM_TITLE in src/data/site.ts",
      "Update siteUrl to actual domain",
      "Update email addresses (hello@, press@)",
      "Write/replace album story paragraphs",
      "Write/replace pull quote",
      "Update FAQ answers with real details",
      "Update booking includes and tech requirements",
      "Write/replace EPK short bio and long bio",
      "Update testimonials with real quotes + names",
    ],
  },
  {
    category: "Media",
    items: [
      "Add hero background image → /public/images/hero-bg.jpg (1920×1080)",
      "Add album cover → /public/images/album-cover.jpg (1200×1200)",
      "Add artist portrait → /public/images/artist-portrait.jpg (900×1200)",
      "Add press photos → /public/images/epk-photo-1.jpg, epk-photo-2.jpg",
      "Add avatar for link-in-bio (optional)",
      "Add OG image → /public/og.jpg (1200×630)",
      "Add favicon → /public/favicon.ico",
      "Add audio previews → /public/audio/preview-01.mp3 through preview-12.mp3 (30s clips)",
      "Add full singles → update previewSrc for tracks marked isFullSingle",
    ],
  },
  {
    category: "Payments",
    items: [
      "Set up PayFast account and create payment links for each product tier",
      "Set up PayPal.me or PayPal buttons for each product tier",
      "Set up PayFast/PayPal donate links",
      "Replace all PLACEHOLDER payment URLs in src/data/site.ts",
      "Test purchase flow end-to-end (both PayFast and PayPal)",
      "Configure digital file delivery (PayFast email or manual)",
    ],
  },
  {
    category: "Email",
    items: [
      "Create MailerLite account and subscriber group",
      "Create signup form in MailerLite",
      "Get form action URL and update mailerLite.formAction in site.ts",
      "Wire EmailCapture component to actual MailerLite endpoint",
      "Set up welcome automation with lead magnet (acoustic + devotional)",
      "Test email signup flow",
    ],
  },
  {
    category: "Videos",
    items: [
      "Upload videos to YouTube",
      "Replace PLACEHOLDER_VIDEO_ID values in site.ts with real YouTube IDs",
    ],
  },
  {
    category: "Social Links",
    items: [
      "Update Instagram URL",
      "Update YouTube URL",
      "Update Facebook URL",
      "Update TikTok URL",
      "Update Spotify URL (when available)",
      "Update Apple Music URL (when available)",
    ],
  },
  {
    category: "Domain & Deployment",
    items: [
      "Connect custom domain in Vercel dashboard",
      "Update siteUrl in site.ts to production domain",
      "Verify SSL certificate is active",
      "Test all pages on production URL",
      "Verify OG images render correctly (use ogimage.dev or similar)",
    ],
  },
  {
    category: "Booking Form",
    items: [
      "Decide on form backend: mailto (current), Formspree, or Resend",
      "If using Formspree/Resend: update BookingForm component",
      "Test form submission end-to-end",
    ],
  },
  {
    category: "Final QA",
    items: [
      "Test all pages on mobile (iOS Safari, Android Chrome)",
      "Test all pages on desktop (Chrome, Firefox, Safari)",
      "Verify audio previews play correctly",
      "Verify all buy links open correct payment pages",
      "Check keyboard navigation on all interactive elements",
      "Run Lighthouse audit (aim for 90+ on all scores)",
      "Verify sitemap.xml loads correctly",
      "Verify robots.txt is correct",
      "Check all pages have correct meta titles and descriptions",
    ],
  },
];

export default function LaunchChecklistPage() {
  return (
    <section className="py-16 md:py-24">
      <Container className="max-w-3xl">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
            Internal
          </p>
          <h1 className="text-3xl md:text-4xl font-light text-charcoal">
            Launch Checklist
          </h1>
          <p className="mt-3 text-warm-gray text-sm">
            Complete every item before going live. This page is not indexed by search engines.
          </p>
        </div>

        <div className="space-y-10">
          {checklist.map((section) => (
            <div key={section.category}>
              <h2 className="text-sm font-medium uppercase tracking-widest text-charcoal mb-4 pb-2 border-b border-light-gray">
                {section.category}
              </h2>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id={`${section.category}-${i}`}
                      className="mt-1 h-4 w-4 rounded border-light-gray text-accent focus:ring-accent"
                    />
                    <label
                      htmlFor={`${section.category}-${i}`}
                      className="text-sm text-warm-gray cursor-pointer"
                    >
                      {item}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
