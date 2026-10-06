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
      "Nuestras estufas optimizan la combustión reduciendo la deforestación local y las emisiones de carbono. Al año, nuestro parque instalado evita aproximadamente 175,000 toneladas de CO₂, equivalente a lo que absorben cerca de 8 millones de árboles maduros durante un año.",
    icon: Leaf,
  },
  {
    id: "social",
    nombre: "Pilar Social",
    enfoque: "Salud y Dignidad Familiar",
    titular: "Hogares con aire limpio.",
    descripcion:
      "Una combustión más completa reduce los gases contaminantes y el material particulado, y la chimenea canaliza fuera de la vivienda el humo que aun así se genera. Al bajar la exposición diaria a partículas PM2.5 disminuye el riesgo de neumonía infantil, enfermedades pulmonares crónicas (EPOC), irritación ocular y quemaduras en la cocina.",
    icon: Users,
  },
  {
    id: "economico",
    nombre: "Pilar Económico",
    enfoque: "Rendimiento Financiero",
    titular: "Menos leña, más presupuesto.",
    descripcion:
      "Al aprovechar mejor el poder calorífico de la leña, el consumo baja hasta un 60%. Hoy la leña rara vez se recoge: se compra, y pesa cada mes en el presupuesto familiar, así que el ahorro se nota desde la primera compra. A escala institucional, ese mismo rendimiento optimiza los presupuestos de ayuda social y mejora el costo-beneficio por comunidad.",
    icon: TrendingUp,
  },
  {
    id: "cultural",
    nombre: "Pilar Cultural",
    enfoque: "Ingeniería con Identidad",
    titular: "Evolución, no imposición.",
    descripcion:
      "Diseñamos tecnología que abraza las costumbres gastronómicas de Guatemala. Contamos con la capacidad de desarrollar diseños adaptados a cada región, modificando comales y estructuras según los hábitos culinarios locales. Cada adaptación se valida con pruebas de campo que parten de ensayos de laboratorio, para confirmar que el rendimiento medido se sostiene en la cocina real, del altiplano a la costa.",
    icon: Home,
  },
];
