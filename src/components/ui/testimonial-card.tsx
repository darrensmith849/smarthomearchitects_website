import type { Testimonial } from "@/data/site";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <blockquote className="text-center max-w-xl mx-auto">
      <p className="text-lg md:text-xl font-light italic text-charcoal leading-relaxed">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <footer className="mt-4">
        <cite className="not-italic text-sm text-warm-gray">
          <span className="font-medium text-charcoal">{testimonial.name}</span>
          {testimonial.role && (
            <>
              <span className="mx-2">&middot;</span>
              {testimonial.role}
            </>
          )}
        </cite>
      </footer>
    </blockquote>
  );
}
