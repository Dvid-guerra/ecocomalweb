import type { ReactNode } from "react";
import Container from "./Container";
import Reveal from "./Reveal";

export interface SectionProps {
  children: ReactNode;
  id?: string;
  variant?: "default" | "muted";
  className?: string;
}

export default function Section({
  children,
  id,
  variant = "default",
  className = "",
}: SectionProps) {
  const background = variant === "muted" ? "bg-verde-50" : "";

  return (
    <section id={id} className={`py-section ${background} ${className}`.trim()}>
      <Container>
        <Reveal>{children}</Reveal>
      </Container>
    </section>
  );
}
