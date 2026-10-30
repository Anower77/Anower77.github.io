"use client";

import React, { useState } from "react";
import { Project } from "@/types";
import {
  Github,
  ExternalLink,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Layers,
  CheckCircle2,
  AlertCircle,
  FlaskConical,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`rounded-2xl bg-surface-subtle border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
        project.isResearch
          ? "border-violet-accent/40 hover:border-violet-accent bg-gradient-to-b from-[#14121c] to-surface-subtle"
          : "border-surface-border hover:border-neutral-700"
      }`}
    >
      <div className="p-6 sm:p-8 space-y-5">
        {/* Card Header */}
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-text-primary tracking-tight">
                {project.title}
              </h3>
              {project.isResearch ? (
                <Badge variant="mono" className="text-violet-400 border-violet-500/30">
                  <FlaskConical className="w-3 h-3" />
                  Ongoing Research
                </Badge>
              ) : (
                <Badge variant="mono" className="uppercase text-[10px]">
                  {project.category}
                </Badge>
              )}
            </div>
            <p className="text-xs font-mono text-accent">
              {project.tagline}
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface border border-surface-border text-text-secondary hover:text-text-primary hover:border-neutral-600 transition-colors"
                aria-label={`View ${project.title} on GitHub`}
                title="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.docsUrl && (
              <a
                href={project.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface border border-surface-border text-accent hover:text-white hover:border-accent transition-colors"
                aria-label={`View ${project.title} API Docs`}
                title="API Documentation"
              >
                <BookOpen className="w-4 h-4" />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface border border-surface-border text-text-secondary hover:text-text-primary hover:border-neutral-600 transition-colors"
                aria-label={`View ${project.title} Live Demo`}
                title="Live Application"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Short Description */}
        <p className="text-sm text-text-secondary leading-relaxed">
          {project.description}
        </p>

        {/* Problem & Solution Accordion */}
        <div className="space-y-3 pt-2">
          <div className="p-3.5 rounded-xl bg-surface border border-surface-border/80">
            <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted block font-semibold mb-1">
              Problem Statement
            </span>
            <p className="text-xs text-text-secondary leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-surface border border-surface-border/80">
            <span className="text-[11px] font-mono uppercase tracking-wider text-accent block font-semibold mb-1">
              Technical Architecture & Solution
            </span>
            <p className="text-xs text-text-secondary leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features Dropdown */}
        <div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center justify-between w-full py-2 text-xs font-mono text-text-muted hover:text-text-primary transition-colors border-t border-surface-border/50"
          >
            <span>Key Implemented Capabilities ({project.features.length})</span>
            {expanded ? (
              <ChevronUp className="w-3.5 h-3.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" />
            )}
          </button>

          {expanded && (
            <ul className="mt-2 space-y-1.5 text-xs text-text-secondary animate-in fade-in duration-200">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Tech Stack Footer */}
      <div className="px-6 sm:px-8 py-4 bg-surface border-t border-surface-border flex flex-wrap items-center gap-1.5">
        <span className="text-[11px] font-mono text-text-muted mr-1.5">
          Stack:
        </span>
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 rounded bg-surface-subtle border border-surface-border text-[11px] font-mono text-text-secondary"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
