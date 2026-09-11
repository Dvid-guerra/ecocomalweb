/**
 * Configuración central del sitio: dominio, mapa de navegación y rutas de
 * archivos descargables. Cualquier cambio de estructura se hace aquí.
 */

/**
 * Dominio canónico. Se toma de la variable de entorno NEXT_PUBLIC_SITE_URL en
 * el despliegue.
 * TODO: dato real pendiente — confirmar el dominio definitivo con el cliente y
 * definir NEXT_PUBLIC_SITE_URL en el entorno de producción. El valor de
 * respaldo es solo un marcador para que sitemap y metadataBase compilen.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ecocomal.example";

export const SITE_NAME = "Ecocomal";

export const SITE_DESCRIPTION =
  "Ecocomal diseña, fabrica e instala estufas ecológicas de leña de combustión mejorada en Guatemala, con capacidad para proyectos institucionales a gran escala.";

/**
 * Dossier corporativo en PDF.
 * TODO: dato real pendiente — subir el archivo a public/dossier-ecocomal.pdf.
 */
export const DOSSIER_HREF = "/dossier-ecocomal.pdf";
export const DOSSIER_LABEL = "Descargar Dossier Corporativo";

export interface NavItem {
  href: string;
  label: string;
  /** Sublíneas del desplegable "Modelos y Soluciones". */
  children?: NavItem[];
}

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Inicio" },
  { href: "/quienes-somos", label: "Quiénes Somos" },
  {
    href: "/modelos",
    label: "Modelos y Soluciones",
    children: [
      { href: "/modelos/residencial", label: "Línea Residencial" },
      { href: "/modelos/proyectos", label: "Proyectos Masivos y Personalizados" },
    ],
  },
  { href: "/impacto", label: "Nuestro Impacto" },
  { href: "/contacto", label: "Contacto / Licitaciones" },
];

/** Rutas indexables, en el orden en que se listan en el sitemap. */
export const ROUTES = [
  "/",
  "/quienes-somos",
  "/modelos",
  "/modelos/residencial",
  "/modelos/proyectos",
  "/impacto",
  "/contacto",
] as const;

export type Route = (typeof ROUTES)[number];
