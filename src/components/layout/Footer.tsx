import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";

interface FooterLink {
  href: string;
  label: string;
}

const footerLinks: FooterLink[] = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/productos", label: "Productos" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-verde-900 text-verde-50">
      <Container className="grid gap-10 py-16 md:grid-cols-3">
        <div>
          <Image
            src="/logo-ecocomal-blanco.png"
            alt="Ecocomal"
            width={1029}
            height={550}
            className="h-10 w-auto"
          />
          <p className="mt-3 max-w-xs text-sm text-verde-100">
            Fabricamos e instalamos estufas ecológicas de leña de combustión
            mejorada, reduciendo el consumo de leña y el humo dentro del hogar.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-verde-300">
            Navegación
          </p>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-verde-100 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-verde-300">
            Contacto
          </p>
          <ul className="mt-4 space-y-3 text-sm text-verde-100">
            {/* TODO: reemplazar con el número de teléfono real de Ecocomal */}
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0" />
              <span>TODO: +502 0000 0000</span>
            </li>
            {/* TODO: reemplazar con el correo real de Ecocomal */}
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0" />
              <span>TODO: contacto@ecocomal.com</span>
            </li>
            {/* TODO: reemplazar con la ubicación real de Ecocomal */}
            <li className="flex items-center gap-2">
              <MapPin size={16} className="shrink-0" />
              <span>TODO: Ciudad, Guatemala</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-verde-700">
        <Container className="py-6 text-center text-xs text-verde-300">
          © {year} Ecocomal. Todos los derechos reservados.
        </Container>
      </div>
    </footer>
  );
}
