import type { ReactNode } from "react";

interface EmptyStateProps {
  title: string;
  description: string;
  action?: ReactNode;
}

/** Shown when there is nothing to display yet. Always says what to do next. */
export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-dashed border-line bg-surface px-6 py-12 text-center">
      <h1 className="text-2xl font-bold text-ink">{title}</h1>
      <p className="mt-3 text-ink-muted">{description}</p>
      {action ? <div className="mt-6 flex justify-center">{action}</div> : null}
    </div>
  );
}
