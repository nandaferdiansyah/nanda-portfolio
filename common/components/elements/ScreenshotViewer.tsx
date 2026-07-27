"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect } from "react";
import { HiOutlineExternalLink as ExternalIcon } from "react-icons/hi";
import { IoCloseOutline as CloseIcon } from "react-icons/io5";
import {
  MdChevronLeft as PrevIcon,
  MdChevronRight as NextIcon,
} from "react-icons/md";

import cn from "@/common/libs/clsxm";
import type { ScreenshotProps } from "@/common/constants/e-simpel";

interface ScreenshotViewerProps {
  title: string;
  subtitle?: string;
  screenshots: ScreenshotProps[];
  activeIndex: number | null;
  onClose: () => void;
  onSelect: (index: number) => void;
  links?: { label: string; href: string }[];
}

const controlStyles =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors duration-300 hover:bg-white/20";

/**
 * Walkthrough popup for web/app work: one large screenshot at a time, with a
 * thumbnail strip so the whole flow stays visible while browsing.
 */
const ScreenshotViewer = ({
  title,
  subtitle,
  screenshots,
  activeIndex,
  onClose,
  onSelect,
  links,
}: ScreenshotViewerProps) => {
  const isOpen = activeIndex !== null;

  const step = useCallback(
    (offset: number) => {
      if (activeIndex === null) return;
      onSelect(
        (activeIndex + offset + screenshots.length) % screenshots.length,
      );
    },
    [activeIndex, onSelect, screenshots.length],
  );

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") step(-1);
      if (event.key === "ArrowRight") step(1);
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose, step]);

  const active = activeIndex === null ? null : screenshots[activeIndex];

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 backdrop-blur-sm sm:p-6"
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => event.stopPropagation()}
            className="flex max-h-full w-full max-w-5xl flex-col gap-3"
          >
            <div className="flex items-start justify-between gap-3 text-white">
              <div>
                <p className="font-medium">{title}</p>
                {subtitle && (
                  <p className="text-xs text-neutral-400">{subtitle}</p>
                )}
              </div>
              <button
                aria-label="Close"
                onClick={onClose}
                className={controlStyles}
              >
                <CloseIcon size={22} />
              </button>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                aria-label="Previous screenshot"
                onClick={() => step(-1)}
                className={controlStyles}
              >
                <PrevIcon size={24} />
              </button>

              <div className="relative h-[45vh] w-full overflow-hidden rounded-xl bg-neutral-900 sm:h-[58vh]">
                <Image
                  key={active.src}
                  src={encodeURI(active.src)}
                  alt={active.caption}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-contain"
                  priority
                />
              </div>

              <button
                aria-label="Next screenshot"
                onClick={() => step(1)}
                className={controlStyles}
              >
                <NextIcon size={24} />
              </button>
            </div>

            <p className="px-1 text-center text-sm leading-6 text-neutral-300">
              {active.caption}
            </p>

            <div className="flex gap-2 overflow-x-auto pb-1">
              {screenshots.map((shot, index) => (
                <button
                  key={shot.src}
                  onClick={() => onSelect(index)}
                  aria-label={`Screenshot ${index + 1}`}
                  className={cn(
                    "relative h-12 w-20 shrink-0 overflow-hidden rounded-md border-2 transition-all duration-300",
                    index === activeIndex
                      ? "border-primary opacity-100"
                      : "border-transparent opacity-50 hover:opacity-80",
                  )}
                >
                  <Image
                    src={encodeURI(shot.src)}
                    alt=""
                    fill
                    sizes="80px"
                    className="bg-neutral-800 object-cover"
                  />
                </button>
              ))}
            </div>

            {links && links.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-4 pb-1">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary-300 hover:underline"
                  >
                    {link.label} <ExternalIcon size={14} />
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScreenshotViewer;
