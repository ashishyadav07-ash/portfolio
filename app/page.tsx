"use client";

import React from "react";
import { SoundProvider } from "@/components/ui/SoundController";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { MinimalNav } from "@/components/ui/MinimalNav";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatementSection } from "@/components/sections/StatementSection";
import { WhatIBuild } from "@/components/sections/WhatIBuild";
import { BackendSection } from "@/components/sections/BackendSection";
import { ApiSection } from "@/components/sections/ApiSection";
import { AiSection } from "@/components/sections/AiSection";
import { DatabasePerformance } from "@/components/sections/DatabasePerformance";
import { TeamLeadership } from "@/components/sections/TeamLeadership";
import { CloudInfraSection } from "@/components/sections/CloudInfraSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { CapabilitiesShowcase } from "@/components/sections/CapabilitiesShowcase";
import { ToolboxSection } from "@/components/sections/ToolboxSection";
import { PrinciplesSection } from "@/components/sections/PrinciplesSection";
import { AboutEducation } from "@/components/sections/AboutEducation";
import { ContactSection } from "@/components/sections/ContactSection";
import { MinimalFooter } from "@/components/sections/MinimalFooter";

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
