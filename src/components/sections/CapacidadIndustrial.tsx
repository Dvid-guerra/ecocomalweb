import { Factory, FileDown, Truck, Warehouse, type LucideIcon } from "lucide-react";
import Button from "@/components/ui/Button";
import Carrusel, { type Foto } from "@/components/ui/Carrusel";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Reveal from "@/components/ui/Reveal";
import { DOSSIER_HREF, DOSSIER_LABEL } from "@/lib/site";

interface ActivoCapacidad {
  id: string;
  titulo: string;
  descripcion: string;
  icon: LucideIcon;
  /** Fotografías reales del activo; se recorren con las flechas del carrusel. */
  fotos: Foto[];
}

const ACTIVOS: ActivoCapacidad[] = [
  {
    id: "planta",
    titulo: "Planta de producción",
    descripcion:
      "Línea de fabricación propia en Guatemala, con control de calidad por lote.",
    icon: Factory,
    fotos: [
      {
        src: "/capacidad/planta-1.jpg",
        alt: "Operarios de Ecocomal desmoldando cuerpos de estufa en la línea de producción",
      },
      {
        src: "/capacidad/planta-2.jpg",
        alt: "Corte de lámina para la fabricación de planchas de estufa Ecocomal",
      },
    ],
  },
  {
    id: "bodegas",
    titulo: "Bodegas de almacenaje",
    descripcion:
      "Inventario en resguardo para sostener entregas escalonadas sin quiebre de stock.",
    icon: Warehouse,
    fotos: [
      {
        src: "/capacidad/bodegas-1.jpg",
        alt: "Hilera de cuerpos de estufa terminados en la bodega de Ecocomal",
      },
      {
        src: "/capacidad/bodegas-2.jpg",
        alt: "Cámaras de combustión de concreto apiladas en inventario",
      },
    ],
  },
  {
    id: "transporte",
    titulo: "Transporte y logística",
    descripcion:
      "Distribución propia a los 22 departamentos, incluyendo acceso a comunidades rurales.",
    icon: Truck,
    fotos: [
      {
        src: "/capacidad/transporte-1.jpg",
        alt: "Camión de reparto rotulado con el logotipo de Ecocomal",
      },
    ],
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

        {/* Galería con desplazamiento por pasos; cada tarjeta recorre sus
            propias fotos con las flechas del carrusel. */}
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
                    <Carrusel
                      fotos={activo.fotos}
                      etiqueta={activo.titulo}
                      tono="oscuro"
                      sizes="(max-width: 640px) 85vw, (max-width: 1024px) 48vw, 32vw"
                      className="aspect-[4/3] w-full bg-oliva-900"
                    />
                    <figcaption className="flex flex-1 flex-col gap-2 p-5">
                      <h3 className="flex items-center gap-2.5 font-display text-base uppercase tracking-tight text-crema-50">
                        <Icon
                          size={18}
                          strokeWidth={1.75}
                          aria-hidden="true"
                          className="shrink-0 text-naranja-400"
                        />
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
