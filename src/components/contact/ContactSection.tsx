"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  Mail,
  Linkedin,
  Github,
  Copy,
  Check,
  Send,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const email = PERSONAL_INFO.links.email;

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject || "Backend Engineering / System Discussion"
  )}&body=${encodeURIComponent(message)}`;

  return (
    <section id="contact" className="py-20 lg:py-28 border-b border-surface-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="10 // Let's Connect"
          title="Have an Interesting Engineering Problem?"
          description="I'm always interested in discussing backend engineering, system design, research, and interesting technical challenges."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-10">
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card with Copy */}
            <div className="p-6 rounded-2xl bg-surface-subtle border border-surface-border space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
                  Direct Inbox
                </span>
                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded-md hover:bg-surface text-text-muted hover:text-text-primary transition-colors flex items-center gap-1 text-xs font-mono"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-accent" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="font-mono text-sm sm:text-base text-text-primary break-all select-all font-semibold">
                {email}
              </div>

              <p className="text-xs text-text-secondary leading-relaxed">
                Fastest response for engineering inquiries, collaborative research, or architecture consultations.
              </p>
            </div>

            {/* Professional Networks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={PERSONAL_INFO.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-surface-subtle border border-surface-border hover:border-neutral-600 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-surface text-accent">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-text-primary block">
                      LinkedIn
                    </span>
                    <span className="text-[11px] text-text-muted font-mono block">
                      Connect &amp; Message
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-text-muted group-hover:text-text-primary" />
              </a>

              <a
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-surface-subtle border border-surface-border hover:border-neutral-600 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-surface text-text-primary">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-text-primary block">
                      GitHub
                    </span>
                    <span className="text-[11px] text-text-muted font-mono block">
                      Code Repositories
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-text-muted group-hover:text-text-primary" />
              </a>
            </div>

            <div className="p-4 rounded-xl bg-surface-subtle border border-surface-border text-xs text-text-muted font-mono">
              <span className="text-accent font-semibold block mb-0.5">Note on Form Integrity:</span>
              Messages launch your verified email client directly to guarantee authentic delivery without intermediate third-party drop-offs.
            </div>
          </div>

          {/* Right Column: Direct Dispatcher Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-surface-subtle border border-surface-border">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-surface-border">
              <MessageSquare className="w-4 h-4 text-accent" />
              <h3 className="text-sm font-mono uppercase tracking-wider font-semibold text-text-primary">
                Direct Message Dispatcher
              </h3>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = mailtoLink;
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-mono text-text-muted mb-1.5">
                  Subject / Engineering Topic
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Distributed System Architecture / Job Inquiry"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-surface border border-surface-border text-xs sm:text-sm text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-text-muted mb-1.5">
                  Message Details
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write a brief overview of your problem, project, or role..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-surface border border-surface-border text-xs sm:text-sm text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:border-accent resize-none"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <span className="text-[11px] font-mono text-text-muted">
                  Recipient: {email}
                </span>

                <Button
                  variant="primary"
                  size="md"
                  type="submit"
                  icon={<Send className="w-3.5 h-3.5" />}
                >
                  Send via Mail Client
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

