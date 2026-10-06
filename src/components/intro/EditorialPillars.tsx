"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, ShieldCheck, Microscope, Sprout } from "lucide-react";
import { cn } from "@/lib/utils";

export function EditorialPillars() {
  const [activeTab, setActiveTab] = useState<"agronomy" | "research">("agronomy");

  return (
    <section id="statement" className="relative py-28 px-6 lg:px-16 bg-[#0a110c] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Large Editorial Statement */}
        <div className="space-y-4 max-w-4xl">
          <div className="font-mono text-xs tracking-widest text-[#889b87] uppercase">
            // Core Philosophy
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight uppercase leading-[1.08]">
            Field Experience. <br />
            <span className="text-[#d99a38] font-normal">Scientific Thinking.</span> <br />
            Better Crop Decisions.
          </h2>
          <p className="text-base sm:text-lg text-stone-300 font-light max-w-2xl leading-relaxed pt-2">
            Agrovia Consulting exists to eliminate guesswork. We bridge high-calibre plant science
            with genuine boots-on-the-ground regional reality. Independent of chemical retailers,
            our loyalty rests solely on the health, packout, and financial return of your crop.
          </p>
        </div>

        {/* Dual Pillar Interactive Split Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Fixed Anchor & Pillar Selector */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <span className="font-mono text-xs text-stone-400 tracking-wider uppercase block">
              Explore Our Two Operational Pillars
            </span>

            {/* Pillar Selector Buttons */}
            <div className="space-y-4">
              <button
                onClick={() => setActiveTab("agronomy")}
                className={cn(
                  "w-full text-left p-6 rounded-xl border transition-all duration-300 relative overflow-hidden",
                  activeTab === "agronomy"
                    ? "bg-[#14281c] border-[#d99a38]/60 text-white shadow-xl"
                    : "bg-white/[0.02] border-white/10 text-stone-300 hover:bg-white/[0.04]"
                )}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <Sprout className={cn("w-5 h-5", activeTab === "agronomy" ? "text-[#d99a38]" : "text-stone-400")} />
                    <span className="font-mono text-xs tracking-widest uppercase text-stone-300">Pillar 01</span>
                  </div>
                  <span className="font-mono text-xs text-[#889b87]">North QLD</span>
                </div>
                <h3 className="text-xl font-normal tracking-wide text-white mb-2">Agronomy Consulting</h3>
                <p className="text-xs text-stone-300 leading-relaxed font-light">
                  Practical, independent, field-based agronomic support throughout the entire crop cycle.
                </p>
              </button>

              <button
                onClick={() => setActiveTab("research")}
                className={cn(
                  "w-full text-left p-6 rounded-xl border transition-all duration-300 relative overflow-hidden",
                  activeTab === "research"
                    ? "bg-[#14281c] border-[#d99a38]/60 text-white shadow-xl"
                    : "bg-white/[0.02] border-white/10 text-stone-300 hover:bg-white/[0.04]"
                )}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <Microscope className={cn("w-5 h-5", activeTab === "research" ? "text-[#d99a38]" : "text-stone-400")} />
                    <span className="font-mono text-xs tracking-widest uppercase text-stone-300">Pillar 02</span>
                  </div>
                  <span className="font-mono text-xs text-[#889b87]">Queensland Wide</span>
                </div>
                <h3 className="text-xl font-normal tracking-wide text-white mb-2">Research & Field Trials</h3>
                <p className="text-xs text-stone-300 leading-relaxed font-light">
                  Professional contract agricultural research and field-trial capability across Queensland.
                </p>
              </button>
            </div>

            {/* Independence Callout */}
            <div className="p-5 rounded-lg bg-white/[0.02] border border-white/5 flex items-start gap-3.5">
              <ShieldCheck className="w-5 h-5 text-[#889b87] shrink-0 mt-0.5" />
              <div className="text-xs text-stone-300 leading-relaxed">
                <span className="text-white font-medium block mb-0.5">100% Independent Advice</span>
                We do not sell chemical, seed, or fertilizer products. Our only objective is the performance of your crop.
              </div>
            </div>
          </div>

          {/* Right Column: Immersive Content Showcase */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {activeTab === "agronomy" ? (
                <motion.div
                  key="agronomy"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl border border-white/10 bg-[#111c14] overflow-hidden"
                >
                  <div className="relative h-64 sm:h-80 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1592417817098-8f3d69109853?q=80&w=1200&auto=format&fit=crop"
                      alt="Agronomy Field Inspection"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111c14] via-transparent to-black/30" />
                    <div className="absolute bottom-4 left-6 inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0a110c]/80 backdrop-blur-md font-mono text-[11px] text-stone-200">
                      <span>Bowen Horticultural Plain</span>
                    </div>
                  </div>

                  <div className="p-8 space-y-6">
                    <div className="space-y-2">
                      <span className="font-mono text-xs text-[#d99a38] uppercase tracking-wider block">
                        Field-Based Advisory
                      </span>
                      <h4 className="text-2xl font-normal text-white">Commercial Agronomy Consulting</h4>
                      <p className="text-sm text-stone-300 font-light leading-relaxed">
                        From seedbed preparation through to final harvest clearance, we provide proactive, on-farm agronomy.
                        Every recommendation is written specifically for your soil chemistry, irrigation water, and crop variety.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                      {[
                        "Regular Boots-on-Ground Crop Scouting",
                        "Targeted Pest & Disease Interventions",
                        "Phenology-Based Crop Nutrition Programs",
                        "Soil Geochemistry & Leaf Tissue Audits",
                        "Fertigation & Water-Use Calibration",
                        "Independent Spray Recommendations",
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs text-stone-200">
                          <CheckCircle2 className="w-4 h-4 text-[#889b87] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="font-mono text-xs text-stone-400">Servicing Bowen & Burdekin</span>
                      <a
                        href="#agronomy"
                        className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider text-[#d99a38] hover:text-[#f3be6a] uppercase transition-colors"
                      >
                        Explore 11 Agronomy Services <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="research"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl border border-white/10 bg-[#111c14] overflow-hidden"
                >
                  <div className="relative h-64 sm:h-80 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1200&auto=format&fit=crop"
                      alt="Research and Field Trials"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111c14] via-transparent to-black/30" />
                    <div className="absolute bottom-4 left-6 inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0a110c]/80 backdrop-blur-md font-mono text-[11px] text-stone-200">
                      <span>Scientific Research Plot • North QLD</span>
                    </div>
                  </div>

                  <div className="p-8 space-y-6">
                    <div className="space-y-2">
                      <span className="font-mono text-xs text-[#d99a38] uppercase tracking-wider block">
                        Scientific Capability
                      </span>
                      <h4 className="text-2xl font-normal text-white">Research & Field Trials</h4>
                      <p className="text-sm text-stone-300 font-light leading-relaxed">
                        We execute rigorous, replicated agricultural field trials evaluating novel crop protection chemistries,
                        fertilizers, biostimulants, and genetics under genuine commercial conditions across Queensland.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                      {[
                        "Randomized Complete Block Designs (RCBD)",
                        "Crop Safety & Phytotoxicity Audits",
                        "Efficacy Evaluation for Registration",
                        "Strict GEP & QA Protocol Adherence",
                        "High-Density Canopy Disease Scoring",
                        "Statistical Data Processing & Reporting",
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs text-stone-200">
                          <CheckCircle2 className="w-4 h-4 text-[#889b87] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 rounded-lg bg-[#182c20]/60 border border-[#889b87]/20 flex items-center justify-between">
                      <div className="text-xs text-stone-300">
                        <strong className="text-white block">AgriQuest Partnership</strong>
                        Supported research and trial capability across Queensland.
                      </div>
                      <a
                        href="#research"
                        className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider text-[#d99a38] hover:text-[#f3be6a] uppercase transition-colors shrink-0 ml-4"
                      >
                        View Protocol <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
