"use client";

import { motion } from "framer-motion";
import { RESEARCH_STAGES } from "@/content/agroviaData";
import { Compass, Sliders, Activity, Microscope, Users, FileCheck, Shield, ExternalLink, ArrowUpRight } from "lucide-react";

const STAGE_ICONS: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-5 h-5" />,
  Sliders: <Sliders className="w-5 h-5" />,
  Activity: <Activity className="w-5 h-5" />,
  Microscope: <Microscope className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  FileCheck: <FileCheck className="w-5 h-5" />,
};

export function ResearchTimeline() {
  return (
    <section id="research" className="relative py-28 px-6 lg:px-16 bg-[#0a110c] border-t border-white/5 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-crosshair opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        {/* Section Headline */}
        <div className="space-y-4 max-w-3xl">
          <div className="font-mono text-xs tracking-widest text-[#d99a38] uppercase">
            // Scientific Capability
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight uppercase leading-[1.05]">
            From Field Trial <br />
            <span className="text-[#889b87] font-normal">To Actionable Insight.</span>
          </h2>
          <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed">
            We conduct independent, scientifically rigorous agricultural research and field-trial capability across Queensland.
            Our field protocol ensures transparent methodology, reliable trial maintenance, and publication-standard data.
          </p>
        </div>

        {/* AgriQuest Partnership Showcase */}
        <div className="rounded-2xl border border-white/10 bg-[#122217]/50 backdrop-blur-md p-8 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 font-mono text-[11px] text-[#d99a38] tracking-widest uppercase">
                <Shield className="w-3.5 h-3.5 text-[#d99a38]" /> Strategic Research Partnership
              </div>
              <h3 className="text-xl font-normal text-white">Research Capability × AgriQuest</h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                Through its collaborative partnership with <strong>AgriQuest</strong>, Agrovia supports comprehensive
                agricultural research and field-trial capability across Queensland. Combining local regional field
                management with accredited trial management protocols.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono tracking-wider text-stone-200 hover:text-white uppercase transition-colors shrink-0"
            >
              <span>Discuss a Research Trial</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#d99a38]" />
            </a>
          </div>
        </div>

        {/* 6-Stage Timeline Protocol */}
        <div className="space-y-6">
          <div className="font-mono text-xs text-stone-400 tracking-wider uppercase">
            Standard Operating Protocol // 6 Field Stages
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESEARCH_STAGES.map((stage) => (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative p-6 rounded-xl border border-white/10 bg-[#101a13] hover:border-[#d99a38]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#d99a38] tracking-widest">
                      STAGE {stage.step}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-[#889b87] group-hover:text-[#d99a38] transition-colors">
                      {STAGE_ICONS[stage.iconName]}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-normal text-white mb-1 group-hover:text-[#d99a38] transition-colors">
                      {stage.title}
                    </h4>
                    <span className="font-mono text-[11px] text-[#889b87] block mb-3">
                      {stage.focus}
                    </span>
                    <p className="text-xs text-stone-300 leading-relaxed font-light">
                      {stage.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <span className="font-mono text-[10px] text-stone-400 uppercase tracking-wider block mb-1">
                    Key Deliverable
                  </span>
                  <span className="text-xs text-stone-300 font-light block">
                    {stage.deliverables}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
