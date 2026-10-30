"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Github,
  Linkedin,
  FileText,
  Terminal,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Button } from "@/components/ui/Button";

interface NavbarProps {
  onOpenResume: () => void;
}

export function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.substring(1));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? "bg-[#09090b]/85 backdrop-blur-md border-b border-[#27272a]/70 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <Link
            href="#"
            className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-surface-subtle border border-surface-border flex items-center justify-center group-hover:border-accent transition-colors duration-200">
              <Terminal className="w-4 h-4 text-accent" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm text-text-primary group-hover:text-white tracking-tight transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="font-mono text-[10px] text-text-muted tracking-tight">
                Backend Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#111114]/80 p-1.5 rounded-full border border-surface-border/80">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-150 ${
                    isActive
                      ? "bg-surface-subtle text-text-primary shadow-sm border border-surface-border"
                      : "text-text-secondary hover:text-text-primary hover:bg-surface-subtle/50"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={PERSONAL_INFO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface-subtle rounded-lg border border-transparent hover:border-surface-border transition-all duration-150"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface-subtle rounded-lg border border-transparent hover:border-surface-border transition-all duration-150"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <Button
              variant="secondary"
              size="sm"
              onClick={onOpenResume}
              className="border-surface-border text-xs gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-accent" />
              Resume
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-2 text-xs font-medium text-accent bg-surface-subtle border border-surface-border rounded-lg"
              aria-label="View Resume"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface-subtle rounded-lg border border-surface-border focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#09090b]/95 backdrop-blur-xl border-b border-surface-border px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-4 border-b border-surface-border/50">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-medium text-text-secondary hover:text-text-primary hover:bg-surface-subtle rounded-md"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded bg-surface-subtle text-text-secondary"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded bg-surface-subtle text-text-secondary"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
            >
              View Resume
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
