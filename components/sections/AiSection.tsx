"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, Clock } from "lucide-react";
import { GenerativeStructure3D } from "../3d/GenerativeStructure3D";
import { useSoundEffects } from "../ui/SoundController";

const aiCapabilities = [
  {
    title: "AI-Powered Search & Semantic Domain Discovery",
    category: "AI-POWERED SEARCH",
    status: "Production Deployed",
    desc: "Ingesting natural language concepts, transforming them through OpenAI prompt models, and validating domain availability via sub-second WHOIS lookup pipelines.",
    points: ["Natural Language Prompt Parsing", "Synonym & Keyword Semantic Graph", "Sub-Second WHOIS Availability Lookups"],
    accent: "#3155FF",
  },
  {
    title: "AI-Generated Visual Asset Pipeline",
    category: "AI-GENERATED VISUAL ASSETS",
    status: "Production Deployed",
    desc: "Asynchronous backend generation pipeline orchestrating brand identity parameters, image model dispatch, and automated cloud asset packaging.",
    points: ["Brand Style & Color Token Extraction", "Async Webhook Status Polling", "Cloud Storage Asset Packaging"],
    accent: "#FF6B5A",
  },
  {
    title: "AI-Assisted Website Generation Core",
    category: "AI-ASSISTED WEBSITE GENERATION",
    status: "Active Architecture (In Progress)",
    desc: "Architecting a modular backend engine generating structured page component trees and design token mappings directly from natural language prompts.",
    points: ["OpenAI Function Calling Schema Enforcement", "Stateful Revision & Versioning Engine", "Modular Block Component Synthesis"],
    accent: "#3155FF",
  },
];

export const AiSection: React.FC = () => {
  const { playHover } = useSoundEffects();

  return (
    <section className="relative py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-softBlue text-deepInk border-b border-deepInk/10 overflow-hidden select-none">
      {/* Light Lavender & Cobalt Atmospheric Glows */}
      <div className="absolute top-10 right-10 w-[450px] h-[450px] rounded-full bg-lavender/[0.08] blur-[150px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-cobalt/[0.04] blur-[140px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="font-mono text-xs sm:text-sm text-cobalt uppercase tracking-widest mb-3 flex items-center gap-2 font-bold">
              <Sparkles className="w-4 h-4 text-cobalt" />
              <span>GENERATIVE INTELLIGENCE // 05</span>
            </div>
            <h2 className="editorial-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-deepInk">
              BUILDING <span className="text-cobalt">WITH AI</span>
            </h2>
          </div>
          <p className="text-deepInk/85 font-mono text-base max-w-md">
            Connecting OpenAI Large Language Model APIs directly into backend business logic for automated semantic discovery and generative workflows.
          </p>
        </div>

        {/* 3D Generative Sculpture & Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Generative 3D Sculpture with Glass Frame */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-6 md:p-8 shadow-md-soft flex flex-col items-center justify-center">
            <div className="w-full flex items-center justify-between text-xs font-mono text-deepInk/70 mb-2">
              <span className="font-bold text-cobalt">GENERATIVE_SURFACE</span>
              <span className="text-coral font-bold">OPENAI LINKED</span>
            </div>
            <GenerativeStructure3D className="w-full h-[280px] md:h-[350px]" />
            <div className="text-xs font-mono text-deepInk font-bold bg-white/80 border border-deepInk/10 px-4 py-1.5 rounded-full mt-2 shadow-xs">
              OPENAI / CHATGPT API BACKEND PIPELINE
            </div>
          </div>

          {/* Right: AI Capabilities Cards with Glass Elevation */}
          <div className="lg:col-span-7 space-y-4">
            {aiCapabilities.map((item, idx) => {
              const isInProgress = item.status.includes("In Progress");
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onMouseEnter={() => playHover()}
                  className="p-6 md:p-8 rounded-3xl glass-panel hover:border-cobalt/40 hover:-translate-y-0.5 transition-all duration-300 shadow-sm-soft"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-cobalt">
                      {item.category}
                    </span>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5"
                      style={{
                        backgroundColor: isInProgress ? "rgba(49, 85, 255, 0.08)" : "rgba(255, 107, 90, 0.1)",
                        color: isInProgress ? "#3155FF" : "#FF6B5A",
                        border: isInProgress ? "1px solid rgba(49, 85, 255, 0.2)" : "1px solid rgba(255, 107, 90, 0.25)",
                      }}
                    >
                      {isInProgress ? <Clock className="w-3.5 h-3.5" /> : <CheckCircle2 className="w-3.5 h-3.5" />}
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-deepInk mb-2">
                    {item.title}
                  </h3>

                  <p className="text-deepInk/90 text-sm sm:text-base leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-3.5 border-t border-deepInk/10 text-xs sm:text-sm font-mono text-deepInk/90 font-medium">
                    {item.points.map((pt) => (
                      <div key={pt} className="flex items-start gap-2 min-w-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-cobalt shrink-0 mt-1.5" />
                        <span className="break-words leading-tight">{pt}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
