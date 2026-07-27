import { SiInstagram } from "react-icons/si";
import { HiOutlineExternalLink as ExternalIcon } from "react-icons/hi";

import Card from "@/common/components/elements/Card";
import { INSTAGRAM } from "@/common/constants/creations";

const InstagramProfileCard = ({ postCount }: { postCount: number }) => {
  return (
    <Card className="flex flex-col items-start gap-4 p-6 md:flex-row md:items-center">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white">
        <SiInstagram size={28} />
      </div>

      <div className="grow">
        <h2 className="font-medium text-neutral-800 dark:text-neutral-200">
          {INSTAGRAM.name}{" "}
          <span className="text-neutral-500">@{INSTAGRAM.username}</span>
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {INSTAGRAM.tagline}
        </p>
        <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
          {INSTAGRAM.description}
        </p>
        {postCount > 0 && (
          <p className="mt-2 text-xs text-neutral-500">
            {postCount} post{postCount > 1 ? "s" : ""} shown below
          </p>
        )}
      </div>

      <a
        href={INSTAGRAM.profile_url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-primary-700 lg:hover:scale-105"
      >
        Follow <ExternalIcon size={15} />
      </a>
    </Card>
  );
};

export default InstagramProfileCard;
