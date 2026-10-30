"use client";

import React from "react";
import Link from "next/link";
import { Terminal, Github, Linkedin, ArrowUp } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Architecture", href: "#architecture" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Research", href: "#research" },
    { name: "Achievements", href: "#achievements" },
    { name: "Notes", href: "#notes" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#070709] border-t border-surface-border text-text-secondary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-surface-border/50">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-surface border border-surface-border flex items-center justify-center">
                <Terminal className="w-3.5 h-3.5 text-accent" />
              </div>
              <span className="font-bold text-base text-text-primary">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs font-mono text-text-muted">
              {PERSONAL_INFO.title} • {PERSONAL_INFO.location}
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-surface border border-surface-border hover:border-neutral-600 text-text-secondary hover:text-text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-surface border border-surface-border hover:border-neutral-600 text-text-secondary hover:text-text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 text-accent" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-surface border border-surface-border hover:border-neutral-600 text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1.5 text-xs font-mono ml-2"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>
        </div>

        {/* Navigation Quick Links */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-text-muted hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Bottom Tier */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-muted pt-4 border-t border-surface-border/30">
          <div>
            &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="text-text-secondary">
            Designed and built with curiosity and engineering.
          </div>
        </div>
      </div>
    </footer>
  );
}

