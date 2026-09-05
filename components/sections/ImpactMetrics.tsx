"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { profileData } from "@/data/profile";
import { Zap, Database, Users, Calendar, ArrowUpRight } from "lucide-react";
import { useSoundEffects } from "../ui/SoundController";

const metricIcons = [Zap, Database, Users, Calendar];

const AnimatedCounter: React.FC<{ target: number; suffix: string }> = ({
  target,
  suffix,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800; // ms
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export const ImpactMetrics: React.FC = () => {
  const { playHover } = useSoundEffects();

  return (
    <section className="relative py-28 px-6 md:px-12 lg:px-16 bg-[#08090D] border-y border-white/5 overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute -left-64 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -right-64 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="font-mono text-xs text-cyan uppercase tracking-widest mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan" />
              <span>MEASURED RESULTS // 02</span>
            </div>
            <h2 className="editorial-title text-4xl sm:text-5xl md:text-6xl text-white">
              ENGINEERING <span className="text-gradient-violet">IMPACT</span>
            </h2>
          </div>
          <p className="text-zinc-400 font-mono text-sm max-w-md">
            Verified production performance metrics and leadership contributions across high-throughput enterprise systems.
          </p>
        </div>

        {/* 4 Massive Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {profileData.metrics.map((metric, idx) => {
            const Icon = metricIcons[idx] || Zap;
            const isHighlight = metric.highlight;

            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                onMouseEnter={() => playHover()}
                className={`group relative rounded-2xl md:rounded-3xl p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 shadow-xl ${
                  isHighlight
                    ? "bg-[#0b0d12] border border-violet/30 hover:border-violet/60 shadow-[0_0_30px_rgba(139,92,246,0.15)]"
                    : "bg-[#0b0d12] border border-white/10 hover:border-white/20"
                }`}
              >
                {/* Glow Corner */}
                <div
                  className={`absolute -top-16 -right-16 w-36 h-36 rounded-full blur-3xl opacity-20 group-hover:opacity-50 transition-opacity ${
                    idx % 2 === 0 ? "bg-violet" : "bg-cyan"
                  }`}
                />

                <div>
                  {/* Top Icon & Verified Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5 text-cyan" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                      VERIFIED
                    </span>
                  </div>

                  {/* Huge Statistic Number */}
                  <div className="editorial-title text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-white mb-3">
                    <AnimatedCounter target={metric.number} suffix={metric.suffix} />
                  </div>

                  {/* Label */}
                  <h3 className="font-mono text-xs sm:text-sm font-bold tracking-wider text-cyan uppercase mb-3">
                    {metric.label}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    {metric.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>RESUME VERIFIED</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-cyan transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
