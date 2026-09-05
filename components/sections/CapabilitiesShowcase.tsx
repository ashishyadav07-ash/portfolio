"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Zap } from "lucide-react";
import { useSoundEffects } from "../ui/SoundController";

export interface SystemClass {
  id: string;
  number: string;
  category: string;
  challenge: string;
  engineering: string;
  technology: string[];
  outcome: string;
  accent: string;
}

const systemClasses: SystemClass[] = [
  {
    id: "workforce-management",
    number: "01",
    category: "WORKFORCE MANAGEMENT",
    challenge: "Eliminating concurrent booking race conditions and temporal database contention when multiple team managers schedule overlapping shifts across distributed crews.",
    engineering: "Constructed compound multi-column index trees in MySQL and implemented pessimistic database locking transactions to guarantee zero overlapping double-bookings.",
    technology: ["PHP", "Laravel", "MySQL 8.0", "Pessimistic Locking", "REST APIs", "Redis"],
    outcome: "Sub-40ms temporal conflict verification & eliminated 100% of shift overlap errors in production.",
    accent: "#3155FF",
  },
  {
    id: "crm-operations",
    number: "02",
    category: "CRM & BUSINESS OPERATIONS",
    challenge: "Calculating complex multi-tier commission structures with dynamic retroactive clawbacks while strictly partitioning data visibility across hierarchy tiers.",
    engineering: "Implemented the Strategy Pattern in PHP for pluggable commission rule evaluation and enforced middleware-level Role-Based Access Control (Admin, Manager, Executive).",
    technology: ["PHP", "Laravel", "MySQL", "Strategy Pattern", "RBAC Engine", "Audit Trails"],
    outcome: "100% automated tiered commission calculations and strict hierarchical data segregation.",
    accent: "#FF6B5A",
  },
  {
    id: "hosting-billing",
    number: "03",
    category: "HOSTING & BILLING AUTOMATION",
    challenge: "Automating end-to-end cloud server provisioning and domain registry allocation instantly upon verified webhook confirmation without administrative delays.",
    engineering: "Developed custom PHP WHMCS addon modules, hooked into server daemon APIs, and configured automated retry queues with exponential backoff.",
    technology: ["PHP", "WHMCS", "Linux Daemons", "REST Webhooks", "MySQL", "Payment APIs"],
    outcome: "Reduced server account provisioning time from hours to under 60 seconds with zero-touch automation.",
    accent: "#3155FF",
  },
  {
    id: "ai-features",
    number: "04",
    category: "AI-POWERED DIGITAL FEATURES",
    challenge: "Parsing unstructured natural language prompts and synthesizing structured, deterministic JSON schemas for real-time asset generation and domain discovery.",
    engineering: "Orchestrated OpenAI Large Language Model APIs with Function Calling schemas, prompt optimization, and asynchronous queue workers for cloud asset packaging.",
    technology: ["OpenAI / ChatGPT API", "PHP", "Laravel", "Async Queues", "Function Calling"],
    outcome: "Production deployment of semantic discovery and generative brand asset pipelines.",
    accent: "#FF6B5A",
  },
  {
    id: "subscription-payments",
    number: "05",
    category: "SUBSCRIPTION & PAYMENT SYSTEMS",
    challenge: "Preventing transaction duplicate execution and handling network retry storms during simultaneous recurring subscription renewals across multiple time zones.",
    engineering: "Constructed idempotent webhook ingestion ledgers with HMAC SHA256 cryptographic signature validation and transactional database locks.",
    technology: ["Payment Gateways", "Laravel", "MySQL", "HMAC SHA256", "Redis Queues", "REST APIs"],
    outcome: "Zero duplicate transactions and 100% automated subscription billing reconciliation.",
    accent: "#3155FF",
  },
  {
    id: "inventory-content",
    number: "06",
    category: "INVENTORY & CONTENT MANAGEMENT",
    challenge: "Preventing inventory stock overselling under high concurrency flash checkouts and managing hierarchical multi-level product categorization.",
    engineering: "Architected clean 3NF normalized relational schemas with transactional stock decrement barriers and indexed full-text content search lookups.",
    technology: ["PHP", "Laravel", "CodeIgniter", "MySQL", "ACID Transactions", "HTML5/CSS3"],
    outcome: "Zero inventory stock drift and sub-second catalog retrieval across 50,000+ records.",
    accent: "#F2B84B",
  },
];

export const CapabilitiesShowcase: React.FC = () => {
  const { playHover } = useSoundEffects();

  return (
    <section id="systems" className="relative py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-ivory text-deepInk border-b border-deepInk/10 overflow-hidden select-none">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] rounded-full bg-cobalt/[0.04] blur-[150px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8">
          <div>
            <div className="font-mono text-xs sm:text-sm text-cobalt uppercase tracking-widest mb-3 flex items-center gap-2 font-bold">
              <Cpu className="w-4 h-4 text-cobalt" />
              <span>SYSTEMS ARCHITECTED // 09</span>
            </div>
            <h2 className="editorial-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-deepInk">
              SYSTEMS <span className="text-cobalt">BUILT</span>
            </h2>
          </div>
          <p className="text-deepInk/80 text-base sm:text-lg font-sans leading-relaxed max-w-lg font-normal">
            Six foundational enterprise system categories architected for high throughput, data integrity, and third-party interoperability.
          </p>
        </div>

        {/* 6 System Class Panels with Zero Text Overflow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {systemClasses.map((sys, idx) => (
            <motion.div
              key={sys.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onMouseEnter={() => playHover()}
              className="p-7 sm:p-8 rounded-3xl glass-panel hover:border-cobalt/40 hover:-translate-y-1 transition-all duration-300 shadow-sm-soft flex flex-col justify-between group w-full min-w-0 overflow-hidden"
            >
              <div className="space-y-4 w-full min-w-0">
                <div className="flex items-center justify-between min-w-0">
                  <span className="font-mono text-xl sm:text-2xl font-extrabold text-cobalt">
                    {sys.number}
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-deepInk bg-white/90 px-3 py-1 rounded-full border border-deepInk/10 shadow-xs shrink-0">
                    SYSTEM CLASS
                  </span>
                </div>

                <h3 className="editorial-heading text-xl sm:text-2xl text-deepInk group-hover:text-cobalt transition-colors tracking-tight break-words font-bold">
                  {sys.category}
                </h3>

                <div className="space-y-3 pt-2 w-full min-w-0">
                  <div className="w-full min-w-0">
                    <span className="text-xs font-mono text-deepInk/60 font-bold block mb-1">CHALLENGE:</span>
                    <p className="text-xs sm:text-sm font-sans text-deepInk/80 leading-relaxed font-normal break-words">
                      {sys.challenge}
                    </p>
                  </div>

                  <div className="w-full min-w-0">
                    <span className="text-xs font-mono text-cobalt font-bold block mb-1">ENGINEERING:</span>
                    <p className="text-xs sm:text-sm font-sans text-deepInk/90 leading-relaxed font-medium break-words">
                      {sys.engineering}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2.5 w-full min-w-0">
                  {sys.technology.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-xl bg-white border border-deepInk/15 text-xs font-mono text-deepInk font-bold shadow-xs break-words"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Enclosed Outcome Footer (Multi-line text wrapping without overflow) */}
              <div className="mt-7 pt-4 border-t border-deepInk/10 flex items-start gap-2.5 w-full min-w-0">
                <Zap className="w-4 h-4 text-cobalt shrink-0 mt-0.5" />
                <p className="flex-1 min-w-0 text-xs sm:text-sm font-mono text-deepInk font-bold leading-relaxed break-words">
                  {sys.outcome}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
