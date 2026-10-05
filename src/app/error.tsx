"use client";

import { Container } from "@/components/layout/Container";
import { ErrorState } from "@/components/ui/ErrorState";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <Container className="py-16 sm:py-24">
      <ErrorState onRetry={reset} />
    </Container>
  );
}
