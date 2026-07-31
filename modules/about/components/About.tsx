import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort as ArrowIcon } from "react-icons/bs";

import Breakline from "@/common/components/elements/Breakline";
import Card from "@/common/components/elements/Card";
import { CAREERS } from "@/common/constants/careers";
import { EDUCATION } from "@/common/constants/education";
import { PROFILE } from "@/common/constants/profile";
import { formatMonthYear } from "@/common/helpers";

const About = () => {
  return (
    <>
      {/* Photo sits above the text on phones, beside it from md upwards. */}
      <section className="flex flex-col-reverse gap-6 md:flex-row md:items-start md:gap-8">
        <div className="space-y-4 leading-7 text-neutral-600 dark:text-neutral-300">
          {PROFILE.about_bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <p>
            Open to {PROFILE.open_to}. Reach me at{" "}
            <a
              href={`mailto:${PROFILE.email}`}
              className="text-primary transition-colors duration-300 hover:text-primary-700"
            >
              {PROFILE.email}
            </a>
            .
          </p>
        </div>

        <div className="mx-auto w-48 shrink-0 sm:w-56 md:mx-0 md:w-52 lg:w-60">
          <Image
            src={PROFILE.photo}
            alt={PROFILE.name}
            width={800}
            height={1200}
            sizes="(max-width: 768px) 224px, 240px"
            className="h-auto w-full rounded-xl border border-neutral-300 object-cover shadow-sm dark:border-neutral-700"
            priority
          />
        </div>
      </section>

      <Breakline className="my-8" />

      <section className="space-y-4">
        <h2 className="text-xl font-medium text-neutral-800 dark:text-neutral-300">
          Education
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {EDUCATION.map((education) => (
            <Card key={education.school} className="p-5">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="font-medium text-neutral-800 dark:text-neutral-200">
                  {education.school}
                </h3>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">
                  {education.start_year === education.end_year
                    ? education.start_year
                    : `${education.start_year} — ${education.end_year}`}
                </span>
              </div>

              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                {education.degree} · {education.major}
                {education.GPA ? ` · GPA ${education.GPA}` : ""}
              </p>

              <p className="mt-2 text-xs text-neutral-500">
                {education.location}
              </p>

              {education.notes && (
                <ul className="mt-3 ml-4 list-disc space-y-1.5 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                  {education.notes.map((note, index) => (
                    <li key={index}>{note}</li>
                  ))}
                </ul>
              )}
            </Card>
          ))}
        </div>
      </section>

      <Breakline className="my-8" />

      <section className="space-y-4">
        <h2 className="text-xl font-medium text-neutral-800 dark:text-neutral-300">
          Currently
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {CAREERS.filter((career) => career.end_date === "Present").map(
            (career) => (
              <Card key={career.company} className="p-5">
                <h3 className="font-medium text-neutral-800 dark:text-neutral-200">
                  {career.position}
                </h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  {career.company}
                </p>
                <p className="mt-2 text-xs text-neutral-500">
                  Since {formatMonthYear(career.start_date)} ·{" "}
                  {career.location_type}
                </p>
              </Card>
            ),
          )}
        </div>
        <Link
          href="/career"
          className="inline-flex items-center gap-1 text-sm text-primary transition-all duration-300 hover:gap-2"
        >
          See full career timeline <ArrowIcon size={18} />
        </Link>
      </section>

      <Breakline className="my-8" />

      <section className="space-y-4">
        <h2 className="text-xl font-medium text-neutral-800 dark:text-neutral-300">
          How I work
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {PROFILE.services.map((service) => (
            <Card key={service.title} className="p-5">
              <h3 className="mb-2 font-medium text-neutral-800 dark:text-neutral-200">
                {service.title}
              </h3>
              <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
