import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { ALIANZAS } from "@/data/alianzas";

/**
 * Por debajo de esta proporción ancho/alto el logotipo es un lockup vertical
 * (el símbolo apilado sobre el nombre) en lugar de uno apaisado. A igual altura
 * un lockup vertical se ve diminuto junto a un logotipo horizontal, así que la
 * franja le concede más alto para que ambos pesen parecido.
 */
const RATIO_APAISADO = 1.6;

export default function FranjaAlianzas() {
  // Degrada a nada si todavía no hay socios confirmados.
  if (ALIANZAS.length === 0) return null;

  return (
    <section aria-labelledby="alianzas" className="bg-white py-14 sm:py-20">
      <Container>
        <Reveal>
          <h2
            id="alianzas"
            className="text-center font-display text-xs uppercase tracking-[0.24em] text-grafito-500 sm:text-sm"
          >
            Confían en nosotros
          </h2>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-14">
            {ALIANZAS.map((alianza) => {
              // Un lockup vertical necesita más alto que uno apaisado para no
              // verse diminuto a su lado.
              const altura =
                alianza.logo && alianza.ancho / alianza.alto < RATIO_APAISADO
                  ? "h-14 sm:h-16"
                  : "h-9 sm:h-11";

              // Todos los logos se unifican en gris y recuperan el color al
              // pasar el ratón. Al que trae fondo propio se le redondean las
              // esquinas para que su rectángulo se lea como una pieza
              // intencionada y no como un recuadro suelto entre los demás.
              const realce = `opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0 ${
                alianza.fondoPropio ? "rounded-md" : ""
              }`;

              const marca = alianza.logo ? (
                <Image
                  src={alianza.logo}
                  alt={alianza.nombre}
                  width={alianza.ancho}
                  height={alianza.alto}
                  className={`w-auto object-contain transition duration-300 ${altura} ${realce}`}
                />
              ) : (
                // Respaldo textual mientras no haya logo autorizado.
                <span className="max-w-60 text-center font-display text-sm uppercase leading-tight tracking-[0.14em] text-grafito-300 transition-colors duration-300 group-hover:text-grafito-700 sm:text-base">
                  {alianza.nombre}
                </span>
              );

              return (
                // La altura fija alinea entre sí logotipos de proporciones muy
                // distintas, y `group` hace que todo el hueco active el realce.
                <li
                  key={alianza.nombre}
                  className="group flex h-14 items-center sm:h-16"
                >
                  {alianza.sitio ? (
                    <a
                      href={alianza.sitio}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${alianza.nombre} (abre en una pestaña nueva)`}
                      className="flex h-full items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-oliva-700"
                    >
                      {marca}
                    </a>
                  ) : (
                    marca
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
