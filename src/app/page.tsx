import { HeroSection } from "@/components/hero/HeroSection";
import { EditorialPillars } from "@/components/intro/EditorialPillars";
import { ServiceExplorer } from "@/components/agronomy/ServiceExplorer";
import { ResearchTimeline } from "@/components/research/ResearchTimeline";
import { CropGallery } from "@/components/crops/CropGallery";
import { QueenslandMap } from "@/components/regions/QueenslandMap";
import { FieldExperienceSection } from "@/components/field/FieldExperienceSection";
import { ContactForm } from "@/components/contact/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 01. Cinematic Immersive Hero */}
      <HeroSection />

      {/* 02. Editorial Statement & Dual Split Pillars */}
      <EditorialPillars />

      {/* 03. Interactive Agronomy Capabilities Explorer (11 Services) */}
      <ServiceExplorer />

      {/* 04. Research & Field Trials Pipeline + AgriQuest Partnership */}
      <ResearchTimeline />

      {/* 05. North Queensland Crop Ecosystem Gallery (12 Crops) */}
      <CropGallery />

      {/* 06. Regional Territory & Interactive Queensland Vector Map */}
      <QueenslandMap />

      {/* 07. Authentic Field Intelligence & Credibility Statistics */}
      <FieldExperienceSection />

      {/* 08. Precision Contact Channel & dev.p@agrovia.au Dispatch */}
      <ContactForm />
    </div>
  );
}
