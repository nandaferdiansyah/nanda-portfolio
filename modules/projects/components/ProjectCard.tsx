import Link from "next/link";
import { BsArrowRightShort as ArrowIcon } from "react-icons/bs";

import Card from "@/common/components/elements/Card";
import StackIcon from "@/common/components/elements/StackIcon";
import { getStacksByName } from "@/common/constants/stacks";
import type { ProjectProps } from "@/common/types";

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  const stacks = getStacksByName(project.stacks);

  return (
    <Link href={`/projects/${project.slug}`} className="group">
      <Card className="flex h-full flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {project.categories.map((category) => (
              <span
                key={category}
                className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary dark:text-primary-300"
              >
                {category}
              </span>
            ))}
          </div>
          <span className="whitespace-nowrap text-xs text-neutral-500">
            {project.year}
          </span>
        </div>

        <h3 className="font-medium text-neutral-800 group-hover:text-primary dark:text-neutral-200 dark:group-hover:text-primary-300">
          {project.title}
        </h3>

        <p className="grow text-sm leading-6 text-neutral-600 dark:text-neutral-400">
          {project.description}
        </p>

        <div className="flex items-center justify-between gap-3 pt-1">
          <div className="flex flex-wrap gap-2">
            {stacks.map((stack) => (
              <div key={stack.name} className="scale-75 origin-left">
                <StackIcon stack={stack} showLabel={false} />
              </div>
            ))}
          </div>
          <ArrowIcon
            size={22}
            className="shrink-0 text-neutral-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary"
          />
        </div>
      </Card>
    </Link>
  );
};

export default ProjectCard;
