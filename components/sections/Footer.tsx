"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp, Mail, Terminal } from "lucide-react";
import { profileData } from "@/data/profile";
import { useSoundEffects } from "../ui/SoundController";

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export const Footer: React.FC = () => {
  const [istTime, setIstTime] = useState("");
  const { playClick, playHover } = useSoundEffects();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setIstTime(
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }) + " IST"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050505] border-t border-white/10 pt-20 pb-12 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Background Subtle Flare */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-violet/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Identity & Role */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-violet/40 flex items-center justify-center font-mono font-bold text-sm text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                AY
              </div>
              <h3 className="editorial-title text-2xl md:text-3xl text-white font-extrabold tracking-tight">
                ASHISH <span className="text-gradient-violet">YADAV</span>
              </h3>
            </div>

            <p className="font-mono text-sm text-cyan">
              {profileData.title} • {profileData.subtitle}
            </p>

            <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
              Engineering high-availability backend architectures, robust microservices, OpenAI workflows, and low-latency database queries.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-zinc-500">
              <span>{profileData.location}</span>
              <span>•</span>
              <span className="text-zinc-400 font-bold">{istTime || "NASHIK LOCAL TIME"}</span>
            </div>
          </div>

          {/* Column 2: Navigation Shortcuts */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
              SECTIONS
            </div>
            <ul className="space-y-2 text-xs font-mono">
              {["work", "experience", "ai-apis", "stack", "expertise", "about", "contact"].map((sec) => (
                <li key={sec}>
                  <a
                    href={`#${sec}`}
                    onClick={() => playClick()}
                    onMouseEnter={() => playHover()}
                    className="text-zinc-400 hover:text-white uppercase transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-violet">❯</span> {sec.replace("-", " & ")}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Direct Connect & Resume */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
              ACTIONS & CONNECT
            </div>

            <a
              href="mailto:ashishyadav71998@gmail.com"
              onMouseEnter={() => playHover()}
              className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 hover:border-violet text-xs font-mono text-zinc-300 hover:text-white flex items-center gap-2.5 transition-all shadow-sm"
            >
              <Mail className="w-4 h-4 text-violet-glow" />
              <span className="truncate">ashishyadav71998@gmail.com</span>
            </a>

            <a
              href="https://www.linkedin.com/in/ashishyadav71998"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => playHover()}
              className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 hover:border-cyan text-xs font-mono text-zinc-300 hover:text-white flex items-center gap-2.5 transition-all shadow-sm"
            >
              <LinkedInIcon className="w-4 h-4 text-cyan" />
              <span>LinkedIn Profile</span>
            </a>

            {/* <a
              href="https://github.com/ashishyadav71998"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => playHover()}
              className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 hover:border-white/30 text-xs font-mono text-zinc-300 hover:text-white flex items-center gap-2.5 transition-all shadow-sm"
            >
              <GithubIcon className="w-4 h-4 text-zinc-400" />
              <span>GitHub Repository</span>
            </a> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-violet" />
            <span>© 2026 ASHISH YADAV // ALL RIGHTS RESERVED</span>
          </div>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => playHover()}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <span>BACK TO TOP</span>
            <div className="p-1.5 rounded-full bg-zinc-900 border border-white/10 text-cyan">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
