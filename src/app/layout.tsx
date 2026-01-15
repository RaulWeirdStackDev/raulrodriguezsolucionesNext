import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import Script from "next/script"; // Importante para el GTM
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VoiceHandler } from "@/lib/VoiceHandler";
import { TextToSpeechHandler } from "@/lib/TexToSpeechHandler";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.raulrodriguez.cl'),
  title: {
  default: "Raúl Rodríguez | Desarrollo Web Full-Stack & Aplicaciones con IA",
  template: "%s | Raúl Rodríguez - Desarrollador Chile"
       },
  description: "Desarrollador Full-Stack especializado en aplicaciones educativas con IA, sitios web accesibles y soluciones digitales. Landing pages desde $250.000. Valparaíso, Chile.",
  authors: [{ name: "Raúl Rodríguez Clavero" }],
  creator: "Raúl Rodríguez Clavero",
  publisher: "Raúl Rodríguez Soluciones Informáticas",
  
  openGraph: {
    title: "Raúl Rodríguez | Desarrollo Web & Aplicaciones Educativas con IA",
    description: "Desarrollador Full-Stack creando sitios web accesibles y aplicaciones innovadoras con inteligencia artificial. Especializado en tecnologías educativas y soluciones digitales efectivas.",
    url: "https://www.raulrodriguez.cl",
    siteName: "Raúl Rodríguez - Soluciones Informáticas",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Raúl Rodríguez - Desarrollador Full-Stack | Aplicaciones Educativas con IA - Chile"
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Raúl Rodríguez | Desarrollo Web & Apps Educativas con IA",
    description: "Desarrollador Full-Stack creando soluciones web accesibles y aplicaciones educativas innovadoras con IA en Chile.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: "https://www.raulrodriguez.cl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
<head>
  {/* Charset y compatibilidad básica */}
  <meta charSet="utf-8" />
  
  {/* Google Tag Manager - Script principal (tu código original, perfecto) */}
  <Script id="google-tag-manager" strategy="afterInteractive">
    {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-W9VLCJ9N');`}
  </Script>

  {/* Structured Data: JSON-LD para Persona (mejora rich results, Knowledge Graph y búsquedas IA) */}
  <Script
    id="structured-data-person"
    type="application/ld+json"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Raúl Rodríguez Clavero",
        "jobTitle": "Desarrollador Full-Stack & Especialista en Aplicaciones Educativas con IA",
        "url": "https://www.raulrodriguez.cl",
        "image": "https://www.raulrodriguez.cl/logo.png", // o usa tu foto profesional si prefieres
        "sameAs": [
          "https://www.linkedin.com/in/raulrodriguezdev/", // ← ¡reemplaza con tus links reales!
          "https://github.com/RaulWeirdStackDev",
          // "https://twitter.com/tuusuario",
           "https://www.instagram.com/raulfullstackdev/",
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Viña del Mar",
          "addressRegion": "Valparaíso",
          "postalCode": "2520000", 
          "addressCountry": "CL"
        },
        "email": "contacto@raulrodriguez.cl", 
        "knowsAbout": [
          "Desarrollo Web Full-Stack",
          "Inteligencia Artificial Educativa",
          "Accesibilidad Web WCAG",
          "Next.js",
          "React",
          "Progressive Web Apps"
        ]
      })
    }}
  />

</head>
      <body className={`${robotoMono.variable} antialiased`}>
        {/* Google Tag Manager (noscript) - Para navegadores sin JS */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-W9VLCJ9N"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Navbar />
        
        <VoiceHandler />
        <TextToSpeechHandler />
        
        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}