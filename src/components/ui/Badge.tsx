import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "emerald" | "amber" | "outline" | "mono";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const baseClasses =
    "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full transition-colors duration-200";

  const variants = {
    default:
      "bg-surface-subtle text-text-secondary border border-surface-border",
    accent:
      "bg-accent/10 text-accent border border-accent/25 hover:border-accent/40",
    emerald:
      "bg-emerald-500/10 text-emerald-400 border border-emerald-500/25",
    amber: "bg-amber-500/10 text-amber-400 border border-amber-500/25",
    outline: "border border-surface-border text-text-secondary bg-transparent",
    mono: "font-mono text-[11px] bg-[#141418] text-[#c4c4cc] border border-[#27272a] tracking-tight",
  };

  return (
    <span className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
