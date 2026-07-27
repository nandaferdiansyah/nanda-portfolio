export interface ClientProps {
  name: string;
  /** What the work was — one short line. */
  note?: string;
  logo?: string;
  href?: string;
  /** Renders as a summary tile instead of a named client. */
  isSummary?: boolean;
}

/**
 * Organisations I have delivered work for. Logos live in
 * public/images/clients — drop a file there and point `logo` at it;
 * entries without one fall back to an initials badge.
 */
export const CLIENTS: ClientProps[] = [
  {
    name: "BINUS Center Bintaro",
    note: "Design engineering training program",
    logo: "/images/clients/binus.png",
    href: "https://binuscenter.com/",
  },
  {
    name: "Kementerian ATR/BPN",
    note: "Business process architecture & the SIMPEL system",
    logo: "/images/clients/atrbpn.png",
    href: "https://www.atrbpn.go.id/",
  },
  {
    name: "PT Pertamina Gas",
    note: "LPG storage tank inspection monitoring & RBI analysis",
    logo: "/images/clients/pertagas.png",
  },
  {
    name: "PLN",
    logo: "/images/clients/pln.png",
    href: "https://www.pln.co.id/",
  },
  {
    name: "Beaux Button Indonesia",
    note: "Product design & manufacturing workflow",
    logo: "/images/clients/beauxbutton.png",
  },
  {
    name: "PT Hijau Lestari Perkasa",
  },
  {
    name: "PT Duta Tirta Teknologi Indonesia",
  },
  {
    name: "and 100+ other clients",
    note: "Design engineering and process documentation work",
    isSummary: true,
  },
];
