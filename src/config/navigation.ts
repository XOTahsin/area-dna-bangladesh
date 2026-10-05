import { bn } from "@/lib/i18n/bn";
import type { IconName } from "@/components/ui/Icon";

export type NavStatus = "live" | "planned";

export interface NavItem {
  href: string;
  label: string;
  icon: IconName;
  /** "planned" = route exists but shows an honest "not built yet" page. */
  status: NavStatus;
}

export const primaryNav: readonly NavItem[] = [
  { href: "/", label: bn.nav.home, icon: "home", status: "live" },
  { href: "/explore", label: bn.nav.explore, icon: "search", status: "planned" },
  { href: "/compare", label: bn.nav.compare, icon: "compare", status: "planned" },
  { href: "/about", label: bn.nav.about, icon: "info", status: "live" },
];

/** Matches the current path to a nav item ("/" only matches exactly). */
export function isActivePath(pathname: string, href: string): boolean {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}
