"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const eventDate = data.get("eventDate") as string;
    const venue = data.get("venue") as string;
    const message = data.get("message") as string;

    // TODO: Wire to Formspree, Resend, or other email service
    // For now, open mailto
    const subject = encodeURIComponent(
      `Booking Inquiry from ${name}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nEvent Date: ${eventDate}\nVenue: ${venue}\n\nMessage:\n${message}`
    );
    window.open(
      `mailto:${siteConfig.email}?subject=${subject}&body=${body}`,
      "_self"
    );
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <p className="text-2xl font-light text-charcoal">Thank you!</p>
        <p className="mt-2 text-warm-gray">
          We&apos;ll be in touch within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm text-charcoal mb-1">
          Your Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full px-4 py-3 rounded-lg border border-light-gray bg-cream text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="booking-email" className="block text-sm text-charcoal mb-1">
          Email Address *
        </label>
        <input
          id="booking-email"
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 rounded-lg border border-light-gray bg-cream text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="eventDate" className="block text-sm text-charcoal mb-1">
            Event Date
          </label>
          <input
            id="eventDate"
            name="eventDate"
            type="date"
            className="w-full px-4 py-3 rounded-lg border border-light-gray bg-cream text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="venue" className="block text-sm text-charcoal mb-1">
            Venue / Location
          </label>
          <input
            id="venue"
            name="venue"
            type="text"
            className="w-full px-4 py-3 rounded-lg border border-light-gray bg-cream text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-charcoal mb-1">
          Tell us about your event *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-light-gray bg-cream text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3.5 bg-charcoal text-white text-sm font-medium tracking-wide rounded-lg hover:bg-charcoal/90 transition-colors"
      >
        Send Inquiry
      </button>
    </form>
  );
}
