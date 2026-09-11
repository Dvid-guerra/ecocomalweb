"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { NAV_ITEMS, type NavItem } from "@/lib/site";

function isRouteActive(pathname: string, item: NavItem): boolean {
  if (item.href === "/") return pathname === "/";
  if (pathname === item.href) return true;
  return pathname.startsWith(`${item.href}/`);
}

function topLevelClasses(isActive: boolean): string {
  return `inline-flex items-center gap-1 border-b-2 pb-1 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-oliva-700 ${
    isActive
      ? "border-naranja-500 text-grafito-900"
      : "border-transparent text-grafito-700 hover:text-grafito-900"
  }`;
}

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [rutaPrevia, setRutaPrevia] = useState(pathname);

  // Cerrar todo al navegar. Se ajusta durante el render (no en un efecto)
  // para que el menú nunca llegue a pintarse abierto en la ruta nueva.
  if (rutaPrevia !== pathname) {
    setRutaPrevia(pathname);
    setIsMobileOpen(false);
    setOpenDropdown(null);
    setOpenAccordion(null);
  }

  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef(new Map<string, HTMLButtonElement | null>());
  const itemRefs = useRef(new Map<string, (HTMLAnchorElement | null)[]>());

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 8);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar el desplegable al hacer clic fuera.
  useEffect(() => {
    if (!openDropdown) return;

    function handlePointerDown(event: PointerEvent) {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [openDropdown]);

  const focusItem = useCallback((href: string, index: number) => {
    const items = itemRefs.current.get(href) ?? [];
    const target = items[index];
    target?.focus();
  }, []);

  const closeAndRefocus = useCallback((href: string) => {
    setOpenDropdown(null);
    triggerRefs.current.get(href)?.focus();
  }, []);

  function handleTriggerKeyDown(
    event: React.KeyboardEvent<HTMLButtonElement>,
    item: NavItem
  ) {
    const children = item.children ?? [];

    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setOpenDropdown(item.href);
      // El submenú se monta en el mismo commit; enfocamos tras el pintado.
      requestAnimationFrame(() => focusItem(item.href, 0));
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setOpenDropdown(item.href);
      requestAnimationFrame(() => focusItem(item.href, children.length - 1));
      return;
    }

    if (event.key === "Escape") {
      setOpenDropdown(null);
    }
  }

  function handleItemKeyDown(
    event: React.KeyboardEvent<HTMLAnchorElement>,
    item: NavItem,
    index: number
  ) {
    const total = (item.children ?? []).length;

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        focusItem(item.href, (index + 1) % total);
        break;
      case "ArrowUp":
        event.preventDefault();
        focusItem(item.href, (index - 1 + total) % total);
        break;
      case "Home":
        event.preventDefault();
        focusItem(item.href, 0);
        break;
      case "End":
        event.preventDefault();
        focusItem(item.href, total - 1);
        break;
      case "Escape":
        event.preventDefault();
        closeAndRefocus(item.href);
        break;
      case "Tab":
        setOpenDropdown(null);
        break;
      default:
        break;
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-grafito-100 bg-crema-50/90 shadow-sm backdrop-blur-md"
          : "border-grafito-100/70 bg-crema-50"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link
          href="/"
          className="shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-oliva-700"
        >
          <Image
            src="/logo-ecocomal.png"
            alt="Ecocomal — inicio"
            width={1028}
            height={551}
            priority
            className="h-9 w-auto lg:h-11"
          />
        </Link>

        {/* Navegación de escritorio */}
        <nav aria-label="Principal" className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = isRouteActive(pathname, item);

            if (!item.children) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={topLevelClasses(isActive)}
                >
                  {item.label}
                </Link>
              );
            }

            const isOpen = openDropdown === item.href;
            const menuId = `submenu-${item.href.replace(/\//g, "-")}`;

            return (
              <div
                key={item.href}
                ref={isOpen ? dropdownRef : undefined}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  ref={(node) => {
                    triggerRefs.current.set(item.href, node);
                  }}
                  aria-expanded={isOpen}
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={() => setOpenDropdown(isOpen ? null : item.href)}
                  onKeyDown={(event) => handleTriggerKeyDown(event, item)}
                  className={topLevelClasses(isActive)}
                >
                  {item.label}
                  <ChevronDown
                    size={15}
                    aria-hidden="true"
                    className={`transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <ul
                    id={menuId}
                    className="absolute left-0 top-full z-50 mt-3 w-72 overflow-hidden rounded-md border border-grafito-100 bg-white py-1 shadow-lg shadow-grafito-900/10"
                  >
                    {item.children.map((child, index) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          ref={(node) => {
                            const list = itemRefs.current.get(item.href) ?? [];
                            list[index] = node;
                            itemRefs.current.set(item.href, list);
                          }}
                          onKeyDown={(event) =>
                            handleItemKeyDown(event, item, index)
                          }
                          onClick={() => setOpenDropdown(null)}
                          className={`block px-4 py-3 text-sm transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-oliva-700 ${
                            pathname === child.href
                              ? "bg-crema-100 font-medium text-grafito-900"
                              : "text-grafito-700 hover:bg-crema-50 hover:text-grafito-900"
                          }`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contacto#formulario" variant="cta" size="sm">
            Solicitar propuesta
          </Button>
        </div>

        <button
          type="button"
          className="text-grafito-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-oliva-700 lg:hidden"
          aria-label={isMobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMobileOpen}
          aria-controls="menu-movil"
          onClick={() => setIsMobileOpen((open) => !open)}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Navegación móvil: el desplegable se convierte en acordeón */}
      {isMobileOpen && (
        <nav
          id="menu-movil"
          aria-label="Principal (móvil)"
          className="border-t border-grafito-100 bg-crema-50 lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {NAV_ITEMS.map((item) => {
              const isActive = isRouteActive(pathname, item);

              if (!item.children) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-md px-3 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-crema-100 text-grafito-900"
                        : "text-grafito-700 hover:bg-crema-100 hover:text-grafito-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              const isExpanded = openAccordion === item.href;
              const panelId = `acordeon-${item.href.replace(/\//g, "-")}`;

              return (
                <div key={item.href}>
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={panelId}
                    onClick={() =>
                      setOpenAccordion(isExpanded ? null : item.href)
                    }
                    className={`flex w-full items-center justify-between gap-2 rounded-md px-3 py-3 text-left text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-crema-100 text-grafito-900"
                        : "text-grafito-700 hover:bg-crema-100 hover:text-grafito-900"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={16}
                      aria-hidden="true"
                      className={`shrink-0 transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <ul
                      id={panelId}
                      className="ml-3 mt-1 flex flex-col gap-1 border-l border-grafito-100 pl-3"
                    >
                      <li>
                        <Link
                          href={item.href}
                          className="block rounded-md px-3 py-2.5 text-sm text-grafito-700 transition-colors hover:bg-crema-100 hover:text-grafito-900"
                        >
                          Ver todos los modelos
                        </Link>
                      </li>
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={`block rounded-md px-3 py-2.5 text-sm transition-colors ${
                              pathname === child.href
                                ? "bg-crema-100 font-medium text-grafito-900"
                                : "text-grafito-700 hover:bg-crema-100 hover:text-grafito-900"
                            }`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}

            <Button
              href="/contacto#formulario"
              variant="cta"
              size="sm"
              className="mt-3"
            >
              Solicitar propuesta
            </Button>
          </Container>
        </nav>
      )}
    </header>
  );
}
