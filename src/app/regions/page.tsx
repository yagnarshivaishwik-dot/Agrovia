import { Metadata } from "next";
import { QueenslandMap } from "@/components/regions/QueenslandMap";
import { PageHeroHeader } from "@/components/common/PageHeroHeader";

export const metadata: Metadata = {
  title: "North Queensland Operational Regions — Agrovia Consulting",
  description:
    "Operating footprint across North Queensland, centered on the intensive horticulture hub of Bowen & Gumlu and the broadacre/water security engine of the Burdekin.",
};

export default function RegionsPage() {
  return (
    <div className="bg-[#0a110c]">
      {/* Cinematic Hero with Vast Queensland Landscape / River Valley Aerial Background */}
      <PageHeroHeader
        categoryTag="OPERATIONAL REGIONS"
        title="North Queensland"
        highlightedTitle="Regional Territory."
        description="Headquartered in the paddocks of North Queensland. Rapid on-farm mobilization across the Bowen salad plain, Gumlu, and the Burdekin River irrigation district."
        bgImageUrl="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2000&auto=format&fit=crop"
        badgeText="BOWEN & BURDEKIN BASIN COVERAGE"
        coordinates="19.5741° S, 147.4063° E"
        primaryCtaText="Book a Paddock Visit"
        primaryCtaHref="/contact"
        secondaryCtaText="View Interactive Territory Map"
        secondaryCtaHref="#regions"
      />

      <QueenslandMap />
    </div>
  );
}
