import type { Metadata } from "next";
import { Flame } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import RoofDivider from "@/components/ui/RoofDivider";
import HeroMedia from "@/components/sections/HeroMedia";
import ContadorImpacto from "@/components/sections/ContadorImpacto";
import ManifiestoPilares from "@/components/sections/ManifiestoPilares";
import CapacidadIndustrial from "@/components/sections/CapacidadIndustrial";
import FranjaAlianzas from "@/components/sections/FranjaAlianzas";
import SeccionContacto from "@/components/sections/SeccionContacto";

export const metadata: Metadata = {
  title: "Estufas ecológicas de leña para proyectos y hogares en Guatemala",
  description:
    "Más de 15 años fabricando e instalando estufas ecológicas de leña en Guatemala. Capacidad industrial para licitaciones públicas, ONG y constructoras, y línea residencial con instalación acompañada.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      {/* SECCIÓN 1 — Hero */}
      <section className="relative isolate flex min-h-[78vh] items-end overflow-hidden pb-16 pt-28 sm:min-h-[88vh] sm:items-center sm:py-32">
        <HeroMedia />

        <RoofDivider className="pointer-events-none absolute bottom-0 right-0 h-auto w-[55%] text-crema-50 opacity-[0.05]" />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display text-[2rem] font-semibold uppercase leading-[1.05] tracking-tight text-balance text-white [text-shadow:0_2px_12px_rgb(22_25_28_/_0.45)] sm:text-5xl lg:text-6xl">
              Más de 15 años cambiando la forma de cocinar en Guatemala
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white [text-shadow:0_1px_8px_rgb(22_25_28_/_0.5)] sm:mt-6 sm:text-lg">
              Ingeniería que protege la salud, la economía y los bosques.
            </p>

            {/* Dato de venta principal: va antes del CTA para que se lea como
                razón para pulsarlo, no como pie de página del titular. */}
            {/* Ficha de dato, no frase: la cifra manda por jerarquía y por la
                barra de acento, no por tamaño. El naranja como superficie
                queda reservado a los CTA, así que aquí solo marca el filo. */}
            <p className="mt-7 inline-flex items-center gap-4 rounded-r-md border-l-4 border-naranja-500 bg-grafito-900/60 py-3 pl-4 pr-6 backdrop-blur-sm">
              <Flame
                size={30}
                strokeWidth={1.75}
                aria-hidden="true"
                className="shrink-0 text-naranja-400"
              />
              <span className="flex flex-col">
                <span className="font-display text-2xl font-semibold uppercase leading-none tracking-tight text-naranja-300 sm:text-3xl">
                  Hasta 60%
                </span>{" "}
                <span className="mt-1.5 font-display text-xs uppercase leading-none tracking-[0.18em] text-crema-100 sm:text-sm">
                  menos consumo de leña
                </span>
              </span>
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/modelos/proyectos" variant="cta" size="lg">
                Proyectos institucionales y licitaciones
              </Button>
              <Button href="/modelos/residencial" variant="outline" size="lg">
                Adquiere la tuya
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* SECCIÓN 2 — Tablero de Impacto Colectivo */}
      <ContadorImpacto />

      {/* SECCIÓN 3 — Manifiesto de los 4 Pilares */}
      <ManifiestoPilares id="pilares" />

      {/* SECCIÓN 4 — Capacidad Industrial y de Respuesta */}
      <CapacidadIndustrial />

      {/* SECCIÓN 5 — Franja de Alianzas */}
      <FranjaAlianzas />

      {/* SECCIÓN 6 — Formulario de Contacto y Licitaciones */}
      <SeccionContacto />
    </>
  );
}
