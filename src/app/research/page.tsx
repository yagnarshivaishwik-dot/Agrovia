import { Metadata } from "next";
import { ResearchTimeline } from "@/components/research/ResearchTimeline";
import { PageHeroHeader } from "@/components/common/PageHeroHeader";

export const metadata: Metadata = {
  title: "Agricultural Research & Field Trials — Agrovia Consulting",
  description:
    "Professional contract agricultural research and field-trial capability across Queensland, executed in partnership with AgriQuest.",
};

export default function ResearchPage() {
  return (
    <div className="bg-[#0a110c]">
      {/* Cinematic Hero with Research Plot & Scientific Field Trials Background */}
      <PageHeroHeader
        categoryTag="CONTRACT RESEARCH & TRIALS"
        title="From Field Trial"
        highlightedTitle="To Actionable Insight."
        description="Statistically sound, randomized complete block designs (RCBD) executed under commercial Queensland conditions. Conducted in partnership with AgriQuest."
        bgImageUrl="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=2000&auto=format&fit=crop"
        badgeText="AGRIQUEST RESEARCH PARTNERSHIP"
        coordinates="19.5741° S, 147.4063° E"
        primaryCtaText="Discuss a Research Trial"
        primaryCtaHref="/contact"
        secondaryCtaText="View 6-Stage SOP Timeline"
        secondaryCtaHref="#research"
      />

      <ResearchTimeline />
    </div>
  );
}
