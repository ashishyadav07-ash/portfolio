"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const systemLogs = [
  "INITIALIZING SYSTEM CORE...",
  "LOADING 3D SHADERS & GL ENGINES...",
  "CONNECTING REST API & MICROSERVICES...",
  "CALIBRATING PHP / LARAVEL WORKSPACE...",
  "SYSTEM READY // DISPATCHING INTERFACE",
];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [logIndex, setLogIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Progress counter
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 80);

    // Telemetry text switcher
    const logInterval = setInterval(() => {
      setLogIndex((prev) => {
        if (prev < systemLogs.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 280);

    const timer = setTimeout(() => {
      setIsFinished(true);
      setTimeout(onComplete, 400);
    }, 1500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(logInterval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[99999] bg-[#050505] flex flex-col justify-between p-8 md:p-16 select-none overflow-hidden"
        >
          {/* Top Status */}
          <div className="flex justify-between items-center text-xs tracking-widest text-zinc-500 font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet animate-pulse" />
              <span>PORTFOLIO_OS // BOOT_SEQUENCE</span>
            </div>
            <div className="text-zinc-400">AY.SYSTEM_V2.6</div>
          </div>

          {/* Center Identity */}
          <div className="max-w-4xl mx-auto w-full my-auto flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative mb-6"
            >
              <h1 className="editorial-title text-4xl md:text-7xl lg:text-8xl tracking-tight text-white font-extrabold">
                ASHISH <span className="text-gradient-violet">YADAV</span>
              </h1>
              <p className="font-mono text-xs md:text-sm tracking-[0.3em] text-zinc-400 mt-2 uppercase">
                Senior PHP Developer • Laravel & REST API Specialist
              </p>
            </motion.div>

            {/* Dynamic Telemetry Log */}
            <div className="h-8 flex items-center justify-center font-mono text-xs md:text-sm text-cyan">
              <motion.span
                key={logIndex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="tracking-wider flex items-center gap-2"
              >
                <span className="text-violet">❯</span> {systemLogs[logIndex]}
              </motion.span>
            </div>

            {/* High-Tech Progress Bar */}
            <div className="w-64 md:w-80 h-1 bg-zinc-900 rounded-full mt-6 overflow-hidden relative border border-white/5">
              <motion.div
                className="h-full bg-gradient-to-r from-violet via-cyan to-hotPink"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: "easeOut", duration: 0.1 }}
              />
            </div>
            <div className="text-[10px] font-mono text-zinc-600 mt-2">
              {Math.min(progress, 100)}% COMPLETED
            </div>
          </div>

          {/* Bottom Metas */}
          <div className="flex flex-col md:flex-row justify-between items-center text-[11px] font-mono text-zinc-600 gap-2 border-t border-white/5 pt-4">
            <div>LOCATION: NASHIK, INDIA [19.9975° N, 73.7898° E]</div>
            <div>RUNTIME: NEXT.JS • THREE.JS • TAILWIND</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
