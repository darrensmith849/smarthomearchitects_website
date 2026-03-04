import { solutionCards } from "@/lib/site";
import { TrackedAnchor } from "@/components/ui/tracked-anchor";

type SolutionGridProps = {
  compact?: boolean;
};

export function SolutionGrid({ compact = false }: SolutionGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {solutionCards.map((solution) => (
        <article key={solution.title} className="surface-panel rounded-[var(--radius-md)] p-6">
          <h3 className="font-serif text-2xl text-[var(--color-text)]">{solution.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{solution.description}</p>
          <TrackedAnchor
            href={solution.href}
            eventName="solutions_preview_click"
            eventProps={{ source: compact ? "home_grid" : "solutions_page_grid", solution: solution.title }}
            className="mt-5 inline-flex text-xs uppercase tracking-[0.18em] text-[var(--color-accent-soft)] transition-colors hover:text-[var(--color-accent)]"
          >
            Explore {solution.title}
          </TrackedAnchor>
        </article>
      ))}
    </div>
  );
}
