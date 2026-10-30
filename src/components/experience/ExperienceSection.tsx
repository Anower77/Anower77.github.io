"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EXPERIENCES } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 lg:py-28 border-b border-surface-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="04 // Career Timeline"
          title="Practical Engineering Experience"
          description="Chronological record of software development, backend service design, and academic technical instruction."
        />

        <div className="mt-12 max-w-4xl relative">
          {/* Vertical Timeline bar */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-8 w-px bg-surface-border" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <div
                key={index}
                className="relative pl-12 sm:pl-20 group"
              >
                {/* Timeline node */}
                <div
                  className={`absolute left-4 sm:left-8 -translate-x-1/2 top-1.5 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
                    exp.isCurrent
                      ? "bg-surface border-accent text-accent"
                      : "bg-surface border-surface-border text-text-muted group-hover:border-neutral-500"
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                </div>

                {/* Experience Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-surface-subtle border border-surface-border hover:border-neutral-700 transition-all duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-surface-border">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-bold text-text-primary">
                          {exp.role}
                        </h3>
                        {exp.isCurrent && (
                          <Badge variant="emerald" className="text-[10px]">
                            Current Role
                          </Badge>
                        )}
                      </div>
                      <div className="text-accent font-medium text-sm mt-0.5">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs font-mono text-text-muted">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-text-muted" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-text-muted" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <div className="mt-5 space-y-2.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-text-muted block">
                      Core Responsibilities
                    </span>
                    <ul className="space-y-2 text-sm text-text-secondary">
                      {exp.description.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5">
                          <span className="text-accent mt-1">›</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills tags */}
                  <div className="mt-6 pt-4 border-t border-surface-border/60 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-text-muted mr-1">
                      Technologies:
                    </span>
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded bg-surface border border-surface-border text-xs font-mono text-text-secondary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

