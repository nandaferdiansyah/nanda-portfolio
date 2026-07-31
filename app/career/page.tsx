import type { Metadata } from "next";

import PageHeading from "@/common/components/elements/PageHeading";
import Career from "@/modules/career/components/Career";

export const metadata: Metadata = {
  title: "Career",
  description:
    "Work experience of Nanda Ferdiansyah — business process, design engineering, and training roles.",
};

export default function CareerPage() {
  return (
    <>
      <PageHeading
        title="Career"
        description="A timeline of the roles I have taken."
      />
      <Career />
    </>
  );
}
