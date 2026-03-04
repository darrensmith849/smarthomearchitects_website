"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";
import Link from "next/link";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire up MailerLite API endpoint
    // For now, just show success state
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div id="email-capture" className="text-center py-12">
        <p className="text-2xl font-light text-charcoal">Thank you!</p>
        <p className="mt-2 text-warm-gray">
          Check your inbox for your free acoustic track.
        </p>
      </div>
    );
  }

  return (
    <div id="email-capture" className="max-w-lg mx-auto">
      <h3 className="text-2xl md:text-3xl font-light text-charcoal text-center">
        {siteConfig.mailerLite.leadMagnet}
      </h3>
      <p className="mt-3 text-sm text-warm-gray text-center">
        {siteConfig.mailerLite.leadMagnetDescription}
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <label htmlFor="email-input" className="sr-only">
            Email address
          </label>
          <input
            id="email-input"
            type="email"
            required
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg border border-light-gray bg-white text-charcoal placeholder:text-warm-gray/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-accent text-white text-sm font-medium tracking-wide rounded-lg hover:bg-accent-dark transition-colors"
          >
            Join Free
          </button>
        </div>
        <p className="text-xs text-warm-gray/70 text-center">
          No spam, ever. Unsubscribe anytime.{" "}
          <Link href="/privacy" className="underline hover:text-charcoal">
            Privacy Policy
          </Link>
        </p>
      </form>
    </div>
  );
}
