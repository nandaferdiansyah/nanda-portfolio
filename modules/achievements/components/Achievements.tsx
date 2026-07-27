"use client";

import { useState } from "react";
import { HiOutlineExternalLink as ExternalIcon } from "react-icons/hi";

import Card from "@/common/components/elements/Card";
import EmptyState from "@/common/components/elements/EmptyState";
import cn from "@/common/libs/clsxm";
import {
  ACHIEVEMENTS,
  ACHIEVEMENT_CATEGORIES,
} from "@/common/constants/achievements";

const Achievements = () => {
  const [activeCategory, setActiveCategory] =
    useState<(typeof ACHIEVEMENT_CATEGORIES)[number]>("All");

  const filtered =
    activeCategory === "All"
      ? ACHIEVEMENTS
      : ACHIEVEMENTS.filter((item) => item.category === activeCategory);

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {ACHIEVEMENT_CATEGORIES.map((category) => (
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

      {filtered.length ? (
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((item) => (
            <Card key={item.title} className="flex h-full flex-col p-5">
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary dark:text-primary-300">
                  {item.category}
                </span>
                <span className="text-xs text-neutral-500">{item.date}</span>
              </div>

              <h3 className="mt-3 font-medium text-neutral-800 dark:text-neutral-200">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                {item.issuer}
              </p>

              {item.description && (
                <p className="mt-3 grow text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                  {item.description}
                </p>
              )}

              <div className="mt-4 flex items-center justify-between gap-2">
                {item.credential_id && (
                  <span className="font-mono text-xs text-neutral-500">
                    ID: {item.credential_id}
                  </span>
                )}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-primary hover:underline"
                  >
                    View credential <ExternalIcon size={13} />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <EmptyState message="Nothing in this category yet." />
      )}
    </section>
  );
};

export default Achievements;
