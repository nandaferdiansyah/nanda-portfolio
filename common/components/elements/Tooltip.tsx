interface TooltipProps {
  title: string;
  children: React.ReactNode;
}

const Tooltip = ({ title, children }: TooltipProps) => {
  return (
    <span className="group relative inline-flex">
      {children}
      <span className="pointer-events-none absolute -top-8 left-1/2 z-30 -translate-x-1/2 whitespace-nowrap rounded-md bg-neutral-800 px-2 py-1 text-xs text-neutral-100 opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:bg-neutral-700">
        {title}
      </span>
    </span>
  );
};

export default Tooltip;
