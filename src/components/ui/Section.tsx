import type { ReactNode } from "react";
import Container from "./Container";
import Reveal from "./Reveal";

/**
 * Fondos permitidos por la guía de marca: crema-50 (`default`), blanco
 * (`muted`), grafito-900 (`dark`) y oliva-700 (`oliva`). Nunca naranja.
 */
export type SectionVariant = "default" | "muted" | "dark" | "oliva";

export interface SectionProps {
  children: ReactNode;
  id?: string;
  variant?: SectionVariant;
  className?: string;
}

const variantClasses: Record<SectionVariant, string> = {
  default: "bg-crema-50 text-grafito-800",
  muted: "bg-white text-grafito-800",
  dark: "bg-grafito-900 text-crema-100",
  oliva: "bg-oliva-700 text-crema-100",
};

export default function Section({
  children,
  id,
  variant = "default",
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-section ${variantClasses[variant]} ${className}`.trim()}
    >
      <Container>
        <Reveal>{children}</Reveal>
      </Container>
    </section>
  );
}
