export interface ClientProps {
  name: string;
  /** What the work was — one short line. */
  note?: string;
  logo?: string;
  href?: string;
}

/** Organisations I have delivered work for. Add new entries here. */
export const CLIENTS: ClientProps[] = [
  {
    name: "BINUS Center Bintaro",
    note: "Design engineering training program",
    href: "https://binuscenter.com/",
  },
];
