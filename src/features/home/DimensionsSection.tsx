import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { dimensions } from "@/config/dimensions";
import { DimensionCard } from "@/features/home/DimensionCard";
import { bn } from "@/lib/i18n/bn";

export function DimensionsSection() {
  return (
    <section aria-labelledby="dimensions-title" className="py-12 sm:py-16">
      <Container>
        <SectionHeading id="dimensions-title" title={bn.dimensions.title} description={bn.dimensions.body} />
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {dimensions.map((dimension) => (
            <li key={dimension.key}>
              <DimensionCard dimension={dimension} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
