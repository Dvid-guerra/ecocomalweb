import { REDES_ACTIVAS } from "@/data/redes";

/** Sobre fondos claros (`claro`) u oscuros (`oscuro`). */
export type TonoRedes = "claro" | "oscuro";

export interface EnlacesRedesProps {
  tono?: TonoRedes;
  titulo?: string;
  className?: string;
}

const tonoClasses: Record<TonoRedes, { titulo: string; enlace: string }> = {
  claro: {
    titulo: "text-grafito-500",
    enlace:
      "border-grafito-100 bg-white text-grafito-700 hover:border-naranja-500 hover:text-naranja-600 focus-visible:outline-oliva-700",
  },
  oscuro: {
    titulo: "text-crema-100/70",
    enlace:
      "border-crema-50/20 bg-crema-50/5 text-crema-100 hover:border-naranja-500 hover:text-naranja-400 focus-visible:outline-crema-50",
  },
};

/**
 * Iconos enlazados a los perfiles de Ecocomal. Si ningún perfil tiene URL
 * configurada en data/redes.ts, el bloque entero desaparece en lugar de
 * publicar enlaces vacíos.
 */
export default function EnlacesRedes({
  tono = "claro",
  titulo = "Síguenos",
  className = "",
}: EnlacesRedesProps) {
  if (REDES_ACTIVAS.length === 0) return null;

  const colors = tonoClasses[tono];

  return (
    <div className={className}>
      {titulo && (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.18em] ${colors.titulo}`}
        >
          {titulo}
        </p>
      )}
      <ul className="mt-3 flex items-center gap-3">
        {REDES_ACTIVAS.map((red) => {
          const Icono = red.Icono;

          return (
            <li key={red.id}>
              <a
                href={red.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ecocomal en ${red.nombre}`}
                className={`flex h-10 w-10 items-center justify-center rounded-md border transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 ${colors.enlace}`}
              >
                <Icono size={20} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
