"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isActivePath, primaryNav } from "@/config/navigation";
import { bn } from "@/lib/i18n/bn";

/** Desktop/tablet navigation (hidden on mobile; MobileNav takes over). */
export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label={bn.nav.menuLabel} className="hidden md:block">
      <ul className="flex items-center gap-1">
        {primaryNav.map((item) => {
          const active = isActivePath(pathname, item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`flex min-h-11 items-center gap-2 rounded-lg px-3 text-base font-medium transition-colors ${
                  active ? "bg-brand-soft text-brand" : "text-ink hover:bg-brand-soft/60"
                }`}
              >
                {item.label}
                {item.status === "planned" ? (
                  <span className="text-xs font-normal text-ink-muted">{bn.nav.soon}</span>
                ) : null}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
