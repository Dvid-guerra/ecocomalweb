import Link from "next/link";
import type { ReactNode } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "cta"
  | "outline";
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
  /** Fuerza la descarga del recurso en lugar de navegar hacia él. */
  download?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  // Superficie corporativa sobria: oliva profundo sobre fondos claros.
  primary:
    "rounded-md bg-oliva-700 text-crema-50 shadow-grafito-900/10 hover:bg-oliva-900 focus-visible:outline-oliva-700",
  secondary:
    "rounded-md border border-grafito-300 text-grafito-800 shadow-none hover:border-grafito-700 hover:bg-grafito-50 focus-visible:outline-grafito-700",
  ghost:
    "rounded-md text-grafito-700 shadow-none hover:bg-grafito-100 focus-visible:outline-grafito-700",
  // Único uso permitido del naranja como superficie: llamados a la acción.
  cta: "rounded-md bg-naranja-500 text-grafito-900 font-display uppercase tracking-wide shadow-grafito-900/20 hover:bg-naranja-600 focus-visible:outline-naranja-600",
  // Para colocar sobre fondos oscuros (grafito-900 / oliva-700).
  outline:
    "rounded-md border border-crema-100/50 text-crema-50 shadow-none hover:bg-crema-50/10 focus-visible:outline-crema-50",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3.5 py-2 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-7 py-3.5 text-base sm:text-lg",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 text-center font-medium shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-sm disabled:translate-y-0 disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2";

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
  download,
}: ButtonProps) {
  const classes =
    `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={target}
        rel={rel}
        download={download}
      >
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
