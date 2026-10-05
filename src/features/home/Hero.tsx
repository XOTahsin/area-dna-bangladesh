import { Container } from "@/components/layout/Container";
import { SearchPlaceholder } from "@/features/home/SearchPlaceholder";
import { bn } from "@/lib/i18n/bn";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="pb-12 pt-10 sm:pb-16 sm:pt-16 lg:pt-24">
      <Container>
        <h1
          id="hero-title"
          className="max-w-3xl text-[1.875rem] font-bold text-ink sm:text-5xl lg:text-6xl"
        >
          <span className="block">{bn.hero.line1}</span>
          <span className="block text-brand">{bn.hero.line2}</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-muted">{bn.hero.body}</p>
        <SearchPlaceholder />
        <p className="mt-6 max-w-2xl border-l-2 border-accent pl-3 text-sm text-ink-muted">
          {bn.hero.status}
        </p>
      </Container>
    </section>
  );
}
