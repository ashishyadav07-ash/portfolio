"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { projectsData, ProjectItem } from "@/data/projects";
import { ArrowUpRight, Cpu, ArrowRight, Layers, Database, ShieldCheck, Zap } from "lucide-react";
import { ProjectDetailModal } from "../ui/ProjectDetailModal";
import { useSoundEffects } from "../ui/SoundController";

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const { playClick, playHover } = useSoundEffects();

  return (
    <section id="work" className="relative py-28 px-6 md:px-12 lg:px-16 bg-[#08090D] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="font-mono text-xs text-violet-glow uppercase tracking-widest mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-violet" />
              <span>PRODUCTION SYSTEMS // 04</span>
            </div>
            <h2 className="editorial-title text-4xl sm:text-5xl md:text-6xl text-white">
              SYSTEMS <span className="text-gradient-cyan">I&apos;VE BUILT</span>
            </h2>
          </div>
          <p className="text-zinc-400 font-mono text-sm max-w-md">
            Architectural case studies showcasing real-world backend engineering, distributed integrations, and high-concurrency database design.
          </p>
        </div>

        {/* Large Immersive Project Panels */}
        <div className="space-y-16">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              data-cursor="project"
              onClick={() => {
                playClick();
                setSelectedProject(project);
              }}
              onMouseEnter={() => playHover()}
              className="group relative rounded-3xl bg-[#0b0d12] border border-white/10 hover:border-white/25 p-8 md:p-12 lg:p-14 transition-all duration-500 shadow-2xl overflow-hidden cursor-pointer"
            >
              {/* Hover Glow Accent */}
              <div
                className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[140px] opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                style={{ backgroundColor: project.accentColor }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left Side: Editorial Typography & Problem / Solution Summary */}
                <div className="lg:col-span-6 space-y-6">
                  {/* Top Meta */}
                  <div className="flex items-center gap-3">
                    <span
                      className="font-mono text-2xl md:text-3xl font-extrabold tracking-tighter"
                      style={{ color: project.accentColor }}
                    >
                      {project.number}
                    </span>
                    <span
                      className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider"
                      style={{
                        backgroundColor: `${project.accentColor}20`,
                        color: project.accentColor,
                        border: `1px solid ${project.accentColor}40`,
                      }}
                    >
                      {project.badge}
                    </span>
                    {project.metricsHighlight && (
                      <span className="text-zinc-500 font-mono text-[10px] hidden sm:inline">
                        • {project.metricsHighlight}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="editorial-title text-3xl sm:text-4xl md:text-5xl text-white font-extrabold tracking-tight group-hover:text-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-mono text-sm text-zinc-400 mt-1">
                      {project.category}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-zinc-900 border border-white/5 text-xs font-mono text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="px-2 py-1 text-xs font-mono text-zinc-500">
                        +{project.techStack.length - 5} more
                      </span>
                    )}
                  </div>

                  {/* Case Study CTA Trigger */}
                  <div className="pt-4 flex items-center gap-2 font-mono text-xs font-bold text-white group-hover:text-violet-glow transition-colors">
                    <span>INSPECT ARCHITECTURE & CASE STUDY</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>

                {/* Right Side: Interactive Architecture Data Flow Box */}
                <div className="lg:col-span-6 bg-zinc-950/90 rounded-2xl p-6 md:p-8 border border-white/5 group-hover:border-white/15 transition-all">
                  <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-4 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-cyan" />
                      DATA PIPELINE FLOW
                    </span>
                    <span className="text-zinc-600">LIVE SCHEMA</span>
                  </div>

                  {/* Step Diagram */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4">
                    {project.flowSteps.map((step, sIdx) => (
                      <div
                        key={step.label}
                        className="p-3.5 rounded-xl bg-zinc-900/80 border border-white/10 flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] font-mono text-zinc-600">0{sIdx + 1}</span>
                          <div
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: step.color || project.accentColor }}
                          />
                        </div>
                        <div>
                          <div
                            className="font-mono font-bold text-xs"
                            style={{ color: step.color || project.accentColor }}
                          >
                            {step.label}
                          </div>
                          {step.sublabel && (
                            <div className="text-[10px] font-mono text-zinc-500 mt-0.5 truncate">
                              {step.sublabel}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Highlight Feature Points */}
                  <div className="space-y-2 mt-6 pt-4 border-t border-white/5">
                    {project.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                        <Zap className="w-3 h-3 text-violet shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Case Study Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
