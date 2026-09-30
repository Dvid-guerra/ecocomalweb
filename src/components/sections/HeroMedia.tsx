import HeroSlideshow from "./HeroSlideshow";

export interface HeroMediaProps {
  className?: string;
}

/**
 * Fondo del hero: fotografías reales de instalaciones más el overlay que
 * garantiza la legibilidad del texto por encima.
 *
 * No usa vídeo a propósito. El público objetivo navega con datos móviles y un
 * loop en 1080p cuesta varios megas antes de que se lea la primera línea; las
 * fotos se sirven optimizadas y pesan una fracción de eso. Como ya no hay nada
 * que decidir en tiempo de ejecución, el componente es de servidor y no manda
 * JavaScript al cliente.
 */
export default function HeroMedia({ className = "" }: HeroMediaProps) {
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`.trim()}>
      <HeroSlideshow />

      {/*
        Overlay de legibilidad en tres capas. La capa plana se mantiene baja
        porque apaga la foto entera; el contraste del texto lo aportan los dos
        degradados, concentrados donde vive —abajo y a la izquierda—. Así la
        zona despejada queda luminosa sin que el titular pierda legibilidad.

        Medido sobre las tres fotos del slideshow: en el peor píxel de la zona
        de texto el contraste es 4.77:1, por encima del 4.5 que pide WCAG AA
        para el párrafo. Bajar más la capa plana o los degradados lo rompe.
      */}
      <div className="absolute inset-0 bg-grafito-900/18" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-grafito-900/88 via-grafito-900/22 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-grafito-900/68 via-grafito-900/18 to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}
