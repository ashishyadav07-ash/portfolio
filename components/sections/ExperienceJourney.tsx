"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experienceData } from "@/data/experience";
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Layers } from "lucide-react";
import { useSoundEffects } from "../ui/SoundController";

export const ExperienceJourney: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(experienceData[0].id);
  const { playClick, playHover } = useSoundEffects();

  const currentItem = experienceData.find((item) => item.id === activeTab) || experienceData[0];

  return (
    <section id="experience" className="relative py-28 px-6 md:px-12 lg:px-16 bg-[#050505] overflow-hidden">
      {/* Dynamic Ambient Blur */}
      <div
        className="absolute top-1/2 -right-64 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[180px] opacity-20 pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: currentItem.accentColor }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="font-mono text-xs text-cyan uppercase tracking-widest mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-cyan" />
              <span>THE JOURNEY // 03</span>
            </div>
            <h2 className="editorial-title text-4xl sm:text-5xl md:text-6xl text-white">
              PROFESSIONAL <span className="text-gradient-violet">TIMELINE</span>
            </h2>
          </div>
          <p className="text-zinc-400 font-mono text-sm max-w-md">
            5+ years of continuous backend development, team leadership, and cloud architecture across specialized enterprises.
          </p>
        </div>

        {/* Chapter Selection Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {experienceData.map((item) => {
            const isSelected = item.id === activeTab;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  playClick();
                }}
                onMouseEnter={() => playHover()}
                className={`text-left p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#0b0d12] shadow-[0_0_30px_rgba(0,0,0,0.8)]"
                    : "bg-zinc-950/60 border-white/5 hover:border-white/20 hover:bg-zinc-900/40"
                }`}
                style={{
                  borderColor: isSelected ? item.accentColor : undefined,
                  boxShadow: isSelected ? `0 0 25px ${item.accentColor}20` : undefined,
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="font-mono text-2xl font-extrabold"
                    style={{ color: item.accentColor }}
                  >
                    CHAPTER {item.chapter}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan transition-colors">
                    {item.company}
                  </h3>
                  <div className="text-xs font-mono text-zinc-400">
                    {item.role}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Chapter Full-Screen Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl bg-[#08090D] border border-white/10 p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            {/* Top Chapter Meta */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span
                    className="font-mono text-xs font-bold px-3 py-1 rounded-full uppercase"
                    style={{
                      backgroundColor: `${currentItem.accentColor}20`,
                      color: currentItem.accentColor,
                      border: `1px solid ${currentItem.accentColor}40`,
                    }}
                  >
                    {`CHAPTER ${currentItem.chapter} // ${currentItem.period}`}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-mono text-zinc-400">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{currentItem.location}</span>
                  </div>
                </div>
                <h3 className="editorial-title text-3xl sm:text-4xl md:text-5xl text-white font-extrabold tracking-tight mt-2">
                  {currentItem.company}
                </h3>
                <div className="text-lg md:text-xl font-mono text-cyan mt-1">
                  {currentItem.role}
                </div>
              </div>

              {/* Theme & Visual Metaphor */}
              <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/5 max-w-sm">
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1 flex items-center gap-1.5">
                  <Layers className="w-3 h-3 text-violet" />
                  <span>CORE SPECIALIZATION</span>
                </div>
                <div className="text-xs font-mono text-zinc-300 font-bold">
                  {currentItem.theme}
                </div>
              </div>
            </div>

            {/* Content Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8">
              {/* Left Summary & Key Contributions */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                    EXECUTIVE OVERVIEW
                  </h4>
                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                    {currentItem.summary}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
                    ENGINEERING CONTRIBUTIONS & ARCHITECTURAL HIGHLIGHTS
                  </h4>
                  <div className="space-y-3">
                    {currentItem.keyContributions.map((contribution, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-3 text-sm text-zinc-300">
                        <CheckCircle2
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: currentItem.accentColor }}
                        />
                        <span>{contribution}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Systems & Tech Stack */}
              <div className="lg:col-span-4 space-y-6">
                {/* Systems Delivered */}
                <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/5">
                  <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-cyan" />
                    <span>SYSTEMS DELIVERED</span>
                  </h4>
                  <div className="space-y-2">
                    {currentItem.systemsDelivered.map((system, sIdx) => (
                      <div
                        key={sIdx}
                        className="text-xs font-mono text-zinc-300 bg-black/40 px-3 py-2 rounded-lg border border-white/5"
                      >
                        {system}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">
                    STACK APPLIED
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentItem.technologies.map((tech) => (
                      <span
                        key={tech}
                        data-cursor="tech"
                        className="px-2.5 py-1 rounded-md bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
