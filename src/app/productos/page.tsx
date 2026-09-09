import type { Metadata } from "next";
import { CheckCircle2, Flame, TreePine, Wind } from "lucide-react";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import IconCard from "@/components/ui/IconCard";
import Button from "@/components/ui/Button";
import PageHero from "@/components/sections/PageHero";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Productos",
  description:
    "Conoce los modelos de estufas ecológicas de leña de combustión mejorada que fabrica Ecocomal.",
};

// TODO: reemplazar con los modelos, fotos y especificaciones reales de Ecocomal.
const modelos = [
  {
    nombre: "Estufa compacta",
    descripcion: "TODO: agregar descripción del modelo.",
    caracteristicas: ["TODO: capacidad", "TODO: dimensiones", "TODO: materiales"],
  },
  {
    nombre: "Estufa familiar",
    descripcion: "TODO: agregar descripción del modelo.",
    caracteristicas: ["TODO: capacidad", "TODO: dimensiones", "TODO: materiales"],
  },
  {
    nombre: "Estufa comunitaria",
    descripcion: "TODO: agregar descripción del modelo.",
    caracteristicas: ["TODO: capacidad", "TODO: dimensiones", "TODO: materiales"],
  },
];

const beneficios = [
  {
    icon: Wind,
    title: "Menos humo en casa",
    description: "TODO: describir cómo la combustión mejorada reduce el humo dentro de la vivienda.",
  },
  {
    icon: TreePine,
    title: "Cuida la leña",
    description: "TODO: describir el uso más eficiente de la leña.",
  },
  {
    icon: Flame,
    title: "Cocción más pareja",
    description: "TODO: describir la experiencia de cocinar con la estufa.",
  },
];

export default function ProductosPage() {
  return (
    <>
      <PageHero
        eyebrow="Nuestros modelos"
        title="Productos"
        description="TODO: reemplazar con una introducción real al catálogo de estufas de Ecocomal."
      />

      <Section>
        <Heading eyebrow="Catálogo" subtitle="TODO: ajustar la introducción de esta sección.">
          Modelos de estufa
        </Heading>
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {modelos.map((modelo) => (
            <div
              key={modelo.nombre}
              className="group flex flex-col overflow-hidden rounded-2xl border border-verde-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-verde-200 hover:shadow-lg"
            >
              <div className="flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-verde-600 to-verde-800">
                <Flame
                  size={40}
                  className="text-white/80 transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {modelo.nombre}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{modelo.descripcion}</p>
                </div>
                <ul className="flex flex-col gap-2">
                  {modelo.caracteristicas.map((caracteristica) => (
                    <li key={caracteristica} className="flex items-center gap-2 text-sm text-muted">
                      <CheckCircle2 size={16} className="shrink-0 text-verde-600" />
                      {caracteristica}
                    </li>
                  ))}
                </ul>
                <Button href="/cotizacion" variant="secondary" size="sm" className="mt-auto">
                  Solicitar información
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <Heading eyebrow="Por qué elegirnos" subtitle="TODO: ajustar la introducción de esta sección.">
          Beneficios
        </Heading>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {beneficios.map((beneficio) => (
            <IconCard key={beneficio.title} {...beneficio} accent="naranja" />
          ))}
        </div>
      </Section>

      <CtaBand
        title="Encontrá la estufa para tu hogar"
        description="Contanos sobre tu vivienda y te recomendamos el modelo adecuado."
        ctaLabel="Solicitar cotización"
        ctaHref="/cotizacion"
      />
    </>
  );
}
