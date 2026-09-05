"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { EvolvingSculpture3D } from "../3d/EvolvingSculpture3D";

export const StatementSection: React.FC = () => {
  return (
    <section
      id="statement"
      className="relative min-h-screen w-full flex flex-col justify-center py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-deepInk-section text-ivory editorial-grid-dark overflow-hidden transition-colors duration-700 select-none"
    >
      {/* Cinematic Dark Section Radial Atmospheric Glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-cobalt/[0.08] blur-[170px] pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 left-10 w-[450px] h-[450px] rounded-full bg-coral/[0.04] blur-[160px] pointer-events-none -z-0" />

      {/* Background Subtle 3D Movement */}
      <div className="absolute inset-0 flex items-center justify-end opacity-20 pointer-events-none z-0">
        <EvolvingSculpture3D className="w-full h-full max-w-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Editorial Sub-Label */}
        <div className="font-mono text-xs sm:text-sm font-bold text-cobalt-light uppercase tracking-widest mb-8 flex items-center gap-2">
          <span>THE INTRO // 01</span>
          <ArrowDownRight className="w-4 h-4 text-cobalt" />
        </div>

        {/* Section Title: I BUILD DIGITAL SYSTEMS. */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="editorial-hero text-5xl sm:text-7xl md:text-8xl lg:text-[7.2rem] xl:text-[8rem] text-ivory leading-[0.88] tracking-tighter">
            <div>I BUILD</div>
            <div>DIGITAL</div>
            <div className="text-cobalt drop-shadow-[0_8px_40px_rgba(49,85,255,0.2)]">
              SYSTEMS.
            </div>
          </div>
        </motion.div>

        {/* Engineering Statement: FROM REQUIREMENTS TO PRODUCTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 pt-10 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
        >
          <div className="lg:col-span-5">
            <h3 className="editorial-heading text-3xl sm:text-4xl md:text-5xl text-ivory tracking-tight leading-none">
              FROM <br />
              <span className="text-coral">REQUIREMENTS</span> <br />
              TO <br />
              <span className="text-amber">PRODUCTION.</span>
            </h3>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg sm:text-xl md:text-2xl text-ivory/90 font-light leading-relaxed">
              Senior PHP Developer architecting resilient server systems, low-latency REST APIs, and production backend infrastructure.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs sm:text-sm font-mono text-ivory/85">
              <div className="p-4 rounded-2xl glass-panel-dark">
                <span className="text-cobalt-light font-bold block mb-1 text-xs sm:text-sm tracking-wider">01. BACKEND</span>
                <span className="text-ivory/90 leading-snug">Modular Laravel &amp; OOP Architectures</span>
              </div>
              <div className="p-4 rounded-2xl glass-panel-dark">
                <span className="text-coral block font-bold mb-1 text-xs sm:text-sm tracking-wider">02. REST APIs</span>
                <span className="text-ivory/90 leading-snug">Stateless Contracts &amp; Token Auth</span>
              </div>
              <div className="p-4 rounded-2xl glass-panel-dark">
                <span className="text-amber block font-bold mb-1 text-xs sm:text-sm tracking-wider">03. DATABASES</span>
                <span className="text-ivory/90 leading-snug">MySQL Query &amp; Index Optimization</span>
              </div>
              <div className="p-4 rounded-2xl glass-panel-dark">
                <span className="text-cobalt-light font-bold block mb-1 text-xs sm:text-sm tracking-wider">04. PERFORMANCE</span>
                <span className="text-ivory/90 leading-snug">30% Faster Response Latency</span>
              </div>
              <div className="p-4 rounded-2xl glass-panel-dark">
                <span className="text-coral block font-bold mb-1 text-xs sm:text-sm tracking-wider">05. INTEGRATIONS</span>
                <span className="text-ivory/90 leading-snug">Payment, WhatsApp &amp; KYC APIs</span>
              </div>
              <div className="p-4 rounded-2xl glass-panel-dark">
                <span className="text-lavender block font-bold mb-1 text-xs sm:text-sm tracking-wider">06. AI SYSTEMS</span>
                <span className="text-ivory/90 leading-snug">OpenAI / ChatGPT LLM Pipelines</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
