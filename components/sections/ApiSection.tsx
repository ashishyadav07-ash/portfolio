"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Network, ArrowUpRight, ShieldCheck, Check } from "lucide-react";
import { ApiNetwork3D } from "../3d/ApiNetwork3D";
import { useSoundEffects } from "../ui/SoundController";

const serviceCategories = [
  {
    id: "ai",
    name: "AI",
    fullTitle: "OpenAI & LLM Services",
    badge: "LLM INFERENCE",
    desc: "Asynchronous prompt parsing, structured JSON schema outputs, and semantic domain search via OpenAI / ChatGPT APIs.",
    protocols: ["REST HTTPS", "Server-Sent Events", "Function Calling"],
    accent: "#3155FF",
  },
  {
    id: "payments",
    name: "PAYMENTS",
    fullTitle: "Payment Gateways & Subscriptions",
    badge: "PCI-COMPLIANT",
    desc: "Multi-tier recurring subscription billing, instant checkout sessions, and idempotent webhook ledgers for transaction state.",
    protocols: ["Webhook Ingestion", "REST HTTPS", "HMAC Verification"],
    accent: "#FF6B5A",
  },
  {
    id: "messaging",
    name: "MESSAGING",
    fullTitle: "WhatsApp Business API",
    badge: "OMNICHANNEL",
    desc: "Automated template dispatch, interactive media transmission, and real-time webhook listeners via WhatsApp Business API.",
    protocols: ["Cloud API v18+", "Webhooks", "JSON Envelopes"],
    accent: "#3155FF",
  },
  {
    id: "identity",
    name: "IDENTITY",
    fullTitle: "Aadhaar e-KYC Verification",
    badge: "BIOMETRIC & OTP",
    desc: "Aadhaar e-KYC validation pipelines handling biometric and OTP verification with end-to-end payload encryption.",
    protocols: ["Encrypted REST", "PKI Signatures", "XML/JSON Payloads"],
    accent: "#FF6B5A",
  },
  {
    id: "social",
    name: "SOCIAL",
    fullTitle: "Social Identity & OAuth 2.0",
    badge: "OAUTH 2.0 PKCE",
    desc: "Social authentication token exchange, granular permission scopes, and profile hydration pipelines.",
    protocols: ["OAuth 2.0 PKCE", "Graph API", "Token Refresh"],
    accent: "#F2B84B",
  },
  {
    id: "geolocation",
    name: "GEOLOCATION",
    fullTitle: "Spatial Telemetry & Maps",
    badge: "SPATIAL QUERIES",
    desc: "Spatial coordinate resolution, proximity search bounding boxes in MySQL, and reverse geocoding lookups.",
    protocols: ["REST HTTPS", "Spatial Indexing", "Distance Formulas"],
    accent: "#AAB8FF",
  },
];

export const ApiSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>("ai");
  const { playClick, playHover } = useSoundEffects();

  const activeCategory = serviceCategories.find((s) => s.id === selectedId) || serviceCategories[0];

  return (
    <section className="relative py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-ivory text-deepInk border-b border-deepInk/10 overflow-hidden select-none">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 right-10 w-[420px] h-[420px] rounded-full bg-cobalt/[0.04] blur-[140px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-[380px] h-[380px] rounded-full bg-amber/[0.03] blur-[130px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="font-mono text-xs sm:text-sm text-cobalt uppercase tracking-widest mb-3 flex items-center gap-2 font-bold">
              <Network className="w-4 h-4 text-cobalt" />
              <span>THE API ECOSYSTEM // 04</span>
            </div>
            <h2 className="editorial-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-deepInk">
              EVERYTHING <span className="text-cobalt">CONNECTS.</span>
            </h2>
          </div>
          <p className="text-deepInk/85 font-mono text-base max-w-md">
            Central RESTful API architecture orchestrating mission-critical data exchanges across external services and distributed microservices.
          </p>
        </div>

        {/* 3D Hub & Service Category Nodes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          {/* Left: 3D API Hub */}
          <div className="lg:col-span-5 bg-deepInk text-ivory rounded-3xl p-6 md:p-8 border border-deepInk shadow-2xl flex flex-col items-center justify-center">
            <div className="w-full flex items-center justify-between text-xs font-mono text-ivory/80 mb-2">
              <span className="text-coral font-bold">CENTRAL_REST_API</span>
              <span className="text-amber font-bold">ACTIVE ROUTER</span>
            </div>
            <ApiNetwork3D className="w-full h-[280px] md:h-[350px]" activeNodeId={selectedId} />
            <div className="text-xs font-mono text-ivory/95 font-bold bg-white/10 px-3.5 py-1.5 rounded-full mt-2 border border-white/10">
              STATELESS REST CORE ↔ DISTRIBUTED SERVICES
            </div>
          </div>

          {/* Right: Service Category Nodes */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {serviceCategories.map((cat) => {
              const isSelected = cat.id === selectedId;
              return (
                <div
                  key={cat.id}
                  onClick={() => {
                    setSelectedId(cat.id);
                    playClick();
                  }}
                  onMouseEnter={() => playHover()}
                  className={`p-5 sm:p-6 rounded-3xl transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "glass-panel bg-white/90 shadow-md-soft border-cobalt ring-2 ring-cobalt/40"
                      : "bg-white/60 border border-deepInk/10 hover:border-deepInk/30 hover:bg-white/90"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-mono font-extrabold tracking-wider text-cobalt">
                      {cat.name}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-deepInk/5 text-deepInk/80 border border-deepInk/10">
                      {cat.badge}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-deepInk mb-1.5">
                      {cat.fullTitle}
                    </h3>
                    <p className="text-sm text-deepInk/85 line-clamp-2 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Service Protocol Inspection Bar with Glass */}
        <div className="p-6 md:p-8 rounded-3xl glass-panel shadow-sm-soft flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <div className="text-xs font-mono text-deepInk/70 uppercase tracking-widest font-bold">
              ACTIVE PROTOCOL SPECIFICATION
            </div>
            <h4 className="text-lg md:text-xl font-bold text-deepInk mt-1">
              {activeCategory.fullTitle} Layer
            </h4>
            <p className="text-sm text-deepInk/90 mt-1 max-w-xl leading-relaxed">
              {activeCategory.desc}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 shrink-0">
            {activeCategory.protocols.map((p) => (
              <span
                key={p}
                className="px-3.5 py-1.5 rounded-xl bg-white border border-deepInk/10 text-xs sm:text-sm font-mono font-bold text-deepInk shadow-xs"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
