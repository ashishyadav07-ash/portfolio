"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useSoundEffects } from "../ui/SoundController";

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export const MinimalFooter: React.FC = () => {
  const [time, setTime] = useState("");
  const { playClick, playHover } = useSoundEffects();

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }) + " IST"
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-deepInk text-ivory pt-20 pb-12 px-6 md:px-12 lg:px-20 border-t border-white/10 overflow-hidden select-none">
      {/* Animated Subtle Cobalt Line Across Top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/10 overflow-hidden">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-1/3 h-full bg-gradient-to-r from-transparent via-cobalt to-transparent"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-6 space-y-4">
            <h3 className="editorial-hero text-3xl sm:text-4xl text-ivory font-bold">
              ASHISH <span className="text-cobalt">YADAV</span>
            </h3>
            <p className="font-mono text-xs sm:text-sm text-cobalt font-bold uppercase tracking-wider">
              SENIOR PHP DEVELOPER • LARAVEL &amp; REST API SPECIALIST
            </p>
            <p className="text-ivory/85 text-sm sm:text-base max-w-md leading-relaxed">
              Engineering high-availability backend architectures, robust microservices, OpenAI workflows, and low-latency database queries.
            </p>
            <div className="pt-2 text-xs sm:text-sm font-mono text-ivory/70 font-semibold">
              NASHIK, MAHARASHTRA, INDIA • {time || "LOCAL TIME"}
            </div>
          </div>

          <div className="lg:col-span-3 space-y-2 text-xs sm:text-sm font-mono">
            <div className="text-ivory/60 uppercase tracking-widest mb-3 font-bold">NAVIGATION</div>
            {["about", "experience", "principles", "systems", "toolbox", "contact"].map((sec) => (
              <a
                key={sec}
                href={`#${sec}`}
                onClick={() => playClick()}
                onMouseEnter={() => playHover()}
                className="block text-ivory/85 hover:text-cobalt transition-colors uppercase py-1 font-bold"
              >
                → {sec}
              </a>
            ))}
          </div>

          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs sm:text-sm font-mono text-ivory/60 uppercase tracking-widest mb-3 font-bold">CONNECT</div>
            <a
              href="mailto:ashishyadav71998@gmail.com"
              onMouseEnter={() => playHover()}
              className="p-3 sm:p-3.5 rounded-2xl glass-panel-dark text-xs sm:text-sm font-mono text-ivory hover:border-cobalt flex items-center gap-2.5 transition-all shadow-sm"
            >
              <Mail className="w-4 h-4 text-cobalt shrink-0" />
              <span className="truncate font-semibold">ashishyadav71998@gmail.com</span>
            </a>

            <a
              href="https://www.linkedin.com/in/ashish-yadav-90398a1a7/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => playHover()}
              className="p-3 sm:p-3.5 rounded-2xl glass-panel-dark text-xs sm:text-sm font-mono text-ivory hover:border-cobalt flex items-center gap-2.5 transition-all shadow-sm"
            >
              <LinkedInIcon className="w-4 h-4 text-cobalt shrink-0" />
              <span className="font-semibold">LinkedIn Profile</span>
            </a>

            {/* <a
              href="https://github.com/ashishyadav71998"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => playHover()}
              className="p-3 sm:p-3.5 rounded-2xl glass-panel-dark text-xs sm:text-sm font-mono text-ivory hover:border-white/40 flex items-center gap-2.5 transition-all shadow-sm"
            >
              <GithubIcon className="w-4 h-4 text-ivory shrink-0" />
              <span className="font-semibold">GitHub Repository</span>
            </a> */}
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-mono text-ivory/70 font-semibold">
          <div>© 2026 ASHISH YADAV // ALL RIGHTS RESERVED</div>
          <button
            onClick={scrollToTop}
            onMouseEnter={() => playHover()}
            className="flex items-center gap-2 text-ivory hover:text-cobalt transition-colors font-bold cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
