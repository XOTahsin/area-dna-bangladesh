import { Button } from "@/components/ui/Button";
import { bn } from "@/lib/i18n/bn";

interface ErrorStateProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
}

/** Plain-language error with a retry action. Never shows raw error text. */
export function ErrorState({
  title = bn.states.errorTitle,
  description = bn.states.errorBody,
  onRetry,
}: ErrorStateProps) {
  return (
    <div
      role="alert"
      className="mx-auto max-w-xl rounded-2xl border border-line bg-surface px-6 py-12 text-center"
    >
      <h1 className="text-2xl font-bold text-ink">{title}</h1>
      <p className="mt-3 text-ink-muted">{description}</p>
      {onRetry ? (
        <div className="mt-6 flex justify-center">
          <Button onClick={onRetry}>{bn.states.retry}</Button>
        </div>
      ) : null}
    </div>
  );
}
