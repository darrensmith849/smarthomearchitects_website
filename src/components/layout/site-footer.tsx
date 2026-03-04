import Link from "next/link";
import { siteConfig } from "@/data/site";
import { SocialLinks } from "@/components/ui/social-links";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white/70 pb-24 md:pb-0">
      <div className="max-w-6xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-lg font-light tracking-wide text-white hover:text-accent transition-colors"
            >
              {siteConfig.artistName}
            </Link>
            <p className="mt-3 text-sm leading-relaxed">
              {siteConfig.tagline}
            </p>
            <div className="mt-5">
              <SocialLinks variant="light" />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-white/40 mb-4">
              Navigate
            </h3>
            <ul className="space-y-2">
              {siteConfig.nav.main.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Contact */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-white/40 mb-4">
              Info
            </h3>
            <ul className="space-y-2">
              {siteConfig.nav.footer.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-xs text-white/30">
          &copy; {year} {siteConfig.artistName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
