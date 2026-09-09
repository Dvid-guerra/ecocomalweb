import type { Metadata } from "next";
import { Eye, HeartHandshake, Leaf, ShieldCheck, Target, Users } from "lucide-react";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import IconCard from "@/components/ui/IconCard";
import PageHero from "@/components/sections/PageHero";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce a Ecocomal, empresa guatemalteca dedicada a la fabricación e instalación de estufas ecológicas de leña de combustión mejorada.",
};

const valores = [
  {
    icon: Leaf,
    title: "Sostenibilidad",
    description: "TODO: describir el compromiso ambiental de Ecocomal.",
  },
  {
    icon: HeartHandshake,
    title: "Cercanía",
    description: "TODO: describir cómo acompañamos a cada familia.",
  },
  {
    icon: ShieldCheck,
    title: "Calidad",
    description: "TODO: describir los estándares de fabricación e instalación.",
  },
  {
    icon: Users,
    title: "Comunidad",
    description: "TODO: describir el impacto en las comunidades donde trabajamos.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Nuestra historia"
        title="Nosotros"
        description="TODO: reemplazar con la historia real de Ecocomal — cómo y por qué nació la empresa."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <IconCard
            icon={Target}
            title="Misión"
            description="TODO: agregar la misión oficial de Ecocomal."
            accent="verde"
          />
          <IconCard
            icon={Eye}
            title="Visión"
            description="TODO: agregar la visión oficial de Ecocomal."
            accent="naranja"
          />
        </div>
      </Section>

      <Section variant="muted">
        <Heading eyebrow="Lo que nos guía" subtitle="TODO: ajustar la introducción de esta sección.">
          Nuestros valores
        </Heading>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valores.map((valor) => (
            <IconCard key={valor.title} {...valor} />
          ))}
        </div>
      </Section>

      <CtaBand
        title="Conocé cómo trabajamos"
        description="Fabricamos e instalamos cada estufa acompañando a la familia en todo el proceso."
        ctaLabel="Ver servicios"
        ctaHref="/servicios"
      />
    </>
  );
}
