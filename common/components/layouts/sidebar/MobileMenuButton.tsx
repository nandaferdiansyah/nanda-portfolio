"use client";

import { HiOutlineMenuAlt3 as MenuIcon } from "react-icons/hi";
import { IoCloseOutline as CloseIcon } from "react-icons/io5";

interface MobileMenuButtonProps {
  expandMenu: boolean;
  setExpandMenu: () => void;
}

const MobileMenuButton = ({
  expandMenu,
  setExpandMenu,
}: MobileMenuButtonProps) => {
  return (
    <button
      aria-label={expandMenu ? "Close menu" : "Open menu"}
      onClick={setExpandMenu}
      className="flex h-8 w-8 items-center justify-center rounded-full border-[1.5px] border-neutral-300 bg-neutral-100 text-neutral-700 transition-all duration-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
    >
      {expandMenu ? <CloseIcon size={20} /> : <MenuIcon size={18} />}
    </button>
  );
};

export default MobileMenuButton;
