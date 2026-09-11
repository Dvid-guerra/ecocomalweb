/** Sobre fondos claros (`light`) u oscuros: grafito-900 / oliva-700 (`dark`). */
export type HeadingTone = "light" | "dark";

export interface HeadingProps {
  children: string;
  eyebrow?: string;
  subtitle?: string;
  tone?: HeadingTone;
  /** Renderiza el titular como h1 en las cabeceras de página. */
  as?: "h1" | "h2";
  className?: string;
}

const toneClasses: Record<
  HeadingTone,
  { eyebrow: string; rule: string; title: string; subtitle: string }
> = {
  light: {
    eyebrow: "text-oliva-700",
    rule: "bg-naranja-500",
    title: "text-grafito-900",
    subtitle: "text-grafito-500",
  },
  dark: {
    eyebrow: "text-crema-100",
    rule: "bg-naranja-500",
    title: "text-crema-50",
    subtitle: "text-crema-100/85",
  },
};

export default function Heading({
  children,
  eyebrow,
  subtitle,
  tone = "light",
  as: Tag = "h2",
  className = "",
}: HeadingProps) {
  const colors = toneClasses[tone];

  return (
    <div className={className}>
      {eyebrow && (
        <p
          className={`mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] sm:text-sm ${colors.eyebrow}`}
        >
          <span className={`h-px w-8 shrink-0 ${colors.rule}`} aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <Tag
        className={`font-display text-[1.75rem] font-semibold uppercase leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl ${colors.title}`}
      >
        {children}
      </Tag>
      {subtitle && (
        <p className={`mt-4 max-w-2xl text-base sm:text-lg ${colors.subtitle}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
