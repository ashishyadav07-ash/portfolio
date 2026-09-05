"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Check } from "lucide-react";
import { useSoundEffects } from "../ui/SoundController";

const engineeringPrinciples = [
  { name: "MVC", sub: "Model View Controller", desc: "Strict separation of data layer, presentation, and business routing." },
  { name: "OOP", sub: "Object-Oriented Programming", desc: "Encapsulation, inheritance, polymorphism, and clean type systems." },
  { name: "SOLID", sub: "Architectural Principles", desc: "Single responsibility, open-closed, and dependency inversion." },
  { name: "SECURE CODING", sub: "Defensive Engineering", desc: "SQL injection prevention, XSS sanitation, CSRF tokens, and RBAC." },
  { name: "PERFORMANCE", sub: "Sub-Second Latency", desc: "Algorithmic query profiling, composite indexing, and in-memory Redis caching." },
  { name: "TESTING", sub: "API Verification", desc: "Contract testing via Postman, mock data pipelines, and validation." },
  { name: "CODE REVIEWS", sub: "Peer Scrutiny", desc: "Enforcing PSR-12 coding guidelines and architectural standards across teams." },
  { name: "DOCUMENTATION", sub: "API & Architecture Specs", desc: "Comprehensive technical guides, Postman collections, and flow charts." },
  { name: "AGILE / SCRUM", sub: "Iterative Delivery", desc: "Sprint cycles, sprint grooming, task estimation, and daily standups." },
  { name: "FULL SDLC", sub: "Software Lifecycle", desc: "Requirements analysis, database design, development, CI/CD, and monitoring." },
];

export const PrinciplesSection: React.FC = () => {
  const { playHover } = useSoundEffects();

  return (
    <section className="relative py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-ivory text-deepInk border-b border-deepInk/10 overflow-hidden select-none">
      {/* Subtle Atmospheric Lighting */}
      <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] rounded-full bg-cobalt/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] rounded-full bg-amber/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8">
          <div>
            <div className="font-mono text-xs sm:text-sm text-cobalt uppercase tracking-widest mb-3 flex items-center gap-2 font-bold">
              <ShieldCheck className="w-4 h-4 text-cobalt" />
              <span>QUALITY STANDARDS // 11</span>
            </div>
            <h2 className="editorial-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-deepInk">
              HOW I <span className="text-cobalt">ENGINEER</span>
            </h2>
          </div>
          <p className="text-deepInk/80 text-base sm:text-lg font-sans leading-relaxed max-w-lg font-normal">
            Uncompromising engineering standards that govern clean codebases, defensive security boundaries, and reliable team execution.
          </p>
        </div>

        {/* Large Typography Grid with Responsive Glass Cards & Zero Text Overflow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {engineeringPrinciples.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              onMouseEnter={() => playHover()}
              className="p-6 sm:p-7 rounded-3xl glass-panel hover:border-cobalt/50 transition-all flex flex-col justify-between shadow-sm-soft group hover:shadow-md-soft w-full min-w-0 overflow-hidden"
            >
              <div className="w-full min-w-0">
                <span className="text-xs font-mono text-deepInk/50 block mb-3 font-bold">
                  0{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </span>
                <h3 className="editorial-heading text-xl sm:text-2xl text-deepInk group-hover:text-cobalt transition-colors mb-2 break-words hyphens-auto leading-tight tracking-tight font-bold">
                  {item.name}
                </h3>
                <div className="text-xs font-mono text-cobalt font-bold mb-3 tracking-wide break-words leading-tight">
                  {item.sub}
                </div>
                <p className="text-xs sm:text-sm text-deepInk/80 leading-relaxed font-sans font-normal break-words">
                  {item.desc}
                </p>
              </div>

              <div className="mt-7 pt-4 border-t border-deepInk/10 flex items-center gap-2 text-xs font-mono text-cobalt font-bold min-w-0">
                <Check className="w-3.5 h-3.5 text-cobalt shrink-0" />
                <span>CORE STANDARD</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
