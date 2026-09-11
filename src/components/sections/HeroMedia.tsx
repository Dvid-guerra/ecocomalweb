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
        Overlay de legibilidad en tres capas. El oscurecimiento se concentra
        donde vive el texto —abajo y a la izquierda— en vez de aplicarse plano
        sobre toda la foto: así el titular mantiene contraste y la instalación
        sigue viéndose. Subir estos valores a la vez vuelve a tapar la imagen.
      */}
      <div className="absolute inset-0 bg-grafito-900/40" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-grafito-900 via-grafito-900/35 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-grafito-900/75 via-grafito-900/30 to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}
