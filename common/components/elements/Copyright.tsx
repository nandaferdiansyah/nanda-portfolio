import { PROFILE } from "@/common/constants/profile";

const Copyright = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-1 text-center text-sm text-neutral-600 dark:text-neutral-400">
      <p>© {new Date().getFullYear()}</p>
      <p>{PROFILE.name}. All rights reserved.</p>
    </div>
  );
};

export default Copyright;
