import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { bn } from "@/lib/i18n/bn";

export default function NotFound() {
  return (
    <Container className="py-16 sm:py-24">
      <EmptyState
        title={bn.states.notFoundTitle}
        description={bn.states.notFoundBody}
        action={<ButtonLink href="/">{bn.placeholders.backHome}</ButtonLink>}
      />
    </Container>
  );
}
