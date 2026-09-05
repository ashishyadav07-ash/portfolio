"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experienceData } from "@/data/experience";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { useSoundEffects } from "../ui/SoundController";

const chapterAccents: Record<string, { color: string; border: string; bg: string }> = {
  "1": { color: "text-cobalt", border: "border-cobalt", bg: "bg-cobalt/10" },
  "2": { color: "text-coral", border: "border-coral", bg: "bg-coral/10" },
  "3": { color: "text-amber", border: "border-amber", bg: "bg-amber/10" },
};

export const ExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(experienceData[0].id);
  const { playClick, playHover } = useSoundEffects();

  const currentItem = experienceData.find((item) => item.id === activeTab) || experienceData[0];
  const activeAccent = chapterAccents[currentItem.chapter] || chapterAccents["1"];

  return (
    <section id="experience" className="relative py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-ivory text-deepInk border-b border-deepInk/10 overflow-hidden select-none">
      {/* Background Subtle Atmospheric Glow */}
      <div className="absolute top-1/3 left-10 w-[420px] h-[420px] rounded-full bg-cobalt/[0.04] blur-[140px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="font-mono text-xs sm:text-sm text-cobalt uppercase tracking-widest mb-3 flex items-center gap-2 font-bold">
              <Briefcase className="w-4 h-4 text-cobalt" />
              <span>CAREER TIMELINE // 08</span>
            </div>
            <h2 className="editorial-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-deepInk">
              EXPERIENCE
            </h2>
          </div>
          <p className="text-deepInk/80 text-base sm:text-lg font-sans leading-relaxed max-w-lg font-normal">
            Three progressive career chapters across 5+ years of production software engineering, backend architecture, and technical mentorship.
          </p>
        </div>

        {/* Chapter Selection Bar with Color-Coded Chapter Accents */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {experienceData.map((item) => {
            const isSelected = item.id === activeTab;
            const accent = chapterAccents[item.chapter] || chapterAccents["1"];
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  playClick();
                }}
                onMouseEnter={() => playHover()}
                className={`text-left p-6 md:p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between min-w-0 overflow-hidden ${
                  isSelected
                    ? `glass-panel bg-white/95 shadow-md-soft ${accent.border} ring-2 ring-current`
                    : "bg-white/60 border-deepInk/10 hover:border-deepInk/30 hover:bg-white/90"
                }`}
              >
                <div className="flex items-center justify-between mb-4 min-w-0">
                  <span className={`font-mono text-lg md:text-xl font-extrabold ${accent.color}`}>
                    CHAPTER {item.chapter}
                  </span>
                  <span className="text-xs font-mono text-deepInk/60 flex items-center gap-1.5 font-bold shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                </div>
                <div className="min-w-0 w-full">
                  <h3 className="text-lg md:text-xl font-bold text-deepInk mb-1 break-words leading-snug">
                    {item.company}
                  </h3>
                  <div className={`text-xs sm:text-sm font-mono font-bold ${accent.color} break-words leading-tight`}>
                    {item.role}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Chapter Details Panel with Glass */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 md:p-12 lg:p-14 rounded-3xl glass-panel shadow-lg-soft min-w-0 overflow-hidden"
          >
            {/* Top Bar */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-deepInk/10 min-w-0">
              <div className="min-w-0">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className={`font-mono text-xs font-bold ${activeAccent.color} ${activeAccent.bg} px-3.5 py-1 rounded-full border ${activeAccent.border}`}>
                    {`CHAPTER ${currentItem.chapter} // ${currentItem.period}`}
                  </span>
                  <span className="text-xs font-mono text-deepInk/60 flex items-center gap-1.5 font-bold">
                    <MapPin className="w-3.5 h-3.5" />
                    {currentItem.location}
                  </span>
                </div>
                <h3 className="editorial-heading text-3xl sm:text-4xl md:text-5xl text-deepInk mt-2 break-words">
                  {currentItem.company}
                </h3>
                <div className={`text-base sm:text-lg md:text-xl font-mono font-bold mt-1 ${activeAccent.color} break-words`}>
                  {currentItem.role}
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-deepInk/10 max-w-sm shadow-xs min-w-0">
                <div className="text-xs font-mono text-deepInk/60 uppercase tracking-widest mb-1 font-bold">
                  CORE SPECIALIZATION
                </div>
                <div className="text-sm sm:text-base font-mono text-deepInk font-bold break-words">
                  {currentItem.theme}
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-8">
              <div className="lg:col-span-8 space-y-6 min-w-0">
                <div>
                  <h4 className="text-xs font-mono text-deepInk/60 uppercase tracking-widest mb-2 font-bold">
                    EXECUTIVE OVERVIEW
                  </h4>
                  <p className="text-deepInk/85 text-base sm:text-lg leading-relaxed font-sans font-normal break-words">
                    {currentItem.summary}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-deepInk/60 uppercase tracking-widest mb-4 font-bold">
                    ENGINEERING CONTRIBUTIONS &amp; ARCHITECTURAL HIGHLIGHTS
                  </h4>
                  <div className="space-y-3.5">
                    {currentItem.keyContributions.map((c, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-deepInk min-w-0">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-1 ${activeAccent.color}`} />
                        <span className="break-words font-sans">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="lg:col-span-4 space-y-4 min-w-0">
                <h4 className="text-xs font-mono text-deepInk/60 uppercase tracking-widest font-bold">
                  STACK APPLIED
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentItem.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-xl bg-white border border-deepInk/10 text-xs font-mono text-deepInk font-bold shadow-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
