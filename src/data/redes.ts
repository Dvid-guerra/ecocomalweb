import {
  IconoFacebook,
  IconoInstagram,
  IconoLinkedIn,
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
 */
export const REDES: RedSocial[] = [
  {
    id: "instagram",
    nombre: "Instagram",
    url: "https://www.instagram.com/ecocomal?srtk=bHJqdDBxOTg3cG1k&utm_source=qr",
    Icono: IconoInstagram,
  },
  {
    id: "facebook",
    nombre: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100075851904833&locale=es_LA",
    Icono: IconoFacebook,
  },
  {
    id: "linkedin",
    nombre: "LinkedIn",
    url: "https://www.linkedin.com/in/marco-tulio-guerra-buezo-7b27651a/",
    Icono: IconoLinkedIn,
  },
  { id: "tiktok", nombre: "TikTok", url: "", Icono: IconoTikTok },
];

/** Solo las redes con URL configurada llegan a renderizarse. */
export const REDES_ACTIVAS = REDES.filter((red) => red.url.trim() !== "");
