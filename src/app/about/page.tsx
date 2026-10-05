import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { bn } from "@/lib/i18n/bn";

export const metadata: Metadata = { title: bn.about.title };

export default function AboutPage() {
  return (
    <Container className="max-w-3xl py-12 sm:py-16">
      <h1 className="text-3xl font-bold text-ink sm:text-4xl">{bn.about.title}</h1>
      <p className="mt-4 text-lg text-ink-muted">{bn.about.intro}</p>
      <ul className="mt-4 list-disc space-y-1 pl-6 text-ink">
        {bn.about.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <h2 className="mt-10 text-xl font-semibold text-ink">{bn.about.statesTitle}</h2>
      <ul className="mt-3 flex flex-wrap gap-2">
        {bn.about.states.map((state) => (
          <li key={state}>
            <Badge>{state}</Badge>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm text-ink-muted">{bn.about.note}</p>
    </Container>
  );
}
