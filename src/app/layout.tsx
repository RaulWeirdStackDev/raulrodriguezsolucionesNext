import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import Script from "next/script";
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

// ===========================
// METADATA CONFIGURATION
// ===========================
export const metadata: Metadata = {
  metadataBase: new URL('https://www.raulrodriguez.cl'),
  title: {
    default: "Raúl Rodríguez | Desarrollo Web Full-Stack & Aplicaciones con IA",
    template: "%s | Raúl Rodríguez - Desarrollador Chile"
  },
  description: "Desarrollador Full-Stack especializado en aplicaciones educativas con IA, sitios web accesibles y soluciones digitales. Landing pages desde $250.000 en Valparaíso, Chile.",
  authors: [{ name: "Raúl Rodríguez Clavero" }],
  creator: "Raúl Rodríguez Clavero",
  publisher: "Raúl Rodríguez Soluciones Informáticas",
  
  openGraph: {
    title: "Raúl Rodríguez | Desarrollo Web & Aplicaciones Educativas con IA",
    description: "Desarrollador Full-Stack creando sitios web accesibles y aplicaciones innovadoras con IA. Especializado en tecnologías educativas en Chile.",
    url: "https://www.raulrodriguez.cl",
    siteName: "Raúl Rodríguez - Soluciones Informáticas",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Raúl Rodríguez - Desarrollador Full-Stack Chile"
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Raúl Rodríguez | Desarrollo Web & Apps con IA",
    description: "Desarrollador Full-Stack creando soluciones web accesibles e innovadoras con IA en Chile.",
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
      <body className={`${robotoMono.variable} antialiased font-sans`}>
        {/* Google Tag Manager - Script Principal */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W9VLCJ9N');`}
        </Script>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-W9VLCJ9N"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* Structured Data: Professional Profile + Services */}
        <Script
          id="structured-data-combined"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://www.raulrodriguez.cl/#person",
                  "name": "Raúl Rodríguez Clavero",
                  "jobTitle": "Desarrollador Full-Stack & Especialista en IA",
                  "url": "https://www.raulrodriguez.cl",
                  "image": "https://www.raulrodriguez.cl/hero.jpg",
                  "sameAs": [
                    "https://www.linkedin.com/in/raulrodriguezdev/",
                    "https://github.com/RaulWeirdStackDev",
                    "https://www.instagram.com/raulfullstackdev/"
                  ],
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Viña del Mar",
                    "addressRegion": "Valparaíso",
                    "addressCountry": "CL"
                  },
                  "knowsAbout": [
                    "Desarrollo Web Full-Stack",
                    "Inteligencia Artificial Educativa",
                    "Accesibilidad Web WCAG",
                    "Next.js",
                    "React"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.raulrodriguez.cl/#website",
                  "url": "https://www.raulrodriguez.cl",
                  "name": "Raúl Rodríguez | Desarrollo Web & IA",
                  "publisher": { "@id": "https://www.raulrodriguez.cl/#person" }
                },
                {
                  "@type": "Service",
                  "serviceType": "Desarrollo de Landing Pages",
                  "provider": { "@id": "https://www.raulrodriguez.cl/#person" },
                  "areaServed": "CL",
                  "offers": {
                    "@type": "Offer",
                    "priceCurrency": "CLP",
                    "price": "250000"
                  }
                }
              ]
            })
          }}
        />

        <Navbar />
        
        <VoiceHandler />
        <TextToSpeechHandler />
        
        <main id="main-content">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}