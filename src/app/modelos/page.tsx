import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Home as HomeIcon } from "lucide-react";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import PageHero from "@/components/sections/PageHero";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Modelos y Soluciones: línea residencial y proyectos masivos",
  description:
    "Dos líneas de trabajo de Ecocomal: estufas ecológicas de leña para vivienda residencial e implementaciones masivas y personalizadas para instituciones, ONG y constructoras.",
  alternates: { canonical: "/modelos" },
};

const lineas = [
  {
    href: "/modelos/residencial",
    icon: HomeIcon,
    titulo: "Línea Residencial",
    resumen:
      "Para familias, constructoras y desarrollos de vivienda que necesitan una solución de cocción eficiente, limpia y duradera.",
    puntos: [
      "Instalación acompañada y orientación de uso",
      "Diseño adaptado al espacio de la cocina",
      "Ahorro inmediato en consumo de leña",
    ],
  },
  {
    href: "/modelos/proyectos",
    icon: Building2,
    titulo: "Proyectos Masivos y Personalizados",
    resumen:
      "Para juntas de licitación, ministerios, municipalidades, ONG y cooperantes que ejecutan programas de vivienda, salud o medio ambiente.",
    puntos: [
      "Producción por lotes con trazabilidad",
      "Diseño personalizado por región y hábito culinario",
      "Logística e instalación a nivel nacional",
    ],
  },
];

export default function ModelosPage() {
  return (
    <>
      <PageHero
        eyebrow="Modelos y soluciones"
        title="Una misma ingeniería, dos escalas de implementación"
        description="Trabajamos con el mismo criterio técnico para una cocina o para diez mil. Lo que cambia es la logística, el diseño a medida y el esquema de acompañamiento."
      />

      <Section>
        <Heading
          eyebrow="Elige tu línea"
          subtitle="Selecciona el escenario que corresponde a tu necesidad para ver el alcance del servicio."
        >
          Dos líneas de trabajo
        </Heading>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {lineas.map((linea) => {
            const Icon = linea.icon;

            return (
              <Link
                key={linea.href}
                href={linea.href}
                className="group flex h-full flex-col rounded-lg border border-grafito-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-oliva-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oliva-700 sm:p-8"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-crema-100 text-naranja-600">
                  <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                </span>

                <h2 className="mt-5 font-display text-xl uppercase leading-tight tracking-tight text-balance text-grafito-900 sm:text-2xl">
                  {linea.titulo}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-grafito-500">
                  {linea.resumen}
                </p>

                <ul className="mt-6 flex flex-col gap-2.5 border-t border-grafito-100 pt-6">
                  {linea.puntos.map((punto) => (
                    <li
                      key={punto}
                      className="flex items-start gap-2.5 text-sm text-grafito-700"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-naranja-500"
                        aria-hidden="true"
                      />
                      {punto}
                    </li>
                  ))}
                </ul>

                <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-oliva-700 transition-colors group-hover:text-grafito-900">
                  Ver el detalle
                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            );
          })}
        </div>

        <p className="mt-10 text-sm text-grafito-500">
          ¿Buscas materiales, medidas y reducción de emisiones?{" "}
          <Link
            href="/modelos/catalogo"
            className="font-medium text-oliva-700 underline underline-offset-4 transition-colors hover:text-grafito-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oliva-700"
          >
            Consulta el catálogo de modelos
          </Link>
          .
        </p>
      </Section>

      <CtaBand
        title="¿No sabes cuál de las dos líneas aplica a tu caso?"
        description="Cuéntanos el alcance y te orientamos sin compromiso."
        ctaLabel="Consultar con el equipo"
        ctaHref="/contacto#formulario"
      />
    </>
  );
}
