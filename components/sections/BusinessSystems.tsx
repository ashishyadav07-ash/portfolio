"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, CheckCircle2 } from "lucide-react";
import { useSoundEffects } from "../ui/SoundController";

const enterpriseDomains = [
  { name: "CRM & Pipeline Management", desc: "Lead intake, lifecycle stage tracking, deal valuation, and managerial approval hierarchies." },
  { name: "Dynamic Incentive & Commission Slabs", desc: "Configurable Strategy Pattern rule evaluators for tiered commission calculations and clawbacks." },
  { name: "Real-Time Workforce & Shift Scheduling", desc: "Temporal conflict resolution engines preventing overlapping double-bookings across distributed crew." },
  { name: "Cloud Hosting & Provisioning Automation", desc: "Instant server and DNS orchestration hooking into WHMCS and cPanel daemon APIs." },
  { name: "Subscription & Recurring Invoicing", desc: "Automated billing lifecycles, webhook transaction reconciliation, and automated dunning logic." },
  { name: "Multi-Tier Inventory & Custom CMS", desc: "High-integrity transactional databases with strict stock quantity locks and content authoring." },
  { name: "Hierarchical RBAC & Security", desc: "Granular Role-Based Access Control enforcing strict horizontal and vertical permission boundaries." },
  { name: "Biometric & OTP Identity Verification", desc: "Aadhaar e-KYC validation pipelines with encrypted data envelopes and audit trails." },
];

export const BusinessSystems: React.FC = () => {
  const { playHover } = useSoundEffects();

  return (
    <section className="relative py-28 px-6 md:px-12 lg:px-16 bg-ivory text-charcoal border-b border-charcoal/10 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="font-mono text-xs text-coral uppercase tracking-widest mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-coral" />
              <span>ENTERPRISE PLATFORMS // 08</span>
            </div>
            <h2 className="editorial-heading text-4xl sm:text-5xl md:text-6xl text-charcoal">
              BUSINESS <span className="text-electricBlue">SYSTEMS</span>
            </h2>
          </div>
          <p className="text-charcoal/70 font-mono text-sm max-w-md">
            Specialized engineering capabilities across mission-critical enterprise domains, complex business rules, and multi-tenant architectures.
          </p>
        </div>

        {/* 8 Business Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {enterpriseDomains.map((domain, idx) => (
            <motion.div
              key={domain.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onMouseEnter={() => playHover()}
              className="p-8 rounded-3xl bg-white border border-charcoal/10 hover:border-charcoal/30 transition-all flex flex-col justify-between shadow-sm group"
            >
              <div>
                <div className="font-mono text-xs text-charcoal/40 mb-3">0{idx + 1}</div>
                <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-coral transition-colors">
                  {domain.name}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                  {domain.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-charcoal/10 flex items-center justify-between text-[11px] font-mono text-charcoal/60">
                <span>PRODUCTION TESTED</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-coral" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
