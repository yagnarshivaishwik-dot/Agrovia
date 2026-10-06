"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CROPS_DATA, CropItem } from "@/content/agroviaData";
import { Sprout, MapPin, Eye, ChevronRight, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "Horticulture", "Broadacre", "Specialty Grain", "Industrial"] as const;

export function CropGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeCrop, setActiveCrop] = useState<CropItem | null>(null);

  const filteredCrops =
    activeCategory === "All"
      ? CROPS_DATA
      : CROPS_DATA.filter((c) => c.category === activeCategory);

  return (
    <section id="crops" className="relative py-28 px-6 lg:px-16 bg-[#0d140e] border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <span className="font-mono text-xs tracking-widest text-[#d99a38] uppercase block">
              // Regional Cropping Systems
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight uppercase">
              Crops & Capabilities
            </h2>
            <p className="text-sm sm:text-base text-stone-300 font-light max-w-xl">
              12 commercial crops supported across North Queensland. Deep agronomic expertise in
              intensive winter horticulture, sugarcane break-crops, and summer broadacre rotations.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-3.5 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-200 border",
                  activeCategory === cat
                    ? "bg-[#d99a38] text-[#0a110c] border-[#d99a38] font-semibold"
                    : "bg-white/[0.02] text-stone-300 border-white/10 hover:border-white/20"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Crops Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCrops.map((crop) => (
            <motion.div
              key={crop.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              onClick={() => setActiveCrop(crop)}
              data-cursor-action="EXPLORE"
              className="group cursor-pointer rounded-xl border border-white/10 bg-[#111c14] overflow-hidden hover:border-[#d99a38]/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={crop.image}
                  alt={crop.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111c14] via-transparent to-black/30" />
                <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-[#0a110c]/80 backdrop-blur-md font-mono text-[10px] text-[#889b87] border border-white/5 uppercase">
                  {crop.category}
                </span>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-normal text-white group-hover:text-[#d99a38] transition-colors">
                    {crop.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-stone-400 font-mono text-[11px] mt-1">
                    <MapPin className="w-3 h-3 text-[#d99a38]" />
                    <span>{crop.keyRegions.join(", ")}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-stone-400">
                  <span className="group-hover:text-stone-200 transition-colors">View Field Specs</span>
                  <ChevronRight className="w-4 h-4 text-stone-500 group-hover:text-[#d99a38] group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal / Detailed Crop Drawer */}
        <AnimatePresence>
          {activeCrop && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-2xl rounded-2xl border border-white/10 bg-[#121f16] overflow-hidden shadow-2xl"
              >
                <button
                  onClick={() => setActiveCrop(null)}
                  className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative h-64">
                  <img
                    src={activeCrop.image}
                    alt={activeCrop.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121f16] via-transparent to-black/40" />
                  <div className="absolute bottom-4 left-6">
                    <span className="font-mono text-xs text-[#d99a38] uppercase block">
                      {activeCrop.category} Ecosystem
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-light text-white">
                      {activeCrop.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-5">
                  <p className="text-sm text-stone-300 font-light leading-relaxed">
                    {activeCrop.summary}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/5 space-y-1">
                      <span className="font-mono text-[10px] text-stone-400 uppercase tracking-wider block">
                        Typical Soils
                      </span>
                      <span className="text-xs text-stone-200 block font-normal">
                        {activeCrop.soilTypes}
                      </span>
                    </div>

                    <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/5 space-y-1">
                      <span className="font-mono text-[10px] text-[#d99a38] uppercase tracking-wider block">
                        Scouting Focus Points
                      </span>
                      <span className="text-xs text-stone-200 block font-normal">
                        {activeCrop.scoutingFocus}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="font-mono text-xs text-stone-400">
                      Regions: {activeCrop.keyRegions.join(", ")}
                    </span>
                    <a
                      href="#contact"
                      onClick={() => setActiveCrop(null)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#d99a38] text-[#0a110c] font-mono text-xs font-semibold uppercase hover:bg-[#e6a848] transition-colors"
                    >
                      <span>Inquire for {activeCrop.name.split(" ")[0]}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
