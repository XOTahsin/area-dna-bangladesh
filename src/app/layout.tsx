import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Hind_Siliguri } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { MobileNav } from "@/components/layout/MobileNav";
import { bn } from "@/lib/i18n/bn";
import "./globals.css";

// Font choice is a proposal (DESIGN_SYSTEM.md §14) — test on low-end Android before locking.
const bangla = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-bangla",
});

export const metadata: Metadata = {
  title: {
    default: `${bn.site.name} ${bn.site.country} — ${bn.site.tagline}`,
    template: `%s | ${bn.site.name} ${bn.site.country}`,
  },
  description: bn.site.description,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf8f4",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="bn" className={bangla.variable}>
      <body className="min-h-dvh bg-canvas pb-16 text-ink antialiased md:pb-0">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          {bn.nav.skipToContent}
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <MobileNav />
      </body>
    </html>
  );
}
