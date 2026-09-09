import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Section from "@/components/ui/Section";
import IconCard from "@/components/ui/IconCard";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Ponte en contacto con Ecocomal para conocer más sobre nuestras estufas ecológicas de leña de combustión mejorada.",
};

// TODO: reemplazar con los datos reales de contacto de Ecocomal.
const infoContacto = [
  { icon: Phone, title: "Teléfono", description: "TODO: +502 0000 0000" },
  { icon: Mail, title: "Correo", description: "TODO: contacto@ecocomal.com" },
  { icon: MapPin, title: "Ubicación", description: "TODO: Ciudad, Guatemala" },
  { icon: Clock, title: "Horario", description: "TODO: días y horario de atención" },
];

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Hablemos"
        title="Contacto"
        description="¿Tenés dudas sobre nuestras estufas? Escribinos y con gusto te ayudamos."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="grid gap-6 sm:grid-cols-2">
            {infoContacto.map((info) => (
              <IconCard key={info.title} {...info} />
            ))}
          </div>

          <ContactForm />
        </div>
      </Section>
    </>
  );
}
