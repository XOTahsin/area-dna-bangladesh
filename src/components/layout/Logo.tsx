import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { bn } from "@/lib/i18n/bn";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${bn.site.name} ${bn.site.country}`}>
      <span className="grid size-9 place-items-center rounded-xl bg-brand text-white">
        <Icon name="pin" size={20} />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-lg font-bold tracking-wide text-ink">
          AREA <span className="text-brand">DNA</span>
        </span>
        <span className="text-xs text-ink-muted">{bn.site.country}</span>
      </span>
    </Link>
  );
}
