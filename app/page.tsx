"use client";

import React from "react";
import dynamic from "next/dynamic";
import { SoundProvider } from "@/components/ui/SoundController";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { MinimalNav } from "@/components/ui/MinimalNav";
// Above-the-fold: static imports for instant LCP
import { HeroSection } from "@/components/sections/HeroSection";
import { StatementSection } from "@/components/sections/StatementSection";
import { WhatIBuild } from "@/components/sections/WhatIBuild";

// Below-the-fold: lazy-loaded to reduce initial JS bundle (Three.js is heavy)
const BackendSection = dynamic(() => import("@/components/sections/BackendSection").then(m => ({ default: m.BackendSection })), { ssr: false });
const ApiSection = dynamic(() => import("@/components/sections/ApiSection").then(m => ({ default: m.ApiSection })), { ssr: false });
const AiSection = dynamic(() => import("@/components/sections/AiSection").then(m => ({ default: m.AiSection })), { ssr: false });
const DatabasePerformance = dynamic(() => import("@/components/sections/DatabasePerformance").then(m => ({ default: m.DatabasePerformance })), { ssr: false });
const TeamLeadership = dynamic(() => import("@/components/sections/TeamLeadership").then(m => ({ default: m.TeamLeadership })), { ssr: false });
const CloudInfraSection = dynamic(() => import("@/components/sections/CloudInfraSection").then(m => ({ default: m.CloudInfraSection })), { ssr: false });
const ExperienceSection = dynamic(() => import("@/components/sections/ExperienceSection").then(m => ({ default: m.ExperienceSection })), { ssr: false });
const CapabilitiesShowcase = dynamic(() => import("@/components/sections/CapabilitiesShowcase").then(m => ({ default: m.CapabilitiesShowcase })), { ssr: false });
const ToolboxSection = dynamic(() => import("@/components/sections/ToolboxSection").then(m => ({ default: m.ToolboxSection })), { ssr: false });
const PrinciplesSection = dynamic(() => import("@/components/sections/PrinciplesSection").then(m => ({ default: m.PrinciplesSection })), { ssr: false });
const AboutEducation = dynamic(() => import("@/components/sections/AboutEducation").then(m => ({ default: m.AboutEducation })), { ssr: false });
const ContactSection = dynamic(() => import("@/components/sections/ContactSection").then(m => ({ default: m.ContactSection })), { ssr: false });
const MinimalFooter = dynamic(() => import("@/components/sections/MinimalFooter").then(m => ({ default: m.MinimalFooter })), { ssr: false });

export default function Home() {
  return (
    <SoundProvider>
      <div className="relative min-h-screen bg-ivory text-deepInk selection:bg-cobalt selection:text-white">
        {/* Custom Subtle Magnetic Cursor */}
        <CustomCursor />

        {/* Minimal Transparent Floating Navigation */}
        <MinimalNav />

        {/* Master Editorial Flow with Precision Color Rhythm */}
        <main className="relative z-10 flex flex-col w-full overflow-hidden">
          {/* 01. HERO: Warm Ivory + 3D System Architecture Sculpture */}
          <HeroSection />

          {/* 02. INTRO: Deep Ink + "I BUILD DIGITAL SYSTEMS." */}
          <StatementSection />

          {/* 03. CAPABILITIES: Warm Ivory + Typographic Rows (01 to 06) */}
          <WhatIBuild />

          {/* 04. BACKEND ENGINEERING: Deep Ink + 3D Request Flow Pipeline */}
          <BackendSection />

          {/* 05. API ECOSYSTEM: Warm Ivory + 3D Network ("EVERYTHING CONNECTS.") */}
          <ApiSection />

          {/* 06. BUILDING WITH AI: Soft Blue + Generative 3D Sculpture */}
          <AiSection />

          {/* 07. PERFORMANCE: Deep Ink + Oversized 30% & 25% Numbers */}
          <DatabasePerformance />

          {/* 08. TEAM LEADERSHIP: Warm Ivory + 4 Developers Led & 3D Squad */}
          <TeamLeadership />

          {/* 09. CLOUD INFRASTRUCTURE: Deep Ink + From Code to Cloud Flow */}
          <CloudInfraSection />

          {/* 10. EXPERIENCE: Warm Ivory + 3 Career Chapters */}
          <ExperienceSection />

          {/* 11. SYSTEMS BUILT: Warm Ivory + 6 System Classes (Zero Project Names) */}
          <CapabilitiesShowcase />

          {/* 12. THE STACK: Deep Ink + Giant Interactive Typography */}
          <ToolboxSection />

          {/* 13. HOW I ENGINEER: Warm Ivory + 10 Engineering Principles */}
          <PrinciplesSection />

          {/* 14. ABOUT & EDUCATION: Warm Ivory + Professional Biography & Degrees */}
          <AboutEducation />

          {/* 15. CONTACT: Cobalt Blue + "LET'S BUILD SOMETHING USEFUL." + Validated Form */}
          <ContactSection />
        </main>

        {/* 16. FOOTER: Warm Ivory + Editorial Metadata & Direct Connect */}
        <MinimalFooter />
      </div>
    </SoundProvider>
  );
}
