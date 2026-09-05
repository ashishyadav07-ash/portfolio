"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Terminal } from "lucide-react";
import { SoundToggle, useSoundEffects } from "./SoundController";

const navLinks = [
  { label: "WORK", href: "#work" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "AI & APIS", href: "#ai-apis" },
  { label: "STACK", href: "#stack" },
  { label: "EXPERTISE", href: "#expertise" },
  { label: "ABOUT", href: "#about" },
];

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { playHover, playClick } = useSoundEffects();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);

      const sections = ["work", "experience", "ai-apis", "stack", "expertise", "about", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-3 px-4 md:px-8 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5"
            : "py-6 px-6 md:px-12 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#"
            onClick={() => playClick()}
            onMouseEnter={() => playHover()}
            className="group flex items-center gap-3 text-white focus:outline-none"
          >
            <div className="w-9 h-9 rounded-lg bg-zinc-900/90 border border-violet/40 flex items-center justify-center font-mono font-bold text-xs text-white group-hover:border-violet group-hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all">
              AY
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-sm text-white group-hover:text-violet transition-colors">
                ASHISH YADAV
              </span>
              <span className="text-[10px] font-mono text-zinc-500 tracking-widest flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ONLINE
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-zinc-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onMouseEnter={() => playHover()}
                  onClick={() => playClick()}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider transition-all ${
                    isActive
                      ? "bg-violet text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <SoundToggle />

            <a
              href="#contact"
              onClick={() => playClick()}
              onMouseEnter={() => playHover()}
              className="relative group px-5 py-2 rounded-full overflow-hidden bg-gradient-to-r from-violet to-cyan text-white text-xs font-bold font-mono tracking-wider shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all flex items-center gap-1.5"
            >
              <span>LET&apos;S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <SoundToggle />
            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                playClick();
              }}
              className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-2xl flex flex-col justify-center px-8 lg:hidden"
          >
            <div className="flex flex-col gap-6 items-center text-center">
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 mb-4">
                <Terminal className="w-4 h-4 text-violet" />
                <span>NAVIGATION // SELECT CHAPTER</span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    playClick();
                  }}
                  className="text-3xl font-extrabold tracking-tight text-zinc-300 hover:text-white hover:text-gradient-violet transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => {
                  setMobileMenuOpen(false);
                  playClick();
                }}
                className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-violet to-cyan text-white text-sm font-bold font-mono tracking-widest shadow-lg"
              >
                LET&apos;S TALK →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
