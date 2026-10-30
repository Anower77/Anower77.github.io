"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROJECTS } from "@/data/portfolioData";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterTabs = [
    { label: "All Projects", value: "all" },
    { label: "Backend Core", value: "backend" },
    { label: "Distributed Systems", value: "distributed" },
    { label: "AI & Signal Research", value: "research" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 lg:py-28 border-b border-surface-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="05 // Engineering Portfolio"
            title="Featured Projects & Architectures"
            description="Production backends, multi-service architectures, and scientific computing inquiries built with practical engineering rigor."
            className="mb-0"
          />

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 self-start md:self-end bg-surface-subtle p-1 rounded-xl border border-surface-border">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activeFilter === tab.value
                    ? "bg-surface text-text-primary border border-surface-border shadow-sm font-semibold"
                    : "text-text-muted hover:text-text-secondary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

