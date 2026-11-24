import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { EQUIPO } from "@/data/equipo";

/** "Marco Tulio Guerra Buezo" → "MG": primer nombre y primer apellido. */
function iniciales(nombre: string): string {
  const partes = nombre.trim().split(/\s+/);
  // Con cuatro palabras (dos nombres, dos apellidos) el primer apellido es la
  // tercera; con menos, la última.
  const apellido = partes.length >= 4 ? partes[2] : partes[partes.length - 1];
  return `${partes[0][0]}${partes.length > 1 ? apellido[0] : ""}`.toUpperCase();
}

export default function Equipo() {
  // Degrada a nada si todavía no hay personas confirmadas.
  if (EQUIPO.length === 0) return null;

  return (
    <Section id="equipo">
      <Heading
        eyebrow="Nuestro equipo"
        subtitle="Las personas que diseñan, fabrican y acompañan cada proyecto."
      >
        Quiénes están detrás de cada estufa
      </Heading>

      {/* Tarjetas compactas: retrato 4:5 a tamaño fijo para que todas las
          fotos queden encuadradas igual, y solo un resumen visible. La
          biografía completa se despliega con <details>, sin JavaScript. */}
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {EQUIPO.map((miembro) => (
          <li key={miembro.id} className="h-full">
            <article className="flex h-full flex-col overflow-hidden rounded-lg border border-grafito-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <div className="relative aspect-square w-full bg-oliva-700 sm:aspect-[4/5]">
                {miembro.foto ? (
                  <Image
                    src={miembro.foto}
                    alt={`Retrato de ${miembro.nombre}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-[50%_20%]"
                  />
                ) : (
                  // Respaldo mientras no haya retrato: iniciales decorativas,
                  // el nombre completo ya está en el titular de la tarjeta.
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center justify-center font-display text-5xl tracking-wide text-crema-50/85"
                  >
                    {iniciales(miembro.nombre)}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-naranja-700">
                  {miembro.cargo}
                </p>
                <h3 className="mt-1.5 font-display text-base uppercase leading-tight tracking-tight text-balance text-grafito-900">
                  {miembro.nombre}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-grafito-500">
                  {miembro.resumen}
                </p>

                <details className="group mt-3">
                  <summary className="inline-flex cursor-pointer list-none items-center gap-1 rounded-sm text-xs font-semibold uppercase tracking-[0.12em] text-oliva-700 hover:text-oliva-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oliva-700 [&::-webkit-details-marker]:hidden">
                    <span className="group-open:hidden">Leer más</span>
                    <span className="hidden group-open:inline">Leer menos</span>
                    <ChevronDown
                      size={14}
                      aria-hidden="true"
                      className="transition-transform duration-200 group-open:rotate-180"
                    />
                  </summary>
                  <p className="mt-3 border-t border-grafito-100 pt-3 text-[0.8rem] leading-relaxed text-grafito-500">
                    {miembro.descripcion}
                  </p>
                </details>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
