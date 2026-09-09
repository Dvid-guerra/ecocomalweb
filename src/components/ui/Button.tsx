import Link from "next/link";
import type { ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "cta" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  target?: string;
  rel?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "rounded-md bg-verde-600 text-white shadow-verde-900/10 hover:bg-verde-700",
  secondary: "rounded-md border border-verde-600 text-verde-700 shadow-none hover:bg-verde-50",
  ghost: "rounded-md text-verde-700 shadow-none hover:bg-verde-50",
  cta: "rounded-full bg-naranja-500 text-ink font-display uppercase tracking-wide shadow-naranja-900/20 hover:bg-naranja-600",
  outline: "rounded-full border border-white/40 text-white shadow-none hover:bg-white/10",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-7 py-3.5 text-lg",
};

const baseClasses =
  "inline-flex items-center justify-center font-medium shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-sm disabled:translate-y-0 disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  type = "button",
  onClick,
  disabled,
  target,
  rel,
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
