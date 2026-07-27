import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HiOutlineExternalLink as ExternalIcon } from "react-icons/hi";
import { SiGithub as RepoIcon } from "react-icons/si";

import BackButton from "@/common/components/elements/BackButton";
import Breakline from "@/common/components/elements/Breakline";
import StackIcon from "@/common/components/elements/StackIcon";
import { PROJECTS } from "@/common/constants/projects";
import { getStacksByName } from "@/common/constants/stacks";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export const generateStaticParams = () =>
  PROJECTS.map((project) => ({ slug: project.slug }));

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);

  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);

  if (!project) notFound();

  const stacks = getStacksByName(project.stacks);

  return (
    <article>
      <BackButton />

      <div className="flex flex-wrap items-center gap-2">
        {project.categories.map((category) => (
          <span
            key={category}
            className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary dark:text-primary-300"
          >
            {category}
          </span>
        ))}
        <span className="ml-1 text-sm text-neutral-500">{project.year}</span>
      </div>

      <h1 className="mt-3 text-2xl font-medium">{project.title}</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        {project.description}
      </p>

      {(project.link_demo || project.link_repo) && (
        <div className="mt-4 flex flex-wrap items-center gap-4">
          {project.link_demo && (
            <a
              href={project.link_demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              Visit project <ExternalIcon size={15} />
            </a>
          )}
          {project.link_repo && (
            <a
              href={project.link_repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              Source code <RepoIcon size={15} />
            </a>
          )}
        </div>
      )}

      <Breakline className="my-6" />

      <div className="space-y-4 leading-7 text-neutral-600 dark:text-neutral-300">
        {project.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {project.highlights && (
        <div className="mt-8 space-y-2">
          <h2 className="font-medium text-neutral-800 dark:text-neutral-200">
            Highlights
          </h2>
          <ul className="ml-4 list-disc space-y-1.5 leading-7 text-neutral-600 dark:text-neutral-400">
            {project.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}

      <Breakline className="my-6" />

      <div className="space-y-3">
        <h2 className="font-medium text-neutral-800 dark:text-neutral-200">
          Tools used
        </h2>
        <div className="flex flex-wrap gap-x-4 gap-y-5">
          {stacks.map((stack) => (
            <StackIcon key={stack.name} stack={stack} />
          ))}
        </div>
      </div>
    </article>
  );
}
