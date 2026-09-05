"use client";

import React from "react";
import { Users, Check } from "lucide-react";
import { TeamSport3D } from "../3d/TeamSport3D";

export const TeamLeadership: React.FC = () => {
  return (
    <section className="relative py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-ivory text-deepInk border-b border-deepInk/10 overflow-hidden select-none">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] rounded-full bg-cobalt/[0.04] blur-[150px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="font-mono text-xs sm:text-sm text-cobalt uppercase tracking-widest mb-3 flex items-center gap-2 font-bold">
              <Users className="w-4 h-4 text-cobalt" />
              <span>LEADERSHIP &amp; MENTORSHIP // 10</span>
            </div>
            <h2 className="editorial-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-deepInk">
              BUILDING <span className="text-cobalt">TOGETHER.</span>
            </h2>
          </div>
          <p className="text-deepInk/80 text-base sm:text-lg font-sans leading-relaxed max-w-lg font-normal">
            Proven engineering squad leadership, architectural code reviews, and fostering high-standard maintainability in agile teams.
          </p>
        </div>

        {/* 3D 4-Dev Squad Visualizer & Leadership Highlight Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: 3D Connected Squad Nodes */}
          <div className="lg:col-span-5 bg-deepInk text-ivory rounded-3xl p-6 md:p-8 border border-deepInk shadow-2xl flex flex-col items-center justify-center">
            <div className="w-full flex items-center justify-between text-xs font-mono text-ivory/70 mb-2 font-bold">
              <span className="text-cobalt-light font-bold">SQUAD_ORCHESTRATION</span>
              <span className="text-amber font-bold">4 DEV NODES</span>
            </div>
            <TeamSport3D className="w-full h-[280px] md:h-[350px]" />
            <div className="text-[11px] sm:text-xs font-mono text-ivory bg-white/10 px-3.5 py-1.5 rounded-full mt-2 font-bold border border-white/10">
              CENTRAL ARCHITECTURE ↔ SQUAD COLLABORATION
            </div>
          </div>

          {/* Right: Leadership Principles with Glass Elevation */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 md:p-12 rounded-3xl glass-panel shadow-md-soft space-y-6">
              <div className="flex items-baseline gap-4">
                <span className="editorial-hero text-6xl sm:text-7xl md:text-8xl text-cobalt tracking-tighter leading-none drop-shadow-[0_8px_30px_rgba(49,85,255,0.2)]">
                  4
                </span>
                <div>
                  <div className="text-xs font-mono text-deepInk/60 uppercase tracking-widest font-bold">
                    VERIFIED RESUME RECORD
                  </div>
                  <div className="editorial-heading text-xl sm:text-2xl md:text-3xl text-deepInk mt-1 font-bold">
                    DEVELOPERS LED
                  </div>
                </div>
              </div>

              <p className="text-deepInk/80 text-sm md:text-base leading-relaxed font-sans font-normal">
                Spearheaded sprint grooming, architectural blueprinting, peer code reviews, and delivery milestones for an agile engineering team of 4 software developers at 4Fox Solutions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5 border-t border-deepInk/10 text-xs md:text-sm font-mono text-deepInk/90 font-bold">
                {[
                  "Architectural Code Reviews",
                  "Sprint Planning & Task Decomposition",
                  "Junior Developer Mentorship",
                  "CI/CD Standards & Version Control",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-cobalt shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
