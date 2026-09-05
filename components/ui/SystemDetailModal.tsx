"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle2, Cpu, Database, Server, Layers, ShieldCheck } from "lucide-react";
import { SystemCapability } from "@/data/capabilities";
import { useSoundEffects } from "./SoundController";

interface SystemDetailModalProps {
  system: SystemCapability | null;
  onClose: () => void;
}

export const SystemDetailModal: React.FC<SystemDetailModalProps> = ({ system, onClose }) => {
  const { playClick, playHover } = useSoundEffects();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (system) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [system, onClose]);

  if (!system) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-charcoal/80 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 lg:p-12 overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl bg-ivory text-charcoal rounded-3xl p-6 md:p-10 lg:p-12 shadow-2xl overflow-hidden my-auto max-h-[90vh] overflow-y-auto border border-charcoal/10"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 border-b border-charcoal/10 pb-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-charcoal/60">
                  SYSTEM TYPE #{system.number}
                </span>
                <span
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider"
                  style={{
                    backgroundColor: `${system.accent}20`,
                    color: system.accent,
                  }}
                >
                  {system.badge}
                </span>
              </div>
              <h2 className="editorial-heading text-2xl sm:text-4xl text-charcoal font-extrabold tracking-tight">
                {system.title}
              </h2>
              <p className="text-xs sm:text-sm text-charcoal/70 font-mono mt-1">
                {system.category}
              </p>
            </div>

            <button
              onClick={() => {
                playClick();
                onClose();
              }}
              onMouseEnter={() => playHover()}
              className="p-2.5 rounded-full bg-charcoal/5 hover:bg-charcoal/10 text-charcoal transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Architecture Pipeline Banner */}
          <div className="mb-8 bg-charcoal/5 p-5 rounded-2xl border border-charcoal/10">
            <div className="text-[10px] font-mono text-charcoal/60 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-coral" />
              <span>ARCHITECTURAL PIPELINE</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {system.architectureFlow.map((step, idx) => (
                <React.Fragment key={step}>
                  <div className="px-3 py-1.5 rounded-lg bg-ivory border border-charcoal/10 text-xs font-mono font-bold text-charcoal">
                    {step}
                  </div>
                  {idx < system.architectureFlow.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-charcoal/40 shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Technical Challenge & Engineering Highlights */}
          <div className="space-y-6 mb-8">
            <div>
              <div className="text-xs font-mono text-coral font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5" />
                <span>TECHNICAL CHALLENGE</span>
              </div>
              <p className="text-charcoal/80 text-sm md:text-base leading-relaxed">
                {system.technicalChallenge}
              </p>
            </div>

            <div>
              <div className="text-xs font-mono text-electricBlue font-bold uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>ENGINEERING HIGHLIGHTS</span>
              </div>
              <ul className="space-y-2.5">
                {system.engineeringHighlights.map((hl, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-charcoal/80">
                    <CheckCircle2 className="w-4 h-4 text-coral shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <div className="text-xs font-mono text-charcoal/50 uppercase tracking-widest mb-2">
              TECHNOLOGIES APPLIED
            </div>
            <div className="flex flex-wrap gap-2">
              {system.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-charcoal/5 border border-charcoal/10 text-xs font-mono text-charcoal"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Verified Outcome Banner */}
          <div className="p-4 rounded-xl bg-charcoal text-ivory flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-[9px] font-mono text-softLime uppercase tracking-widest">
                VERIFIED OUTCOME
              </div>
              <div className="text-xs sm:text-sm font-medium mt-0.5">
                {system.verifiedImpact}
              </div>
            </div>
            <button
              onClick={() => {
                playClick();
                onClose();
              }}
              className="px-4 py-1.5 rounded-full bg-ivory text-charcoal text-xs font-mono font-bold tracking-wider hover:bg-coral hover:text-white transition-colors shrink-0"
            >
              CLOSE
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
