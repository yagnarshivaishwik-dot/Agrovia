import { Metadata } from "next";
import { ServiceExplorer } from "@/components/agronomy/ServiceExplorer";
import { PageHeroHeader } from "@/components/common/PageHeroHeader";

export const metadata: Metadata = {
  title: "Agronomy Consulting Services — Agrovia Consulting",
  description:
    "11 comprehensive agronomic capabilities: crop scouting, IPM pest & disease management, nutrition budgets, soil & leaf tissue analysis, and yield modeling across North Queensland.",
};

export default function AgronomyPage() {
  return (
    <div className="bg-[#0a110c]">
      {/* Cinematic Hero with Close-Up High-Detail Crop Canopy Background */}
      <PageHeroHeader
        categoryTag="PRECISION AGRONOMY"
        title="Field Intelligence."
        highlightedTitle="Precision Paddock Science."
        description="11 comprehensive agronomic disciplines engineered to safeguard yield, enhance skin finish, and optimize chemical and nutrient efficiency across Bowen and Burdekin crops."
        bgImageUrl="https://images.unsplash.com/photo-1592417817098-8f3d69109853?q=80&w=2000&auto=format&fit=crop"
        badgeText="11 ACTIVE FIELD DISCIPLINES"
        coordinates="20.0137° S, 148.2476° E"
        primaryCtaText="Consult an Agronomist"
        primaryCtaHref="/contact"
        secondaryCtaText="Explore Capabilities Below"
        secondaryCtaHref="#agronomy"
      />

      <ServiceExplorer />
    </div>
  );
}
