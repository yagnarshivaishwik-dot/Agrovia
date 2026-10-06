"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES_DATA, ServiceItem } from "@/content/agroviaData";
import { ArrowUpRight, CheckCircle2, ChevronRight, Activity, Layers, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

export function ServiceExplorer() {
  const [selectedId, setSelectedId] = useState<string>(SERVICES_DATA[0].id);

  const activeService = SERVICES_DATA.find((s) => s.id === selectedId) || SERVICES_DATA[0];

  return (
    <section id="agronomy" className="relative py-28 px-6 lg:px-16 bg-[#0d140e] border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <span className="font-mono text-xs tracking-widest text-[#d99a38] uppercase block">
              // Precision Agronomy Capability
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight uppercase">
              Agronomy Services
            </h2>
            <p className="text-sm sm:text-base text-stone-300 font-light max-w-xl">
              11 comprehensive field-proven disciplines designed to safeguard yield, enhance quality,
              and optimize input efficiency across Bowen and Burdekin crops.
            </p>
          </div>

          <div className="font-mono text-xs text-stone-400">
            Selected Capability: <span className="text-[#d99a38] font-bold">{activeService.number} / 11</span>
          </div>
        </div>

        {/* Interactive Explorer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Service Index List (Left Column) */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-[11px] font-mono text-stone-400 uppercase tracking-wider mb-3">
              Technical Disciplines
            </div>
            <div className="space-y-1.5 max-h-[620px] overflow-y-auto pr-2">
              {SERVICES_DATA.map((service) => {
                const isSelected = service.id === selectedId;
                return (
                  <button
                    key={service.id}
                    onClick={() => setSelectedId(service.id)}
                    data-cursor-action="SELECT"
                    className={cn(
                      "w-full text-left px-4 py-3.5 rounded-lg transition-all duration-200 flex items-center justify-between group border",
                      isSelected
                        ? "bg-[#182c20] border-[#d99a38]/60 text-white shadow-md"
                        : "bg-white/[0.01] border-transparent hover:bg-white/[0.04] text-stone-300 hover:text-white"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          "font-mono text-xs",
                          isSelected ? "text-[#d99a38] font-bold" : "text-stone-400 group-hover:text-stone-300"
                        )}
                      >
                        {service.number}
                      </span>
                      <span className="text-sm font-normal tracking-wide">{service.title}</span>
                    </div>

                    <ChevronRight
                      className={cn(
                        "w-4 h-4 transition-transform",
                        isSelected
                          ? "text-[#d99a38] translate-x-1"
                          : "text-stone-400 group-hover:text-stone-300"
                      )}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dossier Detail View (Right Column) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-white/10 bg-[#121d15] overflow-hidden shadow-2xl"
              >
                {/* Dossier Visual Header */}
                <div className="relative h-72 sm:h-88 overflow-hidden">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121d15] via-transparent to-black/30" />
                  
                  {/* Floating Tags */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded bg-[#0a110c]/80 backdrop-blur-md font-mono text-[11px] text-[#d99a38] uppercase border border-white/10">
                      {activeService.category}
                    </span>
                    <span className="px-3 py-1 rounded bg-[#0a110c]/80 backdrop-blur-md font-mono text-[11px] text-stone-300 uppercase border border-white/10">
                      Ref: AGV-{activeService.number}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-6 right-6">
                    <span className="font-mono text-xs text-[#889b87] block mb-1">
                      {activeService.metrics}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-light text-white leading-tight">
                      {activeService.title}
                    </h3>
                  </div>
                </div>

                {/* Dossier Detailed Body */}
                <div className="p-8 space-y-6">
                  <div className="space-y-3">
                    <p className="text-base text-[#d99a38] font-normal leading-relaxed">
                      "{activeService.tagline}"
                    </p>
                    <p className="text-sm text-stone-300 font-light leading-relaxed">
                      {activeService.description}
                    </p>
                  </div>

                  {/* Field Deliverables */}
                  <div className="space-y-3 pt-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-stone-400 flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-[#889b87]" />
                      Core Commercial Deliverables
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeService.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 p-2.5 rounded bg-white/[0.02] border border-white/5 text-xs text-stone-200"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#889b87] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Inquire Action */}
                  <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="text-xs font-mono text-stone-400">
                      Servicing Bowen, Gumlu, Home Hill, Ayr & surrounding valleys.
                    </div>
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#182c20] hover:bg-[#234230] border border-[#d99a38]/40 text-xs font-mono tracking-wider text-stone-200 hover:text-white uppercase transition-colors"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#d99a38]" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
