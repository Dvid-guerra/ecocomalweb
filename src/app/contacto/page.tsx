import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SeccionContacto from "@/components/sections/SeccionContacto";

export const metadata: Metadata = {
  title: "Contacto y licitaciones",
  description:
    "Canal directo con Ecocomal para cotizaciones residenciales y para procesos de licitación, programas institucionales y cooperación internacional en Guatemala.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto / Licitaciones"
        title="Escríbenos y te respondemos con una propuesta"
        description="Un solo formulario para dos caminos: la familia que quiere una estufa en su cocina y la institución que necesita cotizar un programa de miles de unidades."
      />

      <SeccionContacto
        eyebrow="Formulario"
        titulo="Cuéntanos qué necesitas"
        subtitulo="Entre más detalle nos des sobre el alcance, la ubicación y los plazos, más precisa será nuestra respuesta."
      />
    </>
  );
}
