"use client";

import { useState } from "react";

import EmptyState from "@/common/components/elements/EmptyState";
import cn from "@/common/libs/clsxm";
import { PROJECTS, PROJECT_CATEGORIES } from "@/common/constants/projects";

import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [activeCategory, setActiveCategory] =
    useState<(typeof PROJECT_CATEGORIES)[number]>("All");

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((project) =>
          project.categories.includes(activeCategory),
        );

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {PROJECT_CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-sm transition-all duration-300",
              activeCategory === category
                ? "border-primary bg-primary/10 text-primary dark:border-primary-400 dark:text-primary-300"
                : "border-neutral-300 text-neutral-600 hover:border-neutral-400 dark:border-neutral-700 dark:text-neutral-400",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredProjects.length ? (
        <div className="grid gap-4 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <EmptyState message="No projects in this category yet." />
      )}
    </section>
  );
};

export default Projects;
