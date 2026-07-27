import { HiOutlineDocumentArrowDown as DownloadIcon } from "react-icons/hi2";

import { PROFILE } from "@/common/constants/profile";

const Introduction = () => {
  return (
    <section className="space-y-3 bg-cover bg-no-repeat">
      <h1 className="text-3xl font-medium text-neutral-900 dark:text-neutral-50">
        {PROFILE.headline}
      </h1>

      <p className="text-neutral-600 dark:text-neutral-400">{PROFILE.role}</p>

      <div className="mt-6 space-y-4 leading-7 text-neutral-600 dark:text-neutral-300">
        {PROFILE.bio.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="pt-2">
        <a
          href={PROFILE.resume_url}
          download
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-primary-700 lg:hover:scale-105"
        >
          <DownloadIcon size={18} />
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Introduction;
