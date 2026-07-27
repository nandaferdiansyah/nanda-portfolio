import { IoBriefcaseOutline as CareerIcon } from "react-icons/io5";
import { PiStudent as EducationIcon } from "react-icons/pi";

import Breakline from "@/common/components/elements/Breakline";
import Card from "@/common/components/elements/Card";
import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import { CAREERS } from "@/common/constants/careers";
import { EDUCATION } from "@/common/constants/education";

import CareerCard from "./CareerCard";

const Career = () => {
  const careers = CAREERS.filter((career) => career.isShow);

  return (
    <>
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
            <CareerCard key={`${career.company}-${career.position}`} career={career} />
          ))}
        </div>
      </section>

      <Breakline className="my-8" />

      <section className="space-y-6">
        <div className="space-y-2">
          <SectionHeading title="Education" icon={<EducationIcon />} />
          <SectionSubHeading>
            <p>Where the engineering fundamentals come from.</p>
          </SectionSubHeading>
        </div>

        <div className="grid gap-4">
          {EDUCATION.map((education) => (
            <Card key={education.school} className="p-5">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="font-medium text-neutral-800 dark:text-neutral-200">
                  {education.school}
                </h3>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">
                  {education.start_year} — {education.end_year}
                </span>
              </div>

              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                {education.degree} · {education.major}
                {education.GPA ? ` · GPA ${education.GPA}` : ""}
              </p>

              <div className="mt-3 flex flex-wrap gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                <span className="rounded-full border border-neutral-300 px-2.5 py-1 dark:border-neutral-700">
                  {education.location}
                </span>
              </div>

              {education.notes && (
                <ul className="mt-4 ml-4 list-disc space-y-1.5 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                  {education.notes.map((note, index) => (
                    <li key={index}>{note}</li>
                  ))}
                </ul>
              )}
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Career;
