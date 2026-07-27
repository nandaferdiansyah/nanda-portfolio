import {
  SiAnsys,
  SiAutocad,
  SiAutodesk,
  SiCss,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiR,
  SiSketchup,
  SiTypescript,
} from "react-icons/si";

import type { StackProps } from "../types";

const iconSize = 20;

/**
 * Icon sources, in order of preference: `image` (artwork under /public),
 * `icon` (Simple Icons glyph), then `monogram` for brands with neither.
 */
export const STACKS: StackProps[] = [
  {
    name: "SolidWorks",
    image: "/images/stacks/solidworks.png",
    color: "bg-[#e30021]",
    categories: ["Main", "Design"],
  },
  {
    name: "Fusion 360",
    monogram: "F360",
    color: "bg-[#f37021]",
    categories: ["Main", "Design"],
  },
  {
    name: "Autodesk Inventor",
    icon: <SiAutodesk size={iconSize} />,
    color: "bg-[#0696d7]",
    categories: ["Main", "Design"],
  },
  {
    name: "Ansys",
    icon: <SiAnsys size={iconSize} />,
    color: "bg-[#ffb71b]",
    categories: ["Main", "Design"],
  },
  {
    name: "Excel",
    monogram: "XL",
    color: "bg-[#217346]",
    categories: ["Main"],
  },
  {
    name: "Power BI",
    monogram: "BI",
    color: "bg-[#f2c811]",
    categories: ["Main", "Statistics"],
  },
  {
    name: "BPMN",
    monogram: "BPMN",
    color: "bg-[#2f7fe8]",
    categories: ["Business Process"],
  },
  {
    name: "Six Sigma",
    monogram: "6σ",
    color: "bg-[#0f766e]",
    categories: ["Business Process"],
  },
  {
    name: "Lean",
    monogram: "LEAN",
    color: "bg-[#166534]",
    categories: ["Business Process"],
  },
  {
    name: "Total Productive Maintenance",
    monogram: "TPM",
    color: "bg-[#7c3aed]",
    categories: ["Business Process"],
  },
  {
    name: "Kanban",
    monogram: "KBN",
    color: "bg-[#0369a1]",
    categories: ["Business Process"],
  },
  {
    name: "Kaizen",
    monogram: "KZN",
    color: "bg-[#b91c1c]",
    categories: ["Business Process"],
  },
  {
    name: "Value Stream Mapping",
    monogram: "VSM",
    color: "bg-[#c2410c]",
    categories: ["Business Process"],
  },
  {
    name: "AutoCAD",
    icon: <SiAutocad size={iconSize} />,
    color: "bg-[#e51050]",
    categories: ["Design"],
  },
  {
    name: "SketchUp",
    icon: <SiSketchup size={iconSize} />,
    color: "bg-[#005f9e]",
    categories: ["Design"],
  },
  {
    name: "Blender",
    image: "/images/stacks/blender.png",
    color: "bg-[#ea7600]",
    categories: ["Design"],
  },
  {
    name: "Python",
    image: "/images/stacks/python.png",
    color: "bg-[#3776ab]",
    categories: ["Coding"],
  },
  {
    name: "R",
    icon: <SiR size={iconSize} />,
    color: "bg-[#276dc3]",
    categories: ["Coding"],
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={iconSize} />,
    color: "bg-[#3178c6]",
    categories: ["Coding"],
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={iconSize} />,
    color: "bg-neutral-900",
    categories: ["Coding"],
  },
  {
    name: "HTML",
    icon: <SiHtml5 size={iconSize} />,
    color: "bg-[#e34f26]",
    categories: ["Coding"],
  },
  {
    name: "CSS",
    icon: <SiCss size={iconSize} />,
    color: "bg-[#663399]",
    categories: ["Coding"],
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={iconSize} />,
    color: "bg-[#f7df1e]",
    categories: ["Coding"],
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs size={iconSize} />,
    color: "bg-[#5fa04e]",
    categories: ["Coding"],
  },
  {
    name: "PHP",
    icon: <SiPhp size={iconSize} />,
    color: "bg-[#777bb4]",
    categories: ["Coding"],
  },
  {
    name: "Prisma",
    icon: <SiPrisma size={iconSize} />,
    color: "bg-[#2d3748]",
    categories: ["Coding"],
  },
  {
    name: "Laravel",
    icon: <SiLaravel size={iconSize} />,
    color: "bg-[#ff2d20]",
    categories: ["Coding"],
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size={iconSize} />,
    color: "bg-[#4169e1]",
    categories: ["Coding"],
  },
  {
    name: "MySQL",
    icon: <SiMysql size={iconSize} />,
    color: "bg-[#00758f]",
    categories: ["Coding"],
  },
  {
    name: "SPSS",
    monogram: "SP",
    color: "bg-[#c8102e]",
    categories: ["Statistics"],
  },
  {
    name: "Matlab",
    image: "/images/stacks/matlab.png",
    color: "bg-[#0076a8]",
    categories: ["Statistics"],
  },
  {
    name: "Tableau",
    image: "/images/stacks/tableau.png",
    color: "bg-[#1f77b4]",
    categories: ["Statistics"],
  },
];

export const SKILL_CATEGORIES = [
  "All",
  "Main",
  "Business Process",
  "Design",
  "Coding",
  "Statistics",
] as const;

export const getStacksByName = (names: string[]) =>
  names
    .map((name) => STACKS.find((stack) => stack.name === name))
    .filter((stack): stack is StackProps => Boolean(stack));
