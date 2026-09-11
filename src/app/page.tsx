import type { Metadata } from "next";
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
    "15 años fabricando e instalando estufas ecológicas de leña en Guatemala. Capacidad industrial para licitaciones públicas, ONG y constructoras, y línea residencial con instalación acompañada.",
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
            <h1 className="font-display text-[2rem] font-semibold uppercase leading-[1.05] tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
              15 años transformando la energía rural en Guatemala
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-crema-100 sm:mt-6 sm:text-lg">
              Ingeniería que protege la salud, la economía y los bosques.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/modelos/proyectos" variant="cta" size="lg">
                Proyectos institucionales y licitaciones
              </Button>
              <Button href="/modelos/residencial" variant="outline" size="lg">
                Línea residencial
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
