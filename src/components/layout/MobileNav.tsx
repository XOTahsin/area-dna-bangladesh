"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/ui/Icon";
import { isActivePath, primaryNav } from "@/config/navigation";
import { bn } from "@/lib/i18n/bn";

/** Bottom tab bar for small screens. Four destinations max (DESIGN_SYSTEM.md §7). */
export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label={bn.nav.menuLabel}
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <ul className="grid grid-cols-4">
        {primaryNav.map((item) => {
          const active = isActivePath(pathname, item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`flex min-h-14 flex-col items-center justify-center gap-0.5 px-1 text-xs font-medium leading-tight ${
                  active ? "text-brand" : "text-ink-muted"
                }`}
              >
                <Icon name={item.icon} size={22} />
                <span className="text-center">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
