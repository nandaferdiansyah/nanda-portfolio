import Link from "next/link";
import { BsArrowRightShort as ArrowIcon } from "react-icons/bs";

import Breakline from "@/common/components/elements/Breakline";
import Card from "@/common/components/elements/Card";
import { CAREERS } from "@/common/constants/careers";
import { PROFILE } from "@/common/constants/profile";
import { formatMonthYear } from "@/common/helpers";

const About = () => {
  return (
    <>
      <section className="space-y-4 leading-7 text-neutral-600 dark:text-neutral-300">
        {PROFILE.bio.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <p>
          Most of my week splits between two worlds: mapping and reengineering
          business processes for the Ministry of ATR/BPN, and designing
          production-ready parts as a 3D design engineer. Both come back to the
          same Industrial Engineering habit — look at the whole system, find
          where it loses time or safety margin, then redesign that part.
        </p>
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
