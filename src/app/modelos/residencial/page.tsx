import type { Metadata } from "next";
import Link from "next/link";
import { Flame, TreePine, Wind, Wrench } from "lucide-react";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import IconCard from "@/components/ui/IconCard";
import PageHero from "@/components/sections/PageHero";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Línea Residencial: estufas de leña para el hogar",
  description:
    "Estufas ecológicas de leña de Ecocomal para vivienda urbana y rural: menos humo dentro de la casa, menos consumo de leña e instalación acompañada en toda Guatemala.",
  alternates: { canonical: "/modelos/residencial" },
};

const beneficios = [
  {
    icon: Wind,
    title: "Aire más limpio en casa",
    description:
      "La chimenea canaliza el humo fuera de la vivienda, reduciendo la exposición diaria a partículas PM2.5 de quienes cocinan y de los niños.",
  },
  {
    icon: TreePine,
    title: "Menos leña, menos gasto",
    description:
      "La cámara de combustión aprovecha mejor cada carga, con una reducción de hasta 70% en el consumo respecto al fuego abierto.",
  },
  {
    icon: Flame,
    title: "Cocción estable",
    description:
      "Superficie de trabajo pareja y previsible, pensada para la forma real de cocinar de cada región del país.",
  },
  {
    icon: Wrench,
    title: "Instalación acompañada",
    description:
      "Nuestro equipo instala la estufa en el sitio y explica su uso y mantenimiento antes de retirarse.",
  },
];

const proceso = [
  {
    titulo: "Consulta",
    descripcion:
      "Nos escribes por el formulario indicando tu ubicación y cómo es tu cocina.",
  },
  {
    titulo: "Propuesta",
    descripcion:
      "Definimos el modelo adecuado y te enviamos la cotización con alcance y plazo.",
  },
  {
    titulo: "Instalación",
    descripcion:
      "Coordinamos la fecha, instalamos en sitio y verificamos el tiro de la chimenea.",
  },
  {
    titulo: "Uso y cuidado",
    descripcion:
      "Te explicamos el encendido, la carga de leña y el mantenimiento periódico.",
  },
];

export default function ResidencialPage() {
  return (
    <>
      <PageHero
        eyebrow="Línea residencial"
        title="La cocina de siempre, sin el humo de siempre"
        description="Una estufa de leña de combustión mejorada para vivienda urbana y rural: cuida la salud de quien cocina, el presupuesto de la familia y el bosque del que sale la leña."
      />

      <Section>
        <Heading
          eyebrow="Qué obtienes"
          subtitle="Lo que cambia en el día a día del hogar desde la primera semana de uso."
        >
          Beneficios para tu hogar
        </Heading>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {beneficios.map((beneficio) => (
            <IconCard key={beneficio.title} {...beneficio} />
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <Heading
          eyebrow="Cómo trabajamos"
          subtitle="Cuatro pasos, sin sorpresas ni costos ocultos."
        >
          Del primer mensaje a la primera comida
        </Heading>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {proceso.map((paso, index) => (
            <li key={paso.titulo} className="flex flex-col gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-oliva-700 font-display text-sm text-crema-50">
                {index + 1}
              </span>
              <h3 className="font-display text-lg uppercase tracking-tight text-grafito-900">
                {paso.titulo}
              </h3>
              <p className="text-sm leading-relaxed text-grafito-500">
                {paso.descripcion}
              </p>
            </li>
          ))}
        </ol>

        {/*
          TODO: dato real pendiente — peso y rango de precio por modelo. El
          resto de especificaciones ya está publicado en /modelos/catalogo,
          transcrito de las fichas técnicas oficiales.
        */}
        <p className="mt-12 text-sm text-grafito-500">
          Las especificaciones de cada modelo —estructura, comal, chimenea y
          reducción de emisiones— están en el{" "}
          <Link
            href="/modelos/catalogo"
            className="font-medium text-oliva-700 underline underline-offset-4 transition-colors hover:text-grafito-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oliva-700"
          >
            catálogo de modelos
          </Link>
          .
        </p>
      </Section>

      <CtaBand
        title="¿Quieres una estufa Ecocomal en tu casa?"
        description="Cuéntanos dónde vives y cómo es tu cocina; te respondemos con la opción adecuada."
        ctaLabel="Solicitar cotización residencial"
        ctaHref="/contacto#formulario"
        secondaryLabel="Ver proyectos masivos"
        secondaryHref="/modelos/proyectos"
      />
    </>
  );
}
