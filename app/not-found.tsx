import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-start gap-4 py-16">
      <h1 className="text-5xl font-medium text-primary">404</h1>
      <p className="text-neutral-600 dark:text-neutral-400">
        This page doesn&apos;t exist — or it moved somewhere else.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-primary-700 lg:hover:scale-105"
      >
        Back to home
      </Link>
    </div>
  );
}
