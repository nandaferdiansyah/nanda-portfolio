"use client";

import Image from "next/image";
import { useState } from "react";
import { HiOutlineMagnifyingGlassPlus as ZoomIcon } from "react-icons/hi2";

import ScreenshotViewer from "@/common/components/elements/ScreenshotViewer";
import type { ScreenshotProps } from "@/common/constants/e-simpel";

interface ProjectScreenshotsProps {
  title: string;
  subtitle?: string;
  screenshots: ScreenshotProps[];
  links?: { label: string; href: string }[];
}

const ProjectScreenshots = ({
  title,
  subtitle,
  screenshots,
  links,
}: ProjectScreenshotsProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      <button
        onClick={() => setActiveIndex(0)}
        className="group relative block aspect-16/9 w-full overflow-hidden rounded-xl border-[1.5px] border-neutral-300 dark:border-[#333333]"
      >
        <Image
          src={encodeURI(screenshots[0].src)}
          alt={screenshots[0].caption}
          fill
          sizes="(max-width: 854px) 100vw, 854px"
          className="bg-neutral-200 object-cover object-top dark:bg-neutral-800"
          priority
        />
        <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/55 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <ZoomIcon size={26} />
          <span className="text-sm font-medium">
            View {screenshots.length} screenshots
          </span>
        </span>
      </button>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {screenshots.map((shot, index) => (
          <button
            key={shot.src}
            onClick={() => setActiveIndex(index)}
            aria-label={shot.caption}
            className="relative h-14 w-24 shrink-0 overflow-hidden rounded-md border border-neutral-300 opacity-80 transition-all duration-300 hover:opacity-100 dark:border-neutral-700"
          >
            <Image
              src={encodeURI(shot.src)}
              alt=""
              fill
              sizes="96px"
              className="bg-neutral-200 object-cover object-top dark:bg-neutral-800"
            />
          </button>
        ))}
      </div>

      <ScreenshotViewer
        title={title}
        subtitle={subtitle}
        screenshots={screenshots}
        links={links}
        activeIndex={activeIndex}
        onSelect={setActiveIndex}
        onClose={() => setActiveIndex(null)}
      />
    </div>
  );
};

export default ProjectScreenshots;
