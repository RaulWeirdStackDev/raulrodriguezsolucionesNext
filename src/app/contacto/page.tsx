import type { Metadata } from "next";
import ContactForm from "./ContactForm"

// Metadata SEO (Server Component)
export const metadata: Metadata = {
  title: "Contacto - Solicita tu Presupuesto",
  description: "Contáctame para desarrollar tu proyecto web. Landing pages, sitios comerciales, aplicaciones fullstack y más. Respuesta en 24-48 horas. WhatsApp, Email o formulario directo. Valparaíso, Chile.",
  
  openGraph: {
    title: "Contacto | Raúl Rodríguez - Solicita tu Presupuesto Web",
    description: "¿Tienes un proyecto en mente? Contáctame para cotizar tu landing page, sitio web o aplicación. Atención personalizada y respuesta rápida.",
    url: "https://www.raulrodriguez.cl/contacto",
    siteName: "Raúl Rodríguez - Soluciones Informáticas",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contacto - Raúl Rodríguez Desarrollador Web Chile"
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Contacto | Solicita tu Presupuesto Web",
    description: "Contáctame para tu proyecto web. Respuesta en 24-48 horas. WhatsApp, Email o formulario.",
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: "https://www.raulrodriguez.cl/contacto",
  },

  keywords: [
    "contacto desarrollador web Chile",
    "presupuesto landing page",
    "cotizar sitio web",
    "desarrollador Valparaíso contacto",
    "solicitar presupuesto web",
    "contacto programador Chile",
    "cotización aplicación web",
    "WhatsApp desarrollador web"
  ],
};

// Server Component que renderiza el Client Component
export default function ContactoPage() {
  return <ContactForm />;
}