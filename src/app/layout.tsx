import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ecocomal | Ingeniería en estufas ecológicas de leña, Guatemala",
    template: "%s | Ecocomal",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    siteName: SITE_NAME,
    locale: "es_GT",
    type: "website",
    url: SITE_URL,
    title: "Ecocomal | Ingeniería en estufas ecológicas de leña, Guatemala",
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * JSON-LD de Organization. Deliberadamente sin teléfono, correo ni dirección:
 * TODO: dato real pendiente — agregar `contactPoint` y `address` cuando el
 * cliente confirme los datos oficiales. No inventar.
 */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  legalName: "Ecocomal",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-ecocomal.png`,
  description: SITE_DESCRIPTION,
  areaServed: {
    "@type": "Country",
    name: "Guatemala",
  },
  knowsLanguage: "es-GT",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-crema-50 font-sans text-grafito-800">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
