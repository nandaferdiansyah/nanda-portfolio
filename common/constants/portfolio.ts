import { E_SIMPEL_SCREENSHOTS, type ScreenshotProps } from "./e-simpel";

export interface PortfolioItemProps {
  src: string;
  title: string;
  /** Must match a skill name in stacks.tsx so the tool badge gets its icon. */
  tool: string;
  description: string;
  /** Web/app work opens a walkthrough popup instead of a single image. */
  screenshots?: ScreenshotProps[];
  links?: { label: string; href: string }[];
}

const DIR = "/images/portofolio desain";

export const PORTFOLIO_ITEMS: PortfolioItemProps[] = [
  {
    src: "/images/e-simpel/Dashboard.png",
    title: "SIMPEL — Ministry Procedure & Service System",
    tool: "Web System",
    description:
      "Web system for the Ministry of ATR/BPN covering Process Map, BPMN, SOP, and Service Standards — from drafting studio to ministerial determination.",
    screenshots: E_SIMPEL_SCREENSHOTS,
    links: [
      { label: "Visit SIMPEL", href: "https://tlrb.ortalamr.id/e-sop-atrbpn/" },
      {
        label: "Read the case study",
        href: "/projects/simpel-ketatalaksanaan-system",
      },
    ],
  },
  {
    src: `${DIR}/Solidworks1.jpg`,
    title: "Mining Dump Truck",
    tool: "SolidWorks",
    description:
      "Full assembly of a rigid-frame mining dump truck — chassis, dump body, cab, and running gear.",
  },
  {
    src: `${DIR}/Solidworks1.png`,
    title: "Pump & Heat Exchanger Skid",
    tool: "SolidWorks",
    description:
      "Process skid with shell-and-tube heat exchangers, centrifugal pumps, valves, and piping on a common base frame.",
  },
  {
    src: `${DIR}/Solidworks2.jpg`,
    title: "Formula Student Chassis",
    tool: "SolidWorks",
    description:
      "Tubular space-frame chassis with double wishbone suspension, coilovers, and brake assemblies.",
  },
  {
    src: `${DIR}/Solidworks3.jpg`,
    title: "Hydraulic Scissor Lift Table",
    tool: "SolidWorks",
    description:
      "Scissor lift platform driven by a hydraulic cylinder, modelled with its power pack and guide rails.",
  },
  {
    src: `${DIR}/Inventor1.jpg`,
    title: "Pressure Vessel Skid",
    tool: "Autodesk Inventor",
    description:
      "Vertical pressure vessels mounted on a skid base with pumps, manifolds, and interconnecting piping.",
  },
  {
    src: `${DIR}/Inventor2.jpg`,
    title: "Gas Storage Plant Layout",
    tool: "Autodesk Inventor",
    description:
      "Plant layout inside a warehouse — storage tanks, elevated platform, piping runs, and access stairs.",
  },
  {
    src: `${DIR}/Inventor3.jpg`,
    title: "Mixing Tank — Technical Drawing",
    tool: "Autodesk Inventor",
    description:
      "Production drawing of a jacketed mixing tank: sections, dimensions, and a numbered parts list.",
  },
  {
    src: `${DIR}/Inventor4.jpg`,
    title: "Solar Panel Stringer Machine",
    tool: "Autodesk Inventor",
    description:
      "Machine for stringing solar cells, modelled with its frame, linear guides, and drive components.",
  },
  {
    src: `${DIR}/Fusion1.jpg`,
    title: "FDM 3D Printer",
    tool: "Fusion 360",
    description:
      "Cartesian FDM 3D printer assembly — extrusion frame, motion system, hotend carriage, and heated bed.",
  },
  {
    src: `${DIR}/Sketchup1.jpg`,
    title: "Single-Storey House Exterior",
    tool: "SketchUp",
    description:
      "Exterior visualisation of a single-storey house with hipped metal roof and front planting.",
  },
  {
    src: `${DIR}/Sketchup2.jpg`,
    title: "Pool & Garden Landscape",
    tool: "SketchUp",
    description:
      "Landscape design with swimming pool, hedging, lawn, and palm planting along the perimeter.",
  },
  {
    src: `${DIR}/Sketchup3.jpg`,
    title: "Computer Lab Interior",
    tool: "SketchUp",
    description:
      "Interior layout of a computer laboratory — workstation rows, acoustic wall panels, and display wall.",
  },
  {
    src: `${DIR}/Sketchup4.jpg`,
    title: "Minimalist House Facade",
    tool: "SketchUp",
    description:
      "Street-view render of a minimalist house facade with roof tiles, front garden, and context.",
  },
  {
    src: `${DIR}/blender1.jpg`,
    title: "Stylised 3D Character",
    tool: "Blender",
    description:
      "Character model and render with soft studio lighting and simple prop shapes.",
  },
  {
    src: `${DIR}/blender2.jpg`,
    title: "Joglo House Visualisation",
    tool: "Blender",
    description:
      "Traditional Javanese joglo house modelled with its tiered roof, timber columns, and terrace.",
  },
];

/** Tabs are derived from the items, so adding an image adds its tool tab. */
export const PORTFOLIO_TOOLS = [
  "All",
  ...Array.from(new Set(PORTFOLIO_ITEMS.map((item) => item.tool))),
] as const;
