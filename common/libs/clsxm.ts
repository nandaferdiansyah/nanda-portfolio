import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge conditional class names, letting later Tailwind classes win. */
export default function cn(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}
