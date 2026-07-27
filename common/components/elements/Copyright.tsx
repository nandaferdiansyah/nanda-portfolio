import { PROFILE } from "@/common/constants/profile";

const Copyright = () => {
  return (
    <div className="space-y-1 text-center text-sm text-neutral-600 dark:text-neutral-400">
      <div className="flex flex-wrap items-center justify-center gap-1">
        <p>© {new Date().getFullYear()}</p>
        <p>{PROFILE.name}. All rights reserved.</p>
      </div>
      <p className="text-xs text-neutral-500">
        Icons by{" "}
        <a
          href="https://icons8.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary"
        >
          Icons8
        </a>
      </p>
    </div>
  );
};

export default Copyright;
