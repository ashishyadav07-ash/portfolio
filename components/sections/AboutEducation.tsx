"use client";

import React from "react";
import { educationData } from "@/data/education";
import { GraduationCap, MapPin, Check, User } from "lucide-react";
import { useSoundEffects } from "../ui/SoundController";

export const AboutEducation: React.FC = () => {
  const { playHover } = useSoundEffects();

  return (
    <section id="about" className="relative py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-ivory text-deepInk border-b border-deepInk/10 overflow-hidden select-none">
      {/* Atmospheric Lighting */}
      <div className="absolute top-10 right-10 w-[450px] h-[450px] rounded-full bg-cobalt/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-coral/4 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Professional Biography */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="font-mono text-xs sm:text-sm text-cobalt uppercase tracking-widest mb-3 flex items-center gap-2 font-bold">
                <User className="w-4 h-4 text-cobalt" />
                <span>BIOGRAPHY &amp; FOUNDATION // 12</span>
              </div>
              <h2 className="editorial-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-deepInk">
                ABOUT <span className="text-cobalt">ASHISH</span>
              </h2>
            </div>

            <div className="p-8 md:p-10 rounded-3xl glass-panel shadow-sm-soft space-y-5">
              <blockquote className="editorial-heading text-xl sm:text-2xl md:text-3xl text-deepInk leading-snug font-bold">
                &ldquo;From requirements to deployment, I build and maintain production-ready software systems.&rdquo;
              </blockquote>
              <p className="text-deepInk/80 text-sm sm:text-base leading-relaxed font-sans font-normal">
                Senior PHP Developer with 5+ years of dedicated software engineering experience based in Nashik, India. I specialize in architecting modular Laravel applications, robust REST API ecosystems, relational MySQL performance optimization, and AWS EC2 cloud deployments.
              </p>
              <p className="text-deepInk/80 text-sm sm:text-base leading-relaxed font-sans font-normal">
                My work centers on solving critical backend challenges: sub-second API response times, complex business rules, asynchronous queue workers, and generative AI model integrations.
              </p>
            </div>

            {/* Core Competencies Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm font-mono text-deepInk font-bold">
              {[
                "5+ Years Engineering",
                "Laravel Specialist",
                "REST API Contracts",
                "MySQL Optimization",
                "OpenAI LLM APIs",
                "AWS EC2 Cloud Infra",
                "Led 4 Devs Squad",
                "Hierarchical RBAC",
              ].map((item) => (
                <div
                  key={item}
                  onMouseEnter={() => playHover()}
                  className="p-3.5 sm:p-4 rounded-2xl glass-panel flex items-center gap-2.5 font-bold hover:border-cobalt/40 transition-colors shadow-sm-soft"
                >
                  <Check className="w-4 h-4 text-cobalt shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Academic Foundation */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="font-mono text-xs sm:text-sm text-cobalt uppercase tracking-widest mb-3 flex items-center gap-2 font-bold">
                <GraduationCap className="w-4 h-4 text-cobalt" />
                <span>ACADEMIC FOUNDATION</span>
              </div>
              <h3 className="editorial-heading text-3xl sm:text-4xl md:text-5xl text-deepInk font-bold">
                EDUCATION &amp; <span className="text-cobalt">DEGREES</span>
              </h3>
            </div>

            <div className="space-y-6">
              {educationData.map((edu) => (
                <div
                  key={edu.degree}
                  onMouseEnter={() => playHover()}
                  className="p-7 md:p-8 rounded-3xl glass-panel shadow-sm-soft space-y-4 hover:border-cobalt/40 transition-all"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-xs text-cobalt font-bold bg-cobalt/10 px-3.5 py-1 rounded-full border border-cobalt/20">
                      GRADUATED {edu.year}
                    </span>
                    <span className="text-xs font-mono text-deepInk/60 flex items-center gap-1.5 font-bold">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-deepInk">
                      {edu.degree}
                    </h4>
                    <div className="text-xs sm:text-sm font-mono text-deepInk/70 mt-1 font-bold">
                      {edu.institution} • {edu.universityOrBoard}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-deepInk/80 leading-relaxed border-t border-deepInk/10 pt-3.5 font-sans font-normal">
                    {edu.highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
