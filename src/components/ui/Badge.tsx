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
      "bg-blue-50 text-blue-700 border-blue-200 dark:bg-accent/10 dark:text-accent dark:border-accent/25 hover:border-accent/40",
    emerald:
      "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/25",
    amber:
      "bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/25",
    outline: "border border-surface-border text-text-secondary bg-transparent",
    mono: "font-mono text-[11px] bg-surface-subtle text-text-secondary border border-surface-border tracking-tight",
  };

  return (
    <span className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}

