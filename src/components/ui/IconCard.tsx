import type { LucideIcon } from "lucide-react";

/** `light` = tarjeta sobre fondo claro; `dark` = sobre oliva-700 o grafito-900. */
export type IconCardTone = "light" | "dark";

export interface IconCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  tone?: IconCardTone;
  className?: string;
}

const toneClasses: Record<
  IconCardTone,
  { card: string; icon: string; title: string; description: string }
> = {
  light: {
    card: "border-grafito-100 bg-white hover:border-oliva-300",
    // El naranja se usa solo en el icono: superficie mínima.
    icon: "bg-crema-100 text-naranja-600",
    title: "text-grafito-900",
    description: "text-grafito-500",
  },
  dark: {
    card: "border-crema-50/15 bg-crema-50/5 hover:border-crema-50/30",
    icon: "bg-crema-50/10 text-naranja-500",
    title: "text-crema-50",
    description: "text-crema-100/80",
  },
};

export default function IconCard({
  icon: Icon,
  title,
  description,
  tone = "light",
  className = "",
}: IconCardProps) {
  const colors = toneClasses[tone];

  return (
    <div
      className={`group flex h-full flex-col rounded-lg border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${colors.card} ${className}`.trim()}
    >
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md transition-transform duration-300 group-hover:scale-105 ${colors.icon}`}
      >
        <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
      </div>
      <h3
        className={`mt-5 font-display text-lg uppercase tracking-tight text-balance ${colors.title}`}
      >
        {title}
      </h3>
      <p className={`mt-3 text-sm leading-relaxed ${colors.description}`}>
        {description}
      </p>
    </div>
  );
}
