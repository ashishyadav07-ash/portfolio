"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench, Sparkles, Terminal, Code2, Cpu } from "lucide-react";
import { useSoundEffects } from "../ui/SoundController";

const stackTechnologies = [
  { name: "PHP", category: "Core Language", level: "Senior Specialist", icon: Code2 },
  { name: "Laravel", category: "MVC Framework", level: "Primary Expertise", icon: Cpu },
  { name: "CodeIgniter", category: "MVC Framework", level: "Legacy & Modern", icon: Terminal },
  { name: "MySQL", category: "Relational Database", level: "Query Optimization", icon: Sparkles },
  { name: "REST APIs", category: "Architecture", level: "Enterprise Contracts", icon: Terminal },
  { name: "OpenAI API", category: "Generative AI", level: "LLM Workflows", icon: Sparkles },
  { name: "WhatsApp API", category: "Omnichannel", level: "Cloud Webhooks", icon: Terminal },
  { name: "AWS EC2", category: "Cloud Hosting", level: "Production Compute", icon: Cpu },
  { name: "Linux", category: "Server OS", level: "CLI Administration", icon: Terminal },
  { name: "cPanel", category: "Hosting Management", level: "DNS & Server Ops", icon: Cpu },
  { name: "Git", category: "Version Control", level: "Trunk-Based / GitFlow", icon: Code2 },
  { name: "SVN", category: "Version Control", level: "Enterprise Repos", icon: Terminal },
  { name: "Composer", category: "Dependency Manager", level: "Package Architecture", icon: Code2 },
  { name: "Postman", category: "API Testing", level: "Contract Validation", icon: Terminal },
  { name: "JavaScript", category: "Frontend Core", level: "ES6+ Standards", icon: Code2 },
  { name: "jQuery", category: "DOM Manipulation", level: "Dynamic Events", icon: Code2 },
  { name: "AJAX", category: "Async Communication", level: "Sub-Second Updates", icon: Sparkles },
  { name: "HTML5", category: "Semantic Markup", level: "Clean Architecture", icon: Code2 },
  { name: "CSS3", category: "Styling Standards", level: "Responsive Layouts", icon: Code2 },
  { name: "Bootstrap", category: "UI System", level: "Component Systems", icon: Code2 },
  { name: "Tailwind CSS", category: "Utility Framework", level: "Modern Styling", icon: Code2 },
  { name: "Shopify", category: "E-Commerce", level: "Store Integrations", icon: Cpu },
  { name: "WHMCS", category: "Billing Automation", level: "Subscription Modules", icon: Cpu },
];

export const ToolboxSection: React.FC = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const { playHover } = useSoundEffects();

  return (
    <section id="toolbox" className="relative py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-deepInk-section text-ivory editorial-grid-dark border-b border-white/10 overflow-hidden select-none">
      {/* Subtle Atmospheric Radial Lights */}
      <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] rounded-full bg-cobalt/8 blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/4 w-[450px] h-[450px] rounded-full bg-coral/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8">
          <div>
            <div className="font-mono text-xs sm:text-sm text-cobalt-light uppercase tracking-widest mb-3 flex items-center gap-2 font-bold">
              <Wrench className="w-4 h-4 text-cobalt" />
              <span>TECHNOLOGY ARSENAL // 10</span>
            </div>
            <h2 className="editorial-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory">
              THE <span className="text-cobalt">STACK</span>
            </h2>
          </div>
          <p className="text-ivory/80 text-base sm:text-lg font-sans leading-relaxed max-w-lg font-normal">
            Interactive typography composition of production technologies, server frameworks, and APIs applied across 5+ years of software engineering.
          </p>
        </div>

        {/* Interactive Typography Wall */}
        <div className="flex flex-wrap gap-3 md:gap-4 justify-start items-center">
          {stackTechnologies.map((tech) => {
            const isHovered = hoveredTech === tech.name;
            const IconComponent = tech.icon;

            return (
              <motion.div
                key={tech.name}
                data-cursor="tech"
                onMouseEnter={() => {
                  setHoveredTech(tech.name);
                  playHover();
                }}
                onMouseLeave={() => setHoveredTech(null)}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
                className={`relative px-5 py-3 rounded-2xl font-editorial font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl cursor-pointer transition-all duration-300 border ${
                  isHovered
                    ? "bg-cobalt text-white border-cobalt shadow-[0_12px_35px_rgba(49,85,255,0.4)] z-20"
                    : "glass-panel-dark text-ivory/90 hover:border-white/30"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span>{tech.name}</span>
                  <AnimatePresence>
                    {isHovered && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8, x: -5 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, x: -5 }}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold bg-white/20 px-2.5 py-0.5 rounded-full text-white"
                      >
                        <IconComponent className="w-3.5 h-3.5 text-coral" />
                        <span>[{tech.category}]</span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footnote without Skill Bars or Fake Percentages */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs sm:text-sm font-mono text-ivory/70 gap-4 font-semibold">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-softLime animate-pulse" />
            <span>ZERO ESTIMATED PERCENTAGES • 100% FACTUAL RESUME TECHNOLOGIES</span>
          </div>
          <div className="text-cobalt-light font-bold">5+ YEARS PRODUCTION EXPERIENCE</div>
        </div>
      </div>
    </section>
  );
};
