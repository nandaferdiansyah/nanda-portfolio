"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  HiOutlineArrowTopRightOnSquare as ExternalIcon,
  HiOutlineDocumentArrowDown as DownloadIcon,
  HiOutlineDocumentText as ResumeIcon,
} from "react-icons/hi2";
import { IoCloseOutline as CloseIcon } from "react-icons/io5";

import { PROFILE } from "@/common/constants/profile";

/**
 * Opens the CV in a preview popup first — downloading is a deliberate second
 * step from inside the modal rather than the button's only outcome.
 */
const ResumeButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-primary-700 lg:hover:scale-105"
      >
        <ResumeIcon size={18} />
        View CV
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 backdrop-blur-sm sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Curriculum Vitae preview"
              className="flex h-full max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl bg-white shadow-xl dark:bg-neutral-900"
            >
              <div className="flex items-center justify-between gap-3 border-b border-neutral-200 px-4 py-3 dark:border-neutral-800">
                <div className="min-w-0">
                  <p className="font-medium text-neutral-800 dark:text-neutral-200">
                    Curriculum Vitae
                  </p>
                  {/* Kept to one line so narrow phones spend their height on
                      the preview rather than on the role list. */}
                  <p className="truncate text-xs text-neutral-500 dark:text-neutral-400">
                    {PROFILE.name} · {PROFILE.role}
                  </p>
                </div>
                <button
                  aria-label="Close"
                  onClick={() => setIsOpen(false)}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-neutral-500 transition-colors duration-300 hover:bg-neutral-100 hover:text-neutral-800 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
                >
                  <CloseIcon size={22} />
                </button>
              </div>

              <div className="min-h-0 flex-1 bg-neutral-100 dark:bg-neutral-950">
                <iframe
                  src={`${PROFILE.resume_url}#view=FitH`}
                  title="Curriculum Vitae preview"
                  className="h-full w-full border-0"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-neutral-200 px-4 py-3 dark:border-neutral-800">
                {/* Mobile browsers often refuse to render a PDF in an iframe. */}
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Preview not loading? Open it in a new tab.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={PROFILE.resume_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-neutral-600 transition-colors duration-300 hover:text-primary dark:text-neutral-400"
                  >
                    Open in new tab <ExternalIcon size={16} />
                  </a>

                  <a
                    href={PROFILE.resume_url}
                    download
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-primary-700"
                  >
                    <DownloadIcon size={18} />
                    Download CV
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResumeButton;
