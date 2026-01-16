import type { Metadata } from "next";
import {
  Rocket,
  MessageCircle,
  Target,
  Users,
  Brain,
  Layers,
  ArrowRight,
  Phone,
} from "lucide-react"
import Link from "next/link"
import Slider from "../components/Slider"
import Image from "next/image"

// ===========================
// METADATA SEO
// ===========================
export const metadata: Metadata = {
  title: {
    default: "Raúl Rodríguez | Desarrollo Web Full-Stack & Aplicaciones con IA",
    template: "%s | Raúl Rodríguez - Desarrollador Chile"
  },
  description: "Desarrollador Full-Stack en Valparaíso, Chile. Creo sitios web accesibles, landing pages, aplicaciones con IA y soluciones digitales efectivas. Landing pages desde $250.000. Portafolio con 18+ proyectos.",
  
  openGraph: {
    title: "Raúl Rodríguez | Desarrollo Web Full-Stack & Aplicaciones Educativas con IA",
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

  alternates: {
    canonical: "https://www.raulrodriguez.cl",
  },

  keywords: [
    "desarrollador web Chile",
    "desarrollador full-stack Valparaíso",
    "desarrollo web Viña del Mar",
    "landing page Chile",
    "aplicaciones web React",
    "Next.js desarrollador Chile",
    "sitios web accesibles WCAG",
    "aplicaciones educativas IA",
    "PWA Chile",
    "desarrollador Node.js Chile",
    "Raúl Rodríguez desarrollador",
    "web developer Chile"
  ],

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

};

// ===========================
// COMPONENTE
// ===========================
export default function Home() {
  return (
    <>
      <div className="w-full">
        <Slider />
      </div>
      <main id="contenido-principal" className="flex-1 flex flex-col items-center w-full bg-slate-950 text-white font-['Inter',sans-serif] leading-relaxed">
        {/* Hero Section */}
        <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-blue-700/40 backdrop-blur-sm border border-white/10 py-12 rounded-lg my-8 shadow-xl">
          <div className="flex flex-wrap items-center min-h-[75vh]">
            <div className="w-full lg:w-7/12 mb-8 lg:mb-0 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-balance">
                Convierto tus ideas en{" "}
                <span className="text-blue-400">experiencias web</span> innovadoras y efectivas.
              </h1>
              <p className="text-lg md:text-xl mb-6 text-blue-100/90 text-pretty">
                Desarrollador Full Stack especializado en crear sitios web
                accesibles y funcionales que realmente generen resultados para tu
                emprendimiento, empresa o ejercicio profesional.
              </p>

              <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
                <Link
                  href="/portafolio"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-md transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] no-underline"
                >
                  <Rocket className="mr-2" size={20} aria-hidden="true" />
                  Ver mis proyectos
                </Link>
                <a
                  href="https://wa.me/56972033734"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border-2 border-blue-400/50 text-white font-semibold rounded-md transition-all duration-300 hover:bg-blue-400/20 hover:border-blue-400 no-underline"
                  aria-label="Contactar por WhatsApp (abre en nueva ventana)"
                >
                  <MessageCircle className="mr-2" size={20} aria-hidden="true" />
                  Hablemos
                </a>
              </div>
            </div>

            <div className="w-full lg:w-5/12 text-center mt-8 lg:mt-0">
              <div className="relative inline-block">
                <Image
                  src="/hero.jpg"
                  alt="Raúl Rodríguez - Desarrollador Web Full Stack especializado en React y Next.js"
                  width={300}
                  height={300}
                  priority
                  className="w-4/5 max-w-[300px] mx-auto rounded-full border-4 border-blue-400/30 shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-transform duration-300 hover:scale-105 hover:border-blue-400/60"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Value Propositions */}
        <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12" aria-labelledby="value-props">
          <div className="w-full lg:w-8/12 mx-auto text-center mb-12">
            <h2 id="value-props" className="text-3xl md:text-4xl font-semibold mb-8 text-white">¿Por qué elegir mis servicios?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Target size={48} className="text-blue-400" />,
                title: "Sitios que convierten",
                text: "Diseño pensando en tus objetivos comerciales, no solo en que se vea bonito.",
              },
              {
                icon: <Users size={48} className="text-blue-400" />,
                title: "Accesible para todos",
                text: "Tu sitio funcionará perfectamente para todo tipo de usuarios.",
              },
              {
                icon: <Rocket size={48} className="text-blue-400" />,
                title: "De la idea al lanzamiento",
                text: "Te acompaño en todo el proceso, desde el concepto hasta tener tu sitio online.",
              },
            ].map((item, i) => (
              <article key={i} className="h-full text-center bg-gradient-to-br from-blue-900/30 to-blue-800/20 backdrop-blur-sm border border-blue-400/20 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(59,130,246,0.3)] hover:bg-blue-900/40 hover:border-blue-400/40 p-6">
                <div className="mb-3" aria-hidden="true">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-blue-100/80 text-pretty">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Portfolio Preview */}
        <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12" aria-labelledby="portfolio-preview">
          <div className="w-full lg:w-8/12 mx-auto text-center mb-12">
            <h2 id="portfolio-preview" className="text-3xl md:text-4xl font-semibold mb-8 text-white">Algunos proyectos destacados</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
            <article className="text-center transition-transform duration-300 hover:-translate-y-1">
              <MessageCircle size={40} className="text-blue-400 mb-3 mx-auto" aria-hidden="true" />
              <p className="text-blue-100/90 text-pretty">Herramienta de comunicación aumentativa para personas no verbales utilizando tecnologías de síntesis de voz</p>
            </article>
            <article className="text-center transition-transform duration-300 hover:-translate-y-1">
              <Brain size={40} className="text-blue-400 mb-3 mx-auto" aria-hidden="true" />
              <p className="text-blue-100/90 text-pretty">Aplicaciones educativas con inteligencia artificial y gamificación para diferentes asignaturas y niveles</p>
            </article>
            <article className="text-center transition-transform duration-300 hover:-translate-y-1">
              <Layers size={40} className="text-blue-400 mb-3 mx-auto" aria-hidden="true" />
              <p className="text-blue-100/90 text-pretty">Plataformas fullstack con funcionalidades avanzadas como autentificación de usuarios y gestión de contenidos</p>
            </article>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/portafolio"
              className="inline-flex items-center px-6 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-md transition-all duration-300 hover:bg-blue-400 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] no-underline"
            >
              <ArrowRight className="mr-2" size={20} aria-hidden="true" />
              Ver todos mis proyectos
            </Link>
          </div>
        </section>

        {/* Mis Clientes */}
        <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-blue-700/40 backdrop-blur-sm border border-white/10 py-8 rounded-lg mb-8 shadow-xl" aria-labelledby="clients">
          <div className="w-full lg:w-8/12 mx-auto text-center mb-6">
            <h2 id="clients" className="text-3xl md:text-4xl font-semibold mb-2 text-white">Mis Clientes</h2>
            <p className="text-lg text-blue-100/90 mb-0 text-balance">
              Profesionales, empresas y emprendimientos que han confiado en mi trabajo
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center items-stretch max-w-5xl mx-auto">
            <article className="h-full w-full">
              <a
                href="https://sangomtaekwondo.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex flex-col items-center text-center p-6 h-full min-h-[180px] justify-center
                  bg-blue-900/30 backdrop-blur-sm border border-blue-400/20 rounded-xl
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(59,130,246,0.3)]
                  hover:bg-blue-900/40 hover:border-blue-400/50
                  no-underline hover:no-underline
                "
                aria-label="Visitar sitio web de Sangom Taekwondo Center"
              >
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center p-2 mb-3 shadow-lg">
                  <Image
                    src="/sangomLogo.png"
                    alt="Logo de Sangom Taekwondo Center"
                    width={80}
                    height={80}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h3 className="text-base font-semibold mb-2 text-white transition-colors duration-300 hover:text-blue-300 text-balance">
                  Sangom Taekwondo Center
                </h3>
                <p className="text-sm text-blue-100/80 mb-0 leading-snug text-pretty">
                  Academia de Taekwondo en Villa Alemana
                </p>
              </a>
            </article>

            <article className="h-full w-full">
              <a
                href="https://aylana.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex flex-col items-center text-center p-6 h-full min-h-[180px] justify-center
                  bg-blue-900/30 backdrop-blur-sm border border-blue-400/20 rounded-xl
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(59,130,246,0.3)]
                  hover:bg-blue-900/40 hover:border-blue-400/50
                  no-underline hover:no-underline
                "
                aria-label="Visitar sitio web de Ay Lana!"
              >
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center p-2 mb-3 shadow-lg">
                  <Image
                    src="/aylanaLogo.png"
                    alt="Logo de Ay Lana!"
                    width={80}
                    height={80}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h3 className="text-base font-semibold mb-2 text-white transition-colors duration-300 hover:text-blue-300 text-balance">
                  Ay Lana!
                </h3>
                <p className="text-sm text-blue-100/80 mb-0 leading-snug text-pretty">
                  Figuras conmemorativas de mascotas
                </p>
              </a>
            </article>

            <article className="h-full w-full">
              <a
                href="https://raksa.cl/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex flex-col items-center text-center p-6 h-full min-h-[180px] justify-center
                  bg-blue-900/30 backdrop-blur-sm border border-blue-400/20 rounded-xl
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(59,130,246,0.3)]
                  hover:bg-blue-900/40 hover:border-blue-400/50
                  no-underline hover:no-underline
                "
                aria-label="Visitar sitio web de Raksa Auditores"
              >
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center p-2 mb-3 shadow-lg">
                  <Image
                    src="/raksaLogo.png"
                    alt="Logo de Raksa Auditores"
                    width={80}
                    height={80}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h3 className="text-base font-semibold mb-2 text-white transition-colors duration-300 hover:text-blue-300 text-balance">
                  Raksa Auditores
                </h3>
                <p className="text-sm text-blue-100/80 mb-0 leading-snug text-pretty">
                  Contabilidad y auditoría tributaria
                </p>
              </a>
            </article>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-900 to-blue-800 text-white py-12 rounded-lg text-center mb-5 shadow-2xl" aria-labelledby="cta">
          <div className="w-full lg:w-8/12 mx-auto">
            <h2 id="cta" className="text-3xl md:text-4xl font-semibold mb-6 text-white text-balance">¿Llevemos tu idea al siguiente nivel?</h2>
            <p className="text-lg md:text-xl mb-6 text-blue-50 text-pretty">
              Hablemos sobre cómo puedo ayudarte a crear una presencia digital gracias a un sitio web
              que realmente genere los resultados que buscas.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a
                href="https://wa.me/56972033734"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-md transition-all duration-300 hover:bg-blue-50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] no-underline"
                aria-label="Contactar por WhatsApp (abre en nueva ventana)"
              >
                <Phone className="mr-2" size={20} aria-hidden="true" />
                Conversemos por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}