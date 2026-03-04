import Script from "next/script";
import { analyticsEnabled } from "@/lib/analytics";
import { siteConfig } from "@/lib/site";

export function PlausibleScript() {
  if (!analyticsEnabled || !siteConfig.plausibleDomain) {
    return null;
  }

  return (
    <Script
      defer
      data-domain={siteConfig.plausibleDomain}
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  );
}
