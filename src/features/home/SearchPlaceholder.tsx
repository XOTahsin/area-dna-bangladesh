import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { bn } from "@/lib/i18n/bn";

/**
 * Visual placeholder for the future area search (Stage 2/3+).
 * Intentionally disabled: no search backend exists yet, so it must not pretend to work.
 */
export function SearchPlaceholder() {
  return (
    <div className="mt-8 max-w-2xl">
      <label htmlFor="area-search" className="block text-lg font-semibold text-ink">
        {bn.hero.searchLabel}
      </label>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Icon
            name="search"
            size={20}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted"
          />
          <input
            id="area-search"
            type="search"
            disabled
            aria-describedby="area-search-note"
            placeholder={bn.hero.searchPlaceholder}
            className="h-14 w-full rounded-xl border border-line bg-surface pl-12 pr-4 text-base text-ink placeholder:text-ink-muted disabled:cursor-not-allowed"
          />
        </div>
        <Button disabled className="h-14 sm:min-w-28">
          {bn.hero.searchButton}
        </Button>
      </div>
      <p id="area-search-note" className="mt-3 text-sm text-ink-muted">
        {bn.hero.searchNote}
      </p>
    </div>
  );
}
