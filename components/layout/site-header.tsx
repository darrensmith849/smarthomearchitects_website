import { navigation, siteConfig } from "@/lib/site";
import { TrackedAnchor } from "@/components/ui/tracked-anchor";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)]/70 bg-[rgba(18,19,20,0.8)] backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-[var(--container-max)] items-center justify-between px-6 md:px-10">
        <TrackedAnchor
          href="/"
          className="font-serif text-xl tracking-wide text-[var(--color-text)] md:text-2xl"
        >
          Smart Home Architects
        </TrackedAnchor>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm uppercase tracking-[0.18em] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent-soft)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <TrackedAnchor
            href={buildWhatsAppUrl(siteConfig.whatsappNumber)}
            eventName="whatsapp_click"
            eventProps={{ source: "header" }}
            target="_blank"
            rel="noreferrer"
            className="button-base button-secondary hidden md:inline-flex"
          >
            WhatsApp Us
          </TrackedAnchor>
          <TrackedAnchor
            href="/contact"
            eventName="book_call_click"
            eventProps={{ source: "header" }}
            className="button-base button-primary"
          >
            Book Discovery Call
          </TrackedAnchor>
        </div>
      </div>
    </header>
  );
}
