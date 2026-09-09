"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";

export interface Foto {
  src: string;
  alt: string;
}

const FOTOS: Foto[] = [
  {
    src: "/hero/instalacion-1.JPG",
    alt: "Instalación de estufa Ecocomal en vivienda",
  },
  {
    src: "/hero/instalacion-2.JPG",
    alt: "Instalación de estufa Ecocomal en vivienda",
  },
  {
    src: "/hero/instalacion-3.JPG",
    alt: "Instalación de estufa Ecocomal en vivienda",
  },
];

const DURACION = 6000;

function subscribeToReducedMotion(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getPrefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getPrefersReducedMotionServer() {
  return false;
}

export default function HeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getPrefersReducedMotion,
    getPrefersReducedMotionServer
  );
  const motionEnabled = !prefersReducedMotion;

  useEffect(() => {
    if (!motionEnabled || FOTOS.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % FOTOS.length);
    }, DURACION);

    return () => clearInterval(interval);
  }, [motionEnabled]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {FOTOS.map((foto, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={foto.src}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={foto.src}
              alt={foto.alt}
              fill
              sizes="100vw"
              priority={index === 0}
              loading={index === 0 ? undefined : "eager"}
              className={`object-cover ${
                isActive && motionEnabled ? "animate-kenburns" : ""
              }`}
            />
          </div>
        );
      })}

      <div className="absolute inset-0 bg-gradient-to-r from-verde-900/85 via-verde-900/40 to-verde-900/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-verde-900/70 via-transparent to-transparent" />
    </div>
  );
}
