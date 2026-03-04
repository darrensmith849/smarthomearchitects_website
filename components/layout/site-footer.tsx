import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-border)] py-10">
      <div className="mx-auto flex w-full max-w-[var(--container-max)] flex-col gap-8 px-6 md:flex-row md:items-end md:justify-between md:px-10">
        <div className="space-y-3">
          <p className="font-serif text-2xl text-[var(--color-text)]">Smart Home Architects</p>
          <p className="max-w-md text-sm text-[var(--color-text-muted)]">
            Bespoke smart home automation for design-led residences, estates, and boutique hospitality spaces.
          </p>
        </div>

        <div className="space-y-2 text-sm text-[var(--color-text-muted)] md:text-right">
          <p>{siteConfig.location}</p>
          <p>hello@smarthomearchitects.co.za</p>
          <p>+27 21 000 0000</p>
          <p className="pt-1">
            <a href="/privacy-policy" className="transition-colors hover:text-[var(--color-accent-soft)]">
              Privacy Policy
            </a>{" "}
            ·{" "}
            <a href="/terms" className="transition-colors hover:text-[var(--color-accent-soft)]">
              Terms
            </a>
          </p>
          <p className="pt-2 text-xs uppercase tracking-[0.18em]">
            © {new Date().getFullYear()} Smart Home Architects
          </p>
        </div>
      </div>
    </footer>
  );
}
