"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Thermometer, Droplets, Mountain, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const REGIONS = [
  {
    id: "bowen",
    name: "Bowen & Gumlu",
    descriptor: "Winter Salad Bowl of Australia",
    coordinates: "20.0137° S, 148.2476° E",
    climate: "Dry Tropics • Average 1,000mm rainfall • Cool dry winters",
    soil: "Alluvial sandy loams, red volcanic loam, coastal river plains",
    crops: ["Tomatoes", "Capsicum", "Green Beans", "Sweetcorn", "Eggplant", "Chilli"],
    details:
      "Renowned for intensive winter horticulture. Agrovia provides heavy focus on high-frequency drip fertigation, calcium dynamics, TYLCV insect vector tracking, and trellis canopy microclimates.",
  },
  {
    id: "burdekin",
    name: "Burdekin Delta & River Plains",
    descriptor: "High-Yield Sugar & Broadacre Engine",
    coordinates: "19.5741° S, 147.4063° E",
    climate: "Abundant underground aquifer & Burdekin Falls Dam water security",
    soil: "Deep cracking clays, delta silts, structured black soils",
    crops: ["Cotton", "Soybeans", "Mung Beans", "Popcorn", "Hemp", "Sweetcorn"],
    details:
      "A powerhouse agricultural region with exceptional water reserves. Agrovia delivers rotation agronomy, soybean cane-break programs, cotton growth regulator scheduling, and Fall Armyworm IPM.",
  },
];

export function QueenslandMap() {
  const [activeRegion, setActiveRegion] = useState(REGIONS[0]);

  return (
    <section id="regions" className="relative py-28 px-6 lg:px-16 bg-[#0a110c] border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="font-mono text-xs tracking-widest text-[#d99a38] uppercase">
            // Geographic Footprint
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight uppercase leading-[1.05]">
            North Queensland <br />
            <span className="text-[#889b87] font-normal">Regional Territory</span>
          </h2>
          <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed">
            Agrovia operates directly in the paddocks of North Queensland. Our physical presence across
            Bowen and the Burdekin guarantees immediate field response times, local climate memory,
            and unmatched soil familiarity.
          </p>
        </div>

        {/* Interactive Territory Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Custom Minimalist Vector Map Showcase (Left) */}
          <div className="lg:col-span-6 rounded-2xl border border-white/10 bg-[#101c13] p-8 relative overflow-hidden min-h-[460px] flex flex-col justify-between">
            {/* Map Grid Texture */}
            <div className="absolute inset-0 grid-crosshair opacity-30 pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="font-mono text-xs text-[#d99a38] uppercase tracking-widest">
                Queensland Coastline Vector
              </span>
              <span className="font-mono text-[11px] text-stone-400">
                Lat 19°S - 21°S Coverage
              </span>
            </div>

            {/* Stylized Geo Graphic Container */}
            <div className="relative my-6 flex items-center justify-center">
              <svg
                viewBox="0 0 400 320"
                className="w-full max-w-md h-auto"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Coastal Line Path */}
                <path
                  d="M 50 20 Q 120 70 170 110 T 260 170 T 310 240 T 360 300"
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />

                {/* Ocean Label */}
                <text x="280" y="80" fill="rgba(136,155,135,0.4)" fontSize="11" fontFamily="monospace">
                  CORAL SEA
                </text>

                {/* Burdekin Marker Node */}
                <g
                  className="cursor-pointer group"
                  onClick={() => setActiveRegion(REGIONS[1])}
                >
                  <circle
                    cx="190"
                    cy="120"
                    r={activeRegion.id === "burdekin" ? "10" : "6"}
                    className={cn(
                      "transition-all duration-300",
                      activeRegion.id === "burdekin"
                        ? "fill-[#d99a38] stroke-white stroke-2"
                        : "fill-[#889b87] opacity-60 hover:opacity-100"
                    )}
                  />
                  {activeRegion.id === "burdekin" && (
                    <circle
                      cx="190"
                      cy="120"
                      r="18"
                      stroke="#d99a38"
                      strokeWidth="1.5"
                      className="animate-ping opacity-30"
                    />
                  )}
                  <text
                    x="208"
                    y="124"
                    fill={activeRegion.id === "burdekin" ? "#ffffff" : "#a8b5a7"}
                    fontSize="13"
                    fontWeight={activeRegion.id === "burdekin" ? "bold" : "normal"}
                    fontFamily="sans-serif"
                  >
                    BURDEKIN (Ayr / Home Hill)
                  </text>
                </g>

                {/* Bowen Marker Node */}
                <g
                  className="cursor-pointer group"
                  onClick={() => setActiveRegion(REGIONS[0])}
                >
                  <circle
                    cx="260"
                    cy="180"
                    r={activeRegion.id === "bowen" ? "10" : "6"}
                    className={cn(
                      "transition-all duration-300",
                      activeRegion.id === "bowen"
                        ? "fill-[#d99a38] stroke-white stroke-2"
                        : "fill-[#889b87] opacity-60 hover:opacity-100"
                    )}
                  />
                  {activeRegion.id === "bowen" && (
                    <circle
                      cx="260"
                      cy="180"
                      r="18"
                      stroke="#d99a38"
                      strokeWidth="1.5"
                      className="animate-ping opacity-30"
                    />
                  )}
                  <text
                    x="278"
                    y="184"
                    fill={activeRegion.id === "bowen" ? "#ffffff" : "#a8b5a7"}
                    fontSize="13"
                    fontWeight={activeRegion.id === "bowen" ? "bold" : "normal"}
                    fontFamily="sans-serif"
                  >
                    BOWEN & GUMLU
                  </text>
                </g>
              </svg>
            </div>

            {/* Region Switcher Buttons */}
            <div className="relative z-10 grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
              {REGIONS.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setActiveRegion(region)}
                  className={cn(
                    "p-3 rounded-lg text-left transition-all border font-mono text-xs uppercase tracking-wider",
                    activeRegion.id === region.id
                      ? "bg-[#182c20] border-[#d99a38] text-white"
                      : "bg-white/[0.02] border-white/5 text-stone-400 hover:text-white"
                  )}
                >
                  <div className="font-semibold text-white">{region.name}</div>
                  <div className="text-[10px] text-[#889b87] lowercase">focus region</div>
                </button>
              ))}
            </div>
          </div>

          {/* Region Dossier Details (Right) */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              key={activeRegion.id}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-[#d99a38] tracking-widest uppercase mb-1">
                  <MapPin className="w-4 h-4" />
                  {activeRegion.coordinates}
                </div>
                <h3 className="text-3xl font-light text-white uppercase">{activeRegion.name}</h3>
                <p className="text-sm font-mono text-[#889b87] mt-1">{activeRegion.descriptor}</p>
              </div>

              <p className="text-sm text-stone-300 font-light leading-relaxed">
                {activeRegion.details}
              </p>

              {/* Climate & Soil Breakdown */}
              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-stone-400">
                    <Thermometer className="w-3.5 h-3.5 text-[#d99a38]" /> Climate & Water Characteristics
                  </div>
                  <div className="text-xs text-stone-200">{activeRegion.climate}</div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-stone-400">
                    <Mountain className="w-3.5 h-3.5 text-[#889b87]" /> Soil Profiles
                  </div>
                  <div className="text-xs text-stone-200">{activeRegion.soil}</div>
                </div>
              </div>

              {/* Dominant Crops */}
              <div>
                <span className="font-mono text-xs text-stone-400 uppercase tracking-wider block mb-2">
                  Primary Cropping Systems:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeRegion.crops.map((c, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-[#14281c] border border-white/10 font-mono text-xs text-stone-300"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#d99a38] hover:bg-[#e6a848] text-[#0a110c] font-mono text-xs uppercase tracking-wider font-semibold transition-colors"
                >
                  <span>Request Field Visit in {activeRegion.name.split(" ")[0]}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
