"use client";

import { motion } from "framer-motion";

import { MENU_ITEMS } from "@/common/constants/menu";
import { SOCIAL_MEDIA } from "@/common/constants/socialMedia";

import Breakline from "../../elements/Breakline";
import Copyright from "../../elements/Copyright";
import Menu from "./Menu";

const MobileMenu = () => {
  const filteredMenu = MENU_ITEMS.filter((item) => item.isShow);

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden pt-4"
    >
      <Menu list={filteredMenu} />
      <Breakline />
      <div className="flex items-center justify-center gap-5 pb-2">
        {SOCIAL_MEDIA.filter((item) => item.isShow).map((item) => (
          <a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.title}
            className={`text-neutral-600 transition-all duration-300 dark:text-neutral-400 ${item.className}`}
          >
            {item.icon}
          </a>
        ))}
      </div>
      <Breakline />
      <div className="pb-4">
        <Copyright />
      </div>
    </motion.div>
  );
};

export default MobileMenu;
