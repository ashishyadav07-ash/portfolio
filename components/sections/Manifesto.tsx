"use client";

import React from "react";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { Server, Terminal, Shield, Zap } from "lucide-react";

export const Manifesto: React.FC = () => {
  return (
    <section
      id="manifesto"
      className="relative min-h-[85vh] w-full flex flex-col justify-center py-24 px-6 md:px-12 lg:px-16 bg-[#08090D] border-y border-white/5 overflow-hidden"
    >
      {/* High-tech Grid Background */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      {/* Decorative Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 font-mono text-xs text-cyan uppercase tracking-widest mb-8"
        >
          <Terminal className="w-4 h-4" />
          <span>ENGINEERING MANIFESTO // 00</span>
        </motion.div>

        {/* Huge Enormous Typography Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="select-none"
        >
          <div className="editorial-title text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] text-white tracking-tighter leading-[0.9]">
            {profileData.manifesto.heading.map((line, idx) => (
              <div key={idx} className="block overflow-hidden">
                <span
                  className={
                    idx === 1
                      ? "text-gradient-violet"
                      : idx === 3
                      ? "text-gradient-cyan"
                      : "text-white"
                  }
                >
                  {line}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Supporting Editorial Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          <div className="lg:col-span-8">
            <p className="font-mono text-lg sm:text-xl md:text-2xl text-zinc-300 font-light leading-relaxed">
              &ldquo;{profileData.manifesto.statement}&rdquo;
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3 font-mono text-xs text-zinc-400">
            <div className="flex items-center gap-2 text-violet-glow">
              <Server className="w-4 h-4" />
              <span>HIGH-THROUGHPUT BACKEND ARCHITECTURES</span>
            </div>
            <div className="flex items-center gap-2 text-cyan">
              <Shield className="w-4 h-4" />
              <span>DEFENSIVE RBAC & TOKENIZED SECURITY</span>
            </div>
            <div className="flex items-center gap-2 text-hotPink">
              <Zap className="w-4 h-4" />
              <span>PROVEN DATABASE PROFILING & OPTIMIZATION</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
