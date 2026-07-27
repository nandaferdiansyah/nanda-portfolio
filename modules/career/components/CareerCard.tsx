"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiChevronDown as ChevronIcon } from "react-icons/fi";
import { HiOutlineExternalLink as ExternalIcon } from "react-icons/hi";

import Card from "@/common/components/elements/Card";
import { formatMonthYear, getDuration } from "@/common/helpers";
import type { CareerProps } from "@/common/types";

const DetailList = ({ title, items }: { title: string; items: string[] }) => (
  <div className="space-y-1.5">
    <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
      {title}
    </h4>
    <ul className="ml-4 list-disc space-y-1.5 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const CareerCard = ({ career }: { career: CareerProps }) => {
  const [isOpen, setIsOpen] = useState(false);

  const period = `${formatMonthYear(career.start_date)} — ${formatMonthYear(
    career.end_date,
  )}`;
  const duration = getDuration(career.start_date, career.end_date);

  return (
    <Card className="p-5">
      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h3 className="font-medium text-neutral-800 dark:text-neutral-200">
            {career.position}
          </h3>
          <span className="whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400">
            {period}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
          {career.link ? (
            <a
              href={career.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-primary"
            >
              {career.company}
              <ExternalIcon size={14} />
            </a>
          ) : (
            <span>{career.company}</span>
          )}
        </div>

        <div className="mt-2 flex flex-wrap gap-2 text-xs text-neutral-600 dark:text-neutral-400">
          {[career.type, career.location_type, career.location, duration, career.industry]
            .filter(Boolean)
            .map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-neutral-300 px-2.5 py-1 dark:border-neutral-700"
              >
                {tag}
              </span>
            ))}
        </div>
      </div>

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="mt-4 flex items-center gap-1 text-sm text-primary transition-all duration-300"
      >
        {isOpen ? "Hide details" : "Show details"}
        <ChevronIcon
          size={16}
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 space-y-4 border-t border-dashed border-neutral-300 pt-4 dark:border-neutral-700">
              <DetailList
                title="Responsibilities"
                items={career.responsibilities}
              />
              {career.impact && (
                <DetailList title="Impact" items={career.impact} />
              )}
              {career.lessons_learned && (
                <DetailList
                  title="Lessons learned"
                  items={career.lessons_learned}
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};

export default CareerCard;
