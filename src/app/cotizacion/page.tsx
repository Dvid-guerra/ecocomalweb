import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import PageHero from "@/components/sections/PageHero";
import CotizacionForm from "@/components/sections/CotizacionForm";

export const metadata: Metadata = {
  title: "Cotización",
  description:
    "Solicita una cotización para la instalación de tu estufa ecológica de leña de combustión mejorada con Ecocomal.",
};

const pasos = [
  { title: "Recibimos tu solicitud", description: "TODO: describir qué pasa al enviar el formulario." },
  { title: "Te contactamos", description: "TODO: describir cómo y cuándo se pone en contacto el equipo." },
  { title: "Coordinamos la instalación", description: "TODO: describir cómo se agenda la visita e instalación." },
];

export default function CotizacionPage() {
  return (
    <>
      <PageHero
        eyebrow="Solicita tu estufa"
        title="Cotización"
        description="Contanos sobre tu hogar y te ayudamos a encontrar la estufa ecológica adecuada."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold uppercase tracking-tight text-ink">
              Qué pasa después
            </h2>
            <ol className="mt-8 flex flex-col gap-6">
              {pasos.map((paso, index) => (
                <li key={paso.title} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-verde-500 to-verde-700 font-display text-sm text-white shadow-sm shadow-verde-900/20">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-ink">{paso.title}</h3>
                    <p className="mt-1 text-sm text-muted">{paso.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <CotizacionForm />
        </div>
      </Section>
    </>
  );
}
