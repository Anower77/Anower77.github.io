import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external,
  className = "",
  icon,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 disabled:opacity-50 disabled:cursor-not-allowed select-none group";

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2.5 text-sm gap-2",
    lg: "px-5 py-3 text-base gap-2.5",
  };

  const variantClasses = {
    primary:
      "bg-text-primary text-background hover:bg-neutral-200 active:bg-neutral-300 font-semibold shadow-sm",
    secondary:
      "bg-surface-subtle text-text-primary border border-surface-border hover:bg-surface-muted hover:border-neutral-600 active:bg-neutral-800",
    outline:
      "bg-transparent text-text-primary border border-surface-border hover:border-accent hover:text-accent active:bg-accent/10",
    ghost:
      "bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-subtle",
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {icon && <span className="shrink-0">{icon}</span>}
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {icon && <span className="shrink-0">{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  );
}
