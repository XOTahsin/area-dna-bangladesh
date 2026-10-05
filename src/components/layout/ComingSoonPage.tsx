import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { bn } from "@/lib/i18n/bn";

/** Honest placeholder for routes whose feature has not been built yet. */
export function ComingSoonPage({ title, description }: { title: string; description: string }) {
  return (
    <Container className="py-16 sm:py-24">
      <EmptyState
        title={title}
        description={`${bn.placeholders.heading}। ${description}`}
        action={<ButtonLink href="/">{bn.placeholders.backHome}</ButtonLink>}
      />
    </Container>
  );
}
