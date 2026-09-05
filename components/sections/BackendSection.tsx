"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, Check } from "lucide-react";
import { BackendArch3D } from "../3d/BackendArch3D";
import { useSoundEffects } from "../ui/SoundController";

const corePillars = [
  {
    name: "Enterprise PHP & OOP",
    desc: "Strict type declarations, design patterns, dependency injection, and clean abstractions.",
    code: "PSR-12 / OOP",
  },
  {
    name: "Laravel & CodeIgniter",
    desc: "Eloquent ORM relationships, background job queues, service providers, and secure middleware.",
    code: "Frameworks",
  },
  {
    name: "SOLID & Modular MVC",
    desc: "Single responsibility, open-closed boundaries, decoupled services, and isolated domain layers.",
    code: "Architecture",
  },
  {
    name: "Authentication & RBAC",
    desc: "Granular multi-tier role permissions, session safeguards, CSRF mitigation, and tokenized APIs.",
    code: "Security",
  },
];

const lifecycleSteps = [
  { num: "01", name: "REQUEST", color: "text-coral", desc: "Incoming HTTPS payload & headers" },
  { num: "02", name: "APPLICATION", color: "text-cobalt-light", desc: "Routing, middleware & validation" },
  { num: "03", name: "BUSINESS LOGIC", color: "text-ivory", desc: "Domain services & transaction handlers" },
  { num: "04", name: "DATABASE", color: "text-cobalt-light", desc: "Indexed SQL queries & Redis cache" },
  { num: "05", name: "RESPONSE", color: "text-coral", desc: "JSON serialization & status delivery" },
];

export const BackendSection: React.FC = () => {
  const { playHover } = useSoundEffects();

  return (
    <section className="relative py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-deepInk-section text-ivory editorial-grid-dark border-b border-white/10 overflow-hidden select-none">
      {/* Dark Section Atmospheric Lighting */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] rounded-full bg-cobalt/[0.08] blur-[160px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-coral/[0.04] blur-[150px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="font-mono text-xs sm:text-sm text-cobalt-light uppercase tracking-widest mb-3 flex items-center gap-2 font-bold">
              <Server className="w-4 h-4 text-cobalt" />
              <span>CORE ARCHITECTURE // 03</span>
            </div>
            <h2 className="editorial-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory">
              BACKEND <span className="text-cobalt">ENGINEERING</span>
            </h2>
          </div>
          <p className="text-ivory/90 font-mono text-base max-w-md">
            Architectural patterns, modular design, and server-side lifecycles engineered for sub-second responses and high fault tolerance.
          </p>
        </div>

        {/* 3D Request Lifecycle Pipeline Visualizer */}
        <div className="p-8 md:p-12 rounded-3xl glass-panel-dark border border-white/10 shadow-2xl mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
            <div>
              <div className="text-xs sm:text-sm font-mono text-cobalt-light uppercase tracking-widest font-bold">
                REQUEST LIFECYCLE PIPELINE
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-ivory mt-1">
                Synchronous &amp; Asynchronous Flow Matrix
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-ivory bg-white/10 px-4 py-2 rounded-full border border-white/15">
              <span className="w-2.5 h-2.5 rounded-full bg-amber animate-pulse" />
              <span className="font-bold">ACTIVE SIMULATION</span>
            </div>
          </div>

          {/* 3D Pipeline Canvas */}
          <BackendArch3D className="w-full h-[280px] md:h-[350px]" />

          {/* Pipeline Text Flow Steps (High-Visibility Font) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mt-8 pt-6 border-t border-white/10 font-mono">
            {lifecycleSteps.map((step) => (
              <div
                key={step.name}
                className="p-4 sm:p-5 rounded-2xl bg-white/[0.07] border border-white/10 hover:border-cobalt/40 transition-colors flex flex-col justify-between"
              >
                <span className="text-xs sm:text-sm font-mono text-ivory/70 font-bold">{step.num}</span>
                <span className={`text-sm sm:text-base font-mono font-bold mt-1.5 tracking-wider ${step.color}`}>{step.name}</span>
                <span className="text-xs sm:text-sm text-ivory/90 mt-1 leading-snug font-sans">{step.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Core Pillars Grid with High-Contrast Typography */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {corePillars.map((pillar, idx) => (
            <motion.div
              key={pillar.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onMouseEnter={() => playHover()}
              className="p-6 md:p-8 rounded-3xl glass-panel-dark hover:border-cobalt/40 transition-all flex flex-col justify-between shadow-sm-soft group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs sm:text-sm font-mono text-cobalt-light font-bold uppercase tracking-wider bg-cobalt/20 px-3.5 py-1.5 rounded-full border border-cobalt/30">
                    {pillar.code}
                  </span>
                  <span className="text-xs sm:text-sm font-mono text-ivory/70 font-bold">0{idx + 1}</span>
                </div>
                <h4 className="editorial-heading text-xl sm:text-2xl text-ivory font-bold mb-2.5 tracking-tight group-hover:text-cobalt transition-colors">
                  {pillar.name}
                </h4>
                <p className="text-sm sm:text-base text-ivory/90 leading-relaxed font-sans">
                  {pillar.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs sm:text-sm font-mono text-amber font-bold">
                <Check className="w-4 h-4 text-amber" />
                <span>VERIFIED COMPETENCY</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
