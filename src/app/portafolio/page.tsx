import type { Metadata } from "next";
import PortfolioClient from "./PortafolioClient";

export const metadata: Metadata = {
  title: "Portafolio - Proyectos de Desarrollo Web & IA",
  description: "Explora más de 18 proyectos de desarrollo web, aplicaciones educativas con IA, PWAs, juegos interactivos y soluciones de accesibilidad. Experiencia con React, Next.js, Gemini API, Web Speech API y más.",
  
  openGraph: {
    title: "Portafolio | Raúl Rodríguez - Proyectos Web & Aplicaciones con IA",
    description: "Descubre aplicaciones educativas innovadoras con inteligencia artificial, PWAs instalables, juegos web interactivos y soluciones de accesibilidad desarrolladas con tecnologías modernas.",
    url: "https://www.raulrodriguez.cl/portafolio",
    siteName: "Raúl Rodríguez - Soluciones Informáticas",
    images: [
      {
        url: "/speakingtutor.png",
        width: 1200,
        height: 630,
        alt: "Portafolio de Raúl Rodríguez - Proyectos de desarrollo web y aplicaciones educativas con IA"
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Portafolio | Proyectos Web & Apps Educativas con IA",
    description: "18+ proyectos: aplicaciones educativas con Gemini API, PWAs, juegos interactivos y soluciones accesibles. React, Next.js y más.",
    images: ["/speakingtutor.png"],
  },

  alternates: {
    canonical: "https://www.raulrodriguez.cl/portafolio",
  },

  keywords: [
    "portafolio desarrollador fullstack",
    "proyectos React Chile",
    "aplicaciones educativas IA",
    "Gemini API proyectos",
    "PWA Chile ejemplos",
    "Web Speech API proyectos",
    "juegos web JavaScript",
    "aplicaciones accesibles WCAG",
    "portafolio Next.js",
    "desarrollador educativo Chile",
    "SpeakingTutor IA",
    "WritingCorrector Gemini"
  ],
};

export default function PortafolioPage() {
  return <PortfolioClient />;
}
