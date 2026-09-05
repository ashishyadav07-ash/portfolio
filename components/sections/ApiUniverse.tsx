"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { apiUniverseData, ApiNode } from "@/data/apis";
import { Network, ArrowUpRight, Code, ShieldCheck, Cpu, Terminal } from "lucide-react";
import { ApiNetwork3D } from "../3d/ApiNetwork3D";
import { useSoundEffects } from "../ui/SoundController";

export const ApiUniverse: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>(apiUniverseData.nodes[0].id);
  const { playClick, playHover } = useSoundEffects();

  const activeNode = apiUniverseData.nodes.find((n) => n.id === selectedNodeId) || apiUniverseData.nodes[0];

  return (
    <section className="relative py-28 px-6 md:px-12 lg:px-16 bg-[#08090D] border-y border-white/5 overflow-hidden">
      {/* Dynamic Background Glow */}
      <div
        className="absolute top-1/2 -right-48 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[180px] opacity-15 pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: activeNode.accent }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="font-mono text-xs text-violet-glow uppercase tracking-widest mb-3 flex items-center gap-2">
              <Network className="w-4 h-4 text-violet" />
              <span>THE API UNIVERSE // 06</span>
            </div>
            <h2 className="editorial-title text-4xl sm:text-5xl md:text-6xl text-white">
              EVERYTHING <span className="text-gradient-cyan">CONNECTS.</span>
            </h2>
          </div>
          <p className="text-zinc-400 font-mono text-sm max-w-md">
            {apiUniverseData.statement}
          </p>
        </div>

        {/* 3D Network Hub & Connected Nodes Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left: 3D Connected Node Graph Canvas */}
          <div className="lg:col-span-5 relative bg-[#0b0d12] border border-white/10 rounded-3xl p-6 overflow-hidden flex flex-col items-center justify-center">
            <div className="w-full flex items-center justify-between text-[11px] font-mono text-zinc-500 mb-2">
              <span>REST_SERVICE_ORBIT</span>
              <span className="text-violet-glow">ACTIVE DISPATCH</span>
            </div>
            <ApiNetwork3D className="w-full h-[320px] md:h-[400px]" activeNodeId={selectedNodeId} />
            <div className="text-[10px] font-mono text-cyan bg-zinc-900/90 px-3 py-1.5 rounded-full border border-white/5 mt-2">
              CENTRAL REST API HUB ↔ INTEGRATED PROTOCOLS
            </div>
          </div>

          {/* Right: Interactive Node Chips */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {apiUniverseData.nodes.map((node) => {
              const isSelected = node.id === selectedNodeId;
              return (
                <div
                  key={node.id}
                  onClick={() => {
                    setSelectedNodeId(node.id);
                    playClick();
                  }}
                  onMouseEnter={() => playHover()}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-zinc-900/90 shadow-xl"
                      : "bg-zinc-950/40 border-white/5 hover:border-white/15 hover:bg-zinc-900/30"
                  }`}
                  style={{
                    borderColor: isSelected ? node.accent : undefined,
                    boxShadow: isSelected ? `0 0 25px ${node.accent}20` : undefined,
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider"
                      style={{
                        backgroundColor: `${node.accent}20`,
                        color: node.accent,
                      }}
                    >
                      {node.badge}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">
                      {node.protocols[0]}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white mb-1">
                      {node.name}
                    </h3>
                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                      {node.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Node Live Payload & Contract Inspector */}
        <div className="p-8 md:p-10 rounded-3xl bg-[#0b0d12] border border-white/10 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
            <div>
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                INSPECTED ENDPOINT & PAYLOAD CONTRACT
              </div>
              <h4 className="text-2xl font-bold text-white mt-1 flex items-center gap-3">
                <span>{activeNode.name}</span>
                <span className="text-xs font-mono font-normal text-cyan px-2.5 py-0.5 rounded-full bg-cyan/10 border border-cyan/20">
                  {activeNode.category}
                </span>
              </h4>
            </div>

            {/* Protocol badges */}
            <div className="flex flex-wrap gap-2">
              {activeNode.protocols.map((p) => (
                <span
                  key={p}
                  className="px-2.5 py-1 rounded-md bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Code Payload Snippet Box */}
            <div className="lg:col-span-7 bg-[#050505] rounded-2xl p-5 border border-white/5 font-mono text-xs overflow-hidden">
              <div className="flex items-center justify-between text-[11px] text-zinc-500 border-b border-white/5 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <Code className="w-3.5 h-3.5 text-cyan" />
                  <span className="text-zinc-300 font-bold">{activeNode.samplePayload.endpoint}</span>
                </div>
                <span
                  className="px-2 py-0.5 rounded text-[10px] font-bold"
                  style={{
                    backgroundColor: `${activeNode.accent}20`,
                    color: activeNode.accent,
                  }}
                >
                  {activeNode.samplePayload.method}
                </span>
              </div>
              <pre className="text-zinc-300 overflow-x-auto leading-relaxed p-2">
                <code>{activeNode.samplePayload.payloadSnippet}</code>
              </pre>
            </div>

            {/* Right: Key Security & Resiliency Features */}
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>INTEGRATION SAFEGUARDS</span>
              </div>
              <div className="space-y-3">
                {activeNode.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/5 text-xs font-mono text-zinc-300 flex items-start gap-2.5"
                  >
                    <Terminal className="w-3.5 h-3.5 text-violet shrink-0 mt-0.5" />
                    <span>{feat}</span>
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
