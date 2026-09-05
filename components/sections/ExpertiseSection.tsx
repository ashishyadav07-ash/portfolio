"use client";

import React from "react";
import { motion } from "framer-motion";
import { expertiseData } from "@/data/expertise";
import { Check } from "lucide-react";
import { useSoundEffects } from "../ui/SoundController";

export const ExpertiseSection: React.FC = () => {
  const { playHover } = useSoundEffects();

  return (
    <section id="expertise" className="relative py-28 px-6 md:px-12 lg:px-16 bg-ivory text-charcoal border-b border-charcoal/10 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="font-mono text-xs text-coral uppercase tracking-widest mb-3">
              SPECIALIZATIONS // 12
            </div>
            <h2 className="editorial-heading text-4xl sm:text-5xl md:text-6xl text-charcoal">
              WHAT I <span className="text-electricBlue">DO BEST</span>
            </h2>
          </div>
          <p className="text-charcoal/70 font-mono text-sm max-w-md">
            Eight core software engineering competencies honed over 5+ years of production system delivery.
          </p>
        </div>

        {/* 01 to 08 Large Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onMouseEnter={() => playHover()}
              className="p-8 md:p-10 rounded-3xl bg-white border border-charcoal/10 hover:border-charcoal/30 transition-all flex flex-col justify-between shadow-sm group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-3xl md:text-4xl font-extrabold text-coral">
                    {item.number}
                  </span>
                  <span className="text-xs font-mono text-charcoal/50 uppercase tracking-widest">
                    CORE SPECIALTY
                  </span>
                </div>

                <h3 className="editorial-heading text-2xl sm:text-3xl text-charcoal mb-2 group-hover:text-coral transition-colors">
                  {item.title}
                </h3>
                <div className="text-xs font-mono text-electricBlue font-bold mb-4">
                  {item.subtitle}
                </div>

                <p className="text-charcoal/70 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-charcoal/10 space-y-2 text-xs font-mono text-charcoal/80">
                {item.deliverables.map((d) => (
                  <div key={d} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-coral shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
