import type { Metadata } from "next";

import PageHeading from "@/common/components/elements/PageHeading";
import Projects from "@/modules/projects/components/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Design engineering and business process projects by Nanda Ferdiansyah.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeading
        title="Projects"
        description="Work I have designed, analyzed, or engineered — from CAD and simulation to process reengineering."
      />
      <Projects />
    </>
  );
}
