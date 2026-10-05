import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/layout/ComingSoonPage";
import { bn } from "@/lib/i18n/bn";

export const metadata: Metadata = { title: bn.nav.compare };

export default function ComparePage() {
  return <ComingSoonPage title={bn.nav.compare} description={bn.placeholders.compare} />;
}
