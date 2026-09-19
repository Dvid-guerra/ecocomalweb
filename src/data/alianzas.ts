export interface Alianza {
  /** Nombre del socio comercial, usado como alt del logo y como respaldo textual. */
  nombre: string;
  /**
   * Ruta del logo en public/alianzas/. Cuando es `null` la franja muestra el
   * nombre en texto, de modo que el componente degrada bien sin imágenes.
   */
  logo: string | null;
  /** Sitio web del socio. Si está presente, el nombre se vuelve enlace. */
  sitio?: string;
}

/**
 * Socios comerciales que aparecen en la franja "Confían en nosotros".
 *
 * TODO: obtener logos y autorización de uso de marca. Mientras tanto se
 * muestran los nombres en texto, enlazados a su sitio cuando se conoce.
 */
export const ALIANZAS: Alianza[] = [
  { nombre: "Microsol", logo: null, sitio: "https://microsol-int.com/" },
  {
    nombre: "Hotel Café del Sol",
    logo: null,
    sitio: "https://hotelcafedelsol.com/",
  },
  {
    nombre: "Alianza Global contra el Hambre y la Pobreza",
    logo: null,
    sitio: "https://globalallianceagainsthungerandpoverty.org/es/",
  },
  { nombre: "Vive Experiencia", logo: null },
];
