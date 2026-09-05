"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { SoundToggle, useSoundEffects } from "./SoundController";

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "STANDARDS", href: "#principles" },
  { label: "SYSTEMS", href: "#systems" },
  { label: "STACK", href: "#toolbox" },
  { label: "CONTACT", href: "#contact" },
];

export const MinimalNav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { playClick, playHover } = useSoundEffects();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center ${
          isScrolled ? "py-3 px-6" : "py-6 px-6 md:px-16"
        }`}
      >
        <div
          className={`w-full max-w-7xl flex items-center justify-between transition-all duration-500 ${
            isScrolled
              ? "px-6 py-2.5 rounded-full bg-ivory/80 backdrop-blur-lg border border-deepInk/10 shadow-md-soft"
              : "bg-transparent"
          }`}
        >
          {/* Left Brand Identity */}
          <a
            href="#"
            onClick={() => playClick()}
            onMouseEnter={() => playHover()}
            className="flex items-center gap-3 group"
          >
            <div className="w-9 h-9 rounded-full bg-deepInk text-ivory flex items-center justify-center font-mono font-bold text-sm group-hover:bg-cobalt transition-colors shadow-xs">
              AY
            </div>
            <div className="flex flex-col">
              <span className="font-editorial font-extrabold text-sm sm:text-base text-deepInk tracking-tight">
                ASHISH YADAV
              </span>
              <span className="text-[10px] font-mono font-bold text-deepInk/60 tracking-wider uppercase">
                SENIOR PHP DEVELOPER
              </span>
            </div>
          </a>

          {/* Center Links with Underline Expand on Hover */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => playClick()}
                onMouseEnter={() => playHover()}
                className="link-hover-expand text-xs sm:text-sm font-mono font-bold tracking-wider text-deepInk hover:text-cobalt transition-colors py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <SoundToggle />
            <a
              href="#contact"
              onClick={() => playClick()}
              onMouseEnter={() => playHover()}
              className="px-5 py-2 rounded-full bg-deepInk text-ivory text-xs font-mono font-bold tracking-wider hover:bg-cobalt transition-all flex items-center gap-2 shadow-sm-soft hover:shadow-cobalt-glow hover:-translate-y-0.5"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <SoundToggle />
            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                playClick();
              }}
              className="p-2 rounded-lg text-deepInk"
              aria-label="Toggle Menu"
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
            className="fixed inset-0 z-40 bg-ivory/98 backdrop-blur-2xl flex flex-col justify-center px-8 md:hidden"
          >
            <div className="flex flex-col gap-6 items-center text-center">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    playClick();
                  }}
                  className="editorial-heading text-3xl font-extrabold text-deepInk hover:text-cobalt transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => {
                  setMobileMenuOpen(false);
                  playClick();
                }}
                className="mt-6 px-8 py-3.5 rounded-full bg-deepInk text-ivory text-sm font-mono font-bold tracking-wider"
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
