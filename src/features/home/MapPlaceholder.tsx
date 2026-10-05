import { Badge } from "@/components/ui/Badge";
import { bn } from "@/lib/i18n/bn";

/**
 * Static stand-in for the future interactive map.
 * Stage 2 replaces this with a lazy-loaded MapLibre component from features/map.
 * It deliberately draws NO country outline, scores, or markers for real places.
 */
export function MapPlaceholder() {
  return (
    <div
      role="img"
      aria-label={bn.map.panelAlt}
      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line bg-surface"
    >
      <svg viewBox="0 0 400 300" className="absolute inset-0 size-full" aria-hidden="true">
        <defs>
          <pattern id="grid-dots" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="var(--border)" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#grid-dots)" />
        <g fill="none" stroke="var(--brand)" strokeOpacity="0.35">
          <circle cx="200" cy="140" r="38" />
          <circle cx="200" cy="140" r="78" strokeDasharray="4 6" />
          <circle cx="200" cy="140" r="118" strokeDasharray="2 8" />
        </g>
        <circle cx="200" cy="140" r="9" fill="var(--accent)" />
        <circle cx="200" cy="140" r="16" fill="var(--accent)" fillOpacity="0.2" />
      </svg>
      <div className="absolute bottom-3 left-3">
        <Badge tone="warn">{bn.map.panelBadge}</Badge>
      </div>
    </div>
  );
}
