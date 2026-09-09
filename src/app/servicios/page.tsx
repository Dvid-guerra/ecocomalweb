import type { Metadata } from "next";
import { GraduationCap, Hammer, RefreshCw, Wrench } from "lucide-react";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import IconCard from "@/components/ui/IconCard";
import PageHero from "@/components/sections/PageHero";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de fabricación e instalación de estufas ecológicas de leña de combustión mejorada que ofrece Ecocomal en Guatemala.",
};

const pasos = [
  { title: "Diagnóstico", description: "TODO: describir la visita o diagnóstico inicial en el hogar." },
  { title: "Fabricación", description: "TODO: describir el proceso de fabricación de la estufa." },
  { title: "Instalación", description: "TODO: describir cómo se instala la estufa en la vivienda." },
  { title: "Acompañamiento", description: "TODO: describir el seguimiento posterior a la instalación." },
];

const servicios = [
  {
    icon: Hammer,
    title: "Fabricación",
    description: "TODO: detallar el servicio de fabricación de estufas.",
  },
  {
    icon: Wrench,
    title: "Instalación",
    description: "TODO: detallar el servicio de instalación en el hogar.",
  },
  {
    icon: RefreshCw,
    title: "Mantenimiento",
    description: "TODO: detallar el servicio de mantenimiento y revisión.",
  },
  {
    icon: GraduationCap,
    title: "Capacitación",
    description: "TODO: detallar la capacitación para el uso adecuado de la estufa.",
  },
];

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Lo que hacemos"
        title="Servicios"
        description="TODO: reemplazar con una introducción real a los servicios de Ecocomal."
      />

      <Section>
        <Heading eyebrow="Nuestro proceso" subtitle="TODO: ajustar la introducción de esta sección.">
          Cómo trabajamos
        </Heading>
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pasos.map((paso, index) => (
            <li key={paso.title} className="flex flex-col gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-verde-500 to-verde-700 font-display text-sm text-white shadow-sm shadow-verde-900/20">
                {index + 1}
              </span>
              <h3 className="font-display text-lg font-semibold text-ink">{paso.title}</h3>
              <p className="text-sm text-muted">{paso.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section variant="muted">
        <Heading eyebrow="Servicios" subtitle="TODO: ajustar la introducción de esta sección.">
          Todo lo que ofrecemos
        </Heading>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicios.map((servicio) => (
            <IconCard key={servicio.title} {...servicio} />
          ))}
        </div>
      </Section>

      <CtaBand
        title="¿Listo para tener tu estufa?"
        description="Contanos sobre tu hogar y te ayudamos a encontrar la mejor opción."
        ctaLabel="Solicitar cotización"
        ctaHref="/cotizacion"
      />
    </>
  );
}
