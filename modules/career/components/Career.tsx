import { IoBriefcaseOutline as CareerIcon } from "react-icons/io5";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import { CAREERS } from "@/common/constants/careers";

import CareerCard from "./CareerCard";

const Career = () => {
  const careers = CAREERS.filter((career) => career.isShow);

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title="Work Experience" icon={<CareerIcon />} />
        <SectionSubHeading>
          <p>
            Roles across government process design, product engineering, and
            training.
          </p>
        </SectionSubHeading>
      </div>

      <div className="grid gap-4">
        {careers.map((career) => (
          <CareerCard
            key={`${career.company}-${career.position}`}
            career={career}
          />
        ))}
      </div>
    </section>
  );
};

export default Career;
