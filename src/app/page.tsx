import { DimensionsSection } from "@/features/home/DimensionsSection";
import { FutureCta } from "@/features/home/FutureCta";
import { Hero } from "@/features/home/Hero";
import { HowItWorks } from "@/features/home/HowItWorks";
import { MapPreview } from "@/features/home/MapPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MapPreview />
      <DimensionsSection />
      <HowItWorks />
      <FutureCta />
    </>
  );
}
