"use client";

import { motion } from "framer-motion";
import { Camera, CheckCircle2, ShieldCheck, Microscope, Compass } from "lucide-react";

const FIELD_GALLERY = [
  {
    title: "Canopy Inspection & Pest Scoring",
    location: "Bowen Salad Corridor",
    description: "In-field leaf-turn auditing for early whitefly nymphs and beneficial predator counts.",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d69109853?q=80&w=900&auto=format&fit=crop",
    code: "PLOT-BW-048",
  },
  {
    title: "Precision Soil Geochemistry Sampling",
    location: "Burdekin Delta Plains",
    description: "Core extraction across 0-30cm and 30-60cm strata evaluating exchangeable cations and sodicity.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=900&auto=format&fit=crop",
    code: "SAMP-BK-112",
  },
  {
    title: "Replicated Plot Establishment",
    location: "Queensland Trial Station",
    description: "Multi-treatment randomized layout evaluating bio-stimulant response under commercial drip.",
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=900&auto=format&fit=crop",
    code: "TRL-QLD-88",
  },
  {
    title: "Pre-Harvest Fruit Maturity & Brix Testing",
    location: "Gumlu Horticultural Valley",
    description: "Destructive and optical testing measuring firmness, sugar concentration, and internal seed maturity.",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=900&auto=format&fit=crop",
    code: "AUD-GM-029",
  },
];

const CAPABILITIES_LIST = [
  {
    label: "FIELD-BASED",
    desc: "Every recommendation is built on physical crop inspection, not office desk assumptions.",
    sub: "Direct paddock verification",
  },
  {
    label: "NORTH QUEENSLAND",
    desc: "Unrivalled regional memory spanning Bowen silt, Burdekin clays, and dry tropics microclimates.",
    sub: "Bowen & Burdekin focus",
  },
  {
    label: "RESEARCH-GRADE",
    desc: "Statistically sound field-trial protocols adhering to rigorous scientific standards.",
    sub: "AgriQuest research partnership",
  },
  {
    label: "100% INDEPENDENT",
    desc: "Zero chemical retail or seed sales commissions. Solely dedicated to grower profitability.",
    sub: "Unbiased crop advisory",
  },
];

export function FieldExperienceSection() {
  return (
    <section className="relative py-28 px-6 lg:px-16 bg-[#0d140e] border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Field Experience Photo Essay Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <span className="font-mono text-xs tracking-widest text-[#d99a38] uppercase block">
              // Boots-on-the-Ground
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight uppercase">
              Field Intelligence in Action
            </h2>
            <p className="text-sm sm:text-base text-stone-300 font-light max-w-xl">
              Authentic agricultural reality. We don't rely on generic stock images; our work happens
              under the North Queensland sun with grower boots in the dirt.
            </p>
          </div>

          <div className="font-mono text-xs text-stone-400">
            Archive // Field Scouting Logs
          </div>
        </div>

        {/* Photo Essay Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FIELD_GALLERY.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              data-cursor-action="VIEW LOG"
              className="group relative rounded-xl border border-white/10 bg-[#111c14] overflow-hidden flex flex-col justify-between"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111c14] via-transparent to-black/30" />
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md font-mono text-[10px] text-[#d99a38] uppercase">
                  {item.code}
                </span>
              </div>

              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] text-[#889b87] uppercase block mb-1">
                    {item.location}
                  </span>
                  <h4 className="text-base font-normal text-white group-hover:text-[#d99a38] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-300 font-light leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics & Capability Trust Pillars */}
        <div className="pt-12 border-t border-white/10 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="font-mono text-xs text-[#889b87] uppercase tracking-widest block">
              // Why Commercial Growers Choose Agrovia
            </span>
            <h3 className="text-2xl sm:text-3xl font-light text-white uppercase">
              Proven Principles, Zero Speculation
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAPABILITIES_LIST.map((cap, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-white/10 bg-[#101b13] space-y-3 relative overflow-hidden"
              >
                <div className="font-mono text-xs font-bold text-[#d99a38] tracking-widest uppercase">
                  {cap.label}
                </div>
                <div className="font-sans text-sm text-stone-200 leading-relaxed font-light">
                  {cap.desc}
                </div>
                <div className="pt-3 border-t border-white/5 font-mono text-[11px] text-[#889b87]">
                  {cap.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
