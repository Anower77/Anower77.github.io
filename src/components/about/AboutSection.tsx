"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Database, ShieldCheck, Zap, Network, ArrowUpRight } from "lucide-react";

export function AboutSection() {
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          {/* Left Column: Editorial narrative */}
          <div className="lg:col-span-6 space-y-6 text-text-secondary leading-relaxed text-base">
            <div className="p-6 rounded-xl bg-surface-subtle border border-surface-border relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
              <p className="text-text-primary text-lg font-medium leading-relaxed italic">
                &ldquo;{PERSONAL_INFO.positioning}&rdquo;
              </p>
            </div>

            {PERSONAL_INFO.aboutText.map((paragraph, idx) => (
              <p key={idx} className="text-sm sm:text-base text-text-secondary">
                {paragraph}
              </p>
            ))}

            <div className="pt-2 flex flex-col sm:flex-row gap-4 text-xs font-mono">
              <div className="p-4 rounded-lg bg-surface-subtle border border-surface-border flex-1">
                <span className="text-text-muted uppercase block">Core Mindset</span>
                <span className="text-text-primary font-medium mt-1 block">
                  Deterministic Backends &gt; Fragile Hacks
                </span>
              </div>
              <div className="p-4 rounded-lg bg-surface-subtle border border-surface-border flex-1">
                <span className="text-text-muted uppercase block">Research Frontier</span>
                <span className="text-text-primary font-medium mt-1 block">
                  EEG Signal Decoding & BCI Systems
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Principles */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-wider text-text-muted mb-4">
              Core Engineering Tenets
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {engineeringPrinciples.map((principle, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-surface-subtle border border-surface-border hover:border-neutral-700 transition-colors duration-200 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-surface border border-surface-border shrink-0 group-hover:border-accent/40 transition-colors">
                      {principle.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors">
                        {principle.title}
                      </h4>
                      <p className="mt-1.5 text-xs text-text-secondary leading-relaxed">
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

