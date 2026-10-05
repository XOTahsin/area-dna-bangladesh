import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { toBanglaDigits } from "@/lib/i18n/format";
import { bn } from "@/lib/i18n/bn";

export function HowItWorks() {
  return (
    <section aria-labelledby="how-title" className="py-12 sm:py-16">
      <Container>
        <SectionHeading id="how-title" title={bn.how.title} />
        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {bn.how.steps.map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <span
                aria-hidden="true"
                className="grid size-11 shrink-0 place-items-center rounded-full border border-brand text-lg font-bold text-brand"
              >
                {toBanglaDigits(index + 1)}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-1 text-ink-muted">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-sm text-ink-muted">{bn.how.note}</p>
      </Container>
    </section>
  );
}
