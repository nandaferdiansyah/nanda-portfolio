import type { Metadata } from "next";

import PageHeading from "@/common/components/elements/PageHeading";
import Creations from "@/modules/creations/components/Creations";

export const metadata: Metadata = {
  title: "Creations",
  description:
    "Design engineering creations shared on Instagram by Nanda Ferdiansyah (E-Tech Studio).",
};

export default function CreationsPage() {
  return (
    <>
      <PageHeading
        title="Creations"
        description="Renders, prototypes, and design engineering work I post on Instagram."
      />
      <Creations />
    </>
  );
}
