import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 ${
        align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"
      } ${className}`}
    >
      {eyebrow && (
        <div className="flex items-center gap-2 mb-3">
          <span className="h-px w-4 bg-accent inline-block" />
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm sm:text-base text-text-secondary leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

