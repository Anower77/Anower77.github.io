"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  Database,
  ShieldCheck,
  Zap,
  Network,
  MapPin,
  Github,
  Linkedin,
  FileText,
  Terminal,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function AboutSection() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const engineeringPrinciples = [
    {
      icon: <Database className="w-5 h-5 text-accent" />,
      title: "Data Integrity & Schema Rigor",
      description:
        "Databases are long-lived foundations. I design normalized relational schemas with explicit constraints, ACID durability, and deliberate indexing before writing application queries.",
    },
    {
      icon: <Network className="w-5 h-5 text-accent" />,
      title: "Decoupled Asynchronous Boundaries",
      description:
        "Synchronous HTTP calls create cascading bottlenecks. I leverage message brokers like Kafka and RabbitMQ to buffer bursts and isolate independent failure domains.",
    },
    {
      icon: <Zap className="w-5 h-5 text-accent" />,
      title: "Mechanical Sympathy & Bottleneck Profiling",
      description:
        "Code doesn't run in a vacuum. Understanding OS thread contention, memory caching hierarchies, and connection pooling leads to performant, predictable backend services.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-accent" />,
      title: "Stateless Resiliency by Design",
      description:
        "Applications must be able to crash and restart cleanly without dropping state. Decoupling authentication state via JWT/JWKS and caching in Redis ensures fast horizontal elasticity.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 border-b border-surface-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="01 // Philosophy"
          title="Engineering Beyond the Code."
          description="Understanding system internals, performance characteristics, and building reliable primitives for modern applications."
        />

        {/* Profile Card & Editorial Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mt-8">
          {/* Left Column: Professional Portrait & Profile Card */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-stretch">
            <div className="w-full p-6 sm:p-8 rounded-3xl bg-surface border border-surface-border shadow-xl relative overflow-hidden flex flex-col items-center text-center group">
              {/* Background Ambient Glow */}
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-accent/15 dark:bg-accent/20 rounded-full blur-3xl pointer-events-none transition-all duration-300 group-hover:scale-125" />

              {/* Framed Portrait with Transparent Cutout */}
              <div className="relative mb-6">
                <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl bg-gradient-to-b from-surface-subtle to-surface border border-surface-border shadow-lg overflow-hidden flex items-end justify-center relative">
                  <img
                    src={`${basePath}/anower.png`}
                    alt="Anower Hossain - Backend Engineer"
                    className="w-full h-full object-cover object-top drop-shadow-xl transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Subtle edge vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-40 pointer-events-none" />
                </div>

                {/* Status Ping Badge */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-surface border border-surface-border shadow-md flex items-center gap-1.5 text-[11px] font-mono text-text-primary whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available for Engineering</span>
                </div>
              </div>

              {/* Identity & Details */}
              <div className="mt-2 space-y-1.5 w-full">
                <h3 className="text-xl font-bold text-text-primary tracking-tight">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs font-mono text-accent font-medium">
                  {PERSONAL_INFO.title}
                </p>
                <p className="text-xs font-mono text-text-muted flex items-center justify-center gap-1.5 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  <span>{PERSONAL_INFO.location}</span>
                </p>
              </div>

              {/* Core Skill Chips */}
              <div className="flex flex-wrap justify-center gap-1.5 mt-5 pt-4 border-t border-surface-border/60 w-full text-[11px] font-mono">
                {["Python", "Django", "PostgreSQL", "Kafka", "Redis", "AWS"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-md bg-surface-subtle border border-surface-border text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Direct Quick Actions */}
              <div className="flex items-center justify-center gap-3 mt-5 pt-4 border-t border-surface-border/60 w-full">
                <a
                  href={PERSONAL_INFO.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-surface-subtle border border-surface-border text-text-secondary hover:text-text-primary hover:border-accent transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-surface-subtle border border-surface-border text-text-secondary hover:text-text-primary hover:border-accent transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-accent" />
                </a>
                <a
                  href={PERSONAL_INFO.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-surface-subtle border border-surface-border text-text-primary hover:border-accent text-xs font-mono flex items-center gap-1.5 transition-colors"
                >
                  <Terminal className="w-3.5 h-3.5 text-accent" />
                  <span>GitHub Repos</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Principles */}
          <div className="lg:col-span-7 space-y-6 text-text-secondary leading-relaxed text-base">
            <div className="p-6 rounded-2xl bg-surface border border-surface-border shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-accent" />
              <p className="text-text-primary text-base sm:text-lg font-medium leading-relaxed italic pl-2">
                &ldquo;{PERSONAL_INFO.positioning}&rdquo;
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-text-secondary leading-relaxed">
              {PERSONAL_INFO.aboutText.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-surface border border-surface-border">
                <span className="text-text-muted uppercase block font-semibold text-[10px]">
                  Core Engineering Mindset
                </span>
                <span className="text-text-primary font-medium mt-1 block">
                  Deterministic Backends &gt; Fragile Workarounds
                </span>
              </div>
              <div className="p-4 rounded-xl bg-surface border border-surface-border">
                <span className="text-accent uppercase block font-semibold text-[10px]">
                  Pioneering Research Focus
                </span>
                <span className="text-text-primary font-medium mt-1 block">
                  Biological Brain to AI Data Transfer
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Engineering Tenets Sub-Grid */}
        <div className="mt-16 pt-12 border-t border-surface-border/60">
          <h3 className="font-mono text-xs uppercase tracking-wider text-text-muted mb-6 font-semibold">
            Architectural Tenets &amp; Systems Approach
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {engineeringPrinciples.map((principle, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-surface border border-surface-border hover:border-neutral-500 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="p-2.5 rounded-xl bg-surface-subtle border border-surface-border shrink-0 group-hover:border-accent/40 transition-colors w-fit mb-3">
                    {principle.icon}
                  </div>
                  <h4 className="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors">
                    {principle.title}
                  </h4>
                  <p className="mt-2 text-xs text-text-secondary leading-relaxed">
                    {principle.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-surface-border/40 text-[10px] font-mono text-text-muted flex items-center justify-between">
                  <span>Tenet 0{index + 1}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
