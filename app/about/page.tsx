import type { Metadata } from "next";

import PageHeading from "@/common/components/elements/PageHeading";
import About from "@/modules/about/components/About";

export const metadata: Metadata = {
  title: "About",
  description:
    "Get to know Nanda Ferdiansyah — Industrial Engineer, 3D Design Engineer, and Business Process Analyst.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeading
        title="About"
        description="A little more about who I am and how I approach engineering problems."
      />
      <About />
    </>
  );
}
