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
  title: "Raúl Rodríguez | Soluciones Informáticas | Desarrollo Web Full-Stack",
  description: "desarrollo web profesional: Landing Pages, sitios web, aplicaciones Full-Stack, APIs, PWAs, aplicaciones educativas y asesoría en accesibilidad web.",
  keywords: ["desarrollo web", "Full-Stack", "Viña del Mar", "Chile", "accesibilidad"],
  authors: [{ name: "Raúl Rodríguez Clavero" }],
  openGraph: {
    title: "Raúl Rodríguez | Soluciones Informáticas | Desarrollo Web Full-Stack",
    description: "Servicios de desarrollo web profesional y asesoría en accesibilidad.",
    url: "https://www.raulrodriguez.cl",
    siteName: "Raúl Rodríguez Portfolio",
    images: [
      {
        url: "https://www.raulrodriguez.cl/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_CL",
    type: "website",
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
        {/* Google Tag Manager - Script principal */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W9VLCJ9N');`}
        </Script>
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