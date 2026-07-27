"use client";

import Image from "next/image";
import { useState } from "react";

import cn from "@/common/libs/clsxm";
import { PROFILE } from "@/common/constants/profile";

interface AvatarProps {
  size: number;
  className?: string;
}

/**
 * Profile picture with a monogram fallback, so the layout still looks
 * finished before the real photo is dropped into /public/images.
 */
const Avatar = ({ size, className = "" }: AvatarProps) => {
  const [hasError, setHasError] = useState(false);

  const initials = PROFILE.name
    .split(" ")
    .map((word) => word[0])
    .join("");

  if (hasError) {
    return (
      <div
        style={{ width: size, height: size }}
        className={cn(
          "flex items-center justify-center rounded-full border-2 border-neutral-400 bg-gradient-to-br from-primary-700 to-primary-950 font-semibold text-white dark:border-neutral-600",
          className,
        )}
      >
        <span style={{ fontSize: size / 3 }}>{initials}</span>
      </div>
    );
  }

  return (
    <Image
      src={PROFILE.avatar}
      width={size}
      height={size}
      alt={PROFILE.name}
      onError={() => setHasError(true)}
      style={{ width: size, height: size }}
      className={cn(
        "rounded-full border-2 border-neutral-400 object-cover transition-all duration-300 dark:border-neutral-600 lg:hover:scale-105",
        className,
      )}
      priority
    />
  );
};

export default Avatar;
