import Link from "next/link";

import cn from "@/common/libs/clsxm";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "outline";
  isExternal?: boolean;
  className?: string;
}

const Button = ({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  isExternal = false,
  className = "",
}: ButtonProps) => {
  const styles = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 lg:hover:scale-105",
    variant === "primary"
      ? "bg-primary text-white hover:bg-primary-700"
      : "border border-neutral-400 text-neutral-700 hover:border-primary hover:text-primary dark:border-neutral-600 dark:text-neutral-300",
    className,
  );

  if (href) {
    return (
      <Link
        href={href}
        className={styles}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
};

export default Button;
