"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X, Sprout } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "About", href: "/about" },
  { name: "Agronomy", href: "/agronomy" },
  { name: "Research & Trials", href: "/research" },
  { name: "Crops", href: "/crops" },
  { name: "Regions", href: "/regions" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500 px-6 lg:px-12 py-5 flex items-center justify-between",
          mounted && isScrolled
            ? "glass-panel-dark py-3.5 border-b border-white/5 shadow-2xl backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        {/* Brand Identity */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-9 h-9 rounded-md bg-[#14281c] border border-white/10 flex items-center justify-center text-[#d99a38] group-hover:border-[#d99a38]/40 transition-colors">
            <Sprout className="w-5 h-5 text-[#d99a38]" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-base font-semibold tracking-wider text-white uppercase group-hover:text-[#d99a38] transition-colors">
              Agrovia
            </span>
            <span className="font-mono text-[9px] tracking-widest text-[#889b87] uppercase -mt-0.5">
              Consulting • North QLD
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-stone-300 hover:text-white relative py-1 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#d99a38] hover:after:w-full after:transition-all after:duration-300"
            >
              <span>{link.name}</span>
            </Link>
          ))}
        </nav>

        {/* Primary Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#14281c] hover:bg-[#1e3a29] border border-white/10 hover:border-[#d99a38]/50 text-xs font-mono tracking-wider text-stone-200 uppercase transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-1.5 font-medium">
              Talk to an Agronomist
              <ArrowUpRight className="w-3.5 h-3.5 text-[#d99a38] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-stone-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* Full-screen Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#0a110c] text-white flex flex-col justify-between p-8 pt-28 md:hidden">
          <div className="space-y-6">
            <span className="font-mono text-xs text-[#889b87] tracking-widest uppercase block">
              // Navigation Index
            </span>
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map((link, idx) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-light tracking-wide flex items-center justify-between border-b border-white/5 pb-3 text-stone-200 active:text-[#d99a38]"
                >
                  <span>{link.name}</span>
                  <span className="font-mono text-xs text-[#889b87]">0{idx + 1}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-white/10">
            <div className="font-mono text-xs text-stone-400">
              Bowen & Burdekin Agricultural Regions
            </div>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-[#d99a38] text-[#0a110c] font-medium font-mono text-xs uppercase tracking-wider"
            >
              Talk to an Agronomist
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
