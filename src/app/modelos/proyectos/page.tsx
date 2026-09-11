import type { Metadata } from "next";
import { ClipboardCheck, Layers, Route, Users } from "lucide-react";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import IconCard from "@/components/ui/IconCard";
import PageHero from "@/components/sections/PageHero";
import CapacidadIndustrial from "@/components/sections/CapacidadIndustrial";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Proyectos Masivos y Personalizados para instituciones",
  description:
    "Ecocomal ejecuta programas de estufas ecológicas a gran escala para juntas de licitación, ministerios, municipalidades, ONG y constructoras: producción por lotes, diseño personalizado y logística nacional.",
  alternates: { canonical: "/modelos/proyectos" },
};

const capacidades = [
  {
    icon: Layers,
    title: "Producción por lotes",
    description:
      "Fabricación escalonada con control de calidad por lote, para sostener cronogramas de entrega de miles de unidades.",
  },
  {
    icon: Route,
    title: "Logística nacional",
    description:
      "Transporte propio y rutas hacia comunidades rurales, incluyendo zonas de acceso complejo.",
  },
  {
    icon: ClipboardCheck,
    title: "Documentación de respaldo",
    description:
      "Soporte documental para expedientes de evaluación, actas de entrega y seguimiento del avance del contrato.",
  },
  {
    icon: Users,
    title: "Equipos de instalación",
    description:
      "Cuadrillas capacitadas que instalan en sitio y orientan a cada familia beneficiaria en el uso de la estufa.",
  },
];

const perfiles = [
  {
    titulo: "Juntas de licitación y entidades de Estado",
    descripcion:
      "Ministerios, secretarías y municipalidades que ejecutan programas de vivienda, salud, ambiente o desarrollo rural.",
  },
  {
    titulo: "ONG y cooperación internacional",
    descripcion:
      "Organismos que requieren indicadores de impacto verificables y trazabilidad del beneficiario final.",
  },
  {
    titulo: "Constructoras y desarrolladores",
    descripcion:
      "Proyectos de vivienda social o desarrollos habitacionales que integran la estufa como parte del entregable.",
  },
];

const etapas = [
  {
    titulo: "Levantamiento del requerimiento",
    descripcion:
      "Volumen estimado, cobertura geográfica, plazos del programa y condiciones de las bases del concurso.",
  },
  {
    titulo: "Diseño y personalización",
    descripcion:
      "Ajuste de comales y estructura al hábito culinario de la región de intervención.",
  },
  {
    titulo: "Propuesta técnica y económica",
    descripcion:
      "Alcance, cronograma de producción y entrega, y documentación de respaldo para el expediente.",
  },
  {
    titulo: "Ejecución y entrega",
    descripcion:
      "Producción por lotes, distribución, instalación en sitio y reporte de avance por comunidad.",
  },
];

export default function ProyectosPage() {
  return (
    <>
      <PageHero
        eyebrow="Proyectos masivos y personalizados"
        title="Ejecución a escala, con respaldo verificable"
        description="Acompañamos a instituciones públicas, cooperantes y constructoras en programas donde el compromiso no es una estufa, sino miles de unidades entregadas e instaladas dentro de plazo."
      />

      <Section>
        <Heading
          eyebrow="Capacidad operativa"
          subtitle="Lo que hace posible comprometer volumen, plazo y trazabilidad."
        >
          Cuatro capacidades que sostienen el contrato
        </Heading>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capacidades.map((capacidad) => (
            <IconCard key={capacidad.title} {...capacidad} />
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <Heading
          eyebrow="Con quién trabajamos"
          subtitle="Perfiles institucionales que han implementado programas con nuestras estufas."
        >
          Contrapartes
        </Heading>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {perfiles.map((perfil) => (
            <div key={perfil.titulo} className="border-t-2 border-naranja-500 pt-5">
              <h3 className="font-display text-lg uppercase leading-tight tracking-tight text-balance text-grafito-900">
                {perfil.titulo}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-grafito-500">
                {perfil.descripcion}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CapacidadIndustrial />

      <Section>
        <Heading
          eyebrow="Ruta del proyecto"
          subtitle="El recorrido desde la primera reunión hasta el reporte de cierre."
        >
          Cómo se ejecuta un programa
        </Heading>
        <ol className="mt-12 flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-4">
          {etapas.map((etapa, index) => (
            <li key={etapa.titulo} className="flex flex-col gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-oliva-700 font-display text-sm text-crema-50">
                {index + 1}
              </span>
              <h3 className="font-display text-base uppercase leading-tight tracking-tight text-balance text-grafito-900">
                {etapa.titulo}
              </h3>
              <p className="text-sm leading-relaxed text-grafito-500">
                {etapa.descripcion}
              </p>
            </li>
          ))}
        </ol>

        {/*
          TODO: dato real pendiente — número de registro en el RGAE, listado de
          contratos o programas ejecutados y certificaciones vigentes. No
          publicar ninguno de estos datos sin confirmación del cliente.
        */}
      </Section>

      <CtaBand
        title="¿Estás evaluando proveedores para un programa de estufas?"
        description="Envíanos las bases o el alcance estimado y te respondemos con una propuesta técnica y económica."
        ctaLabel="Iniciar conversación institucional"
        ctaHref="/contacto#formulario"
        secondaryLabel="Ver línea residencial"
        secondaryHref="/modelos/residencial"
      />
    </>
  );
}
