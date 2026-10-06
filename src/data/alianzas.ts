/**
 * Un socio puede aparecer con logo o con su nombre en texto. Si trae logo, las
 * dimensiones intrínsecas son obligatorias: next/image las necesita para
 * reservar el espacio y la franja las usa para saber si el logotipo es apaisado
 * o un lockup vertical, que no se muestran a la misma altura.
 */
export type Alianza = {
  /** Nombre del socio comercial, usado como alt del logo y como respaldo textual. */
  nombre: string;
  /** Sitio web del socio. Si está presente, la marca se vuelve enlace. */
  sitio?: string;
} & (
    | {
      logo: string;
      ancho: number;
      alto: number;
      /**
       * El logo trae su propio fondo opaco en lugar de transparencia. La franja
       * lo redondea para que el rectángulo de color se lea como una pieza
       * intencionada y no como un recuadro suelto entre los demás logos.
       */
      fondoPropio?: boolean;
    }
    | { logo: null; ancho?: never; alto?: never; fondoPropio?: never }
  );

/**
 * Socios comerciales que aparecen en la franja "Confían en nosotros".
 *
 * Los logos de public/alianzas/ se tomaron de los perfiles oficiales de cada
 * socio, a color y recortados a su caja real para que la franja los alinee.
 *
 * TODO: confirmar por escrito la autorización de uso de marca. Clean Cooking
 * Alliance publica guía de uso de logotipo, conviene revisarla.
 */
export const ALIANZAS: Alianza[] = [
  {
    nombre: "Microsol",
    logo: "/alianzas/microsol.svg",
    ancho: 574,
    alto: 261,
    sitio: "https://microsol-int.com/",
  },
  {
    nombre: "Hotel Café del Sol",
    logo: "/alianzas/hotel-cafe-del-sol.png",
    ancho: 284,
    alto: 224,
    sitio: "https://hotelcafedelsol.com/",
  },
  {
    nombre: "Clean Cooking Alliance",
    logo: "/alianzas/clean-cooking-alliance.png",
    ancho: 553,
    alto: 224,
    sitio: "https://cleancooking.org/",
  },
  // Su marca solo existe como avatar cuadrado de TikTok, con el nombre en
  // blanco sobre verde. Recortado al arte queda apaisado como los demás, pero
  // conserva el fondo verde: sin él las partes blancas desaparecerían.
  {
    nombre: "Vive Experiencia",
    logo: "/alianzas/vive-experiencia.png",
    ancho: 429,
    alto: 224,
    fondoPropio: true,
    sitio: "https://www.tiktok.com/@vivexperiencias",
  },
];
