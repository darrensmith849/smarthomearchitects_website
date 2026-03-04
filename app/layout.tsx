import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PlausibleScript } from "@/components/layout/plausible-script";
import { analyticsEnabled } from "@/lib/analytics";
import { siteConfig } from "@/lib/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
});

const canonicalUrl = new URL(siteConfig.url);

export const metadata: Metadata = {
  metadataBase: canonicalUrl,
  title: {
    default: siteConfig.title,
    template: "%s | Smart Home Architects",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    locale: "en_ZA",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  areaServed: ["Cape Town", "Garden Route"],
  address: {
    "@type": "PostalAddress",
    addressCountry: "ZA",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "hello@smarthomearchitects.co.za",
    availableLanguage: ["English"],
  },
};

const analyticsEventListener = `
(function () {
  if (!${analyticsEnabled ? "true" : "false"}) return;
  document.addEventListener('click', function (event) {
    var element = event.target;
    if (!element || !(element instanceof Element)) return;
    var tracked = element.closest('[data-analytics-event]');
    if (!tracked) return;
    var eventName = tracked.getAttribute('data-analytics-event');
    if (!eventName || typeof window.plausible !== 'function') return;
    var rawProps = tracked.getAttribute('data-analytics-props');
    if (!rawProps) {
      window.plausible(eventName);
      return;
    }
    try {
      window.plausible(eventName, { props: JSON.parse(rawProps) });
    } catch (error) {
      window.plausible(eventName);
    }
  }, { passive: true });
})();
`;

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA">
      <body className={`${cormorant.variable} ${manrope.variable} antialiased`}>
        <PlausibleScript />
        <Script id="analytics-events" strategy="afterInteractive">
          {analyticsEventListener}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <div className="relative min-h-screen overflow-x-clip">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
