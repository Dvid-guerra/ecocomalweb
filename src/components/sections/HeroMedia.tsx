"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import HeroSlideshow from "./HeroSlideshow";

/**
 * TODO: dato real pendiente — grabar y subir los archivos del hero.
 * Mientras no existan, el componente cae en el slideshow de fotos reales.
 */
const VIDEO_SRC = "/hero/ecocomal-loop.mp4";
const POSTER_SRC = "/hero/poster.jpg";

/** Ancho a partir del cual se considera que el usuario NO está en móvil. */
const ESCRITORIO_QUERY = "(min-width: 769px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/**
 * - `pendiente`: aún no se decide (SSR y primer pintado).
 * - `video`: escritorio, sin ahorro de datos y sin reducción de movimiento.
 * - `slideshow`: móvil o `saveData` — nunca se descarga el vídeo.
 * - `poster`: `prefers-reduced-motion` — imagen estática, sin vídeo.
 */
type ModoHero = "pendiente" | "video" | "slideshow" | "poster";

interface NetworkInformation {
  saveData?: boolean;
  effectiveType?: string;
}

/** El público rural navega con datos móviles: respetamos el ahorro de datos. */
function prefiereAhorroDeDatos(): boolean {
  const conexion = (
    navigator as Navigator & { connection?: NetworkInformation }
  ).connection;
  if (!conexion) return false;
  if (conexion.saveData === true) return true;
  return (
    conexion.effectiveType === "2g" || conexion.effectiveType === "slow-2g"
  );
}

export interface HeroMediaProps {
  className?: string;
}

export default function HeroMedia({ className = "" }: HeroMediaProps) {
  const [modo, setModo] = useState<ModoHero>("pendiente");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY);
    const escritorio = window.matchMedia(ESCRITORIO_QUERY);

    function resolver() {
      if (reducedMotion.matches) {
        setModo("poster");
        return;
      }
      if (!escritorio.matches || prefiereAhorroDeDatos()) {
        setModo("slideshow");
        return;
      }
      setModo("video");
    }

    resolver();
    reducedMotion.addEventListener("change", resolver);
    escritorio.addEventListener("change", resolver);
    return () => {
      reducedMotion.removeEventListener("change", resolver);
      escritorio.removeEventListener("change", resolver);
    };
  }, []);

  // El vídeo se monta con preload="none"; la descarga arranca solo aquí,
  // una vez que ya sabemos que el dispositivo y la conexión lo admiten.
  useEffect(() => {
    if (modo !== "video") return;
    const video = videoRef.current;
    if (!video) return;

    video.load();
    const reproduccion = video.play();
    if (reproduccion) {
      // Si el navegador bloquea el autoplay, queda el poster visible.
      reproduccion.catch(() => undefined);
    }
  }, [modo]);

  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`.trim()}>
      {modo === "slideshow" && <HeroSlideshow />}

      {modo === "poster" && (
        <Image
          src={POSTER_SRC}
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
      )}

      {modo === "video" && (
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          poster={POSTER_SRC}
          preload="none"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* Overlay de legibilidad: base sólida + degradado inferior. */}
      <div className="absolute inset-0 bg-grafito-900/65" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-grafito-900 via-grafito-900/40 to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}
