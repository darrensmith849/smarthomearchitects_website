"use client";

import { useState } from "react";
import type { FaqItem } from "@/data/site";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-light-gray">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between py-5 text-left group"
            aria-expanded={openIndex === i}
          >
            <span className="text-sm md:text-base font-medium text-charcoal pr-4">
              {item.question}
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className={`shrink-0 text-warm-gray transition-transform duration-200 ${
                openIndex === i ? "rotate-45" : ""
              }`}
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
          {openIndex === i && (
            <div className="pb-5 text-sm text-warm-gray leading-relaxed">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
