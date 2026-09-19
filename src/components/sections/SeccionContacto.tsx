import { Building2, FileDown, Home as HomeIcon } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import EnlacesRedes from "@/components/ui/EnlacesRedes";
import Heading from "@/components/ui/Heading";
import Reveal from "@/components/ui/Reveal";
import FormularioContacto from "./FormularioContacto";
import { DOSSIER_HREF, DOSSIER_LABEL } from "@/lib/site";

export interface SeccionContactoProps {
  eyebrow?: string;
  titulo?: string;
  subtitulo?: string;
  /** Muestra el botón del dossier junto al formulario. */
  conDossier?: boolean;
}

const CANALES = [
  {
    icon: Building2,
    titulo: "Proyectos institucionales y licitaciones",
    descripcion:
      "Juntas de licitación, ministerios, municipalidades, ONG y cooperantes: recibimos requerimientos de volumen, bases de concurso y solicitudes de documentación de respaldo.",
  },
  {
    icon: HomeIcon,
    titulo: "Línea residencial",
    descripcion:
      "Familias y constructoras que buscan una o varias unidades para vivienda urbana o rural, con instalación y acompañamiento.",
  },
];

export default function SeccionContacto({
  eyebrow = "Contacto y licitaciones",
  titulo = "Hablemos de tu proyecto",
  subtitulo = "Cuéntanos qué necesitas y te respondemos con una propuesta técnica y económica ajustada al alcance.",
  conDossier = true,
}: SeccionContactoProps) {
  return (
    <section id="formulario" className="bg-crema-50 py-16 sm:py-section">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <Reveal>
              <Heading eyebrow={eyebrow} subtitle={subtitulo}>
                {titulo}
              </Heading>
            </Reveal>

            <Reveal delay={80}>
              <ul className="mt-10 flex flex-col gap-6">
                {CANALES.map((canal) => {
                  const Icon = canal.icon;
                  return (
                    <li key={canal.titulo} className="flex gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-crema-100 text-naranja-600">
                        <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-display text-base uppercase tracking-tight text-grafito-900">
                          {canal.titulo}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-grafito-500">
                          {canal.descripcion}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              {/*
                TODO: dato real pendiente — teléfono, correo y dirección de
                Ecocomal. No publicar ningún dato de contacto sin confirmación.
              */}

              <EnlacesRedes className="mt-10" />

              {conDossier && (
                <Button
                  href={DOSSIER_HREF}
                  variant="secondary"
                  size="md"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="mt-8"
                >
                  <FileDown size={18} aria-hidden="true" />
                  {DOSSIER_LABEL}
                </Button>
              )}
            </Reveal>
          </div>

          <Reveal delay={120}>
            <FormularioContacto />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
