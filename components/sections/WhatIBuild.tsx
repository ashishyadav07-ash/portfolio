"use client";

import React, { useState } from "react";
import { ArrowUpRight, Plus, Minus, CheckCircle2 } from "lucide-react";
import { useSoundEffects } from "../ui/SoundController";

const capabilityRows = [
  {
    number: "01",
    title: "SCALABLE WEB APPLICATIONS",
    sublabel: "MODULAR MVC & OOP",
    description:
      "Enterprise server applications engineered with clean Object-Oriented design, strict separation of concerns, and robust domain models capable of sustaining high user throughput without latency spikes.",
    technologies: ["PHP 8.x", "Laravel", "CodeIgniter", "Clean MVC", "OOP Patterns"],
    accent: "#3155FF",
    metric: "High-Throughput Production Architecture",
  },
  {
    number: "02",
    title: "REST API SYSTEMS",
    sublabel: "STATELESS & SECURE",
    description:
      "Stateless API ecosystems with standardized JSON response envelopes, granular token authentication, strict rate limiting, and idempotent webhook handlers for mission-critical microservice data exchange.",
    technologies: ["REST HTTPS", "OAuth 2.0 / JWT", "Postman", "Rate Limiting", "Idempotency"],
    accent: "#3155FF",
    metric: "Sub-Second Microservice Contracts",
  },
  {
    number: "03",
    title: "HIGH-PERFORMANCE DATABASES",
    sublabel: "INDEXING & ACID COMPLIANCE",
    description:
      "Relational schema architecture and SQL optimization in MySQL. Profiling slow queries with EXPLAIN plans, creating composite index trees, and delivering 25% lower database server load in production.",
    technologies: ["MySQL 8.0", "Compound Indexes", "Query Profiling", "Redis Caching", "Transactions"],
    accent: "#FF6B5A",
    metric: "25% Lower DB Server Load Verified",
  },
  {
    number: "04",
    title: "AI-POWERED FEATURES",
    sublabel: "OPENAI LLM ORCHESTRATION",
    description:
      "Direct backend integration of OpenAI and ChatGPT APIs for semantic domain discovery, automated visual asset pipelines, and structured JSON schema generation for dynamic web builders.",
    technologies: ["OpenAI API", "ChatGPT Models", "Prompt Engineering", "Function Calling", "Async Queues"],
    accent: "#3155FF",
    metric: "Production LLM Workflows",
  },
  {
    number: "05",
    title: "BUSINESS AUTOMATION",
    sublabel: "SCHEDULED QUEUES & BILLING",
    description:
      "High-reliability background queues, dynamic multi-tier commission rule engines (Strategy Pattern), automated subscription renewals, and server auto-provisioning workflows.",
    technologies: ["Redis Queues", "Strategy Pattern", "Cron Scheduling", "WHMCS", "Idempotency"],
    accent: "#FF6B5A",
    metric: "100% Automated Recurring Execution",
  },
  {
    number: "06",
    title: "THIRD-PARTY INTEGRATIONS",
    sublabel: "GATEWAYS & KYC PROTOCOLS",
    description:
      "Seamless external API connectivity: PCI-compliant payment gateways, automated WhatsApp Business dispatch, Aadhaar e-KYC validation pipelines, and cloud registrar APIs.",
    technologies: ["Payment Gateways", "WhatsApp Business API", "Aadhaar e-KYC", "REST / Webhooks"],
    accent: "#F2B84B",
    metric: "Encrypted Multi-Protocol Connectivity",
  },
];

export const WhatIBuild: React.FC = () => {
  const [activeExpandedIdx, setActiveExpandedIdx] = useState<number | null>(0);
  const { playHover, playClick } = useSoundEffects();

  const toggleRow = (idx: number) => {
    setActiveExpandedIdx((prev) => (prev === idx ? null : idx));
    playClick();
  };

  return (
    <section className="relative py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-ivory text-deepInk border-y border-deepInk/10 overflow-hidden select-none">
      {/* Subtle Atmospheric Background Glows */}
      <div className="absolute top-1/2 left-10 w-[400px] h-[400px] rounded-full bg-cobalt/[0.04] blur-[140px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] rounded-full bg-coral/[0.035] blur-[130px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8">
          <div>
            <div className="font-mono text-xs sm:text-sm text-cobalt uppercase tracking-widest mb-3 font-bold">
              CAPABILITIES // 02
            </div>
            <h2 className="editorial-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-deepInk">
              WHAT <span className="text-cobalt">I BUILD</span>
            </h2>
          </div>
          <p className="text-deepInk/85 font-mono text-base max-w-md">
            Six foundational architectural capabilities engineered for high throughput, sub-second latency, and enterprise resilience.
          </p>
        </div>

        {/* Ultra-Smooth Hardware-Accelerated Accordion Rows */}
        <div className="divide-y divide-deepInk/15 border-y border-deepInk/15">
          {capabilityRows.map((row, idx) => {
            const isExpanded = activeExpandedIdx === idx;
            return (
              <div
                key={row.number}
                onMouseEnter={() => playHover()}
                onClick={() => toggleRow(idx)}
                className={`group py-6 md:py-8 transition-colors duration-200 cursor-pointer ${
                  isExpanded ? "bg-white/60 -mx-3 px-5 md:px-7 rounded-2xl border border-deepInk/10 shadow-sm-soft my-1" : "hover:bg-white/30 px-2 rounded-xl"
                }`}
              >
                {/* Row Header Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-baseline gap-4 md:gap-8">
                    <span className="font-mono text-xl md:text-2xl font-extrabold text-cobalt shrink-0">
                      {row.number}
                    </span>
                    <h3 className="editorial-heading text-2xl sm:text-3xl md:text-4xl text-deepInk group-hover:text-cobalt transition-colors duration-200">
                      {row.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <span className="font-mono text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full bg-deepInk/5 text-deepInk/80 border border-deepInk/10 uppercase shrink-0">
                      {row.sublabel}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-deepInk/20 flex items-center justify-center text-deepInk group-hover:border-cobalt group-hover:text-cobalt group-hover:bg-cobalt/10 transition-colors shrink-0">
                      {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Smooth CSS Grid Expansion (Zero Layout Thrashing or Stutter) */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isExpanded ? "grid-rows-[1fr] opacity-100 mt-5 pt-5 border-t border-deepInk/10" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                      <div className="lg:col-span-8 space-y-4">
                        <p className="text-deepInk/90 text-base md:text-lg leading-relaxed">
                          {row.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-2 pt-1">
                          {row.technologies.map((t) => (
                            <span
                              key={t}
                              className="px-3.5 py-1.5 rounded-lg bg-ivory border border-deepInk/10 text-xs sm:text-sm font-mono font-bold text-deepInk shadow-xs"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right Verified Metric Box */}
                      <div className="lg:col-span-4 p-5 rounded-2xl bg-white border border-deepInk/10 flex flex-col justify-between shadow-xs">
                        <div className="flex items-center justify-between text-xs font-mono font-bold text-deepInk/70 mb-2">
                          <span>VERIFIED BENCHMARK</span>
                          <span className="w-2.5 h-2.5 rounded-full bg-cobalt" />
                        </div>
                        <div className="text-sm font-mono font-bold text-deepInk">
                          {row.metric}
                        </div>
                        <div className="mt-3 pt-2.5 border-t border-deepInk/10 flex items-center gap-2 text-xs sm:text-sm font-mono text-cobalt font-extrabold">
                          <CheckCircle2 className="w-4 h-4 text-cobalt" />
                          <span>PRODUCTION READY</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
