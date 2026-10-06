"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, ShieldCheck, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 lg:px-16 overflow-hidden bg-[#0a110c]">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35 scale-105 transition-transform duration-1000 ease-out"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        {/* Editorial Gradients & Grain */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a110c] via-[#0a110c]/70 to-[#0a110c]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a110c] via-transparent to-[#0a110c]/80" />
        <div className="absolute inset-0 grain-overlay pointer-events-none" />
        <div className="absolute inset-0 grid-crosshair opacity-30 pointer-events-none" />
      </div>

      {/* Floating Metadata Badge */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-6">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-[11px] tracking-widest text-stone-300 uppercase">
            Bowen & Burdekin Field Operations Active
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-6 font-mono text-[11px] tracking-widest text-stone-400 uppercase">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#d99a38]" /> 20.0137° S, 148.2476° E
          </span>
          <span className="text-white/20">|</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#889b87]" /> Independent Advice
          </span>
        </div>
      </div>

      {/* Main Display Headlines & Value Proposition */}
      <div className="relative z-10 my-auto py-12 max-w-5xl">
        <div className="space-y-4">
          <div className="font-mono text-xs md:text-sm tracking-[0.25em] text-[#d99a38] uppercase flex items-center gap-2">
            <span className="w-8 h-[1px] bg-[#d99a38]" />
            Agrovia Consulting
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white uppercase leading-[0.92]">
            Your Crop <br />
            <span className="font-normal text-stone-300">Comes First.</span>
          </h1>

          <p className="max-w-2xl text-base sm:text-lg md:text-xl text-stone-300 font-light leading-relaxed pt-2">
            Independent agronomy and agricultural research supporting commercial growers across
            North Queensland. Field experience grounded in science, local soil memory, and rigorous trial intelligence.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-8">
          <Link
            href="/contact"
            data-cursor-action="CONSULT"
            className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-[#d99a38] hover:bg-[#e6a848] text-[#0a110c] font-medium text-xs sm:text-sm font-mono tracking-wider uppercase transition-all duration-300 shadow-[0_4px_24px_rgba(217,154,56,0.3)]"
          >
            <span>Talk to an Agronomist</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <Link
            href="/research"
            data-cursor-action="EXPLORE"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-stone-200 text-xs sm:text-sm font-mono tracking-wider uppercase transition-all duration-300 backdrop-blur-sm"
          >
            <span>Explore Research & Trials</span>
            <span className="text-[#889b87]">→</span>
          </Link>
        </div>
      </div>

      {/* Hero Footnote / Scroll Indicator */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 border-t border-white/10 pt-6">
        <div className="flex items-center gap-8 font-mono text-[11px] text-stone-400 tracking-wider">
          <div>
            <div className="text-white font-semibold">01 // AGRONOMY</div>
            <div className="text-stone-400">Crop Health & Nutrition</div>
          </div>
          <div className="h-6 w-[1px] bg-white/10" />
          <div>
            <div className="text-white font-semibold">02 // RESEARCH</div>
            <div className="text-stone-400">Queensland Field Trials</div>
          </div>
        </div>

        <a
          href="#statement"
          className="flex items-center gap-2 font-mono text-xs text-stone-400 hover:text-white transition-colors group"
        >
          <span className="tracking-widest uppercase text-[10px]">Scroll to Explore</span>
          <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#d99a38] group-hover:text-[#d99a38] transition-colors">
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
