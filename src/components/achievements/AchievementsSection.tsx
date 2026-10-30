"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ACHIEVEMENTS } from "@/data/portfolioData";
import { Award, Trophy, Compass, Star, Medal } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function AchievementsSection() {
  const getBadgeIcon = (category: string) => {
    switch (category) {
      case "competitive-programming":
        return <Trophy className="w-5 h-5 text-amber-400" />;
      case "olympiad":
        return <Medal className="w-5 h-5 text-accent" />;
      case "leadership":
        return <Star className="w-5 h-5 text-violet-400" />;
      default:
        return <Award className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <section id="achievements" className="py-20 lg:py-28 border-b border-surface-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="07 // Honors & Competitions"
          title="Competitive Milestones & Honors"
          description="Algorithmic problem-solving trials, international mathematics benchmarks, and science olympiad recognitions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {ACHIEVEMENTS.map((item, index) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-surface-subtle border border-surface-border hover:border-neutral-700 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-surface border border-surface-border group-hover:border-accent/40 transition-colors">
                    {getBadgeIcon(item.category)}
                  </div>
                  {item.badge && (
                    <Badge variant="mono" className="text-[10px]">
                      {item.badge}
                    </Badge>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-text-primary group-hover:text-accent transition-colors">
                  {item.title}
                </h3>

                <p className="font-mono text-xs text-text-muted mt-1">
                  {item.organization} {item.year ? `• ${item.year}` : ""}
                </p>

                <p className="mt-4 text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-surface-border/50 flex items-center justify-between text-[10px] font-mono text-text-muted">
                <span>Award Track 0{index + 1}</span>
                <span className="text-accent uppercase">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

