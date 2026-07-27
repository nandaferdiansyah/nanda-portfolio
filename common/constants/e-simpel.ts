export interface ScreenshotProps {
  src: string;
  caption: string;
}

const DIR = "/images/e-simpel";

/** Ordered walkthrough: login → dashboard → process menus → studios. */
export const E_SIMPEL_SCREENSHOTS: ScreenshotProps[] = [
  {
    src: `${DIR}/login.png`,
    caption:
      "Login — one entry point for all four roles; the interface adapts to the role and work unit behind the account.",
  },
  {
    src: `${DIR}/Dashboard.png`,
    caption:
      "Monitoring dashboard — yearly tabs, totals per document type, distribution chart across work units, and Excel export.",
  },
  {
    src: `${DIR}/Probis level 0-2.png`,
    caption:
      "Process Map menu — Level 0 value chain down to Level 2 sub-processes, aligned with PermenPANRB 19/2018.",
  },
  {
    src: `${DIR}/Menu Proses Bisnis.png`,
    caption:
      "BPMN documents — proposals, drafts in progress, and published processes, each with its own status counter.",
  },
  {
    src: `${DIR}/Menu SOP.png`,
    caption:
      "SOP management — recap per work unit across draft, Ortala MR review, leadership approval, and revision.",
  },
  {
    src: `${DIR}/Studio BPMN.png`,
    caption:
      "BPMN 2.0 studio — element palette, pool/lane canvas per executor, undo/redo, and export to PDF, SVG, or .bpmn.",
  },
  {
    src: `${DIR}/studio SOP.png`,
    caption:
      "SOP studio — cover page plus the mutu baku table: activities, executors, requirements, time, and flowchart symbols.",
  },
];
