import type { MetadataRoute } from "next";
import { ROUTES, SITE_URL } from "@/lib/site";

/** Prioridad relativa por ruta: el home y las páginas de conversión pesan más. */
const PRIORIDADES: Record<string, number> = {
  "/": 1,
  "/modelos/proyectos": 0.9,
  "/modelos/residencial": 0.9,
  "/contacto": 0.8,
  "/quienes-somos": 0.8,
  "/modelos": 0.7,
  "/impacto": 0.7,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map((ruta) => ({
    url: new URL(ruta, SITE_URL).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority: PRIORIDADES[ruta] ?? 0.6,
  }));
}
