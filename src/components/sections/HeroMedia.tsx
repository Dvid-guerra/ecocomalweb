import HeroSlideshow from "./HeroSlideshow";

export interface HeroMediaProps {
  className?: string;
}

/**
 * Fondo del hero: fotografías reales de instalaciones, sin overlay.
 *
 * No usa vídeo a propósito. El público objetivo navega con datos móviles y un
 * loop en 1080p cuesta varios megas antes de que se lea la primera línea; las
 * fotos se sirven optimizadas y pesan una fracción de eso. Como ya no hay nada
 * que decidir en tiempo de ejecución, el componente es de servidor y no manda
 * JavaScript al cliente.
 *
 * Las capas de oscurecimiento se retiraron por decisión de diseño: la foto se
 * ve tal cual. La legibilidad del titular queda a cargo de la sombra de texto
 * que aplica el propio hero en app/page.tsx; sobre las zonas claras de las
 * fotos el contraste baja de lo que pide WCAG AA, así que si se vuelve a
 * necesitar margen, el sitio donde reponerlo es aquí.
 */
export default function HeroMedia({ className = "" }: HeroMediaProps) {
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`.trim()}>
      <HeroSlideshow />
    </div>
  );
}
