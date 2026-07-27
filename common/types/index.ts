import type { ReactNode } from "react";

export interface MenuItemProps {
  title: string;
  href: string;
  icon: ReactNode;
  isShow: boolean;
  isExternal?: boolean;
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
}

export interface CareerProps {
  position: string;
  company: string;
  logo?: string;
  location: string;
  location_type: string;
  type: string;
  start_date: string;
  end_date: string;
  industry: string;
  link?: string;
  responsibilities: string[];
  lessons_learned?: string[];
  impact?: string[];
  isShow: boolean;
}

export interface EducationProps {
  school: string;
  major: string;
  logo?: string;
  location: string;
  degree: string;
  GPA?: string;
  start_year: number;
  end_year: number;
  link?: string;
  notes?: string[];
}

export type ProjectCategory =
  | "Design Engineering"
  | "Business Process"
  | "Data & Automation";

export interface ProjectProps {
  slug: string;
  title: string;
  description: string;
  image?: string;
  categories: ProjectCategory[];
  year: string;
  stacks: string[];
  link_demo?: string;
  link_repo?: string;
  is_featured: boolean;
  content: string[];
  highlights?: string[];
}

export interface AchievementProps {
  title: string;
  issuer: string;
  date: string;
  credential_id?: string;
  description?: string;
  link?: string;
  category: "Patent" | "Certification" | "Program" | "Award";
}

export interface SocialMediaProps {
  title: string;
  href: string;
  icon: ReactNode;
  isShow: boolean;
  className?: string;
}

export interface StackProps {
  name: string;
  icon?: ReactNode;
  monogram?: string;
  color: string;
  categories: SkillCategory[];
}

export type SkillCategory =
  | "Main"
  | "Business Process"
  | "Design"
  | "Coding"
  | "Statistics";
