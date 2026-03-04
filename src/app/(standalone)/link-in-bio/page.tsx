import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Links",
  description: `All links for ${siteConfig.artistName} — listen, buy, connect.`,
};

const internalLinks = [
  { label: "Listen to the Album", href: "/listen", icon: "▶", highlight: true },
  { label: "Buy the Album", href: "/album", icon: "♫", highlight: true },
  { label: "Watch Videos", href: "/videos", icon: "▷", highlight: false },
  { label: "About", href: "/about", icon: "○", highlight: false },
  { label: "Book for Events", href: "/book", icon: "✦", highlight: false },
];

const externalLinks = [
  { label: "Instagram", href: siteConfig.socials.instagram, icon: "◉" },
  { label: "YouTube", href: siteConfig.socials.youtube, icon: "▶" },
  { label: "TikTok", href: siteConfig.socials.tiktok, icon: "♪" },
];

export default function LinkInBioPage() {
  return (
    <div className="min-h-screen bg-charcoal flex flex-col items-center justify-center px-5 py-16">
      {/* Avatar placeholder */}
      <div className="w-24 h-24 rounded-full bg-charcoal/50 border-2 border-accent/40 flex items-center justify-center mb-4">
        <span className="text-white/30 text-xs">Photo</span>
      </div>

      <h1 className="text-xl font-light text-white tracking-wide">
        {siteConfig.artistName}
      </h1>
      <p className="text-sm text-white/50 mt-1">{siteConfig.tagline}</p>

      <div className="mt-8 w-full max-w-sm space-y-3">
        {internalLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-medium tracking-wide transition-all duration-200 ${
              link.highlight
                ? "bg-accent text-white hover:bg-accent-dark"
                : "bg-white/10 text-white/80 hover:bg-white/20"
            }`}
          >
            <span>{link.icon}</span>
            {link.label}
          </Link>
        ))}

        {externalLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-medium tracking-wide transition-all duration-200 bg-white/10 text-white/80 hover:bg-white/20"
          >
            <span>{link.icon}</span>
            {link.label}
          </a>
        ))}
      </div>

      <p className="mt-10 text-xs text-white/20">
        &copy; {new Date().getFullYear()} {siteConfig.artistName}
      </p>
    </div>
  );
}
