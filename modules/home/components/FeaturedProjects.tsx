import Link from "next/link";
import { BiCollection as ProjectIcon } from "react-icons/bi";
import { BsArrowRightShort as ArrowIcon } from "react-icons/bs";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import { PROJECTS } from "@/common/constants/projects";

import ProjectCard from "../../projects/components/ProjectCard";

const FeaturedProjects = () => {
  const featured = PROJECTS.filter((project) => project.is_featured).slice(0, 4);

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title="Featured Projects" icon={<ProjectIcon />} />
        <SectionSubHeading>
          <p>Selected work from design engineering and process reengineering.</p>
          <Link
            href="/projects"
            className="flex items-center gap-1 text-sm text-primary transition-all duration-300 hover:gap-2"
          >
            See all projects <ArrowIcon size={18} />
          </Link>
        </SectionSubHeading>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
