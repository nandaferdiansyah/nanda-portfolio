import ResumeButton from "@/common/components/elements/ResumeButton";
import { PROFILE } from "@/common/constants/profile";

const Introduction = () => {
  return (
    <section className="space-y-3 bg-cover bg-no-repeat">
      <h1 className="text-3xl font-medium text-neutral-900 dark:text-neutral-50">
        {PROFILE.headline}
      </h1>

      <p className="text-neutral-600 dark:text-neutral-400">{PROFILE.role}</p>

      <div className="mt-6 space-y-4 leading-7 text-neutral-600 dark:text-neutral-300">
        {PROFILE.home_bio.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="pt-2">
        <ResumeButton />
      </div>
    </section>
  );
};

export default Introduction;
