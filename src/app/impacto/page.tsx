import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ContadorImpacto from "@/components/sections/ContadorImpacto";
import ManifiestoPilares from "@/components/sections/ManifiestoPilares";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Nuestro Impacto: ambiental, social, económico y cultural",
  description:
    "Los cuatro pilares del impacto de Ecocomal en Guatemala: mitigación climática, salud y dignidad familiar, rendimiento financiero e ingeniería con identidad cultural.",
  alternates: { canonical: "/impacto" },
};

export default function ImpactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Nuestro impacto"
        title="Cuatro dimensiones que medimos en cada instalación"
        description="El impacto de una estufa no se agota en la cocina donde se instala. Se mide en el bosque que deja de talarse, en el aire que respira una familia, en el presupuesto que se libera y en la costumbre que se respeta."
      />

      <ContadorImpacto />

      <ManifiestoPilares
        id="pilares"
        eyebrow="Los cuatro pilares"
        titulo="Cómo entendemos el impacto"
        subtitulo="Cada pilar responde a una pregunta distinta: qué evitamos, a quién protegemos, qué liberamos y qué respetamos."
      />

      <CtaBand
        title="¿Necesitas indicadores de impacto para tu programa?"
        description="Podemos preparar el detalle metodológico y de seguimiento que requiere tu expediente."
        ctaLabel="Solicitar información"
        ctaHref="/contacto#formulario"
        secondaryLabel="Conocer nuestra capacidad"
        secondaryHref="/quienes-somos"
      />
    </>
  );
}
