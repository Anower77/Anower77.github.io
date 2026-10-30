"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EDUCATION } from "@/data/portfolioData";
import { GraduationCap, Calendar, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function EducationSection() {
  return (
    <section id="education" className="py-20 lg:py-28 border-b border-surface-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="08 // Academic Background"
          title="Education & Formal Training"
          description="Foundations in theoretical computer science, operating systems, algorithms, and computational mathematics."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-12 max-w-5xl">
          {EDUCATION.map((edu, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl bg-surface-subtle border border-surface-border hover:border-neutral-700 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-surface border border-surface-border text-accent">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  {edu.status && (
                    <Badge variant={edu.status === "Enrolled" ? "emerald" : "default"}>
                      {edu.status}
                    </Badge>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-text-primary">
                  {edu.institution}
                </h3>
                <p className="text-sm font-medium text-accent mt-1">
                  {edu.degree}
                </p>

                <div className="flex items-center gap-1.5 text-xs font-mono text-text-muted mt-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{edu.period}</span>
                </div>

                {edu.details && (
                  <ul className="mt-5 space-y-2 text-xs sm:text-sm text-text-secondary">
                    {edu.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-surface-border/50 text-[10px] font-mono text-text-muted flex items-center justify-between">
                <span>Formal CS Track</span>
                <span className="text-text-secondary">Accredited Academic Institution</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
