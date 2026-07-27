import cn from "@/common/libs/clsxm";

interface SectionHeadingProps {
  title: string;
  icon?: React.ReactNode;
  className?: string;
}

const SectionHeading = ({
  title,
  icon,
  className = "",
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-1.5 text-xl font-medium text-neutral-800 dark:text-neutral-300",
        className,
      )}
    >
      {icon ? <i className="text-primary">{icon}</i> : null}
      <h2>{title}</h2>
    </div>
  );
};

export default SectionHeading;
