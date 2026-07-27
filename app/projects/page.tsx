import type { Metadata } from "next";

import Breakline from "@/common/components/elements/Breakline";
import PageHeading from "@/common/components/elements/PageHeading";
import Clients from "@/modules/projects/components/Clients";
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

      <Breakline className="my-8" />

      <Clients />
    </>
  );
}
