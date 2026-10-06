import { Metadata } from "next";
import { ShieldCheck, CheckCircle2, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PageHeroHeader } from "@/components/common/PageHeroHeader";

export const metadata: Metadata = {
  title: "About Agrovia Consulting — Independent North Queensland Agronomy",
  description:
    "Learn about Agrovia Consulting: independent agronomy and agricultural research supporting commercial growers across Bowen and the Burdekin.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#0a110c] text-white">
      {/* Cinematic Hero with Dusk Agricultural Horizon Background */}
      <PageHeroHeader
        categoryTag="ABOUT AGROVIA"
        title="Boots in the Dirt."
        highlightedTitle="Rigorous Science in Mind."
        description="Independent agronomy and agricultural research supporting commercial growers across Bowen and the Burdekin. No chemical retail quotas, no compromise."
        bgImageUrl="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2000&auto=format&fit=crop"
        badgeText="FIELD-BASED INDEPENDENT PRACTICE"
        coordinates="20.0137° S, 148.2476° E"
        primaryCtaText="Talk to an Agronomist"
        primaryCtaHref="/contact"
        secondaryCtaText="Explore Agronomy Services"
        secondaryCtaHref="/agronomy"
      />

      <div className="py-24 px-6 lg:px-16 max-w-5xl mx-auto space-y-20">
        {/* Narrative Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start border-t border-white/10 pt-12">
          <div className="md:col-span-4 font-mono text-xs text-stone-400 space-y-4">
            <span className="text-[#d99a38] uppercase tracking-wider block">Foundational Tenet</span>
            <p className="leading-relaxed">
              We do not sell chemical, seed, or fertilizer products. Our independence is our core asset.
              When we make a recommendation, the only beneficiary is your paddock.
            </p>
            <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5 space-y-2">
              <span className="text-white block font-semibold">Field Coverage:</span>
              <div>Bowen • Gumlu • Ayr • Home Hill • Up River Burdekin</div>
            </div>
          </div>

          <div className="md:col-span-8 space-y-8 text-stone-300 font-light leading-relaxed">
            <div className="space-y-4">
              <h2 className="text-2xl font-normal text-white uppercase tracking-wide">
                Who We Are
              </h2>
              <p>
                Agrovia was formed to provide commercial horticulture and broadacre producers with dedicated,
                uncompromised technical oversight. Modern agriculture faces mounting regulatory scrutiny, complex
                chemical resistance dynamics, and tight pack-out margins. Growers require advisors who spend
                their time walking rows, examining root systems, and testing sap chemistry—not sitting behind a retail counter.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-normal text-white uppercase tracking-wide">
                How We Operate
              </h2>
              <p>
                Every property has distinct geochemical balances and microclimate pressures. We establish baseline
                soil audits before ground prep, calibrate drip fertigation to current phenology, monitor insect thresholds
                with rigorous sweep and tap counts, and perform destructive fruit quality tests prior to harvest.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-normal text-white uppercase tracking-wide">
                Research Grounding
              </h2>
              <p>
                Through our active partnership with AgriQuest, our agronomy is continually fed by fresh trial data.
                We evaluate emerging biologicals, novel chemistries, and disease-resistant germplasm under local Queensland
                conditions before commercial release, giving our growers early access to verified field intelligence.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="font-mono text-xs text-[#889b87]">
                Ready to review your upcoming seasonal program?
              </span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#d99a38] text-[#0a110c] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#e6a848] transition-colors"
              >
                <span>Talk to an Agronomist</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
