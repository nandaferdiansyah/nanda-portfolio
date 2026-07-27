import type { Metadata } from "next";

import PageHeading from "@/common/components/elements/PageHeading";
import Contact from "@/modules/contact/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Nanda Ferdiansyah.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeading
        title="Contact"
        description="Have a project, a process to fix, or a part to design? Let's talk."
      />
      <Contact />
    </>
  );
}
