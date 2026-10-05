import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { primaryNav } from "@/config/navigation";
import { bn } from "@/lib/i18n/bn";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-line">
      <Container className="flex flex-col gap-6 py-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="text-lg font-bold text-ink">
            AREA <span className="text-brand">DNA</span> {bn.site.country}
          </p>
          <p className="mt-1 text-ink-muted">{bn.site.tagline}</p>
          <p className="mt-4 text-sm text-ink-muted">{bn.footer.notice}</p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-1">
          {primaryNav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="inline-flex min-h-11 items-center text-ink hover:text-brand">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
