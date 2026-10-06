"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "action" | "hidden">("default");
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useSpring(0, { stiffness: 450, damping: 32 });
  const mouseY = useSpring(0, { stiffness: 450, damping: 32 });

  useEffect(() => {
    setMounted(true);

    // Disable on touch screens and if reduced motion is preferred
    const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (hasTouch || prefersReducedMotion) {
      setCursorVariant("hidden");
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const actionElement = target.closest("[data-cursor-action]");
      const linkElement = target.closest("a, button, [role='button'], input, textarea, select");

      if (actionElement) {
        const text = actionElement.getAttribute("data-cursor-action") || "VIEW";
        setCursorText(text);
        setCursorVariant("action");
      } else if (linkElement) {
        setCursorText("");
        setCursorVariant("hover");
      } else {
        setCursorText("");
        setCursorVariant("default");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!mounted || cursorVariant === "hidden" || !isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50 flex items-center justify-center font-mono text-[10px] tracking-widest text-[#0a110c] uppercase font-bold"
      style={{
        x: mouseX,
        y: mouseY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      {cursorVariant === "default" && (
        <div className="w-2.5 h-2.5 rounded-full bg-[#d99a38] shadow-[0_0_12px_rgba(217,154,56,0.6)]" />
      )}

      {cursorVariant === "hover" && (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-10 h-10 rounded-full border border-[#d99a38] bg-[#d99a38]/20 backdrop-blur-xs flex items-center justify-center"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#d99a38]" />
        </motion.div>
      )}

      {cursorVariant === "action" && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="px-3.5 py-1.5 rounded-full bg-[#d99a38] text-[#0a110c] shadow-[0_4px_20px_rgba(217,154,56,0.4)] whitespace-nowrap"
        >
          {cursorText}
        </motion.div>
      )}
    </motion.div>
  );
}
