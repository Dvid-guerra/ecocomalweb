import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { ALIANZAS } from "@/data/alianzas";

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
            {ALIANZAS.map((alianza) => (
              <li key={alianza.nombre} className="flex items-center">
                {alianza.logo ? (
                  <Image
                    src={alianza.logo}
                    alt={alianza.nombre}
                    width={200}
                    height={80}
                    className="h-10 w-auto opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:h-12"
                  />
                ) : (
                  // Respaldo textual mientras no haya logo autorizado.
                  <span className="font-display text-sm uppercase tracking-[0.14em] text-grafito-300 transition-colors duration-300 hover:text-grafito-700 sm:text-base">
                    {alianza.nombre}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
