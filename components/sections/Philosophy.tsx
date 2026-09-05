"use client";

import React from "react";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { Hammer, Network, Gauge, Check } from "lucide-react";
import { useSoundEffects } from "../ui/SoundController";

const icons = [Hammer, Network, Gauge];

export const Philosophy: React.FC = () => {
  const { playHover } = useSoundEffects();

  return (
    <section className="relative py-28 px-6 md:px-12 lg:px-16 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-violet-glow uppercase tracking-widest mb-3">
              <span>PHILOSOPHY // 01</span>
            </div>
            <h2 className="editorial-title text-4xl sm:text-5xl md:text-6xl text-white">
              CORE ENGINEERING <span className="text-gradient-cyan">PRINCIPLES</span>
            </h2>
          </div>
          <p className="text-zinc-400 font-mono text-sm max-w-md">
            Three foundational pillars driving every line of code, relational schema, and microservice integration.
          </p>
        </div>

        {/* 3-Part Editorial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {profileData.philosophy.map((item, idx) => {
            const Icon = icons[idx] || Hammer;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                onMouseEnter={() => playHover()}
                className="group relative rounded-2xl md:rounded-3xl bg-[#08090D] border border-white/10 p-8 md:p-10 flex flex-col justify-between overflow-hidden hover:border-white/20 transition-all duration-500 shadow-xl"
              >
                {/* Background Accent Glow */}
                <div
                  className="absolute -top-24 -right-24 w-60 h-60 rounded-full blur-[90px] opacity-10 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: item.accent }}
                />

                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span
                      className="font-mono text-3xl md:text-4xl font-extrabold tracking-tighter"
                      style={{ color: item.accent }}
                    >
                      {item.number}
                    </span>
                    <div
                      className="p-3 rounded-xl border flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                      style={{
                        backgroundColor: `${item.accent}15`,
                        borderColor: `${item.accent}40`,
                        color: item.accent,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="editorial-title text-3xl md:text-4xl text-white font-extrabold tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-6 font-semibold">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-8">
                    {item.description}
                  </p>
                </div>

                {/* Key Focus Points */}
                <div className="border-t border-white/10 pt-6 space-y-2.5">
                  {item.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2.5 text-xs font-mono text-zinc-300">
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: item.accent }}
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
