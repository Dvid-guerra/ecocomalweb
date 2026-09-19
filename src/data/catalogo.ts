/**
 * Catálogo de modelos. Las especificaciones están transcritas literalmente de
 * las fichas técnicas oficiales de Ecocomal (public/catalogo/*-ficha.jpg), que
 * siguen enlazadas desde cada modelo. Si cambia una ficha, cambia también la
 * transcripción: no deben divergir.
 */

export interface Especificacion {
  termino: string;
  detalle: string;
}

export interface Metrica {
  etiqueta: string;
  valor: string;
}

export interface ModeloCatalogo {
  slug: string;
  nombre: string;
  /** Una frase: qué es y para quién. */
  resumen: string;
  /** Recorte del producto sobre fondo transparente. */
  foto: string;
  fotoAlt: string;
  /** Ficha técnica original en imagen, para descarga o consulta. */
  ficha: string;
  metricas: Metrica[];
  especificaciones: Especificacion[];
}

const AHORRO_LENA: Metrica = {
  etiqueta: "Ahorro de leña",
  valor: "60%",
};

const AHORRO_TIEMPO: Metrica = {
  etiqueta: "Ahorro de tiempo",
  valor: "15%",
};

export const MODELOS: ModeloCatalogo[] = [
  {
    slug: "ecocina",
    nombre: "Ecocina",
    resumen:
      "El modelo base: cuerpo de concreto de una sola pieza y comal de 19\". Disponible con y sin chimenea.",
    foto: "/catalogo/ecocina.webp",
    fotoAlt: "Estufa Ecocina de Ecocomal, con cuerpo de concreto y comal redondo",
    ficha: "/catalogo/ecocina-ficha.jpg",
    metricas: [
      { etiqueta: "Reducción de CO₂", valor: "70%" },
      { etiqueta: "Partículas de carbón", valor: "75%" },
      AHORRO_LENA,
    ],
    especificaciones: [
      {
        termino: "Estructura",
        detalle:
          "Cuerpo de una pieza de concreto con refuerzo de cedazo de 0.5\", calibre 20.",
      },
      {
        termino: "Cámara de combustión",
        detalle:
          "Ladrillo refractario incorporado a la estructura, con arena pómez como aislante.",
      },
      {
        termino: "Comal",
        detalle:
          "Hierro negro de 19\" de diámetro por 1/8\" de espesor, con refuerzo en la parte baja.",
      },
      {
        termino: "Accesorios",
        detalle:
          "Cincho de aluzinc de 2\" de ancho, ajustable para ollas, y un portaleño.",
      },
      { termino: "Variantes", detalle: "Modelo con y sin chimenea." },
    ],
  },
  {
    slug: "ecocina-chimenea",
    nombre: "Ecocina con Chimenea",
    resumen:
      "La Ecocina con chimenea integrada: saca el humo de la cocina y lleva la reducción de emisiones por encima del 98%.",
    foto: "/catalogo/ecocina-chimenea.webp",
    fotoAlt:
      "Estufa Ecocina con chimenea de Ecocomal, con plancha redonda de hierro negro",
    ficha: "/catalogo/ecocina-chimenea-ficha.jpg",
    metricas: [
      { etiqueta: "Reducción de CO₂", valor: "98.42%" },
      { etiqueta: "Partículas de carbón", valor: "98.32%" },
      AHORRO_LENA,
    ],
    especificaciones: [
      {
        termino: "Estructura",
        detalle:
          "Cuerpo de una pieza de concreto con refuerzo de cedazo de 0.5\", calibre 20.",
      },
      {
        termino: "Cámara de combustión",
        detalle:
          "Ladrillo refractario incorporado a la estructura, con arena pómez como aislante.",
      },
      {
        termino: "Plancha",
        detalle:
          "Redonda, de hierro negro de 19\" de diámetro por 1/8\" de espesor, con refuerzo en la parte baja.",
      },
      {
        termino: "Chimenea",
        detalle:
          "Dos tubos de aluzinc calibre 26 de 4\", sombrero, protector de cedazo de 1/2\" y sifón.",
      },
      { termino: "Accesorios", detalle: "Un portaleño y una base metálica." },
    ],
  },
  {
    slug: "ecocomal",
    nombre: "Ecocomal",
    resumen:
      "Estufa móvil metálica con cámara tipo Rocket y plancha de 22.5\" con hornilla central. Se traslada e instala sin obra.",
    foto: "/catalogo/ecocomal.webp",
    fotoAlt:
      "Estufa Ecocomal móvil de cuerpo metálico rojo con chimenea y leña en la cámara",
    ficha: "/catalogo/ecocomal-ficha.jpg",
    metricas: [
      { etiqueta: "Reducción de CO₂", valor: "98.42%" },
      { etiqueta: "Partículas de carbón", valor: "98.32%" },
      AHORRO_LENA,
      AHORRO_TIEMPO,
    ],
    especificaciones: [
      {
        termino: "Cuerpo",
        detalle:
          "Estufa móvil metálica con cámara tipo Rocket, montada sobre base de metal.",
      },
      {
        termino: "Cámara de combustión",
        detalle: "Ladrillo refractario con aislante de arena pómez.",
      },
      {
        termino: "Plancha",
        detalle:
          "Hierro negro redondo de 22.5\" de diámetro, con hornilla central de 3 discos.",
      },
      {
        termino: "Chimenea",
        detalle:
          "Dos tubos de aluzinc calibre 26 de 4\", sombrero, sifón y protector de malla metálica de 1/2\".",
      },
    ],
  },
  {
    slug: "ecoplancha-superior",
    nombre: "Ecoplancha Superior",
    resumen:
      "Dos piezas monolíticas sobre mesa metálica, con plancha rectangular de 16\" × 32\" y tres hornillas. La mayor superficie de cocción del catálogo.",
    foto: "/catalogo/ecoplancha-superior.webp",
    fotoAlt:
      "Estufa Ecoplancha Superior de Ecocomal, con plancha rectangular sobre mesa metálica y chimenea",
    ficha: "/catalogo/ecoplancha-superior-ficha.jpg",
    metricas: [
      { etiqueta: "Reducción de CO₂", valor: "98.42%" },
      { etiqueta: "Partículas de carbón", valor: "98.32%" },
      AHORRO_LENA,
      AHORRO_TIEMPO,
    ],
    especificaciones: [
      {
        termino: "Cuerpo",
        detalle:
          "Dos piezas monolíticas: plataforma de concreto estructural con refuerzo metálico interno y externo combinado con ladrillo refractario tradicional, y cámara de combustión de ladrillo refractario, cemento estructural, aislante volcánico y refuerzo metálico interno.",
      },
      {
        termino: "Mesa metálica",
        detalle: "Sirve como base para la instalación de la estufa.",
      },
      {
        termino: "Plancha",
        detalle:
          "Hierro negro rectangular de 16\" de ancho por 32\" de largo y 1/8\" de espesor, con una hornilla de 3 discos, una de 2 discos y una de 1 disco, más un gancho de hierro plano de 1/2\" de ancho por 1/8\" de espesor y 16\" de largo.",
      },
      {
        termino: "Chimenea",
        detalle:
          "Dos tubos de aluzinc calibre 26 de 4\", sombrero, sifón y protector de cedazo de 1/2\".",
      },
    ],
  },
];
