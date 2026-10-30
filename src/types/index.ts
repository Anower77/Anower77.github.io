export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "backend" | "distributed" | "research" | "fullstack";
  description: string;
  problem: string;
  solution: string;
  architectureHighlights?: string[];
  techStack: string[];
  features: string[];
  githubUrl?: string;
  demoUrl?: string;
  docsUrl?: string;
  isResearch?: boolean;
  status: "completed" | "in-progress" | "research";
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
  isCurrent?: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  year?: string;
  category: "competitive-programming" | "olympiad" | "leadership";
  description: string;
  badge?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  status?: string;
  details?: string[];
}

export interface SkillCategory {
  name: string;
  iconName: string;
  description: string;
  skills: string[];
}

export interface EngineeringNote {
  id: string;
  title: string;
  summary: string;
  readTime: string;
  date: string;
  tags: string[];
  externalUrl?: string;
  featured?: boolean;
  contentMarkdown?: string;
}

export interface SystemArchitectureNode {
  id: string;
  name: string;
  category: string;
  role: string;
  technologies: string[];
  responsibilities: string[];
  failureModes: string[];
  mitigations: string[];
  latencyTypical: string;
}

