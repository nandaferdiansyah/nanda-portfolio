import cn from "@/common/libs/clsxm";
import type { StackProps } from "@/common/types";

interface StackIconProps {
  stack: StackProps;
  showLabel?: boolean;
}

/**
 * Glass-style tile used on the skills grid. Brands that Simple Icons
 * does not ship a glyph for fall back to a monogram badge.
 */
const StackIcon = ({ stack, showLabel = true }: StackIconProps) => {
  return (
    <div className="group relative flex flex-col items-center">
      <div
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-6 group-hover:shadow-lg",
          stack.color,
        )}
      >
        {stack.icon ?? (
          <span className="text-[11px] font-bold tracking-tight">
            {stack.monogram}
          </span>
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
