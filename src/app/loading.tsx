import { Container } from "@/components/layout/Container";
import { Skeleton } from "@/components/ui/Skeleton";
import { bn } from "@/lib/i18n/bn";

export default function Loading() {
  return (
    <Container className="py-16">
      <span className="sr-only" role="status">
        {bn.states.loading}
      </span>
      <Skeleton className="h-10 w-3/4 max-w-xl" />
      <Skeleton className="mt-4 h-5 w-full max-w-2xl" />
      <Skeleton className="mt-2 h-5 w-2/3 max-w-xl" />
      <Skeleton className="mt-8 h-14 w-full max-w-2xl" />
    </Container>
  );
}
