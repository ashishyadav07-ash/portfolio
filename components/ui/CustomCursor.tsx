"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "button" | "explore" | "view" | "touch">("default");
  const [isDarkSection, setIsDarkSection] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const checkTouch = () => {
      return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.innerWidth < 1024
      );
    };

    setIsTouchDevice(checkTouch());
    if (checkTouch()) return;

    let lastTarget: EventTarget | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      const clientX = e.clientX;
      const clientY = e.clientY;
      const target = e.target;

      if (rafId.current) cancelAnimationFrame(rafId.current);

      rafId.current = requestAnimationFrame(() => {
        setMousePosition({ x: clientX, y: clientY });
        if (!isVisible) setIsVisible(true);

        if (target !== lastTarget && target instanceof HTMLElement) {
          lastTarget = target;
          const darkEl = target.closest(".bg-deepInk-section, .bg-deepInk, .bg-cobalt");
          setIsDarkSection(!!darkEl);

          const contactEl = target.closest("#contact, a[href='#contact']");
          const systemEl = target.closest("#systems, [data-cursor='project']");
          const techEl = target.closest("#toolbox, [data-cursor='tech']");
          const buttonEl = target.closest("button, a, input, textarea, [data-cursor='button']");

          if (contactEl) {
            setCursorVariant("touch");
            setCursorText("TALK");
          } else if (systemEl && !buttonEl) {
            setCursorVariant("explore");
            setCursorText("EXPLORE");
          } else if (techEl && !buttonEl) {
            setCursorVariant("view");
            setCursorText("STACK");
          } else if (buttonEl) {
            setCursorVariant("button");
            setCursorText("");
          } else {
            setCursorVariant("default");
            setCursorText("");
          }
        }
      });
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Small dot pointer */}
      <motion.div
        className={`fixed top-0 left-0 pointer-events-none z-[999999] rounded-full transition-colors duration-200 ${
          isDarkSection ? "bg-ivory" : "bg-deepInk"
        }`}
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          width: cursorVariant === "default" ? 6 : 0,
          height: cursorVariant === "default" ? 6 : 0,
          opacity: cursorVariant === "default" ? 1 : 0,
        }}
        transition={{ type: "spring", damping: 35, stiffness: 500, mass: 0.08 }}
      />

      {/* Dynamic follower circle */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[999998] flex items-center justify-center rounded-full text-[9px] font-mono font-bold tracking-wider select-none"
        animate={{
          x: mousePosition.x - (cursorText ? 30 : cursorVariant === "button" ? 12 : 10),
          y: mousePosition.y - (cursorText ? 30 : cursorVariant === "button" ? 12 : 10),
          width: cursorText ? 60 : cursorVariant === "button" ? 24 : 20,
          height: cursorText ? 60 : cursorVariant === "button" ? 24 : 20,
          backgroundColor:
            cursorVariant === "explore"
              ? "rgba(49, 85, 255, 0.9)"
              : cursorVariant === "view"
              ? "rgba(255, 107, 90, 0.9)"
              : cursorVariant === "touch"
              ? "rgba(17, 19, 24, 0.9)"
              : cursorVariant === "button"
              ? isDarkSection
                ? "rgba(255, 255, 255, 0.2)"
                : "rgba(49, 85, 255, 0.15)"
              : "transparent",
          borderColor:
            cursorVariant === "default"
              ? isDarkSection
                ? "rgba(245, 242, 234, 0.3)"
                : "rgba(17, 19, 24, 0.25)"
              : cursorVariant === "button"
              ? isDarkSection
                ? "rgba(255, 255, 255, 0.6)"
                : "rgba(49, 85, 255, 0.6)"
              : "transparent",
          borderWidth: cursorText ? 0 : 1.5,
        }}
        transition={{ type: "spring", damping: 28, stiffness: 350, mass: 0.1 }}
      >
        {cursorText && (
          <span className="text-white font-extrabold tracking-wider">
            {cursorText}
          </span>
        )}
      </motion.div>
    </>
  );
};
