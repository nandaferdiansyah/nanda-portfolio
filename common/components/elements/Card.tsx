import cn from "@/common/libs/clsxm";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div className="w-full rounded-xl border-[1.5px] border-neutral-300 p-1 shadow-sm dark:border-[#333333]">
      <div
        className={cn(
          "h-full rounded-lg bg-gradient-to-b from-neutral-200 to-neutral-100 transition-all duration-300 hover:to-white dark:from-[#242424] dark:to-neutral-900 dark:hover:to-neutral-950",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
