import type { ProjectProps } from "../types";

export const PROJECTS: ProjectProps[] = [
  {
    slug: "simpel-ketatalaksanaan-system",
    title: "SIMPEL — Procedure & Service Management System",
    description:
      "Web system for Biro Ortala MR of the Ministry of ATR/BPN that manages the whole ketatalaksanaan document chain — Process Map, BPMN, SOP, and Service Standards — in one place.",
    categories: ["Business Process", "Data & Automation"],
    year: "2025 — 2026",
    stacks: ["BPMN", "Next.js", "Node.js", "PostgreSQL", "JavaScript"],
    link_demo: "https://tlrb.ortalamr.id/e-sop-atrbpn/",
    link_repo: "https://github.com/indras1477/tatalaksana-atrbpn",
    is_featured: true,
    content: [
      "SIMPEL (Sistem Informasi Manajemen Prosedur dan Pelayanan) grew out of the process architecture work: once every process was mapped, the ministry needed a single system to draft, approve, and publish the documents that come from it.",
      "The system runs on a three-tier architecture — a Next.js interface, an Express API that owns every security rule (JWT sessions, role-based access, audit logging), and PostgreSQL as the single source of truth across 17 tables. A BPMN 2.0 engine powers the diagram studios, while PDF and Excel export are generated server-side.",
      "The data model mirrors how the ministry actually works: work units are hierarchical (Level 1 → 3), the Process Map is self-referencing so a Level 0 value chain can spawn Level 1 and Level 2 maps, and a Level 2 activity turns directly into a Level 3 BPMN proposal. Published documents are written into a registry idempotently, so the monitoring dashboard never double-counts.",
      "Every document travels the same governed path — draft → submitted → reviewed → signed cover → ministerial determination → published — and each transition is written to the audit trail, so any document can be traced back to who changed it and when.",
    ],
    highlights: [
      "Four role levels (superadmin, admin, user, viewer) with menus and actions resolved from the role.",
      "Tiered Process Map studio (Level 0–2) aligned with PermenPANRB 19/2018, feeding BPMN proposals.",
      "BPMN 2.0 and SOP studios with PDF (A4/F4), SVG, and Excel export.",
      "Service Standards, ministerial regulations, and technical guidance repositories in one system.",
      "Approval workflow with revision notes, signed-cover verification, and a full audit trail.",
      "Documented end to end: ERD and data dictionary, class/use-case/sequence diagrams, and DFD levels 0–1.",
    ],
  },
  {
    slug: "business-process-architecture-atr-bpn",
    title: "Business Process Architecture & Reengineering — ATR/BPN",
    description:
      "End-to-end BPMN architecture for every business process of the Ministry of ATR/BPN, and the reengineering that turned priority land services into e-services.",
    categories: ["Business Process"],
    year: "2022 — Present",
    stacks: [
      "BPMN",
      "Six Sigma",
      "Lean",
      "Value Stream Mapping",
      "Excel",
      "Power BI",
    ],
    is_featured: true,
    content: [
      "The Ministry of Agrarian Affairs and Spatial Planning runs hundreds of processes across central units, Regional Offices, and Land Offices. Before this work, those processes lived in scattered documents with no shared notation or hierarchy.",
      "I mapped the full process landscape in BPMN, decomposing each domain from level 0 (value chain) to level 3 (activity level), and designed the corresponding workflows for Regional Offices and Land Offices so that every unit works from the same documented flow.",
      "That architecture became the basis for reengineering. Risk management analysis and gap analysis of the existing land services showed where time was lost — redundant approvals, manual document handovers, repeated data entry. Together with the related technical units, several priority services were reengineered and converted into e-services, cutting the physical steps citizens go through and shortening service turnaround.",
    ],
    highlights: [
      "Complete BPMN flowcharts from level 0 to level 3 for all ministry business processes.",
      "Standardised workflow documentation for Regional Offices and Land Offices.",
      "Risk management and gap analysis across existing land services.",
      "Priority land services converted from manual delivery into e-services.",
      "A single reference architecture that downstream digitalization projects build on.",
    ],
  },
  {
    slug: "sia-spbe-process-integration",
    title: "SIA SPBE Process & Service Integration",
    description:
      "Integration of business process domains and service domains into the national Electronic Government System (SIA SPBE).",
    categories: ["Business Process"],
    year: "2023 — Present",
    stacks: ["BPMN", "Excel"],
    is_featured: true,
    content: [
      "SPBE (Sistem Pemerintahan Berbasis Elektronik) requires each institution to register its process and service architecture in a machine-readable form.",
      "I translated the ministry's BPMN architecture into the structure expected by the SIA SPBE application, integrating the business process domain with the service domain so that digital transformation planning and public service delivery reference the same source of truth.",
    ],
    highlights: [
      "Business process domain and service domain integrated in one system.",
      "Supports ministry-wide digital transformation reporting.",
    ],
  },
  {
    slug: "lpg-storage-tank-inspection-monitoring",
    title: "LPG Storage Tank Inspection Monitoring System",
    description:
      "Risk-based inspection model that detects leakage risk levels and generates inspection schedules for LPG storage tanks — filed as a patent.",
    categories: ["Design Engineering", "Data & Automation"],
    year: "2020",
    stacks: ["SolidWorks", "Ansys", "Python", "Matlab", "SPSS"],
    is_featured: true,
    content: [
      "Built during my internship at PT Pertamina Gas (SPPBE PT Kayu Lima Magelang) and developed further as my final thesis.",
      "The model analyses the remaining life of LPG storage tanks and assesses corrosion levels in pipes and pressure vessels, using risk-based inspection (RBI) per API 581 to classify leakage risk and derive an inspection schedule from that risk class.",
      "It sits between two disciplines: the pressure vessel design and flow simulation on one side, and the data work — corrosion rate calculation, risk scoring, and automated schedule generation — on the other.",
      "The resulting security system was filed as a patent application (S00202004467) in 2020.",
    ],
    highlights: [
      "RBI analysis following the API 581 standard.",
      "Design and flow simulation of pressure vessels.",
      "Corrosion and remaining-life calculation from inspection data.",
      "Inspection scheduling driven by calculated risk level.",
      "Patent application S00202004467 (2020).",
    ],
  },
  {
    slug: "product-design-manufacturing-beaux-button",
    title: "Product Design & Manufacturing Workflow",
    description:
      "2D/3D product design, usability and safety analysis, and manufacturing process design for 3D printing and CNC production.",
    categories: ["Design Engineering"],
    year: "2021 — Present",
    stacks: [
      "SolidWorks",
      "Fusion 360",
      "Autodesk Inventor",
      "AutoCAD",
      "Blender",
    ],
    is_featured: true,
    content: [
      "At Beaux Button Indonesia I own the path from concept to production-ready part: detailed 2D drawings and 3D models, usability and safety analysis, and the manufacturing process behind each product.",
      "Every design is validated with usability tests, then handed over to the 3D Printing and CNC teams with the process documentation they need — which keeps the design intent intact through production.",
    ],
    highlights: [
      "Detailed 2D/3D designs balancing function and aesthetics.",
      "Usability and safety analysis against required standards.",
      "Manufacturing process design for efficient production workflows.",
    ],
  },
  {
    slug: "design-engineering-training-program",
    title: "Design Engineering Training Program",
    description:
      "Online CAD training program with real industry cases, delivered for BINUS Center Bintaro participants pursuing certification.",
    categories: ["Design Engineering"],
    year: "2020 — 2022",
    stacks: ["SolidWorks", "Fusion 360", "Autodesk Inventor", "Blender"],
    is_featured: false,
    content: [
      "A remote training program covering SolidWorks, Inventor, Fusion 360, SketchUp, Blender, and AutoCAD, adapted to each participant's level.",
      "Instead of feature tours, participants worked through real industry cases I developed — so the certification they earned reflected practical modelling ability.",
    ],
    highlights: [
      "Curriculum across six design engineering tools.",
      "Real-world industry cases for hands-on practice.",
      "Participants guided through to certification.",
    ],
  },
];

export const PROJECT_CATEGORIES = [
  "All",
  "Design Engineering",
  "Business Process",
  "Data & Automation",
] as const;
