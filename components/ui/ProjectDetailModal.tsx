"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle2, Cpu, Database, Server, Layers, ShieldCheck } from "lucide-react";
import { ProjectItem } from "@/data/projects";
import { useSoundEffects } from "./SoundController";

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const { playClick, playHover } = useSoundEffects();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="project-modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-2xl flex items-center justify-center p-4 md:p-8 lg:p-12 overflow-y-auto"
      >
        <motion.div
          key="project-modal-container"
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 30 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl bg-[#08090D] border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 shadow-[0_0_80px_rgba(0,0,0,0.9)] overflow-hidden my-auto max-h-[90vh] overflow-y-auto"
        >
          {/* Ambient Glow */}
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-20"
            style={{ backgroundColor: project.accentColor }}
          />

          {/* Header & Close Button */}
          <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-6 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs font-bold text-zinc-500">
                  SYSTEM #{project.number}
                </span>
                <span
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider"
                  style={{
                    backgroundColor: `${project.accentColor}20`,
                    color: project.accentColor,
                    border: `1px solid ${project.accentColor}40`,
                  }}
                >
                  {project.badge}
                </span>
              </div>
              <h2 className="editorial-title text-3xl md:text-5xl text-white font-extrabold tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm md:text-base text-zinc-400 font-mono mt-1">
                {project.category}
              </p>
            </div>

            <button
              onClick={() => {
                playClick();
                onClose();
              }}
              onMouseEnter={() => playHover()}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors border border-white/5"
              aria-label="Close Project Detail Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Interactive Architectural Flow Banner */}
          <div className="mb-10 bg-zinc-950/80 p-5 md:p-6 rounded-xl border border-white/5">
            <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-cyan" />
              <span>ARCHITECTURAL DATA FLOW</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              {project.flowSteps.map((step, idx) => (
                <React.Fragment key={step.label}>
                  <div className="px-3.5 py-2 rounded-lg bg-zinc-900 border border-white/10 flex flex-col items-center">
                    <span
                      className="font-mono font-bold text-xs"
                      style={{ color: step.color || project.accentColor }}
                    >
                      {step.label}
                    </span>
                    {step.sublabel && (
                      <span className="text-[9px] font-mono text-zinc-500 mt-0.5">
                        {step.sublabel}
                      </span>
                    )}
                  </div>
                  {idx < project.flowSteps.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Grid Layout: Problem, Role, Solution, Engineering, Result */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* The Problem */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-rose-400 uppercase tracking-wider">
                <Server className="w-4 h-4" />
                <span>THE PROBLEM</span>
              </div>
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                {project.caseStudy.theProblem}
              </p>
            </div>

            {/* My Role */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-violet-glow uppercase tracking-wider">
                <Layers className="w-4 h-4" />
                <span>MY ROLE</span>
              </div>
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                {project.caseStudy.myRole}
              </p>
            </div>

            {/* The Solution */}
            <div className="space-y-2 md:col-span-2">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan uppercase tracking-wider">
                <Database className="w-4 h-4" />
                <span>THE SOLUTION & ARCHITECTURE</span>
              </div>
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                {project.caseStudy.theSolution}
              </p>
            </div>
          </div>

          {/* Engineering Highlights */}
          <div className="mb-10 bg-zinc-900/40 p-6 rounded-2xl border border-white/5">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>ENGINEERING HIGHLIGHTS & BEST PRACTICES</span>
            </div>
            <ul className="space-y-3">
              {project.caseStudy.engineeringHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Tags */}
          <div className="mb-8">
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">
              TECHNOLOGIES APPLIED
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Result Banner */}
          <div className="p-5 rounded-xl bg-gradient-to-r from-violet/20 via-cyan/10 to-transparent border border-violet/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-[10px] font-mono text-violet-glow uppercase tracking-widest">
                VERIFIED OUTCOME
              </div>
              <div className="text-sm md:text-base text-white font-medium mt-0.5">
                {project.caseStudy.result}
              </div>
            </div>
            <button
              onClick={() => {
                playClick();
                onClose();
              }}
              className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono tracking-wider transition-colors shrink-0"
            >
              CLOSE CASE STUDY
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
