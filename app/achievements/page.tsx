import type { Metadata } from "next";

import PageHeading from "@/common/components/elements/PageHeading";
import Achievements from "@/modules/achievements/components/Achievements";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "Patent, certifications, and programs earned by Nanda Ferdiansyah.",
};

export default function AchievementsPage() {
  return (
    <>
      <PageHeading
        title="Achievements"
        description="Patents, certifications, and programs I have completed along the way."
      />
      <Achievements />
    </>
  );
}
