export interface Alianza {
  /** Nombre del socio comercial, usado como alt del logo y como respaldo textual. */
  nombre: string;
  /**
   * Ruta del logo en public/alianzas/. Cuando es `null` la franja muestra el
   * nombre en texto, de modo que el componente degrada bien sin imágenes.
   */
  logo: string | null;
  /** Sitio web del socio, si se autoriza enlazarlo. */
  sitio?: string;
}

/**
 * Socios comerciales que aparecen en la franja "Confían en nosotros".
 *
 * TODO: confirmar lista completa (~10) y obtener logos + autorización de uso.
 * Solo las dos primeras entradas están confirmadas por el cliente; el resto
 * son marcadores y deben eliminarse o reemplazarse antes de publicar.
 */
export const ALIANZAS: Alianza[] = [
  { nombre: "Hotel Café del Sol", logo: null },
  { nombre: "Vive Experiencia", logo: null },
  // TODO: dato real pendiente — socio 3
  // TODO: dato real pendiente — socio 4
  // TODO: dato real pendiente — socio 5
];
