import { Home, Leaf, TrendingUp, Users, type LucideIcon } from "lucide-react";

export interface Pilar {
  id: string;
  /** Nombre corto del pilar. */
  nombre: string;
  /** Subtítulo descriptivo que acompaña al nombre. */
  enfoque: string;
  /** Frase de apertura, en font-display. */
  titular: string;
  descripcion: string;
  icon: LucideIcon;
}

/**
 * Los 4 pilares del manifiesto. Redacción deliberadamente NO absoluta
 * ("reduce", "disminuye", "aproximadamente"): las afirmaciones categóricas
 * son un riesgo en procesos de licitación. No revertir a la versión absoluta.
 */
export const PILARES: Pilar[] = [
  {
    id: "ambiental",
    nombre: "Pilar Ambiental",
    enfoque: "Mitigación Climática",
    titular: "Eficiencia térmica de vanguardia.",
    descripcion:
      "Nuestras estufas optimizan la combustión reduciendo la deforestación local y las emisiones de carbono. Al año, nuestro parque instalado evita aproximadamente 90,000 toneladas de CO₂, equivalente a lo que absorben 4.1 millones de árboles maduros durante un año.",
    icon: Leaf,
  },
  {
    id: "social",
    nombre: "Pilar Social",
    enfoque: "Salud y Dignidad Familiar",
    titular: "Hogares con aire limpio.",
    descripcion:
      "Canalizamos el humo fuera de la vivienda, reduciendo la exposición a partículas PM2.5. Esto disminuye el riesgo de neumonía infantil, enfermedades pulmonares crónicas (EPOC) y accidentes por quemaduras en la cocina.",
    icon: Users,
  },
  {
    id: "economico",
    nombre: "Pilar Económico",
    enfoque: "Rendimiento Financiero",
    titular: "Retorno de inversión medible.",
    descripcion:
      "Reducimos el gasto familiar en combustible de forma inmediata. A escala institucional y gubernamental, optimizamos los presupuestos de ayuda social maximizando el impacto y el costo-beneficio por comunidad.",
    icon: TrendingUp,
  },
  {
    id: "cultural",
    nombre: "Pilar Cultural",
    enfoque: "Ingeniería con Identidad",
    titular: "Evolución, no imposición.",
    descripcion:
      "Diseñamos tecnología que abraza las costumbres gastronómicas de Guatemala. Contamos con la capacidad de desarrollar diseños personalizados adaptados a cada región, modificando comales y estructuras según los hábitos culinarios locales, desde el altiplano hasta la costa.",
    icon: Home,
  },
];
