"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Container from "@/components/ui/Container";

export interface CifraImpacto {
  id: string;
  /** Texto que precede al número, p. ej. "Hasta". */
  prefijo?: string;
  valor: number;
  /** Texto que sigue al número, p. ej. "+" o "%". */
  sufijo?: string;
  etiqueta: string;
}

/**
 * Punto único de edición de las cifras del tablero de impacto.
 * TODO: fuente y año de las cifras — confirmar con el cliente.
 */
const CIFRAS: CifraImpacto[] = [
  {
    id: "anios",
    valor: 15,
    sufijo: "+",
    etiqueta: "Años de innovación tecnológica y fabricación nacional",
  },
  {
    id: "hogares",
    valor: 30000,
    sufijo: "+",
    etiqueta: "Hogares e historias transformadas en todo el país",
  },
  {
    id: "ahorro",
    prefijo: "Hasta",
    valor: 70,
    sufijo: "%",
    etiqueta: "De ahorro promedio en el consumo de leña",
  },
];

const DURACION_MS = 1600;
const formateador = new Intl.NumberFormat("es-GT");

/** Desaceleración suave para que el conteo no termine de golpe. */
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(callback: () => void) {
  const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getPrefersReducedMotion() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

/** En el servidor no hay preferencia: se emite el número final en el HTML. */
function getPrefersReducedMotionServer() {
  return true;
}

export default function ContadorImpacto() {
  const ref = useRef<HTMLDivElement>(null);
  const [progreso, setProgreso] = useState(0);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getPrefersReducedMotion,
    getPrefersReducedMotionServer
  );
  // Con movimiento reducido (o sin JS) se muestra el número final directo.
  const animacionActiva = !prefersReducedMotion;

  useEffect(() => {
    const nodo = ref.current;
    if (!nodo || prefersReducedMotion) return;

    let frameId = 0;
    let timeoutId = 0;

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) return;
        observador.disconnect(); // Una sola vez.

        // El origen se toma del primer frame: el timestamp de rAF corresponde
        // al inicio del frame en curso y puede ser anterior a performance.now(),
        // lo que dejaría el conteo en negativo durante el primer tick.
        let inicio: number | null = null;

        // Red de seguridad: si el navegador deja de entregar frames a media
        // animación (pestaña en segundo plano), la cifra se quedaría congelada
        // en un valor intermedio. Este temporizador garantiza el valor final.
        timeoutId = window.setTimeout(() => {
          cancelAnimationFrame(frameId);
          setProgreso(1);
        }, DURACION_MS + 500);

        const paso = (ahora: number) => {
          inicio ??= ahora;
          const t = Math.min(Math.max((ahora - inicio) / DURACION_MS, 0), 1);
          setProgreso(easeOutCubic(t));
          if (t < 1) {
            frameId = requestAnimationFrame(paso);
          } else {
            window.clearTimeout(timeoutId);
          }
        };
        frameId = requestAnimationFrame(paso);
      },
      { threshold: 0.35 }
    );

    observador.observe(nodo);
    return () => {
      observador.disconnect();
      cancelAnimationFrame(frameId);
      window.clearTimeout(timeoutId);
    };
  }, [prefersReducedMotion]);

  return (
    <section
      aria-labelledby="tablero-impacto"
      className="bg-grafito-900 py-14 sm:py-20"
    >
      <Container>
        <h2 id="tablero-impacto" className="sr-only">
          Impacto colectivo de Ecocomal
        </h2>

        <div
          ref={ref}
          className="grid gap-10 text-center sm:grid-cols-3 sm:gap-8 sm:text-left"
        >
          {CIFRAS.map((cifra) => {
            // Sin JS (o antes de hidratar) el valor final ya está en el HTML.
            const mostrado = animacionActiva
              ? Math.round(cifra.valor * progreso)
              : cifra.valor;

            return (
              <div key={cifra.id} className="flex flex-col gap-3">
                <p className="font-display text-4xl font-semibold uppercase leading-none tracking-tight text-naranja-500 sm:text-5xl lg:text-6xl">
                  {/* El lector de pantalla anuncia la cifra final, no el conteo. */}
                  <span className="sr-only">
                    {cifra.prefijo ? `${cifra.prefijo} ` : ""}
                    {formateador.format(cifra.valor)}
                    {cifra.sufijo}
                  </span>
                  <span aria-hidden="true">
                    {cifra.prefijo && (
                      <span className="mr-2 text-2xl sm:text-3xl lg:text-4xl">
                        {cifra.prefijo}
                      </span>
                    )}
                    {formateador.format(mostrado)}
                    {cifra.sufijo}
                  </span>
                </p>
                <p className="mx-auto max-w-xs text-sm leading-relaxed text-crema-100 sm:mx-0 sm:text-base">
                  {cifra.etiqueta}
                </p>
              </div>
            );
          })}
        </div>

        {/*
          TODO: dato real pendiente — fuente y año de las cifras. Cuando el
          cliente los confirme, reponer aquí la nota al pie:
          <p className="mt-10 text-center text-[11px] leading-relaxed text-grafito-300 sm:text-left">
            Fuente: …, 20XX.
          </p>
          Hasta entonces no se publica nada: una cifra de impacto sin fuente es
          mejor dejarla sin atribuir que atribuirla mal.
        */}
      </Container>
    </section>
  );
}
