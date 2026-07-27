import type { MetadataRoute } from "next";

import { METADATA } from "@/common/constants/profile";
import { PROJECTS } from "@/common/constants/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/career",
    "/projects",
    "/portfolio",
    "/achievements",
    "/creations",
    "/contact",
  ].map((route) => ({
    url: `${METADATA.url}${route}`,
    lastModified: new Date(),
  }));

  const projects = PROJECTS.map((project) => ({
    url: `${METADATA.url}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...projects];
}
