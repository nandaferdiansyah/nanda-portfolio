import type { ScreenshotProps } from "./e-simpel";

const DIR = "/images/rbi-lpg";

/** Ordered walkthrough: dashboard → asset data → inspection → assessment → tools. */
export const RBI_LPG_SCREENSHOTS: ScreenshotProps[] = [
  {
    src: `${DIR}/01-dashboard.png`,
    caption:
      "Dashboard — asset summary with the latest assessment per tank and a 5×5 risk matrix (POF 1–5 × COF A–E), colour-coded from low to high risk.",
  },
  {
    src: `${DIR}/02-data-tangki.png`,
    caption:
      "LPG storage tank registry — design, construction, process, and protection-system data; SHELL and HEAD sections are generated automatically.",
  },
  {
    src: `${DIR}/03-data-perusahaan.png`,
    caption:
      "Company / SPPBE registry — including the API 581 Annex 2.A management-system score (0–1000) that drives the F_MS factor in the POF.",
  },
  {
    src: `${DIR}/04-tangki-detail.png`,
    caption:
      "Tank detail — schematic drawing, ASME VIII Div.1 minimum thickness, section list, and the full inspection and assessment history.",
  },
  {
    src: `${DIR}/05-inspeksi-ketebalan.png`,
    caption:
      "UTM thickness input — readings per section, angular position, and point; the representative thickness t_rd is derived automatically.",
  },
  {
    src: `${DIR}/06-asesmen-daftar.png`,
    caption:
      "Assessment list — every RBI run stores a snapshot of its inputs, so older results stay reproducible even after reference tables change.",
  },
  {
    src: `${DIR}/07-asesmen-hasil.png`,
    caption:
      "Assessment result — POF, COF Level 1, the 5×5 risk-matrix cell, and the API 510 inspection schedule, with CSV/JSON export.",
  },
  {
    src: `${DIR}/08-simulasi.png`,
    caption:
      "Simulation sandbox — every input editable with instant recalculation by the same engine, without writing anything to the database.",
  },
  {
    src: `${DIR}/09-referensi.png`,
    caption:
      "API 581 reference tables — the constants behind the engine, stored in the database and editable without touching code.",
  },
];
