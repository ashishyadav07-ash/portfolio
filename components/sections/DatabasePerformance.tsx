"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, CheckCircle2 } from "lucide-react";
import { useSoundEffects } from "../ui/SoundController";

const dbPillars = [
  { name: "Indexing Strategies", desc: "Compound index design on frequently queried multi-column keys and temporal ranges in MySQL." },
  { name: "Query Optimization", desc: "Systematic EXPLAIN plan profiling, slow query logging, and eliminating N+1 Eloquent bottlenecks." },
  { name: "Schema Normalization", desc: "Clean 3NF relational design, foreign key integrity constraints, and transactional ACID guarantees." },
  { name: "ORM Caching Layers", desc: "Optimized eager loading combined with Redis in-memory query and session caching." },
];

const Counter: React.FC<{ target: number; suffix: string }> = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const duration = 1500;
    const stepTime = 25;
    const increment = target / (duration / stepTime);

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export const DatabasePerformance: React.FC = () => {
  const { playHover } = useSoundEffects();

  return (
    <section className="relative py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-deepInk-section text-ivory editorial-grid-dark border-b border-white/10 overflow-hidden select-none">
      {/* Dark Section Radial Atmospheric Glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-cobalt/[0.08] blur-[170px] pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 left-10 w-[450px] h-[450px] rounded-full bg-coral/[0.05] blur-[160px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <div className="font-mono text-xs sm:text-sm text-cobalt-light uppercase tracking-widest mb-3 flex items-center gap-2 font-bold">
              <Zap className="w-4 h-4 text-cobalt" />
              <span>PERFORMANCE BENCHMARKS // 06</span>
            </div>
            <h2 className="editorial-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory">
              DATA <span className="text-cobalt">MATTERS.</span>
            </h2>
          </div>
          <p className="text-ivory/90 font-mono text-base max-w-md">
            Verified production metrics achieved through algorithmic SQL tuning, schema indexing, and low-latency API serialization.
          </p>
        </div>

        {/* Oversized Performance Numbers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* 30% Application Response-Time Improvement */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="border-t-2 border-cobalt pt-8 space-y-4"
          >
            <div className="font-mono text-xs sm:text-sm text-cobalt-light uppercase tracking-widest font-bold flex items-center justify-between">
              <span>BENCHMARK 01 // LATENCY GAIN</span>
              <span className="w-2.5 h-2.5 rounded-full bg-cobalt animate-pulse" />
            </div>

            <div className="editorial-hero text-7xl sm:text-8xl md:text-9xl lg:text-[8.5rem] xl:text-[10rem] text-ivory tracking-tighter leading-none drop-shadow-[0_10px_40px_rgba(49,85,255,0.15)]">
              <Counter target={30} suffix="%" />
            </div>

            <div className="editorial-heading text-2xl sm:text-3xl md:text-4xl text-cobalt-light tracking-tight">
              APPLICATION RESPONSE-TIME IMPROVEMENT
            </div>

            <p className="text-ivory/90 text-base sm:text-lg leading-relaxed max-w-xl font-sans">
              Achieved through systematic query profiling with EXPLAIN plans, sub-second API serialization, Redis in-memory caching, and eliminating N+1 ORM eager loading bottlenecks.
            </p>
          </motion.div>

          {/* 25% Database Server-Load Reduction */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="border-t-2 border-coral pt-8 space-y-4"
          >
            <div className="font-mono text-xs sm:text-sm text-coral uppercase tracking-widest font-bold flex items-center justify-between">
              <span>BENCHMARK 02 // SERVER CAPACITY</span>
              <span className="w-2.5 h-2.5 rounded-full bg-coral animate-pulse" />
            </div>

            <div className="editorial-hero text-7xl sm:text-8xl md:text-9xl lg:text-[8.5rem] xl:text-[10rem] text-ivory tracking-tighter leading-none drop-shadow-[0_10px_40px_rgba(255,107,90,0.15)]">
              <Counter target={25} suffix="%" />
            </div>

            <div className="editorial-heading text-2xl sm:text-3xl md:text-4xl text-coral tracking-tight">
              DATABASE SERVER-LOAD REDUCTION
            </div>

            <p className="text-ivory/90 text-base sm:text-lg leading-relaxed max-w-xl font-sans">
              Delivered via relational composite indexing, query restructuring on high-cardinality tables, connection pooling, and transactional database integrity in MySQL.
            </p>
          </motion.div>
        </div>

        {/* Database Pillars Grid with Highly Visible Typography */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-white/10">
          {dbPillars.map((p, idx) => (
            <div
              key={p.name}
              onMouseEnter={() => playHover()}
              className="p-6 md:p-7 rounded-3xl glass-panel-dark hover:border-white/25 transition-all flex flex-col justify-between shadow-sm-soft group"
            >
              <div>
                <div className="font-mono text-xs sm:text-sm text-ivory/70 mb-2.5 font-bold">0{idx + 1}</div>
                <h4 className="editorial-heading text-xl sm:text-2xl font-bold text-ivory mb-2.5 tracking-tight group-hover:text-cobalt transition-colors">{p.name}</h4>
                <p className="text-sm sm:text-base text-ivory/90 leading-relaxed font-sans">{p.desc}</p>
              </div>
              <div className="mt-6 pt-3.5 border-t border-white/10 text-xs sm:text-sm font-mono text-amber flex items-center gap-2 font-bold">
                <CheckCircle2 className="w-4 h-4 text-amber shrink-0" />
                <span>OPTIMIZATION STANDARD</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
