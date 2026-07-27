"use client";

import { useTheme } from "next-themes";
import {
  MdDarkMode as DarkModeIcon,
  MdLightMode as LightModeIcon,
} from "react-icons/md";

/**
 * Visual state is driven by the `dark` class rather than React state, so the
 * toggle renders identically on the server and after hydration.
 */
const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <div className="flex items-center justify-center">
      <div className="relative hidden items-center gap-2 rounded-full border-[1.5px] border-neutral-300 bg-neutral-100 p-1 dark:border-neutral-700 dark:bg-neutral-800 lg:flex">
        <span className="absolute bottom-1 top-1 left-1 w-8 rounded-full bg-neutral-300 transition-transform duration-300 ease-out dark:translate-x-10 dark:bg-neutral-700" />

        <button
          aria-label="Light mode"
          onClick={() => setTheme("light")}
          className="relative z-10 flex h-8 w-8 items-center justify-center transition-transform duration-200 hover:scale-115"
        >
          <LightModeIcon
            size={17}
            className="text-neutral-900 dark:text-neutral-400"
          />
        </button>

        <button
          aria-label="Dark mode"
          onClick={() => setTheme("dark")}
          className="relative z-10 flex h-8 w-8 items-center justify-center transition-transform duration-200 hover:scale-115"
        >
          <DarkModeIcon
            size={17}
            className="text-neutral-500 dark:text-white"
          />
        </button>
      </div>

      <button
        aria-label="Toggle theme"
        onClick={toggleTheme}
        className="flex items-center gap-2 rounded-full border-[1.5px] border-neutral-300 bg-neutral-100 p-1 transition duration-200 hover:scale-110 dark:border-neutral-700 dark:bg-neutral-800 lg:hidden"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-300 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-50">
          <DarkModeIcon size={17} className="dark:hidden" />
          <LightModeIcon size={17} className="hidden dark:block" />
        </span>
      </button>
    </div>
  );
};

export default ThemeToggle;
