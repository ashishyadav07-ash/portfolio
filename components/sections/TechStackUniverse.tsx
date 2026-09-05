"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillsData, SkillCategory } from "@/data/skills";
import { Terminal, Database, Server, Cloud, Layout, Wrench, Shield, CheckCircle2 } from "lucide-react";
import { useSoundEffects } from "../ui/SoundController";

const categoryIcons: Record<string, React.ElementType> = {
  backend: Server,
  database: Database,
  api: Terminal,
  "cloud-devops": Cloud,
  frontend: Layout,
  methodologies: Wrench,
};

export const TechStackUniverse: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("backend");
  const { playClick, playHover } = useSoundEffects();

  const currentCategory =
    skillsData.categories.find((c) => c.id === selectedCategory) ||
    skillsData.categories[0];

  return (
    <section id="stack" className="relative py-28 px-6 md:px-12 lg:px-16 bg-[#050505] overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[200px] opacity-10 pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: currentCategory.accentColor }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="font-mono text-xs text-cyan uppercase tracking-widest mb-3 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan" />
              <span>PRODUCTION ARSENAL // 07</span>
            </div>
            <h2 className="editorial-title text-4xl sm:text-5xl md:text-6xl text-white">
              TECH <span className="text-gradient-violet">STACK</span>
            </h2>
          </div>
          <p className="text-zinc-400 font-mono text-sm max-w-md">
            Architectural competencies and specialized toolchains strictly verified from 5+ years of production experience.
          </p>
        </div>

        {/* Central Orchestration Badge Bar */}
        <div className="mb-14 p-6 rounded-3xl bg-[#08090D] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-violet to-cyan flex items-center justify-center font-mono font-bold text-white shadow-lg text-lg">
              AY
            </div>
            <div>
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                CENTRAL ARCHITECT
              </div>
              <div className="text-lg font-bold text-white">
                ASHISH YADAV &apos;S STACK
              </div>
            </div>
          </div>

          {/* Quick featured pills */}
          <div className="flex flex-wrap gap-2 justify-center">
            {skillsData.featuredTech.slice(0, 8).map((tech) => (
              <span
                key={tech.name}
                data-cursor="tech"
                className="px-3 py-1 rounded-full text-xs font-mono font-bold border transition-transform hover:scale-105"
                style={{
                  backgroundColor: `${tech.color}15`,
                  borderColor: `${tech.color}40`,
                  color: tech.color,
                }}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {skillsData.categories.map((cat) => {
            const isSelected = cat.id === selectedCategory;
            const IconComponent = categoryIcons[cat.id] || Server;

            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  playClick();
                }}
                onMouseEnter={() => playHover()}
                className={`px-5 py-3 rounded-2xl text-xs font-mono font-bold tracking-wider transition-all flex items-center gap-2.5 border ${
                  isSelected
                    ? "bg-[#0b0d12] shadow-xl text-white"
                    : "bg-zinc-950/60 border-white/5 text-zinc-400 hover:text-white hover:border-white/20"
                }`}
                style={{
                  borderColor: isSelected ? cat.accentColor : undefined,
                  boxShadow: isSelected ? `0 0 20px ${cat.accentColor}25` : undefined,
                }}
              >
                <IconComponent
                  className="w-4 h-4"
                  style={{ color: isSelected ? cat.accentColor : undefined }}
                />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Category Detail Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCategory.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl bg-[#08090D] border border-white/10 p-8 md:p-12 shadow-2xl"
          >
            {/* Top description */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
              <div>
                <span
                  className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider mb-2 inline-block"
                  style={{
                    backgroundColor: `${currentCategory.accentColor}20`,
                    color: currentCategory.accentColor,
                  }}
                >
                  {currentCategory.badge}
                </span>
                <h3 className="editorial-title text-2xl sm:text-3xl text-white font-bold">
                  {currentCategory.name} DOMAIN
                </h3>
              </div>
              <p className="text-zinc-400 text-xs sm:text-sm font-mono max-w-md">
                {currentCategory.description}
              </p>
            </div>

            {/* Individual Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentCategory.skills.map((skill) => (
                <div
                  key={skill.name}
                  data-cursor="tech"
                  onMouseEnter={() => playHover()}
                  className={`p-6 rounded-2xl bg-zinc-900/50 border transition-all duration-300 flex flex-col justify-between ${
                    skill.highlight
                      ? "border-violet/40 bg-zinc-900/80 shadow-lg"
                      : "border-white/5 hover:border-white/15"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-bold text-white">
                        {skill.name}
                      </h4>
                      <span
                        className="text-[10px] font-mono px-2 py-0.5 rounded"
                        style={{
                          backgroundColor: `${currentCategory.accentColor}15`,
                          color: currentCategory.accentColor,
                        }}
                      >
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-mono text-zinc-500">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>VERIFIED PRODUCTION COMPETENCY</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
