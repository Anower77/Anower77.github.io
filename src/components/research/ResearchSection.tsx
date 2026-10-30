"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RESEARCH_INTERESTS, BRAIN_TO_AI_RESEARCH } from "@/data/portfolioData";
import {
  Brain,
  Activity,
  Radio,
  Cpu,
  Network,
  Database,
  Cloud,
  FlaskConical,
  Zap,
  ChevronRight,
  Info,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function ResearchSection() {
  const [activeStageIdx, setActiveStageIdx] = useState<number>(0);

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

  const activeStage = BRAIN_TO_AI_RESEARCH.pipelineStages[activeStageIdx];

  return (
    <section
      id="research"
      className="py-20 lg:py-28 border-b border-surface-border/60 bg-[#09090d] relative overflow-hidden"
    >
      {/* Background scientific aura */}
      <div className="absolute top-1/3 right-10 -translate-y-1/2 w-[32rem] h-[32rem] bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        <SectionHeading
          eyebrow="06 // Scientific Inquiry"
          title="Research & Scientific Frontiers"
          description="Investigating computational neuroscience, non-invasive brain-computer interfaces, and deep representation learning alongside distributed infrastructure."
        />

        {/* Famous Concept Spotlight: Data Transfer from Biological Brain to AI Brain */}
        <div className="p-6 sm:p-10 rounded-2xl bg-gradient-to-b from-[#131120] to-[#0d0c14] border border-violet-500/30 relative overflow-hidden shadow-2xl space-y-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-violet-500/20">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2.5">
                <Badge variant="mono" className="text-violet-400 border-violet-500/40 bg-violet-950/40 font-mono">
                  <Brain className="w-3.5 h-3.5" />
                  Core Research Concept
                </Badge>
                <span className="text-xs font-mono text-text-muted">
                  Status: {BRAIN_TO_AI_RESEARCH.status}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight">
                {BRAIN_TO_AI_RESEARCH.title}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-violet-300 max-w-3xl">
                {BRAIN_TO_AI_RESEARCH.tagline}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-violet-950/30 border border-violet-500/30 text-xs font-mono text-violet-300 max-w-sm">
              <div className="flex items-start gap-2">
                <Info className="w-4 h-4 shrink-0 text-violet-400 mt-0.5" />
                <span>
                  Investigative architectural concept exploring biological neural assembly decoding, manifold synchronization, and transformer latent projection.
                </span>
              </div>
            </div>
          </div>

          {/* Overview Statement */}
          <p className="text-sm text-text-secondary leading-relaxed max-w-4xl">
            {BRAIN_TO_AI_RESEARCH.overview}
          </p>

          {/* Interactive Biological-to-AI Data Transfer Pipeline */}
          <div className="space-y-4">
            <div className="text-xs font-mono text-text-muted flex items-center justify-between">
              <span className="uppercase tracking-wider text-violet-400 font-semibold">
                Bi-Directional Transfer Pipeline Architecture
              </span>
              <span>Click a stage to inspect technical specifications</span>
            </div>

            {/* Pipeline Stage Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {BRAIN_TO_AI_RESEARCH.pipelineStages.map((stage, idx) => {
                const isActive = activeStageIdx === idx;
                return (
                  <button
                    key={stage.name}
                    onClick={() => setActiveStageIdx(idx)}
                    className={`p-4 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between ${
                      isActive
                        ? "bg-[#1d1930] border-violet-500 shadow-md shadow-violet-500/10 ring-1 ring-violet-500"
                        : "bg-surface border-surface-border hover:border-neutral-700"
                    }`}
                  >
                    <div>
                      <span className="font-mono text-[10px] text-violet-400 block mb-1">
                        {stage.stage}
                      </span>
                      <h4 className="text-xs font-bold text-text-primary leading-snug">
                        {stage.name}
                      </h4>
                    </div>
                    <div className="pt-2 text-[10px] font-mono text-text-muted flex items-center justify-between mt-2 border-t border-surface-border/40">
                      <span>Phase 0{idx + 1}</span>
                      <ChevronRight className={`w-3 h-3 ${isActive ? "text-violet-400" : "text-text-muted"}`} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Detail Box */}
            <div className="p-5 sm:p-6 rounded-xl bg-surface border border-violet-500/30 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-surface-border">
                <h4 className="text-base font-bold text-text-primary flex items-center gap-2">
                  <Zap className="w-4 h-4 text-violet-400" />
                  {activeStage.name}
                </h4>
                <span className="text-xs font-mono text-violet-400">
                  {activeStage.stage}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                {activeStage.description}
              </p>

              <div>
                <span className="text-[11px] font-mono text-text-muted block mb-2 font-semibold">
                  Technical Specifications &amp; Protocols:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeStage.specs.map((spec) => (
                    <span
                      key={spec}
                      className="px-2.5 py-1 rounded bg-[#161424] border border-violet-500/40 text-xs font-mono text-violet-300"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benchmark Inquiry: EEG-to-Visual Retrieval */}
        <div className="p-6 sm:p-8 rounded-2xl bg-surface-subtle border border-surface-border relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-surface-border">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <Badge variant="mono" className="text-accent border-accent/40 bg-accent/10">
                  <FlaskConical className="w-3.5 h-3.5" />
                  Benchmark Inquiry
                </Badge>
                <span className="text-xs font-mono text-text-muted">
                  Few-Shot Signal Alignment
                </span>
              </div>
              <h3 className="text-xl font-bold text-text-primary tracking-tight">
                Few-Shot Cross-Dataset EEG-to-Visual Retrieval
              </h3>
              <p className="text-xs font-mono text-accent">
                THINGS-EEG2 &amp; EEG-ImageNet Datasets
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-xs text-text-secondary leading-relaxed">
            <div className="space-y-1.5">
              <span className="font-mono uppercase tracking-wider text-text-primary block font-semibold text-[11px]">
                Hypothesis
              </span>
              <p>
                Can electroencephalographic brain responses recorded during visual perception be mapped into joint multimodal semantic spaces to retrieve corresponding visual stimuli without per-subject calibration?
              </p>
            </div>
            <div className="space-y-1.5">
              <span className="font-mono uppercase tracking-wider text-text-primary block font-semibold text-[11px]">
                Methodology
              </span>
              <p>
                Spatial-temporal signal conditioning, artifact subtraction, contrastive cross-entropy alignment with pre-trained visual backbones, and few-shot metric transfer across disjoint recording paradigms.
              </p>
            </div>
            <div className="space-y-1.5">
              <span className="font-mono uppercase tracking-wider text-text-primary block font-semibold text-[11px]">
                Significance
              </span>
              <p>
                Provides concrete benchmarking data for the overarching Brain-to-AI data transfer framework, verifying non-invasive cross-subject decoding feasibility.
              </p>
            </div>
          </div>
        </div>

        {/* Broader Research Vectors Grid */}
        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-text-muted mb-6">
            Broader Interdisciplinary Focus Vectors
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
                  <span>Research Track 0{idx + 1}</span>
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
