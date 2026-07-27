import Image from "next/image";

import cn from "@/common/libs/clsxm";
import type { StackProps } from "@/common/types";

interface StackIconProps {
  stack: StackProps;
  showLabel?: boolean;
}

/**
 * Tile used on the skills grid. Brand artwork sits on a neutral surface so the
 * logo colours stay readable; glyph and monogram tiles use the brand colour.
 */
const StackIcon = ({ stack, showLabel = true }: StackIconProps) => {
  return (
    <div className="group relative flex flex-col items-center">
      <div
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-6 group-hover:shadow-lg",
          stack.image
            ? "border border-neutral-200 bg-white p-2 dark:border-neutral-700 dark:bg-neutral-800"
            : stack.color,
        )}
      >
        {stack.image ? (
          <Image
            src={stack.image}
            alt={stack.name}
            width={32}
            height={32}
            className="h-full w-full object-contain"
          />
        ) : (
          (stack.icon ?? (
            <span className="text-[11px] font-bold tracking-tight">
              {stack.monogram}
            </span>
          ))
        )}
      </div>
      {showLabel && (
        <span className="mt-2 text-center text-[11px] leading-tight text-neutral-600 dark:text-neutral-400">
          {stack.name}
        </span>
      )}
    </div>
  );
};

export default StackIcon;
