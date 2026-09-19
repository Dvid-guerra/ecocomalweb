"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface Foto {
  src: string;
  alt: string;
}

/** Sobre fondos oscuros (`oscuro`) los controles se dibujan en crema. */
export type CarruselTono = "claro" | "oscuro";

export interface CarruselProps {
  fotos: Foto[];
  /** Descripción del conjunto para lectores de pantalla. */
  etiqueta: string;
  /** Valor del atributo `sizes` de next/image. */
  sizes: string;
  tono?: CarruselTono;
  /** `contain` para recortes de producto; `cover` para fotografía de ambiente. */
  ajuste?: "cover" | "contain";
  /** Clases del marco: proporción, fondo y bordes los define quien lo usa. */
  className?: string;
}

const tonoClasses: Record<CarruselTono, { control: string; punto: string; puntoActivo: string }> = {
  claro: {
    control:
      "bg-crema-50/90 text-grafito-800 hover:bg-crema-50 focus-visible:outline-oliva-700",
    punto: "bg-grafito-900/25 hover:bg-grafito-900/50",
    puntoActivo: "bg-naranja-500",
  },
  oscuro: {
    control:
      "bg-grafito-900/60 text-crema-50 hover:bg-grafito-900/85 focus-visible:outline-crema-50",
    punto: "bg-crema-50/35 hover:bg-crema-50/60",
    puntoActivo: "bg-naranja-500",
  },
};

/**
 * Galería de una sola foto visible con flechas de avance y retroceso. Con una
 * única fotografía los controles desaparecen y se comporta como una imagen
 * normal, así que sirve igual para bloques con una o con varias fotos.
 */
export default function Carrusel({
  fotos,
  etiqueta,
  sizes,
  tono = "claro",
  ajuste = "cover",
  className = "",
}: CarruselProps) {
  const [indice, setIndice] = useState(0);
  const total = fotos.length;
  const colors = tonoClasses[tono];

  const ir = (delta: number) => setIndice((actual) => (actual + delta + total) % total);

  return (
    <div
      role="group"
      aria-roledescription="carrusel"
      aria-label={etiqueta}
      className={`relative overflow-hidden ${className}`.trim()}
    >
      {fotos.map((foto, i) => {
        const activa = i === indice;

        return (
          <Image
            key={foto.src}
            src={foto.src}
            alt={foto.alt}
            fill
            sizes={sizes}
            aria-hidden={!activa}
            className={`${ajuste === "cover" ? "object-cover" : "object-contain"} transition-opacity duration-500 ease-out motion-reduce:transition-none ${
              activa ? "opacity-100" : "opacity-0"
            }`}
          />
        );
      })}

      {total > 1 && (
        <>
          {/* El índice se anuncia aparte para que el lector de pantalla no
              tenga que releer el alt completo en cada avance. */}
          <p className="sr-only" aria-live="polite">
            Foto {indice + 1} de {total}
          </p>

          <button
            type="button"
            onClick={() => ir(-1)}
            aria-label="Foto anterior"
            className={`absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full shadow-sm backdrop-blur-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${colors.control}`}
          >
            <ChevronLeft size={20} strokeWidth={2} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => ir(1)}
            aria-label="Foto siguiente"
            className={`absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full shadow-sm backdrop-blur-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${colors.control}`}
          >
            <ChevronRight size={20} strokeWidth={2} aria-hidden="true" />
          </button>

          <div className="absolute inset-x-0 bottom-3 z-10 flex justify-center gap-1.5">
            {fotos.map((foto, i) => (
              <button
                key={foto.src}
                type="button"
                onClick={() => setIndice(i)}
                aria-label={`Ver foto ${i + 1} de ${total}`}
                aria-current={i === indice}
                className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  i === indice ? `w-5 ${colors.puntoActivo}` : `w-1.5 ${colors.punto}`
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
