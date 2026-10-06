import { Metadata } from "next";
import { CropGallery } from "@/components/crops/CropGallery";
import { PageHeroHeader } from "@/components/common/PageHeroHeader";

export const metadata: Metadata = {
  title: "Commercial Crops Ecosystem — Agrovia Consulting",
  description:
    "12 commercial crops managed across Bowen and the Burdekin: Tomatoes, Sweetcorn, Popcorn, Cotton, Mung Beans, Soybeans, Green Beans, Hemp, Cowpea, Capsicum, Chilli, and Eggplant.",
};

export default function CropsPage() {
  return (
    <div className="bg-[#0a110c]">
      {/* Cinematic Hero with Rich Horticultural Crop Ecosystem Background */}
      <PageHeroHeader
        categoryTag="REGIONAL CROPPING ECOSYSTEM"
        title="Commercial Crops"
        highlightedTitle="& Agronomic Disciplines."
        description="Deep agronomic specialization across 12 commercial crops: intensive winter horticulture in Bowen, sugarcane rotational break-crops, and summer broadacre across the Burdekin."
        bgImageUrl="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2000&auto=format&fit=crop"
        badgeText="12 COMMERCIAL CROPS COVERED"
        coordinates="20.0137° S, 148.2476° E"
        primaryCtaText="Inquire for Your Crop"
        primaryCtaHref="/contact"
        secondaryCtaText="Filter Crops Below"
        secondaryCtaHref="#crops"
      />

      <CropGallery />
    </div>
  );
}
