"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, MapPin } from "lucide-react";

interface PageHeroHeaderProps {
  categoryTag?: string;
  title: string;
  highlightedTitle?: string;
  description: string;
  bgImageUrl: string;
  badgeText?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  coordinates?: string;
  fullHeight?: boolean;
}

export function PageHeroHeader({
  categoryTag = "AGROVIA CONSULTING",
  title,
  highlightedTitle,
  description,
  bgImageUrl,
  badgeText = "BOWEN & BURDEKIN FIELD OPERATIONS ACTIVE",
  primaryCtaText = "Talk to an Agronomist",
  primaryCtaHref = "/contact",
  secondaryCtaText,
  secondaryCtaHref,
  coordinates = "20.0137° S, 148.2476° E",
  fullHeight = false,
}: PageHeroHeaderProps) {
  return (
    <section
      className={`relative flex flex-col justify-between pt-32 pb-16 px-6 lg:px-16 overflow-hidden bg-[#070d09] ${
        fullHeight ? "min-h-screen" : "min-h-[75vh]"
      }`}
    >
      {/* Cinematic Moody Deep-Atmosphere Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 scale-105 transition-transform duration-1000 ease-out"
          style={{ backgroundImage: `url('${bgImageUrl}')` }}
        />
        {/* Soft Vignettes & Atmospheric Shading */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a110c] via-[#070d09]/75 to-[#070d09]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070d09] via-[#070d09]/50 to-[#070d09]/90" />
        <div className="absolute inset-0 grain-overlay pointer-events-none" />
        <div className="absolute inset-0 grid-crosshair opacity-20 pointer-events-none" />
      </div>

      {/* Floating Status & Metadata Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
        {badgeText && (
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[11px] tracking-widest text-stone-300 uppercase">
              {badgeText}
            </span>
          </div>
        )}

        <div className="hidden sm:flex items-center gap-6 font-mono text-[11px] tracking-widest text-stone-400 uppercase">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#d99a38]" /> {coordinates}
          </span>
          <span className="text-white/20">|</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#889b87]" /> Independent Advice
          </span>
        </div>
      </div>

      {/* Main Display Headline & Copy */}
      <div className="relative z-10 my-auto py-12 max-w-5xl">
        <div className="space-y-4">
          <div className="font-mono text-xs md:text-sm tracking-[0.25em] text-[#d99a38] uppercase flex items-center gap-2">
            <span className="w-8 h-[1px] bg-[#d99a38]" />
            {categoryTag}
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white uppercase leading-[0.92]">
            {title} <br />
            {highlightedTitle && (
              <span className="font-normal text-stone-300">{highlightedTitle}</span>
            )}
          </h1>

          <p className="max-w-2xl text-base sm:text-lg md:text-xl text-stone-300 font-light leading-relaxed pt-2">
            {description}
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-8">
          {primaryCtaText && (
            <Link
              href={primaryCtaHref}
              data-cursor-action="CONSULT"
              className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-[#d99a38] hover:bg-[#e6a848] text-[#0a110c] font-medium text-xs sm:text-sm font-mono tracking-wider uppercase transition-all duration-300 shadow-[0_4px_24px_rgba(217,154,56,0.3)]"
            >
              <span>{primaryCtaText}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          )}

          {secondaryCtaText && secondaryCtaHref && (
            <Link
              href={secondaryCtaHref}
              data-cursor-action="EXPLORE"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-stone-200 text-xs sm:text-sm font-mono tracking-wider uppercase transition-all duration-300 backdrop-blur-sm"
            >
              <span>{secondaryCtaText}</span>
              <span className="text-[#889b87]">→</span>
            </Link>
          )}
        </div>
      </div>

      {/* Bottom Sub-Indicator */}
      <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-6 font-mono text-[11px] text-stone-400">
        <div>Bowen &amp; Burdekin Agricultural Regions • North Queensland</div>
        <div className="hidden sm:block text-[#889b87]">Agrovia Field Operations</div>
      </div>
    </section>
  );
}
