"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/productos", label: "Productos" },
  { href: "/contacto", label: "Contacto" },
];

function navLinkClasses(isActive: boolean) {
  return `border-b-2 pb-1 text-sm font-medium transition-colors ${
    isActive
      ? "border-naranja-500 text-verde-700"
      : "border-transparent text-ink hover:text-verde-600"
  }`;
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 8);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-verde-100/60 bg-white/70 shadow-sm backdrop-blur-md"
          : "border-verde-100 bg-white"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo-ecocomal.png"
            alt="Ecocomal"
            width={1028}
            height={551}
            priority
            className="h-9 w-auto md:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} className={navLinkClasses(isActive)}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href="/cotizacion" variant="cta" size="sm">
            Cotizar
          </Button>
        </div>

        <button
          type="button"
          className="text-ink md:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {isOpen && (
        <nav className="border-t border-verde-100 bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-verde-50 text-verde-700"
                      : "text-ink hover:bg-verde-50 hover:text-verde-600"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button href="/cotizacion" variant="cta" size="sm" className="mt-2">
              Cotizar
            </Button>
          </Container>
        </nav>
      )}
    </header>
  );
}
