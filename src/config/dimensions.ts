import { bn } from "@/lib/i18n/bn";
import type { IconName } from "@/components/ui/Icon";

/**
 * Display-only list of the ten planned Area DNA dimensions (ARCHITECTURE.md §6).
 * NOT the scoring configuration — weights, direction and score rules arrive in
 * Stage 4 under config/ + lib/scoring. Keys here should match the future category keys.
 */
export type DimensionKey = keyof typeof bn.dimensions.items;

export interface Dimension {
  key: DimensionKey;
  icon: IconName;
  title: string;
  description: string;
}

const order: ReadonlyArray<{ key: DimensionKey; icon: IconName }> = [
  { key: "transport", icon: "transport" },
  { key: "rent", icon: "rent" },
  { key: "education", icon: "education" },
  { key: "healthcare", icon: "healthcare" },
  { key: "internet", icon: "internet" },
  { key: "safety", icon: "safety" },
  { key: "traffic", icon: "traffic" },
  { key: "lifestyle", icon: "lifestyle" },
  { key: "food", icon: "food" },
  { key: "student", icon: "student" },
];

export const dimensions: readonly Dimension[] = order.map(({ key, icon }) => ({
  key,
  icon,
  ...bn.dimensions.items[key],
}));
