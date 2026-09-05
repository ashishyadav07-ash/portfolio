"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { SystemArchitecture3D } from "../3d/SystemArchitecture3D";
import { useSoundEffects } from "../ui/SoundController";

export const HeroSection: React.FC = () => {
  const { playClick, playHover } = useSoundEffects();
  const [isNameHovered, setIsNameHovered] = useState(false);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 lg:px-20 bg-ivory text-deepInk editorial-grid overflow-hidden select-none">
      {/* Multi-layered Atmospheric Background Lighting Glows */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] rounded-full bg-cobalt/[0.08] blur-[140px] pointer-events-none -z-0" />
      <div className="absolute top-1/3 left-10 w-[420px] h-[420px] rounded-full bg-coral/[0.045] blur-[130px] pointer-events-none -z-0" />
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-lavender/[0.05] blur-[160px] pointer-events-none -z-0" />

      {/* Top Editorial Metadata */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-xs sm:text-sm font-mono text-deepInk tracking-wider pt-2 relative z-10 font-bold">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-cobalt animate-pulse" />
          <span className="font-extrabold text-deepInk">PORTFOLIO / 2026</span>
        </div>
        <div className="tracking-widest uppercase font-extrabold text-deepInk">
          NASHIK / INDIA
        </div>
      </div>

      {/* Main Hero Grid */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center my-auto py-6 sm:py-8 relative z-10">
        {/* Left: Oversized Editorial Typography */}
        <div className="lg:col-span-6 xl:col-span-6 space-y-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => {
              setIsNameHovered(true);
              playHover();
            }}
            onMouseLeave={() => setIsNameHovered(false)}
            className="cursor-default"
          >
            <h1 className="editorial-hero text-6xl sm:text-7xl md:text-8xl lg:text-[7.2rem] xl:text-[8.2rem] tracking-tighter text-deepInk transition-all duration-700 leading-[0.9]">
              <div
                className={`transition-all duration-700 ${
                  isNameHovered ? "translate-x-1 tracking-[-0.03em] drop-shadow-[0_8px_40px_rgba(49,85,255,0.12)] text-deepInk" : ""
                }`}
              >
                ASHISH
              </div>
              <div
                className={`text-deepInk pl-4 sm:pl-8 lg:pl-10 -mt-2 sm:-mt-4 opacity-95 transition-all duration-700 ${
                  isNameHovered ? "translate-x-2 tracking-[-0.03em] drop-shadow-[0_8px_40px_rgba(49,85,255,0.12)]" : ""
                }`}
              >
                YADAV
              </div>
            </h1>
          </motion.div>

          {/* Professional Title in Subtle Cobalt Gradient */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3"
          >
            <div className="font-mono text-xs sm:text-sm md:text-base font-bold tracking-widest uppercase bg-gradient-to-r from-cobalt to-cobalt-light bg-clip-text text-transparent inline-block">
              SENIOR PHP DEVELOPER · LARAVEL / REST API SPECIALIST
            </div>
            <p className="text-deepInk/80 text-sm sm:text-base md:text-lg max-w-[540px] font-normal leading-relaxed">
              &ldquo;Building{" "}
              <span className="relative inline-block text-deepInk font-semibold">
                scalable backend systems
              </span>
              , APIs and production-ready digital applications.&rdquo;
            </p>
          </motion.div>

          {/* High-End Editorial Action Buttons with Shimmer & Shadows */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <a
              href="#systems"
              onClick={() => playClick()}
              onMouseEnter={() => playHover()}
              className="btn-shimmer h-12 sm:h-14 px-8 rounded-full bg-deepInk text-ivory text-xs sm:text-sm font-mono font-bold tracking-wider shadow-md-soft hover:bg-cobalt hover:shadow-cobalt-glow hover:-translate-y-0.5 transition-all duration-500 flex items-center gap-2.5 group"
            >
              <span>EXPLORE SYSTEMS</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              onClick={() => playClick()}
              onMouseEnter={() => playHover()}
              className="h-12 sm:h-14 px-8 rounded-full bg-transparent border-2 border-deepInk text-deepInk text-xs sm:text-sm font-mono font-bold tracking-wider hover:border-cobalt hover:text-cobalt hover:bg-cobalt/5 hover:-translate-y-0.5 transition-all duration-500 flex items-center gap-2 shadow-sm-soft"
            >
              <span>GET IN TOUCH</span>
            </a>
          </motion.div>
        </div>

        {/* Right: Custom 3D Sculpture ("System Architecture") */}
        <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center w-full">
          {/* Subtle Ambient Radial Glow for seamless background blending */}
          <div className="absolute inset-0 max-w-[500px] max-h-[500px] m-auto rounded-full bg-radial from-cobalt/[0.05] via-coral/[0.015] to-transparent blur-3xl pointer-events-none -z-10" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex items-center justify-center"
          >
            <SystemArchitecture3D className="w-full h-[460px] sm:h-[560px] md:h-[620px] lg:h-[680px] xl:h-[740px]" />
          </motion.div>
        </div>
      </div>

      {/* Bottom Editorial Metadata */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between pt-6 border-t border-deepInk/10 text-xs sm:text-sm font-mono text-deepInk relative z-10 font-bold">
        <div className="flex items-center gap-2.5 uppercase tracking-wider font-extrabold">
          <span className="text-deepInk">5+ YEARS EXPERIENCE</span>
          <span>•</span>
          <span>BACKEND ENGINEERING</span>
        </div>
        <a
          href="#statement"
          onClick={() => playClick()}
          className="flex items-center gap-2 text-deepInk font-extrabold hover:text-cobalt transition-colors uppercase tracking-wider"
        >
          <span>SCROLL TO EXPLORE ↓</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
