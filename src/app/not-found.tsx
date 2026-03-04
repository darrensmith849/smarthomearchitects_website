import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="py-28 md:py-44">
      <Container className="text-center">
        <p className="text-8xl font-light text-light-gray">404</p>
        <h1 className="mt-4 text-2xl md:text-3xl font-light text-charcoal">
          Page not found
        </h1>
        <p className="mt-3 text-warm-gray">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-charcoal text-white text-sm font-medium tracking-wide rounded-lg hover:bg-charcoal/90 transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/listen"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-light-gray text-warm-gray text-sm font-medium tracking-wide rounded-lg hover:border-charcoal hover:text-charcoal transition-colors"
          >
            Listen to Music
          </Link>
        </div>
      </Container>
    </section>
  );
}
