import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapPlaceholder } from "@/features/home/MapPlaceholder";
import { bn } from "@/lib/i18n/bn";

export function MapPreview() {
  return (
    <section aria-labelledby="map-title" className="py-12 sm:py-16">
      <Container className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div>
          <SectionHeading id="map-title" title={bn.map.title} description={bn.map.body} />
          <p className="mt-6 text-sm font-semibold text-ink">{bn.map.plannedLabel}</p>
          <ul className="mt-2 space-y-2">
            {bn.map.planned.map((item) => (
              <li key={item} className="flex items-center gap-3 text-ink">
                <Badge>{bn.planned}</Badge>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <MapPlaceholder />
      </Container>
    </section>
  );
}
