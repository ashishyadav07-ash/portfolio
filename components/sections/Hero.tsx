"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Terminal, Sparkles, ShieldCheck, Database, Layers } from "lucide-react";
import { profileData } from "@/data/profile";
import { EngineeringCore } from "../3d/EngineeringCore";
import { useSoundEffects } from "../ui/SoundController";

export const Hero: React.FC = () => {
  const { playClick, playHover } = useSoundEffects();

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 lg:px-16 overflow-hidden bg-tech-grid">
      {/* Ambient background glow flares */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-violet/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-cyan/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Grid: Left Typography & Right 3D Digital Engineering Core */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
        {/* Left Column: Oversized Editorial Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center z-10">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-violet/30 w-fit mb-6 shadow-[0_0_20px_rgba(139,92,246,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs font-semibold text-zinc-300 tracking-wider">
              {profileData.status.label}
            </span>
            <span className="text-zinc-600 font-mono">|</span>
            <span className="font-mono text-[11px] text-violet-glow tracking-tight hidden sm:inline">
              5+ YEARS EXPERTISE
            </span>
          </motion.div>

          {/* Huge Editorial Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="select-none"
          >
            <h1 className="editorial-title text-6xl sm:text-7xl md:text-8xl lg:text-[6.8rem] text-white tracking-tighter">
              ASHISH
              <br />
              <span className="text-gradient-violet">YADAV</span>
            </h1>
          </motion.div>

          {/* Subtitles & Engineering Focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 space-y-3"
          >
            <div className="flex flex-wrap items-center gap-2 font-mono text-sm sm:text-base md:text-lg font-bold text-cyan tracking-wider">
              <span>{profileData.title.toUpperCase()}</span>
              <span className="text-zinc-600">•</span>
              <span className="text-white">{profileData.subtitle.toUpperCase()}</span>
            </div>
            <p className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-xl font-normal leading-relaxed">
              {profileData.tagline}
            </p>
          </motion.div>

          {/* Core Verified Stack Quick Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex flex-wrap items-center gap-2.5 mt-6"
          >
            {["PHP", "Laravel", "REST APIs", "MySQL", "OpenAI", "AWS EC2"].map((tech) => (
              <span
                key={tech}
                data-cursor="tech"
                className="px-3 py-1 rounded-md bg-zinc-900/80 border border-white/10 text-xs font-mono font-medium text-zinc-300 hover:border-violet hover:text-white transition-all shadow-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap items-center gap-4 mt-8"
          >
            <a
              href="#work"
              onClick={() => playClick()}
              onMouseEnter={() => playHover()}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-violet to-cyan text-white text-xs font-bold font-mono tracking-widest shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(34,211,238,0.6)] transition-all flex items-center gap-2"
            >
              <span>EXPLORE SYSTEMS</span>
              <Terminal className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              onClick={() => playClick()}
              onMouseEnter={() => playHover()}
              className="px-8 py-3.5 rounded-full glass-button text-white text-xs font-bold font-mono tracking-widest flex items-center gap-2"
            >
              <span>START CONVERSATION</span>
              <Sparkles className="w-4 h-4 text-violet-glow" />
            </a>
          </motion.div>
        </div>

        {/* Right Column: 3D Digital Engineering Core */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full relative"
          >
            <EngineeringCore />

            {/* Floating Telemetry Microcards */}
            <div className="absolute -bottom-4 left-4 p-3 rounded-xl bg-zinc-900/85 border border-white/10 backdrop-blur-md hidden sm:flex items-center gap-3 shadow-xl">
              <div className="p-2 rounded-lg bg-violet/20 text-violet">
                <Database className="w-4 h-4" />
              </div>
              <div className="font-mono">
                <div className="text-[10px] text-zinc-500 uppercase">DB LOAD REDUCTION</div>
                <div className="text-sm font-bold text-white">25% VERIFIED</div>
              </div>
            </div>

            <div className="absolute -top-2 right-4 p-3 rounded-xl bg-zinc-900/85 border border-white/10 backdrop-blur-md hidden sm:flex items-center gap-3 shadow-xl">
              <div className="p-2 rounded-lg bg-cyan/20 text-cyan">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="font-mono">
                <div className="text-[10px] text-zinc-500 uppercase">LATENCY OPTIMIZATION</div>
                <div className="text-sm font-bold text-white">30% FASTER</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="max-w-7xl mx-auto w-full flex items-center justify-between pt-8 border-t border-white/5 text-zinc-500 font-mono text-xs"
      >
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-violet" />
          <span>SCROLL TO ENTER DIGITAL ENGINEERING WORLD</span>
        </div>
        <a
          href="#manifesto"
          className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          onClick={() => playClick()}
        >
          <span>SCROLL</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-cyan" />
        </a>
      </motion.div>
    </section>
  );
};
