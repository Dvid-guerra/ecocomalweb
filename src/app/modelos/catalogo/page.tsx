import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import PageHero from "@/components/sections/PageHero";
import CtaBand from "@/components/sections/CtaBand";
import { MODELOS } from "@/data/catalogo";

export const metadata: Metadata = {
  title: "Catálogo de modelos: Ecocina, Ecocomal y Ecoplancha Superior",
  description:
    "Especificaciones técnicas de las estufas ecológicas de leña de Ecocomal: Ecocina, Ecocina con Chimenea, Ecocomal y Ecoplancha Superior. Materiales, medidas y reducción de emisiones de cada modelo.",
  alternates: { canonical: "/modelos/catalogo" },
};

export default function CatalogoPage() {
  return (
    <>
      <PageHero
        eyebrow="Catálogo de modelos"
        title="Cuatro modelos, una misma ingeniería de combustión"
        description="Todos comparten cámara de combustión de ladrillo refractario y aislante de arena pómez. Lo que cambia es el cuerpo, la superficie de cocción y la evacuación del humo."
      />

      <Section>
        <Heading
          eyebrow="Especificaciones"
          subtitle="Los datos de esta página están tomados de las fichas técnicas oficiales de Ecocomal, enlazadas en cada modelo."
        >
          Modelos disponibles
        </Heading>

        <div className="mt-12 flex flex-col gap-8 sm:gap-12">
          {MODELOS.map((modelo) => (
            <article
              key={modelo.slug}
              id={modelo.slug}
              className="grid scroll-mt-24 gap-8 rounded-lg border border-grafito-100 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-12"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md bg-crema-100">
                <Image
                  src={modelo.foto}
                  alt={modelo.fotoAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 38vw"
                  className="object-contain p-5"
                />
              </div>

              <div>
                <h2 className="font-display text-xl uppercase leading-tight tracking-tight text-balance text-grafito-900 sm:text-2xl">
                  {modelo.nombre}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-grafito-500 sm:text-base">
                  {modelo.resumen}
                </p>

                {/* Una columna por métrica: con tres, la rejilla no debe dejar
                    una celda vacía al final. */}
                <ul
                  className={`mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-md bg-grafito-100 ${
                    modelo.metricas.length === 4 ? "sm:grid-cols-4" : "sm:grid-cols-3"
                  }`}
                >
                  {modelo.metricas.map((metrica) => (
                    <li key={metrica.etiqueta} className="bg-crema-50 px-3 py-4">
                      <p className="font-display text-lg tracking-tight text-oliva-700 sm:text-xl">
                        {metrica.valor}
                      </p>
                      <p className="mt-1 text-xs leading-snug text-grafito-500">
                        {metrica.etiqueta}
                      </p>
                    </li>
                  ))}
                </ul>

                <dl className="mt-6 flex flex-col gap-4 border-t border-grafito-100 pt-6">
                  {modelo.especificaciones.map((especificacion) => (
                    <div key={especificacion.termino} className="sm:flex sm:gap-4">
                      <dt className="shrink-0 text-sm font-semibold text-grafito-900 sm:w-44">
                        {especificacion.termino}
                      </dt>
                      <dd className="mt-1 text-sm leading-relaxed text-grafito-700 sm:mt-0">
                        {especificacion.detalle}
                      </dd>
                    </div>
                  ))}
                </dl>

                <a
                  href={modelo.ficha}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-oliva-700 underline-offset-4 transition-colors hover:text-grafito-900 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oliva-700"
                >
                  Ver ficha técnica de {modelo.nombre}
                  <ExternalLink size={15} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        title="¿Necesitas otra configuración?"
        description="Adaptamos comal, plancha y estructura a los hábitos culinarios de cada región. Cuéntanos el alcance y te proponemos el modelo adecuado."
        ctaLabel="Solicitar cotización"
        ctaHref="/contacto#formulario"
        secondaryLabel="Ver proyectos masivos"
        secondaryHref="/modelos/proyectos"
      />
    </>
  );
}
