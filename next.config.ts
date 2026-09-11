import type { NextConfig } from "next";

/**
 * Cabeceras de seguridad aplicadas a todas las rutas.
 * HSTS obliga a que el navegador use HTTPS durante un año, incluidos los
 * subdominios. Requiere que el certificado cubra también los subdominios.
 */
const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,

  /**
   * Mapa de rutas antiguas → nuevas. Se usa `statusCode: 301` en lugar de
   * `permanent: true` (que emite 308) porque el brief pide explícitamente 301
   * y es el código que mejor entienden los rastreadores heredados.
   */
  async redirects() {
    return [
      { source: "/nosotros", destination: "/quienes-somos", statusCode: 301 },
      { source: "/servicios", destination: "/modelos", statusCode: 301 },
      { source: "/productos", destination: "/modelos", statusCode: 301 },
      { source: "/cotizacion", destination: "/contacto", statusCode: 301 },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
