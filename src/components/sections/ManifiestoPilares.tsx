import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Reveal from "@/components/ui/Reveal";
import { PILARES } from "@/data/pilares";

export interface ManifiestoPilaresProps {
  eyebrow?: string;
  titulo?: string;
  subtitulo?: string;
  /** Nivel del titular: h2 en el home, h2 también en /impacto bajo el h1. */
  id?: string;
}

export default function ManifiestoPilares({
  eyebrow = "Manifiesto Ecocomal",
  titulo = "Cuatro pilares que sostienen cada instalación",
  subtitulo = "Un criterio de ingeniería, salud pública, economía familiar e identidad cultural detrás de cada estufa que sale de nuestra planta.",
  id,
}: ManifiestoPilaresProps) {
  return (
    <section id={id} className="bg-crema-50 py-16 sm:py-section">
      <Container>
        <Reveal>
          <Heading eyebrow={eyebrow} subtitle={subtitulo}>
            {titulo}
          </Heading>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PILARES.map((pilar, index) => {
            const Icon = pilar.icon;

            return (
              <Reveal key={pilar.id} delay={index * 80} className="h-full">
                <article className="flex h-full flex-col rounded-lg border border-grafito-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-oliva-300 hover:shadow-md sm:p-8">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-crema-100 text-naranja-600">
                      <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-display text-lg uppercase leading-tight tracking-tight text-balance text-grafito-900 sm:text-xl">
                        {pilar.nombre}
                      </h3>
                      <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-oliva-700">
                        {pilar.enfoque}
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 font-display text-base uppercase tracking-tight text-grafito-900">
                    {pilar.titular}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-grafito-500">
                    {pilar.descripcion}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
