"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";
import { ArrowUpRight, Cpu, Layers, ShieldCheck, Database, Server, Cloud, Users, Zap, Terminal } from "lucide-react";
import { useSoundEffects } from "../ui/SoundController";

const pillarIcons = [
  Server,
  Terminal,
  Database,
  Layers,
  Cloud,
  Zap,
  ShieldCheck,
  Cpu,
  Users,
];

export const ExpertiseGrid: React.FC = () => {
  const { playHover } = useSoundEffects();

  return (
    <section id="expertise" className="relative py-28 px-6 md:px-12 lg:px-16 bg-[#08090D] border-y border-white/5 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 -left-48 -translate-y-1/2 w-[600px] h-[600px] bg-violet/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="font-mono text-xs text-violet-glow uppercase tracking-widest mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-violet" />
              <span>CAPABILITIES // 08</span>
            </div>
            <h2 className="editorial-title text-4xl sm:text-5xl md:text-6xl text-white">
              WHAT <span className="text-gradient-cyan">I DO</span>
            </h2>
          </div>
          <p className="text-zinc-400 font-mono text-sm max-w-md">
            Comprehensive backend engineering capabilities spanning the entire lifecycle from relational schema design to high-throughput cloud delivery.
          </p>
        </div>

        {/* 9 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.expertisePillars.map((pillar, idx) => {
            const IconComponent = pillarIcons[idx] || Server;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onMouseEnter={() => playHover()}
                className="group relative rounded-2xl md:rounded-3xl bg-[#0b0d12] border border-white/10 hover:border-white/20 p-8 flex flex-col justify-between transition-all duration-300 shadow-xl overflow-hidden"
              >
                {/* Glow dot */}
                <div
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-10 group-hover:opacity-40 transition-opacity"
                  style={{ backgroundColor: pillar.accent }}
                />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="font-mono text-xs font-bold px-2.5 py-1 rounded-md"
                      style={{
                        backgroundColor: `${pillar.accent}15`,
                        color: pillar.accent,
                      }}
                    >
                      {pillar.number}
                    </span>
                    <div
                      className="p-2.5 rounded-xl border flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: `${pillar.accent}15`,
                        borderColor: `${pillar.accent}30`,
                        color: pillar.accent,
                      }}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="editorial-title text-xl md:text-2xl text-white font-extrabold tracking-tight mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="border-t border-white/5 pt-4 space-y-1.5">
                  {pillar.keyPoints.map((point, pIdx) => (
                    <div
                      key={pIdx}
                      className="text-[11px] font-mono text-zinc-300 flex items-center gap-2"
                    >
                      <span
                        className="w-1 h-1 rounded-full"
                        style={{ backgroundColor: pillar.accent }}
                      />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
