import {
  IconoFacebook,
  IconoInstagram,
  IconoTikTok,
  type ComponenteIconoRed,
} from "@/components/ui/IconosRedes";

export interface RedSocial {
  id: string;
  /** Nombre de la red; se usa en el aria-label del enlace. */
  nombre: string;
  /**
   * URL completa del perfil (con https://). Mientras esté vacía, el icono NO
   * se muestra en el sitio: así nunca se publica un enlace muerto. Basta con
   * pegar aquí la dirección del perfil para que aparezca.
   */
  url: string;
  Icono: ComponenteIconoRed;
}

/**
 * Redes sociales de Ecocomal, en el orden en que se muestran.
 *
 * TODO: dato real pendiente — pegar la URL de cada perfil. Para añadir otra
 * red (YouTube, LinkedIn, WhatsApp...) añade aquí la entrada y su icono en
 * components/ui/IconosRedes.tsx.
 */
export const REDES: RedSocial[] = [
  { id: "instagram", nombre: "Instagram", url: "", Icono: IconoInstagram },
  { id: "facebook", nombre: "Facebook", url: "", Icono: IconoFacebook },
  { id: "tiktok", nombre: "TikTok", url: "", Icono: IconoTikTok },
];

/** Solo las redes con URL configurada llegan a renderizarse. */
export const REDES_ACTIVAS = REDES.filter((red) => red.url.trim() !== "");
