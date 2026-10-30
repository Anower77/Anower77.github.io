"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import {
  Code2,
  Server,
  Database,
  Layers,
  Cloud,
  Terminal,
  Network,
  Cpu,
  Check,
} from "lucide-react";

export function SkillsSection() {
  const [filter, setFilter] = useState<string>("all");

  const getIcon = (name: string) => {
    switch (name) {
      case "Code2":
        return <Code2 className="w-5 h-5 text-accent" />;
      case "Server":
        return <Server className="w-5 h-5 text-accent" />;
      case "Database":
        return <Database className="w-5 h-5 text-accent" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-accent" />;
      case "Cloud":
        return <Cloud className="w-5 h-5 text-accent" />;
      case "Terminal":
        return <Terminal className="w-5 h-5 text-accent" />;
      case "Network":
        return <Network className="w-5 h-5 text-accent" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-accent" />;
      default:
        return <Server className="w-5 h-5 text-accent" />;
    }
  };

  const filteredCategories =
    filter === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.name.toLowerCase() === filter.toLowerCase());

  return (
    <section id="skills" className="py-20 lg:py-28 border-b border-surface-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <SectionHeading
            eyebrow="02 // Technical Skills"
            title="Categorized Technical Stack"
            description="Organized by architectural domain. Honest capabilities backed by real implementation experience without arbitrary percentage meters."
            className="mb-0"
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 self-start md:self-end">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1 text-xs font-mono rounded-lg transition-colors border ${
                filter === "all"
                  ? "bg-accent/15 text-accent border-accent/40 font-semibold"
                  : "bg-surface-subtle text-text-muted border-surface-border hover:text-text-primary"
              }`}
            >
              All Categories ({SKILL_CATEGORIES.length})
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setFilter(cat.name)}
                className={`px-2.5 py-1 text-xs font-mono rounded-lg transition-colors border ${
                  filter.toLowerCase() === cat.name.toLowerCase()
                    ? "bg-accent/15 text-accent border-accent/40 font-semibold"
                    : "bg-surface-subtle text-text-muted border-surface-border hover:text-text-primary"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
          {filteredCategories.map((category) => (
            <div
              key={category.name}
              className="p-5 rounded-xl bg-surface-subtle border border-surface-border hover:border-neutral-700 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-surface border border-surface-border group-hover:border-accent/40 transition-colors">
                    {getIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors">
                      {category.name}
                    </h3>
                    <span className="font-mono text-[10px] text-text-muted">
                      {category.skills.length} skills
                    </span>
                  </div>
                </div>

                <p className="text-xs text-text-muted mb-4 leading-relaxed min-h-[32px]">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded bg-surface border border-surface-border text-xs font-mono text-text-secondary group-hover:text-text-primary transition-colors flex items-center gap-1"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent/70" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-surface-border/40 flex items-center justify-between text-[10px] font-mono text-text-muted">
                <span>Verified in code</span>
                <Check className="w-3.5 h-3.5 text-accent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

