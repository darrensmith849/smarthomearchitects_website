import { type ReactNode } from "react";

type Crumb = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: Crumb[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          let content: ReactNode;

          if (item.href && !isLast) {
            content = (
              <a href={item.href} className="transition-colors hover:text-[var(--color-accent-soft)]">
                {item.label}
              </a>
            );
          } else {
            content = <span className={isLast ? "text-[var(--color-text)]" : ""}>{item.label}</span>;
          }

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {content}
              {!isLast ? <span>/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
