"use client";

import { useRouter } from "next/navigation";
import { HiOutlineArrowLeft as BackIcon } from "react-icons/hi";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mb-6 flex items-center gap-1 text-sm text-neutral-600 transition-all duration-300 hover:text-primary dark:text-neutral-400"
    >
      <BackIcon size={16} />
      <span>Back</span>
    </button>
  );
};

export default BackButton;
