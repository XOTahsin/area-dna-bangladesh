import type { ReactNode } from "react";

type Tone = "neutral" | "brand" | "warn";

const tones: Record<Tone, string> = {
  neutral: "border border-line bg-surface text-ink-muted",
  brand: "bg-brand-soft text-brand",
  warn: "bg-warn-soft text-warn-ink",
};

export function Badge({ tone = "neutral", children }: { tone?: Tone; children: ReactNode }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium leading-normal ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
