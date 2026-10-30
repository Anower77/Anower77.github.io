"use client";

import React from "react";
import { X, ExternalLink, Calendar, Clock, BookOpen } from "lucide-react";
import { EngineeringNote } from "@/types";
import { Button } from "@/components/ui/Button";

interface ArticleModalProps {
  article: EngineeringNote | null;
  onClose: () => void;
}

export function ArticleModal({ article, onClose }: ArticleModalProps) {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[85vh] bg-surface rounded-2xl border border-surface-border shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-surface-border bg-surface-subtle">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-accent" />
            <span className="text-xs font-mono uppercase tracking-wider text-text-muted">
              Technical Note Preview
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-text-muted hover:text-text-primary rounded-lg hover:bg-surface-muted transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5">
          <div className="space-y-2">
            <div className="flex items-center gap-4 text-xs font-mono text-text-muted">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary leading-tight">
              {article.title}
            </h2>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded bg-surface-subtle border border-surface-border text-xs font-mono text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>

          {article.contentMarkdown ? (
            <div className="prose prose-invert max-w-none text-xs sm:text-sm text-text-secondary leading-relaxed space-y-4 pt-2 font-sans whitespace-pre-line border-t border-surface-border/60">
              {article.contentMarkdown}
            </div>
          ) : (
            <div className="p-6 rounded-xl bg-surface-subtle border border-surface-border text-center space-y-2">
              <p className="text-sm text-text-secondary">
                {article.summary}
              </p>
              <p className="text-xs font-mono text-text-muted">
                Detailed research breakdown is under active preparation.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-surface-border bg-surface-subtle flex items-center justify-between">
          {article.externalUrl ? (
            <a
              href={article.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-accent hover:underline font-mono"
            >
              <span>Read Full Discussion on LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="text-xs font-mono text-text-muted">
              Topic index from systems notebook
            </span>
          )}

          <Button variant="secondary" size="sm" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}

