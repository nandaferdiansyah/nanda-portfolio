"use client";

import Image from "next/image";
import { useState } from "react";
import { HiOutlineMagnifyingGlassPlus as ZoomIcon } from "react-icons/hi2";
import { HiOutlineSquares2X2 as GalleryIcon } from "react-icons/hi2";

import EmptyState from "@/common/components/elements/EmptyState";
import ScreenshotViewer from "@/common/components/elements/ScreenshotViewer";
import StackIcon from "@/common/components/elements/StackIcon";
import cn from "@/common/libs/clsxm";
import {
  PORTFOLIO_ITEMS,
  PORTFOLIO_TOOLS,
  type PortfolioItemProps,
} from "@/common/constants/portfolio";
import { STACKS } from "@/common/constants/stacks";

import Lightbox from "./Lightbox";

const Portfolio = () => {
  const [activeTool, setActiveTool] =
    useState<(typeof PORTFOLIO_TOOLS)[number]>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showcase, setShowcase] = useState<PortfolioItemProps | null>(null);
  const [showcaseIndex, setShowcaseIndex] = useState<number | null>(null);

  const items: PortfolioItemProps[] =
    activeTool === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.tool === activeTool);

  // Single-image items only; showcases open their own walkthrough popup.
  const flatItems = items.filter((item) => !item.screenshots);
  const activeItem = activeIndex === null ? null : flatItems[activeIndex];

  const step = (offset: number) =>
    setActiveIndex((current) =>
      current === null
        ? current
        : (current + offset + flatItems.length) % flatItems.length,
    );

  const openItem = (item: PortfolioItemProps) => {
    if (item.screenshots) {
      setShowcase(item);
      setShowcaseIndex(0);
      return;
    }
    setActiveIndex(flatItems.indexOf(item));
  };

  const countFor = (tool: (typeof PORTFOLIO_TOOLS)[number]) =>
    tool === "All"
      ? PORTFOLIO_ITEMS.length
      : PORTFOLIO_ITEMS.filter((item) => item.tool === tool).length;

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {PORTFOLIO_TOOLS.map((tool) => (
          <button
            key={tool}
            onClick={() => {
              setActiveTool(tool);
              setActiveIndex(null);
            }}
            className={cn(
              "flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm transition-all duration-300",
              activeTool === tool
                ? "border-primary bg-primary/10 text-primary dark:border-primary-400 dark:text-primary-300"
                : "border-neutral-300 text-neutral-600 hover:border-neutral-400 dark:border-neutral-700 dark:text-neutral-400",
            )}
          >
            {tool}
            <span className="text-xs opacity-60">{countFor(tool)}</span>
          </button>
        ))}
      </div>

      {items.length ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {items.map((item) => {
            const stack = STACKS.find((entry) => entry.name === item.tool);
            const shotCount = item.screenshots?.length ?? 0;

            return (
              <button
                key={item.src}
                onClick={() => openItem(item)}
                className="group relative aspect-square overflow-hidden rounded-xl border-[1.5px] border-neutral-300 dark:border-[#333333]"
              >
                <Image
                  src={encodeURI(item.src)}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="bg-neutral-200 object-cover object-top transition-transform duration-500 group-hover:scale-105 dark:bg-neutral-800"
                />

                {stack && (
                  <span className="absolute left-2 top-2 origin-top-left scale-75 opacity-90">
                    <StackIcon stack={stack} showLabel={false} />
                  </span>
                )}

                {shotCount > 0 && (
                  <span className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-[11px] font-medium text-white backdrop-blur">
                    <GalleryIcon size={13} />
                    {shotCount}
                  </span>
                )}

                <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/60 p-3 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ZoomIcon size={22} />
                  <span className="text-sm font-medium">{item.title}</span>
                  <span className="text-xs text-neutral-300">
                    {shotCount > 0 ? `${shotCount} screens` : item.tool}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      ) : (
        <EmptyState message="No designs for this tool yet." />
      )}

      <Lightbox
        item={activeItem}
        onClose={() => setActiveIndex(null)}
        onPrev={() => step(-1)}
        onNext={() => step(1)}
      />

      <ScreenshotViewer
        title={showcase?.title ?? ""}
        subtitle={showcase?.description}
        screenshots={showcase?.screenshots ?? []}
        links={showcase?.links}
        activeIndex={showcase ? showcaseIndex : null}
        onSelect={setShowcaseIndex}
        onClose={() => {
          setShowcase(null);
          setShowcaseIndex(null);
        }}
      />
    </section>
  );
};

export default Portfolio;
