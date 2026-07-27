"use client";

import Link from "next/link";
import { MdVerified as VerifiedIcon } from "react-icons/md";

import cn from "@/common/libs/clsxm";
import { PROFILE } from "@/common/constants/profile";

import Avatar from "../../elements/Avatar";
import Tooltip from "../../elements/Tooltip";
import ThemeToggle from "./ThemeToggle";

interface ProfileHeaderProps {
  expandMenu: boolean;
  imageSize: number;
}

const ProfileHeader = ({ expandMenu, imageSize }: ProfileHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full grow items-center gap-4 lg:flex-col lg:gap-0.5",
        expandMenu && "flex-col !items-start",
      )}
    >
      <Avatar size={expandMenu ? 80 : imageSize} />

      <div className="mt-1 flex items-center gap-2 lg:mt-4">
        <Link href="/">
          <h2 className="grow text-lg font-medium lg:text-xl">
            {PROFILE.name}
          </h2>
        </Link>
        <Tooltip title="Verified">
          <VerifiedIcon size={18} className="text-primary-400" />
        </Tooltip>
      </div>

      <div className="hidden text-sm text-neutral-600 transition-all duration-300 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-400 lg:flex">
        {PROFILE.username}
      </div>

      <div className="hidden justify-between gap-6 lg:mt-4 lg:flex">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default ProfileHeader;
