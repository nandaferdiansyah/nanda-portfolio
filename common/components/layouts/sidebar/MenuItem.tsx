"use client";

import clsx from "clsx";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { BsArrowRightShort as ArrowIcon } from "react-icons/bs";

import { useMenu } from "@/common/stores/menu";
import type { MenuItemProps } from "@/common/types";

const MenuItem = ({ title, href, icon, className = "" }: MenuItemProps) => {
  const { hideMenu } = useMenu();

  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;

  return (
    <Link href={href} onClick={hideMenu} aria-current={isActive ? "page" : undefined}>
      <div
        className={clsx(
          "group flex items-center gap-2 rounded-lg px-4 py-2 text-neutral-700 dark:text-neutral-400",
          isActive
            ? "bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:!text-neutral-200"
            : "hover:lg:scale-105 hover:lg:bg-neutral-200 hover:lg:text-neutral-900 lg:transition-all lg:duration-300 dark:hover:lg:bg-neutral-800 dark:hover:lg:!text-neutral-300",
          className,
        )}
      >
        <div
          className={clsx(
            "transition-all duration-300 group-hover:-rotate-12",
            isActive && "animate-pulse text-primary",
          )}
        >
          {icon}
        </div>
        <div className="grow">{title}</div>
        {isActive && (
          <ArrowIcon size={22} className="animate-pulse text-neutral-500" />
        )}
      </div>
    </Link>
  );
};

export default MenuItem;
