import { type ReactNode } from "react";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  description?: string;
  action?: ReactNode;
};

export function SectionHeading({
  kicker,
  title,
  description,
  action,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl space-y-3">
        <span className="kicker">{kicker}</span>
        <h2 className="h1-display text-4xl text-[var(--color-text)] md:text-5xl">{title}</h2>
        {description ? (
          <p className="max-w-xl text-base leading-relaxed text-[var(--color-text-muted)] md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}
