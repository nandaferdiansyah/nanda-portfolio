import type { AchievementProps } from "../types";

export const ACHIEVEMENTS: AchievementProps[] = [
  {
    title: "Patent — Security System on LPG Storage Tank",
    issuer: "Directorate General of Intellectual Property (DJKI), Indonesia",
    date: "2020",
    credential_id: "S00202004467",
    description:
      "Filed patent application for a security and monitoring system on LPG storage tanks, derived from the inspection monitoring model developed during the Pertamina Gas internship and final thesis.",
    category: "Patent",
  },
  {
    title: "Student Mobility Program — Mechanical Engineering",
    issuer: "Universiti Teknikal Malaysia Melaka (UTeM)",
    date: "2019",
    description:
      "Selected for an international student mobility program in the Mechanical Engineering study program, covering design and manufacturing practice.",
    category: "Program",
  },
  {
    title: "SolidWorks Training Certification",
    issuer: "Training Certification",
    date: "—",
    description:
      "Professional training on parametric 3D modelling, assemblies, and technical drawing with SolidWorks.",
    category: "Certification",
  },
  {
    title: "Business Process Management",
    issuer: "Training Certification",
    date: "—",
    description:
      "Training on business process modelling, analysis, and improvement methodology (BPMN, process governance).",
    category: "Certification",
  },
  {
    title: "IT Project Management",
    issuer: "Training Certification",
    date: "—",
    description:
      "Training on planning, executing, and controlling IT projects — scope, schedule, risk, and stakeholder management.",
    category: "Certification",
  },
];

export const ACHIEVEMENT_CATEGORIES = [
  "All",
  "Patent",
  "Certification",
  "Program",
  "Award",
] as const;
