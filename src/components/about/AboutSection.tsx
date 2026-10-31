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
  ExternalLink,
} from "lucide-react";

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
          eyebrow="01 // Philosophy & Background"
          title="Engineering Beyond the Code."
          description="Understanding system internals, performance characteristics, and building reliable primitives for modern applications."
        />

        {/* Balanced Two-Column Grid: Editorial Narrative (Left) & Architectural Tenets (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-8">
          {/* Left Column: Portrait & Narrative (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Integrated Portrait Card */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 p-5 rounded-2xl bg-surface border border-surface-border shadow-sm">
              <img
                src={`${basePath}/anower.png`}
                alt="Anower Hossain - Backend Engineer"
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl object-cover shrink-0 border border-surface-border/80 shadow-sm"
              />
              <div className="space-y-1.5 text-center sm:text-left flex-1 min-w-0">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <h3 className="text-xl font-bold text-text-primary tracking-tight">
                    {PERSONAL_INFO.name}
                  </h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25">
                    Available
                  </span>
                </div>
                <p className="text-xs font-mono text-accent font-medium">
                  {PERSONAL_INFO.title}
                </p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs font-mono text-text-muted pt-0.5">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    <span>{PERSONAL_INFO.location}</span>
                  </span>
                  <span>•</span>
                  <a
                    href={PERSONAL_INFO.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-text-primary transition-colors flex items-center gap-1"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                  <span>•</span>
                  <a
                    href={PERSONAL_INFO.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-text-primary transition-colors flex items-center gap-1"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-accent" />
                    <span>LinkedIn</span>
                  </a>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed pt-1 font-normal">
                  {PERSONAL_INFO.shortBio}
                </p>
              </div>
            </div>

            {/* Positioning Quote */}
            <div className="p-5 rounded-xl bg-surface border border-surface-border relative overflow-hidden shadow-sm">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-accent" />
              <p className="text-text-primary text-base font-medium leading-relaxed italic pl-2">
                &ldquo;{PERSONAL_INFO.positioning}&rdquo;
              </p>
            </div>

            {/* Editorial Bio Paragraphs */}
            <div className="space-y-3.5 text-sm text-text-secondary leading-relaxed">
              {PERSONAL_INFO.aboutText.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Mindset & Research Callout Cards */}
            <div className="pt-1 flex flex-col sm:flex-row gap-3 text-xs font-mono">
              <div className="p-4 rounded-xl bg-surface border border-surface-border flex-1 shadow-sm">
                <span className="text-text-muted uppercase block text-[10px] font-semibold">
                  Core Mindset
                </span>
                <span className="text-text-primary font-medium mt-1 block">
                  Deterministic Backends &gt; Fragile Workarounds
                </span>
              </div>
              <div className="p-4 rounded-xl bg-surface border border-surface-border flex-1 shadow-sm">
                <span className="text-accent uppercase block text-[10px] font-semibold">
                  Research Frontier
                </span>
                <span className="text-text-primary font-medium mt-1 block">
                  Biological Brain to AI Data Transfer
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Core Architectural Tenets (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-mono text-xs uppercase tracking-wider text-text-muted font-semibold">
                Core Architectural Tenets
              </h3>
              <span className="text-[11px] font-mono text-text-muted">
                System Principles
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {engineeringPrinciples.map((principle, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-surface border border-surface-border hover:border-accent/40 transition-all duration-200 group shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-surface-subtle border border-surface-border shrink-0 group-hover:border-accent/40 transition-colors">
                      {principle.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors">
                          {principle.title}
                        </h4>
                        <span className="text-[10px] font-mono text-text-muted">
                          Tenet 0{index + 1}
                        </span>
                      </div>
                      <p className="mt-2 text-xs text-text-secondary leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
