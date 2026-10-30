"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { AboutSection } from "@/components/about/AboutSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { SystemArchitectureSection } from "@/components/architecture/SystemArchitectureSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { ResearchSection } from "@/components/research/ResearchSection";
import { AchievementsSection } from "@/components/achievements/AchievementsSection";
import { EducationSection } from "@/components/education/EducationSection";
import { EngineeringNotesSection } from "@/components/notes/EngineeringNotesSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { ResumeModal } from "@/components/ui/ResumeModal";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-text-primary flex flex-col selection:bg-accent/30 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />
        <AboutSection />
        <SkillsSection />
        <SystemArchitectureSection />
        <ExperienceSection />
        <ProjectsSection />
        <ResearchSection />
        <AchievementsSection />
        <EducationSection />
        <EngineeringNotesSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

