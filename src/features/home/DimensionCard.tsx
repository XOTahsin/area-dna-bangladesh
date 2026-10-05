import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import type { Dimension } from "@/config/dimensions";

export function DimensionCard({ dimension }: { dimension: Dimension }) {
  return (
    <Card className="h-full transition-colors hover:border-brand">
      <span className="grid size-10 place-items-center rounded-xl bg-brand-soft text-brand">
        <Icon name={dimension.icon} size={22} />
      </span>
      <h3 className="mt-4 text-lg font-semibold text-ink">{dimension.title}</h3>
      <p className="mt-1 text-ink-muted">{dimension.description}</p>
    </Card>
  );
}
