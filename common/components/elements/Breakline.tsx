import cn from "@/common/libs/clsxm";

const Breakline = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={cn(
        "my-4 border-t border-neutral-300 dark:border-neutral-700",
        className,
      )}
    />
  );
};

export default Breakline;
