import Image from "next/image";
import { Factory, FileDown, Truck, Warehouse, type LucideIcon } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Reveal from "@/components/ui/Reveal";
import { DOSSIER_HREF, DOSSIER_LABEL } from "@/lib/site";

interface ActivoCapacidad {
  id: string;
  titulo: string;
  descripcion: string;
  icon: LucideIcon;
  /**
   * Fotografía del activo.
   * TODO: fotos reales en public/capacidad/. Mientras `src` sea null se
   * muestra un marcador con el icono, sin imágenes rotas.
   */
  src: string | null;
  alt: string;
}

const ACTIVOS: ActivoCapacidad[] = [
  {
    id: "planta",
    titulo: "Planta de producción",
    descripcion:
      "Línea de fabricación propia en Guatemala, con control de calidad por lote.",
    icon: Factory,
    src: null,
    alt: "Planta de producción de estufas Ecocomal",
  },
  {
    id: "bodegas",
    titulo: "Bodegas de almacenaje",
    descripcion:
      "Inventario en resguardo para sostener entregas escalonadas sin quiebre de stock.",
    icon: Warehouse,
    src: null,
    alt: "Bodega de almacenaje de Ecocomal",
  },
  {
    id: "flota",
    titulo: "Flota de transporte",
    descripcion:
      "Distribución propia a los 22 departamentos, incluyendo acceso a comunidades rurales.",
    icon: Truck,
    src: null,
    alt: "Flota de transporte de Ecocomal",
  },
];

export default function CapacidadIndustrial() {
  return (
    <section
      id="capacidad"
      className="bg-oliva-700 py-16 text-crema-100 sm:py-section"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
          <Reveal>
            <Heading
              tone="dark"
              eyebrow="Capacidad industrial y de respuesta"
              subtitle="Ecocomal opera con planta de fabricación, bodegas y transporte propios. Esa integración vertical es la que nos permite comprometer volumen, plazo y trazabilidad en contratos de miles de unidades."
            >
              Infraestructura y solidez para proyectos a gran escala
            </Heading>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-lg border border-crema-50/20 bg-crema-50/5 p-6 sm:p-8">
              <p className="text-sm leading-relaxed text-crema-100/90">
                Nuestra estructura está preparada para responder a los
                requerimientos de evaluación de juntas de licitación,
                ministerios y cooperantes internacionales: capacidad de
                producción verificable, logística de entrega a nivel nacional y
                documentación de respaldo para cada etapa del contrato.
              </p>
              {/*
                TODO: dato real pendiente — número de registro RGAE, capacidad
                mensual de producción en unidades y certificaciones vigentes.
                No publicar cifras hasta que el cliente las confirme.
              */}
              <Button
                href={DOSSIER_HREF}
                variant="cta"
                size="md"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="mt-6 w-full sm:w-auto"
              >
                <FileDown size={18} aria-hidden="true" />
                {DOSSIER_LABEL}
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Galería con desplazamiento por pasos: sin JS, accesible con teclado. */}
        <Reveal delay={150}>
          <ul
            className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:thin] sm:mt-16"
            aria-label="Instalaciones y equipo de Ecocomal"
          >
            {ACTIVOS.map((activo) => {
              const Icon = activo.icon;

              return (
                <li
                  key={activo.id}
                  className="w-[85%] shrink-0 snap-start sm:w-[48%] lg:w-[32%]"
                >
                  <figure className="flex h-full flex-col overflow-hidden rounded-lg border border-crema-50/20 bg-crema-50/5">
                    <div className="relative aspect-[4/3] w-full bg-oliva-900">
                      {activo.src ? (
                        <Image
                          src={activo.src}
                          alt={activo.alt}
                          fill
                          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 48vw, 32vw"
                          className="object-cover"
                        />
                      ) : (
                        /*
                          Marcador mientras no haya foto: solo el icono del
                          activo. El título y la descripción van en el
                          figcaption de abajo, así que el hueco se lee como una
                          decisión de diseño y no como una imagen rota.
                        */
                        <div className="flex h-full w-full items-center justify-center text-crema-100/40">
                          <Icon size={40} strokeWidth={1.25} aria-hidden="true" />
                        </div>
                      )}
                    </div>
                    <figcaption className="flex flex-1 flex-col gap-2 p-5">
                      <h3 className="font-display text-base uppercase tracking-tight text-crema-50">
                        {activo.titulo}
                      </h3>
                      <p className="text-sm leading-relaxed text-crema-100/80">
                        {activo.descripcion}
                      </p>
                    </figcaption>
                  </figure>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
