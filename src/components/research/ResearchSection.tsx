"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RESEARCH_INTERESTS } from "@/data/portfolioData";
import {
  Brain,
  Activity,
  Radio,
  Cpu,
  Network,
  Database,
  Cloud,
  FlaskConical,
  Sparkles,
  Info,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function ResearchSection() {
  const [selectedTopic, setSelectedTopic] = useState<number>(0);

  const getTopicIcon = (iconName: string) => {
    switch (iconName) {
      case "Brain":
        return <Brain className="w-5 h-5 text-violet-400" />;
      case "Activity":
        return <Activity className="w-5 h-5 text-violet-400" />;
      case "Radio":
        return <Radio className="w-5 h-5 text-violet-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-violet-400" />;
      case "Network":
        return <Network className="w-5 h-5 text-accent" />;
      case "Database":
        return <Database className="w-5 h-5 text-accent" />;
      case "Cloud":
        return <Cloud className="w-5 h-5 text-accent" />;
      default:
        return <FlaskConical className="w-5 h-5 text-violet-400" />;
    }
  };

  return (
    <section
      id="research"
      className="py-20 lg:py-28 border-b border-surface-border/60 bg-[#09090d] relative overflow-hidden"
    >
      {/* Background scientific aura */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="06 // Scientific Inquiry"
          title="Research & Scientific Frontiers"
          description="Investigating computational neuroscience, non-invasive brain-computer interfaces, and deep representation learning alongside distributed infrastructure."
        />

        {/* Ongoing Research Spotlight Banner */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-[#12101b] border border-violet-500/30 relative overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-violet-500/20">
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <Badge variant="mono" className="text-violet-400 border-violet-500/40 bg-violet-950/40">
                  <FlaskConical className="w-3.5 h-3.5" />
                  Primary Research Focus
                </Badge>
                <span className="text-xs font-mono text-text-muted">
                  Status: Ongoing Investigation
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
                Few-Shot Cross-Dataset EEG-to-Visual Retrieval
              </h3>
              <p className="text-sm font-mono text-violet-300">
                THINGS-EEG2 &amp; EEG-ImageNet Benchmarks
              </p>
            </div>

            <div className="p-3 rounded-xl bg-violet-950/30 border border-violet-500/30 text-xs font-mono text-violet-300 max-w-sm">
              <div className="flex items-start gap-2">
                <Info className="w-4 h-4 shrink-0 text-violet-400 mt-0.5" />
                <span>
                  Conducted as active independent scientific inquiry. Hypotheses and pipelines are under active iterative validation.
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-violet-400 block font-semibold">
                Core Inquiry
              </span>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Can electroencephalographic (EEG) brain responses recorded during visual perception be mapped into joint multimodal semantic spaces to retrieve corresponding visual stimuli without per-subject calibration?
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-violet-400 block font-semibold">
                Technical Methodology
              </span>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Spatial-temporal signal conditioning, artifact subtraction, contrastive cross-entropy alignment with pre-trained visual backbones, and few-shot metric transfer across disjoint recording paradigms.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-violet-400 block font-semibold">
                Cross-Domain Significance
              </span>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Bridges theoretical biological neuroscience with modern neural representation learning, pioneering non-invasive neural decoders for assistive human-machine interfaces.
              </p>
            </div>
          </div>
        </div>

        {/* Research Topics Interactive Grid */}
        <div className="mt-12">
          <h3 className="font-mono text-xs uppercase tracking-wider text-text-muted mb-6">
            Broader Interdisciplinary Focus Areas
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {RESEARCH_INTERESTS.map((interest, idx) => (
              <div
                key={interest.title}
                className="p-6 rounded-xl bg-surface-subtle border border-surface-border hover:border-violet-500/40 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-lg bg-surface border border-surface-border group-hover:border-violet-500/30 transition-colors w-fit mb-4">
                    {getTopicIcon(interest.icon)}
                  </div>
                  <h4 className="text-base font-semibold text-text-primary group-hover:text-violet-300 transition-colors">
                    {interest.title}
                  </h4>
                  <p className="mt-2 text-xs text-text-secondary leading-relaxed">
                    {interest.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-surface-border/40 text-[10px] font-mono text-text-muted flex items-center justify-between">
                  <span>Interest Vector 0{idx + 1}</span>
                  <span className="text-violet-400 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
