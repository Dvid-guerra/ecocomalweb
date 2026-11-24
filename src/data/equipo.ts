export interface MiembroEquipo {
  id: string;
  nombre: string;
  cargo: string;
  /** Una o dos líneas que siempre se ven en la tarjeta. */
  resumen: string;
  /** Biografía completa; se despliega con "Leer más". */
  descripcion: string;
  /**
   * Ruta dentro de public/, por ejemplo "/equipo/marco-tulio.jpg". Con `null`
   * la tarjeta muestra las iniciales sobre un fondo de marca, así la sección
   * se puede publicar aunque falte algún retrato.
   *
   * Formato recomendado: retrato vertical 4:5 (mínimo 800 × 1000 px), con el
   * rostro en el tercio superior, porque la tarjeta recorta con object-cover.
   */
  foto: string | null;
}

/**
 * Personas que aparecen en la sección "Nuestro equipo" de /quienes-somos, en
 * el orden en que se muestran.
 *
 * TODO: dato real pendiente — confirmar cargos y descripciones con cada
 * persona, agregar al resto del equipo y colocar los retratos en
 * public/equipo/.
 */
export const EQUIPO: MiembroEquipo[] = [
  {
    id: "marco-tulio-guerra",
    nombre: "Marco Tulio Guerra Buezo",
    cargo: "Fundador y gerente general",
    resumen:
      "Fundó Ecocomal en 2007. Dirige el diseño del producto, el taller y la relación con clientes institucionales.",
    descripcion:
      "Fundador, gerente general y representante legal de Ecocomal, responsable del diseño del producto, la dirección del taller y la relación con clientes institucionales. Nació y creció en un área rural donde su familia cocinaba con leña; su hermano sufrió quemaduras por un fuego abierto. Tiene formación en ingeniería ambiental y trayectoria en desarrollo comunitario. Inició el emprendimiento a finales de 2007, lo constituyó como sociedad anónima en 2008 y desarrolló un diseño propio de estufa con cámara de combustión eficiente. Bajo su dirección la empresa ha instalado más de 35,000 estufas.",
    foto: "/equipo/marco-tulio-guerra.jpg",
  },
  {
    id: "marcos-guerra",
    nombre: "Marcos Fernando Guerra Herrera",
    cargo: "Subgerente",
    resumen:
      "Ingeniero agrónomo. Coordina el taller, la producción, las entregas y las compras de materia prima.",
    descripcion:
      "Subgerente de Ecocomal e ingeniero agrónomo. Asume la dirección de la operación en ausencia del gerente general y coordina el día a día del taller: la gestión del personal, la producción y la planificación de las entregas. Tiene a su cargo las compras de la empresa, desde la relación con los proveedores hasta el abastecimiento de materias primas, para que la línea de fabricación no se detenga. Aporta a Ecocomal orden en la producción y cumplimiento en los plazos de cada proyecto.",
    foto: "/equipo/marcos-guerra-v2.jpg",
  },
  {
    id: "david-guerra",
    nombre: "David Estuardo Guerra Herrera",
    cargo: "Tecnología y operaciones de proyectos",
    resumen:
      "Desarrolla las herramientas digitales de la empresa y el control de datos de cada proyecto.",
    descripcion:
      "Responsable de tecnología y operaciones de proyectos. Desarrolla las herramientas digitales de la empresa: el sistema de gestión de instalaciones de estufas, el procesamiento de las fichas de diagnóstico de campo, el manual técnico de la estufa, el material de marketing y el sitio web. Es estudiante de Ingeniería en Sistemas, y trabaja además en la automatización del taller. Aporta a Ecocomal control de datos de cada proyecto y capacidad para escalar la operación.",
    foto: "/equipo/david-guerra.jpg",
  },
  {
    id: "julio-marquez",
    nombre: "Julio Alejandro Márquez Jiménez",
    cargo: "Administración y marketing",
    resumen:
      "Lleva la administración, la documentación institucional y el marketing de la empresa.",
    descripcion:
      "Responsable de la gestión administrativa, la organización y el seguimiento de la documentación institucional y de los proyectos comunitarios. Administra el marketing, la comunicación digital, la promoción y la comercialización de estufas mejoradas, y apoya en diversas actividades operativas y administrativas de Ecocomal.",
    foto: "/equipo/julio-marquez.jpg",
  },
];
