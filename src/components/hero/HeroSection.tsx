"use client";

import React from "react";
import { ArrowRight, FileText, Mail, Github, Linkedin, CheckCircle2, ChevronDown } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { InteractiveArchitectureTerminal } from "./InteractiveArchitectureTerminal";

interface HeroSectionProps {
  onOpenResume: () => void;
}

export function HeroSection({ onOpenResume }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden border-b border-surface-border/60"
    >
      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      {/* Subtle radial glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Positioning */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2">
              <Badge variant="emerald" className="py-1 px-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {PERSONAL_INFO.availability}
              </Badge>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <div className="font-mono text-xs uppercase tracking-widest text-text-muted">
                {PERSONAL_INFO.title}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.08]">
                Building Systems That <span className="text-transparent bg-clip-text bg-gradient-to-r dark:from-text-primary dark:via-neutral-200 dark:to-accent from-slate-900 via-slate-700 to-blue-600">Scale.</span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl font-normal">
              I&apos;m <span className="text-text-primary font-medium">{PERSONAL_INFO.name}</span>, a Backend Engineer passionate about scalable backend systems, distributed architecture, cloud infrastructure, and intelligent technologies.
            </p>

            {/* Quick Tech Highlights */}
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs text-text-muted">
              <span className="text-text-primary font-semibold">Focus:</span>
              {[
                "AWS (EC2, S3, RDS, ECS, Lambda)",
                "Cloud Architecture",
                "Docker & Containers",
                "Distributed Infrastructure",
                "CloudWatch & Telemetry",
                "Nginx & Edge Routing",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded bg-surface-subtle border border-surface-border/80 text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                variant="primary"
                size="md"
                href="#projects"
                icon={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
              >
                View Projects
              </Button>

              <Button
                variant="secondary"
                size="md"
                onClick={onOpenResume}
                icon={<FileText className="w-4 h-4 text-accent" />}
              >
                Download Resume
              </Button>

              <Button
                variant="outline"
                size="md"
                href="#contact"
                icon={<Mail className="w-4 h-4" />}
              >
                Contact Me
              </Button>
            </div>

            {/* External Links */}
            <div className="flex flex-wrap items-center gap-5 pt-2 text-xs font-mono text-text-muted">
              <a
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-text-primary transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>github.com/Anower77</span>
              </a>

              <a
                href={PERSONAL_INFO.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4 text-accent" />
                <span>linkedin/in/anowerhossain</span>
              </a>

              <a
                href={PERSONAL_INFO.links.linktree}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-text-primary transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span>linktr.ee/anower77</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Architecture Terminal */}
          <div className="lg:col-span-5 relative">
            <InteractiveArchitectureTerminal />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 sm:mt-24 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-1.5 text-text-muted hover:text-text-primary transition-colors group"
            aria-label="Scroll to About section"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest group-hover:text-accent transition-colors">
              Explore Architecture
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce text-text-muted group-hover:text-accent" />
          </a>
        </div>
      </div>
    </section>
  );
}

