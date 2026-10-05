import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/layout/ComingSoonPage";
import { bn } from "@/lib/i18n/bn";

export const metadata: Metadata = { title: bn.nav.explore };

export default function ExplorePage() {
  return <ComingSoonPage title={bn.nav.explore} description={bn.placeholders.explore} />;
}
