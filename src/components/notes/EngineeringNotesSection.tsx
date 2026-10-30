"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ENGINEERING_NOTES } from "@/data/portfolioData";
import { EngineeringNote } from "@/types";
import { ArticleModal } from "./ArticleModal";
import {
  ExternalLink,
  BookOpen,
  ArrowRight,
  Clock,
  Sparkles,
  FileCode,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function EngineeringNotesSection() {
  const [activeArticle, setActiveArticle] = useState<EngineeringNote | null>(null);

  const featured = ENGINEERING_NOTES.find((n) => n.featured);
  const otherNotes = ENGINEERING_NOTES.filter((n) => !n.featured);

  return (
    <section id="notes" className="py-20 lg:py-28 border-b border-surface-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="09 // Technical Notes"
          title="Engineering Notes & System Design"
          description="In-depth explorations of distributed patterns, caching stampedes, database indexing, and fault-tolerant system architecture."
        />

        {/* Featured Note Banner */}
        {featured && (
          <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-surface-subtle to-surface dark:to-[#151722] border border-accent/30 relative overflow-hidden group shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <Badge variant="accent" className="font-mono text-[10px]">
                  Featured Deep Dive
                </Badge>
                <span className="text-xs font-mono text-text-muted flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {featured.readTime}
                </span>
              </div>

              {featured.externalUrl && (
                <a
                  href={featured.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-accent hover:underline flex items-center gap-1.5"
                >
                  <span>Published on LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight group-hover:text-accent transition-colors">
              {featured.title}
            </h3>

            <p className="mt-3 text-sm text-text-secondary leading-relaxed max-w-3xl">
              {featured.summary}
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-surface-border/60">
              <div className="flex flex-wrap gap-1.5">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded bg-surface border border-surface-border text-xs font-mono text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveArticle(featured)}
                  className="px-4 py-2 rounded-lg bg-surface border border-surface-border text-text-primary hover:border-accent text-xs font-mono flex items-center gap-2 transition-all"
                >
                  <BookOpen className="w-3.5 h-3.5 text-accent" />
                  Read Architecture Breakdown
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Other Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {otherNotes.map((note) => (
            <div
              key={note.id}
              onClick={() => setActiveArticle(note)}
              className="p-6 rounded-xl bg-surface-subtle border border-surface-border hover:border-neutral-700 transition-all duration-200 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono text-accent uppercase tracking-wider">
                    {note.date}
                  </span>
                  <span className="text-[10px] font-mono text-text-muted">
                    {note.readTime}
                  </span>
                </div>

                <h4 className="text-base font-semibold text-text-primary group-hover:text-accent transition-colors leading-snug">
                  {note.title}
                </h4>

                <p className="mt-2 text-xs text-text-secondary leading-relaxed line-clamp-3">
                  {note.summary}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-surface-border/40 flex items-center justify-between text-xs font-mono text-text-muted">
                <span className="text-[10px]">{note.tags[0]}</span>
                <span className="text-accent group-hover:translate-x-1 transition-transform flex items-center gap-1 text-[11px]">
                  Inspect Note <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ArticleModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
      />
    </section>
  );
}

