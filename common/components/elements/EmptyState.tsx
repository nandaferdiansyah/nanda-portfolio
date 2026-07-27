import { TbMoodEmpty } from "react-icons/tb";

const EmptyState = ({ message }: { message: string }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-neutral-400 py-14 text-neutral-500 dark:border-neutral-700">
      <TbMoodEmpty size={28} />
      <p className="text-sm">{message}</p>
    </div>
  );
};

export default EmptyState;
