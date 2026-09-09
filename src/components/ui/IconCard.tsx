import type { LucideIcon } from "lucide-react";

export type IconCardAccent = "verde" | "naranja";

export interface IconCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accent?: IconCardAccent;
  className?: string;
}

const accentClasses: Record<IconCardAccent, string> = {
  verde: "bg-gradient-to-br from-verde-500 to-verde-700 text-white shadow-verde-900/20",
  naranja: "bg-gradient-to-br from-naranja-400 to-naranja-600 text-white shadow-naranja-900/20",
};

export default function IconCard({
  icon: Icon,
  title,
  description,
  accent = "verde",
  className = "",
}: IconCardProps) {
  return (
    <div
      className={`group rounded-2xl border border-verde-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-verde-200 hover:shadow-lg ${className}`.trim()}
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-full shadow-sm transition-transform duration-300 group-hover:scale-105 ${accentClasses[accent]}`}
      >
        <Icon size={22} />
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm text-muted">{description}</p>
    </div>
  );
}
