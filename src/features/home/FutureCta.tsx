import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { bn } from "@/lib/i18n/bn";

export function FutureCta() {
  return (
    <section aria-labelledby="cta-title" className="py-12 sm:py-16">
      <Container>
        <div className="rounded-2xl bg-brand px-6 py-10 text-white sm:px-10 sm:py-14">
          <h2 id="cta-title" className="max-w-xl text-2xl font-bold sm:text-3xl">
            {bn.cta.title}
          </h2>
          <p className="mt-3 max-w-xl text-white/90">{bn.cta.body}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/explore" variant="inverse">
              {bn.cta.primary}
            </ButtonLink>
            <ButtonLink href="/about" variant="inverseOutline">
              {bn.cta.secondary}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
