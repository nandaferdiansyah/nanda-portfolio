"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { IoCloseOutline as CloseIcon } from "react-icons/io5";
import {
  MdChevronLeft as PrevIcon,
  MdChevronRight as NextIcon,
} from "react-icons/md";

import type { PortfolioItemProps } from "@/common/constants/portfolio";

interface LightboxProps {
  item: PortfolioItemProps | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const controlStyles =
  "flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors duration-300 hover:bg-white/20";

const Lightbox = ({ item, onClose, onPrev, onNext }: LightboxProps) => {
  useEffect(() => {
    if (!item) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "auto";
    };
  }, [item, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
        >
          <button
            aria-label="Close"
            onClick={onClose}
            className={`absolute right-4 top-4 ${controlStyles}`}
          >
            <CloseIcon size={22} />
          </button>

          <button
            aria-label="Previous"
            onClick={(event) => {
              event.stopPropagation();
              onPrev();
            }}
            className={`absolute left-3 sm:left-6 ${controlStyles}`}
          >
            <PrevIcon size={24} />
          </button>

          <button
            aria-label="Next"
            onClick={(event) => {
              event.stopPropagation();
              onNext();
            }}
            className={`absolute right-3 sm:right-6 ${controlStyles}`}
          >
            <NextIcon size={24} />
          </button>

          <motion.figure
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => event.stopPropagation()}
            className="flex max-h-full w-full max-w-3xl flex-col gap-3"
          >
            <div className="relative h-[60vh] w-full overflow-hidden rounded-xl bg-neutral-900">
              <Image
                src={encodeURI(item.src)}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-contain"
              />
            </div>

            <figcaption className="text-center text-white">
              <p className="font-medium">{item.title}</p>
              <p className="mt-1 text-sm text-neutral-300">
                {item.description}
              </p>
              <p className="mt-1 text-xs text-neutral-400">{item.tool}</p>
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
