import type { Metadata } from "next";
import { Eye, Factory, MapPinned, ShieldCheck, Target, Truck } from "lucide-react";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import IconCard from "@/components/ui/IconCard";
import PageHero from "@/components/sections/PageHero";
import CapacidadIndustrial from "@/components/sections/CapacidadIndustrial";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Quiénes Somos: trayectoria e infraestructura",
  description:
    "Más de 15 años de fabricación nacional de estufas ecológicas de leña. Conoce la trayectoria, la planta de producción y la capacidad logística de Ecocomal en Guatemala.",
  alternates: { canonical: "/quienes-somos" },
};

const hitos = [
  {
    anio: "Origen",
    titulo: "Una respuesta de ingeniería a un problema de salud pública",
    descripcion:
      "Ecocomal nace para atender el costo humano y ambiental de cocinar con fuego abierto en Guatemala: humo dentro de la vivienda, gasto creciente en leña y presión sobre el bosque.",
  },
  {
    anio: "Consolidación",
    titulo: "Fabricación nacional y red de instalación",
    descripcion:
      "El diseño se industrializa en planta propia y se construye una red de instaladores capaz de llegar a comunidades rurales de difícil acceso.",
  },
  {
    anio: "Hoy",
    titulo: "Escala institucional",
    descripcion:
      "Más de 35 mil hogares atendidos y capacidad operativa para ejecutar contratos de miles de unidades con cooperantes, gobierno y sector privado.",
  },
  // TODO: dato real pendiente — años exactos de fundación y de cada hito.
];

const proposito = [
  {
    icon: Eye,
    etiqueta: "Visión",
    texto:
      "Cambiar vidas con productos tecnológicos amigables con la naturaleza.",
  },
  {
    icon: Target,
    etiqueta: "Misión",
    texto: "Desarrollar, producir y promover tecnología apropiada.",
  },
];

/** Los tres beneficios del lema, en el orden en que los usa la marca. */
const LEMA = ["Salud", "Ambiente", "Economía"];

const diferenciales = [
  {
    icon: Factory,
    title: "Fabricación propia",
    description:
      "No intermediamos: diseñamos y producimos en Guatemala, lo que nos da control sobre costo, calidad y plazo de entrega.",
  },
  {
    icon: Truck,
    title: "Logística nacional",
    description:
      "Flota y rutas propias para entregar e instalar en zona urbana y rural, incluyendo comunidades de acceso complejo.",
  },
  {
    icon: MapPinned,
    title: "Adaptación regional",
    description:
      "Ajustamos comales y estructuras a los hábitos culinarios de cada región, del altiplano a la costa.",
  },
  {
    icon: ShieldCheck,
    title: "Respaldo documental",
    description:
      "Documentación técnica, de capacidad y de seguimiento para los procesos de evaluación institucional.",
  },
];

export default function QuienesSomosPage() {
  return (
    <>
      <PageHero
        eyebrow="Quiénes somos"
        title="Más de 15 años de ingeniería aplicada a la energía rural"
        description="Somos una empresa guatemalteca que diseña, fabrica e instala estufas ecológicas de leña. Logística, infraestructura y calidad de servicio que hay detrás de cada estufa instalada."
      />

      <Section>
        <Heading
          eyebrow="Trayectoria"
          subtitle="De un problema doméstico a una operación con alcance nacional."
        >
          Cómo llegamos hasta aquí
        </Heading>

        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {hitos.map((hito, index) => (
            <li key={hito.titulo} className="flex flex-col gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-oliva-700 font-display text-sm text-crema-50">
                {index + 1}
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-naranja-600">
                {hito.anio}
              </p>
              <h3 className="font-display text-lg uppercase leading-tight tracking-tight text-balance text-grafito-900">
                {hito.titulo}
              </h3>
              <p className="text-sm leading-relaxed text-grafito-500">
                {hito.descripcion}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section variant="oliva">
        <Heading
          tone="dark"
          eyebrow="Propósito"
          subtitle="Tres beneficios guían cada estufa que sale de nuestra planta."
        >
          Visión y misión
        </Heading>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {proposito.map(({ icon: Icon, etiqueta, texto }) => (
            <div
              key={etiqueta}
              className="flex h-full flex-col rounded-lg border border-crema-50/20 bg-crema-50/5 p-7 sm:p-8"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-crema-50/10 text-naranja-400">
                <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-display text-xs uppercase tracking-[0.18em] text-naranja-300">
                {etiqueta}
              </h3>
              {/* El enunciado va en la tipografía de texto, no en la display:
                  una frase completa en mayúsculas pierde legibilidad. */}
              <p className="mt-3 text-lg leading-relaxed text-balance text-crema-50 sm:text-xl">
                {texto}
              </p>
            </div>
          ))}
        </div>

        {/* El lema cierra la sección sobre grafito para separarlo de las
            tarjetas sin introducir un color fuera del brand kit. */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-lg bg-grafito-900 px-6 py-5">
          {LEMA.map((palabra, index) => (
            <span key={palabra} className="flex items-center gap-4">
              {index > 0 && (
                <span
                  className="h-1.5 w-1.5 rounded-full bg-naranja-500"
                  aria-hidden="true"
                />
              )}
              <span className="font-display text-base uppercase tracking-[0.18em] text-crema-50 sm:text-lg">
                {palabra}
              </span>
            </span>
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <Heading
          eyebrow="Lo que nos distingue"
          subtitle="Cuatro capacidades que un evaluador institucional puede verificar."
        >
          Capacidad, no promesas
        </Heading>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {diferenciales.map((item) => (
            <IconCard key={item.title} {...item} />
          ))}
        </div>
      </Section>

      <CapacidadIndustrial />

      <CtaBand
        title="¿Necesitas nuestra documentación para un proceso de evaluación?"
        description="Solicítanos la ficha técnica y los antecedentes de la empresa para tu expediente."
        ctaLabel="Escribir al equipo"
        ctaHref="/contacto#formulario"
        secondaryLabel="Ver modelos y soluciones"
        secondaryHref="/modelos"
      />
    </>
  );
}
