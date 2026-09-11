import Image from "next/image";
import Link from "next/link";
import { FileDown } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import {
  DOSSIER_HREF,
  DOSSIER_LABEL,
  NAV_ITEMS,
  SITE_NAME,
} from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-grafito-900 text-crema-100">
      <Container className="grid gap-12 py-16 md:grid-cols-3">
        <div>
          <Image
            src="/logo-ecocomal-blanco.png"
            alt={SITE_NAME}
            width={1029}
            height={550}
            className="h-10 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-crema-100/80">
            Diseñamos, fabricamos e instalamos estufas ecológicas de leña de
            combustión mejorada. Capacidad instalada para proyectos
            residenciales e institucionales en toda Guatemala.
          </p>
        </div>

        <div>
          <p className="font-display text-sm uppercase tracking-[0.18em] text-crema-50">
            Navegación
          </p>
          <ul className="mt-5 space-y-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-crema-100/80 transition-colors hover:text-naranja-500"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mt-2 space-y-2 border-l border-crema-50/15 pl-4">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="text-sm text-crema-100/60 transition-colors hover:text-naranja-500"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm uppercase tracking-[0.18em] text-crema-50">
            Documentación institucional
          </p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-crema-100/80">
            Ficha técnica, capacidad de producción y antecedentes de la empresa
            para juntas de licitación y cooperantes.
          </p>
          <Button
            href={DOSSIER_HREF}
            variant="cta"
            size="sm"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="mt-5"
          >
            <FileDown size={16} aria-hidden="true" />
            {DOSSIER_LABEL}
          </Button>

          {/*
            TODO: dato real pendiente — teléfono, correo y dirección oficiales
            de Ecocomal. No publicar datos de contacto hasta que el cliente los
            confirme; mientras tanto el único canal es el formulario.
          */}
          <p className="mt-6 text-sm text-crema-100/80">
            Para consultas y licitaciones,{" "}
            <Link
              href="/contacto#formulario"
              className="font-medium text-naranja-500 underline underline-offset-4 transition-colors hover:text-naranja-400"
            >
              escríbenos por el formulario
            </Link>
            .
          </p>
        </div>
      </Container>

      <div className="border-t border-crema-50/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-crema-100/60 sm:flex-row">
          <p>
            © {year} {SITE_NAME}. Todos los derechos reservados.
          </p>
          <p>Guatemala, Centroamérica.</p>
        </Container>
      </div>
    </footer>
  );
}
