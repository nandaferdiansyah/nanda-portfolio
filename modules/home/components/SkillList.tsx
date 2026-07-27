"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { BiCodeAlt as SkillsIcon } from "react-icons/bi";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import StackIcon from "@/common/components/elements/StackIcon";
import cn from "@/common/libs/clsxm";
import { SKILL_CATEGORIES, STACKS } from "@/common/constants/stacks";

type Category = (typeof SKILL_CATEGORIES)[number];

const countByCategory = (category: Category) =>
  category === "All"
    ? STACKS.length
    : STACKS.filter((stack) => stack.categories.includes(category)).length;

const SkillList = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredStacks =
    activeCategory === "All"
      ? STACKS
      : STACKS.filter((stack) => stack.categories.includes(activeCategory));

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title="Skills" icon={<SkillsIcon />} />
        <SectionSubHeading>
          <p>
            The tools and methods I work with, grouped by what I use them for.
          </p>
        </SectionSubHeading>
      </div>

      <div className="flex flex-wrap gap-2">
        {SKILL_CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm transition-all duration-300",
              activeCategory === category
                ? "border-primary bg-primary/10 text-primary dark:border-primary-400 dark:text-primary-300"
                : "border-neutral-300 text-neutral-600 hover:border-neutral-400 dark:border-neutral-700 dark:text-neutral-400",
            )}
          >
            {category}
            <span className="text-xs opacity-60">
              {countByCategory(category)}
            </span>
          </button>
        ))}
      </div>

      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-4 gap-x-4 gap-y-6 py-2 sm:grid-cols-6 lg:grid-cols-8"
      >
        {filteredStacks.map((stack) => (
          <StackIcon key={stack.name} stack={stack} />
        ))}
      </motion.div>
    </section>
  );
};

export default SkillList;
