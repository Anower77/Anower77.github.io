"use client";

import React from "react";
import { X, Download, ExternalLink, Printer } from "lucide-react";
import { PERSONAL_INFO, EXPERIENCES, ACHIEVEMENTS, EDUCATION, SKILL_CATEGORIES } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadMarkdown = () => {
    const mdContent = `# ${PERSONAL_INFO.name}
**${PERSONAL_INFO.title}**
Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.links.github} | LinkedIn: ${PERSONAL_INFO.links.linkedin}

---

## Professional Summary
${PERSONAL_INFO.shortBio}

---

## Technical Skills
${SKILL_CATEGORIES.map((c) => `- **${c.name}:** ${c.skills.join(", ")}`).join("\n")}

---

## Experience
${EXPERIENCES.map(
  (e) => `### ${e.role} — ${e.company} (${e.period})
${e.description.map((d) => `- ${d}`).join("\n")}`
).join("\n\n")}

---

## Education
${EDUCATION.map(
  (edu) => `### ${edu.institution}
${edu.degree} (${edu.period})`
).join("\n\n")}

---

## Achievements
${ACHIEVEMENTS.map((a) => `- **${a.title}** (${a.organization}): ${a.description}`).join("\n")}
`;

    const blob = new Blob([mdContent], { type: "text/markdown;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `Anower_Hossain_Backend_Developer_Resume.md`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-surface rounded-xl border border-surface-border shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-surface-border bg-surface-subtle">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <h3 className="font-semibold text-text-primary text-base">
              Resume: {PERSONAL_INFO.name}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadMarkdown}
              className="px-3 py-1.5 text-xs font-medium text-text-primary bg-surface border border-surface-border rounded-md hover:bg-surface-muted transition-colors flex items-center gap-1.5"
              title="Download Markdown format"
            >
              <Download className="w-3.5 h-3.5 text-accent" />
              Download .md
            </button>
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-medium text-text-primary bg-accent/20 border border-accent/40 rounded-md hover:bg-accent/30 text-accent transition-colors flex items-center gap-1.5"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-text-secondary hover:text-text-primary hover:bg-surface-muted rounded-md transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-text-secondary print:p-0 print:bg-white print:text-black">
          {/* Resume Header */}
          <div className="border-b border-surface-border pb-6 print:border-black">
            <h1 className="text-2xl font-bold text-text-primary print:text-black">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-accent font-medium mt-1">
              {PERSONAL_INFO.title}
            </p>
            <div className="flex flex-wrap gap-4 mt-3 text-xs font-mono text-text-muted">
              <span>Location: {PERSONAL_INFO.location}</span>
              <span>•</span>
              <a
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent underline flex items-center gap-1"
              >
                GitHub <ExternalLink className="w-3 h-3" />
              </a>
              <span>•</span>
              <a
                href={PERSONAL_INFO.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent underline flex items-center gap-1"
              >
                LinkedIn <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-text-secondary print:text-gray-800">
              {PERSONAL_INFO.positioning}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs uppercase font-mono tracking-wider font-semibold text-text-primary mb-3 print:text-black">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div
                  key={cat.name}
                  className="p-2 rounded bg-surface-subtle border border-surface-border print:border-gray-300"
                >
                  <span className="font-semibold text-text-primary block mb-0.5">
                    {cat.name}
                  </span>
                  <span className="text-text-muted font-mono">
                    {cat.skills.join(", ")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs uppercase font-mono tracking-wider font-semibold text-text-primary mb-3 print:text-black">
              Professional Experience
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp, idx) => (
                <div
                  key={idx}
                  className="border-l-2 border-surface-border pl-4 py-1"
                >
                  <div className="flex justify-between items-baseline flex-wrap gap-2">
                    <span className="font-semibold text-text-primary text-sm">
                      {exp.role} —{" "}
                      <span className="text-accent">{exp.company}</span>
                    </span>
                    <span className="text-xs font-mono text-text-muted">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="mt-2 list-disc list-inside space-y-1 text-xs text-text-secondary">
                    {exp.description.map((item, dIdx) => (
                      <li key={dIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs uppercase font-mono tracking-wider font-semibold text-text-primary mb-3 print:text-black">
              Education
            </h2>
            <div className="space-y-3">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="text-xs">
                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold text-text-primary">
                      {edu.institution}
                    </span>
                    <span className="font-mono text-text-muted">
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-accent mt-0.5">{edu.degree}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-xs uppercase font-mono tracking-wider font-semibold text-text-primary mb-3 print:text-black">
              Honors & Competitive Milestones
            </h2>
            <ul className="space-y-1.5 text-xs text-text-secondary">
              {ACHIEVEMENTS.map((ach) => (
                <li key={ach.id} className="flex items-start gap-2">
                  <span className="text-accent font-mono">•</span>
                  <span>
                    <strong className="text-text-primary">{ach.title}</strong>{" "}
                    ({ach.organization})
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-surface-border bg-surface-subtle text-xs text-text-muted flex justify-between items-center">
          <span>Verification status: Candidate information verified</span>
          <button
            onClick={onClose}
            className="text-text-secondary hover:text-text-primary underline text-xs"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
