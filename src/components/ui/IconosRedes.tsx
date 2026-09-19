import type { ReactNode } from "react";

/**
 * Marcas de redes sociales dibujadas a mano: lucide-react dejó de incluir
 * iconos de marca a partir de la v1, así que no hay dónde importarlos. El
 * trazo (viewBox 24, stroke 1.75, extremos redondeados) replica el de lucide
 * para que convivan con el resto de iconos del sitio.
 */

export interface IconoRedProps {
  size?: number;
  className?: string;
}

function TrazoBase({
  size = 20,
  className,
  children,
}: IconoRedProps & { children: ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function IconoInstagram(props: IconoRedProps) {
  return (
    <TrazoBase {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </TrazoBase>
  );
}

export function IconoFacebook(props: IconoRedProps) {
  return (
    <TrazoBase {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </TrazoBase>
  );
}

export function IconoTikTok(props: IconoRedProps) {
  return (
    <TrazoBase {...props}>
      <path d="M21 7.9v4.04a9.95 9.95 0 0 1-5-1.95v4.5a6.5 6.5 0 1 1-8-6.33v4.33a2.5 2.5 0 1 0 4 2V3h4.08A6 6 0 0 0 21 7.9z" />
    </TrazoBase>
  );
}

export type ComponenteIconoRed = (props: IconoRedProps) => ReactNode;
