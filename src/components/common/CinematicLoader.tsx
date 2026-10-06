"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CinematicLoader() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasLoaded = sessionStorage.getItem("agrovia_loaded");
    if (!hasLoaded) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("agrovia_loaded", "true");
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070c08] text-white"
        >
          <div className="space-y-4 text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-mono text-xs text-[#889b87] tracking-[0.3em] uppercase"
            >
              Agrovia Consulting
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-2xl sm:text-3xl font-light tracking-tight uppercase"
            >
              Your Crop <span className="text-[#d99a38]">Comes First.</span>
            </motion.h2>

            {/* Subtle Progress Bar */}
            <div className="w-48 h-[1px] bg-white/10 mx-auto overflow-hidden relative mt-6">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
                className="w-1/2 h-full bg-[#d99a38]"
              />
            </div>

            <div className="font-mono text-[10px] text-stone-500 uppercase tracking-widest pt-2">
              North Queensland • Bowen & Burdekin
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
