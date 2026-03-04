"use client";

import Link from "next/link";

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-charcoal/95 backdrop-blur-md border-t border-white/10">
      <div className="flex items-center justify-around h-14">
        <Link
          href="/listen"
          className="flex flex-col items-center gap-0.5 text-white/80 hover:text-accent transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
          <span className="text-[10px] tracking-wide uppercase">Listen</span>
        </Link>

        <Link
          href="/album"
          className="flex flex-col items-center gap-0.5 text-white/80 hover:text-accent transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M16 8h-6a2 2 0 00-2 2v4a2 2 0 002 2h6" />
          </svg>
          <span className="text-[10px] tracking-wide uppercase">Buy</span>
        </Link>

        <button
          onClick={() => {
            const el = document.getElementById("email-capture");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex flex-col items-center gap-0.5 text-white/80 hover:text-accent transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M22 4L12 13 2 4" />
          </svg>
          <span className="text-[10px] tracking-wide uppercase">Join</span>
        </button>
      </div>
    </div>
  );
}
