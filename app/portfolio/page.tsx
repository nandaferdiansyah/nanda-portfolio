import type { Metadata } from "next";

import PageHeading from "@/common/components/elements/PageHeading";
import Portfolio from "@/modules/portfolio/components/Portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Design portfolio of Nanda Ferdiansyah — 3D models, renders, and technical drawings grouped by the tool used.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeading
        title="Portfolio"
        description="Design work grouped by the tool it was built in. Click any image to view it larger."
      />
      <Portfolio />
    </>
  );
}
