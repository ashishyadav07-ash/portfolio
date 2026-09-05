"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cloud, Check } from "lucide-react";
import { useSoundEffects } from "../ui/SoundController";

const cloudSteps = [
  { step: "01", name: "CODE", tool: "Git / SVN", desc: "Feature branching, strict code reviews, and commit standards." },
  { step: "02", name: "BUILD", tool: "Composer", desc: "PHP dependency resolution, PSR-4 autoloading, and build optimization." },
  { step: "03", name: "DEPLOY", tool: "Linux Pipeline", desc: "Automated bash scripts, zero-downtime symlinks, and env isolation." },
  { step: "04", name: "SERVER", tool: "AWS EC2 / cPanel", desc: "Security groups, SSL certificates, daemon supervision, and reverse proxy." },
  { step: "05", name: "PRODUCTION", tool: "Monitoring", desc: "High availability, health probes, automated log rotation, and backups." },
];

export const CloudInfraSection: React.FC = () => {
  const { playHover } = useSoundEffects();

  return (
    <section className="relative py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-deepInk-section text-ivory editorial-grid-dark border-b border-white/10 overflow-hidden select-none">
      {/* Dark Section Atmospheric Lighting */}
      <div className="absolute top-1/4 right-1/4 w-[480px] h-[480px] rounded-full bg-cobalt/[0.08] blur-[160px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="font-mono text-xs sm:text-sm text-cobalt-light uppercase tracking-widest mb-3 flex items-center gap-2 font-bold">
              <Cloud className="w-4 h-4 text-cobalt" />
              <span>DEPLOYMENT &amp; INFRASTRUCTURE // 07</span>
            </div>
            <h2 className="editorial-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory">
              FROM CODE <span className="text-cobalt">TO CLOUD</span>
            </h2>
          </div>
          <p className="text-ivory/80 text-base sm:text-lg font-sans leading-relaxed max-w-lg font-normal">
            Deploying and maintaining production web backends across AWS EC2 Linux environments, cPanel servers, and automated pipelines.
          </p>
        </div>

        {/* Pipeline Flow Steps (CODE -> BUILD -> DEPLOY -> SERVER -> PRODUCTION) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 mb-12">
          {cloudSteps.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onMouseEnter={() => playHover()}
              className="p-6 rounded-3xl glass-panel-dark hover:border-cobalt/50 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between shadow-sm-soft group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-cobalt-light">{item.step}</span>
                  <span className="text-xs font-mono text-ivory bg-white/10 px-3 py-1 rounded border border-white/10 font-bold">
                    {item.tool}
                  </span>
                </div>
                <h3 className="editorial-heading text-xl sm:text-2xl text-ivory mb-2 group-hover:text-cobalt-light transition-colors tracking-tight font-bold">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-ivory/80 leading-relaxed font-sans font-normal">{item.desc}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-amber font-bold">
                <Check className="w-3.5 h-3.5 text-amber shrink-0" />
                <span>PRODUCTION TESTED</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cloud Technologies Banner with Glass */}
        <div className="p-7 md:p-8 rounded-3xl glass-panel-dark border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md-soft">
          <div>
            <div className="text-xs font-mono text-cobalt-light uppercase tracking-widest mb-1.5 font-bold">
              CLOUD &amp; SERVER ARSENAL
            </div>
            <div className="text-base sm:text-lg md:text-xl font-bold text-ivory font-mono">
              AWS EC2 • Linux (Ubuntu/CentOS) • cPanel / WHM • Git • SVN • Composer
            </div>
          </div>
          <div className="px-5 py-2.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-ivory font-bold shrink-0">
            HIGH-AVAILABILITY DEPLOYMENTS
          </div>
        </div>
      </div>
    </section>
  );
};
