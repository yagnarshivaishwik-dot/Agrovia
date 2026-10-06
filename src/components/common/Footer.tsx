import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#070c08] border-t border-white/10 text-white overflow-hidden">
      <div className="absolute inset-0 grid-crosshair opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-20 pb-12 relative z-10 space-y-16">
        {/* Large Brand Editorial Statement */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10 pb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="font-mono text-xs tracking-widest text-[#d99a38] uppercase">
              // Agrovia Consulting
            </div>
            <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-white uppercase leading-[0.95]">
              Your Crop <br />
              <span className="font-normal text-stone-400">Comes First.</span>
            </h2>
            <p className="text-sm sm:text-base text-stone-300 font-light max-w-lg leading-relaxed">
              Independent agronomy and agricultural research supporting growers across North Queensland.
              Bowen &amp; Burdekin operational field territory.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#d99a38] hover:bg-[#e6a848] text-[#0a110c] font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-lg"
            >
              <span>Talk to an Agronomist</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href="/admin"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-stone-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors"
            >
              <span>Admin &amp; Billing Portal</span>
            </Link>
          </div>
        </div>

        {/* Navigation & Regional Sitemaps */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 font-mono text-xs text-stone-400">
          <div className="space-y-3">
            <span className="text-white font-semibold uppercase tracking-wider block">Disciplines</span>
            <ul className="space-y-2">
              <li><Link href="/agronomy" className="hover:text-[#d99a38] transition-colors">Crop Scouting</Link></li>
              <li><Link href="/agronomy" className="hover:text-[#d99a38] transition-colors">Pest &amp; Disease</Link></li>
              <li><Link href="/agronomy" className="hover:text-[#d99a38] transition-colors">Crop Nutrition</Link></li>
              <li><Link href="/agronomy" className="hover:text-[#d99a38] transition-colors">Soil &amp; Leaf Testing</Link></li>
              <li><Link href="/agronomy" className="hover:text-[#d99a38] transition-colors">Yield Forecasting</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-white font-semibold uppercase tracking-wider block">Scientific Trials</span>
            <ul className="space-y-2">
              <li><Link href="/research" className="hover:text-[#d99a38] transition-colors">6-Stage Protocol</Link></li>
              <li><Link href="/research" className="hover:text-[#d99a38] transition-colors">AgriQuest Partnership</Link></li>
              <li><Link href="/research" className="hover:text-[#d99a38] transition-colors">Trial Establishment</Link></li>
              <li><Link href="/research" className="hover:text-[#d99a38] transition-colors">Data &amp; Analysis</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-white font-semibold uppercase tracking-wider block">Regions &amp; Crops</span>
            <ul className="space-y-2">
              <li><Link href="/regions" className="hover:text-[#d99a38] transition-colors">Bowen &amp; Gumlu</Link></li>
              <li><Link href="/regions" className="hover:text-[#d99a38] transition-colors">Burdekin Delta</Link></li>
              <li><Link href="/crops" className="hover:text-[#d99a38] transition-colors">Horticulture Systems</Link></li>
              <li><Link href="/crops" className="hover:text-[#d99a38] transition-colors">Broadacre Rotations</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-white font-semibold uppercase tracking-wider block">Contact</span>
            <ul className="space-y-2">
              <li><a href="mailto:dev.p@agrovia.au" className="hover:text-[#d99a38] transition-colors text-white">dev.p@agrovia.au</a></li>
              <li>North Queensland, Australia</li>
              <li>Bowen &amp; Burdekin</li>
              <li className="pt-2 text-[10px] text-[#889b87]">ABN Registered • Grower Independent</li>
            </ul>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-stone-500">
          <div>
            © 2026 Agrovia Consulting. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Bowen &amp; Burdekin, QLD</span>
            <span>•</span>
            <span>Independent Agronomy &amp; Research</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
