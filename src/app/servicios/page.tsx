import type { Metadata } from "next";
import Link from "next/link";

// ===========================
// METADATA SEO
// ===========================
export const metadata: Metadata = {
  title: "Servicios de Desarrollo Web - Precios y Planes",
  description: "Servicios de desarrollo web en Chile: Landing Pages desde $250.000, sitios comerciales, aplicaciones web fullstack, PWA, APIs y apps educativas. Presupuestos transparentes, calidad profesional y soporte incluido.",
  
  openGraph: {
    title: "Servicios y Precios | Desarrollo Web Profesional en Chile",
    description: "Landing pages, sitios web comerciales, aplicaciones fullstack, PWAs y soluciones educativas. Precios competitivos, desarrollo moderno con React y Next.js. Valparaíso, Chile.",
    url: "https://www.raulrodriguez.cl/servicios",
    siteName: "Raúl Rodríguez - Soluciones Informáticas",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Servicios de Desarrollo Web - Raúl Rodríguez | Landing Pages, Sitios Web, Apps Fullstack"
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Servicios de Desarrollo Web | Precios Chile 2026",
    description: "Landing pages desde $250.000, sitios web comerciales, aplicaciones fullstack y más. Desarrollo profesional con React y Next.js.",
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: "https://www.raulrodriguez.cl/servicios",
  },

  keywords: [
    "desarrollo web Chile precios",
    "landing page Chile precio",
    "sitio web comercial costo",
    "aplicación web fullstack precio",
    "desarrollador web Valparaíso",
    "PWA Chile desarrollo",
    "API REST desarrollo Chile",
    "aplicaciones educativas precio",
    "desarrollo Next.js Chile",
    "React developer Chile precios"
  ],
};

// ===========================
// COMPONENTE
// ===========================
const Servicios = () => {
  const servicios = [
    {
      titulo: "Landing Page Profesional",
      descripcion:
        "Página única de alto impacto para captar leads, promociones o lanzamiento de productos. Optimizada para conversiones y móvil.",
      precio: "Desde $250.000 CLP",
      caracteristicas: ["Diseño personalizado", "SEO básico", "Optimización móvil", "Formulario de contacto", "1 ronda de revisiones"],
    },
    {
      titulo: "Sitio Web Comercial",
      descripcion:
        "Hasta 5–6 secciones/páginas. Ideal para empresas, profesionales, portafolios o servicios. Moderno y fácil de actualizar.",
      precio: "Desde $600.000 CLP",
      caracteristicas: [
        "Diseño responsive",
        "Hasta 6 páginas",
        "Sistema CMS simple (autoadministrable)",
        "SEO on-page avanzado",
        "Integración redes + Google Analytics",
      ],
    },
    {
      titulo: "Aplicación Web FullStack",
      descripcion:
        "Desarrollo a medida con autenticación, panel de administración, base de datos y funcionalidades personalizadas.",
      precio: "Desde $1.200.000 CLP",
      caracteristicas: ["Autenticación segura", "Base de datos PostgreSQL", "API REST/GraphQL", "Panel admin", "Escalable"],
    },
    {
      titulo: "Desarrollo de API",
      descripcion:
        "APIs robustas, seguras y documentadas (REST o GraphQL). Perfectas para conectar aplicaciones móviles o sistemas externos.",
      precio: "Desde $750.000 CLP",
      caracteristicas: ["Documentación Swagger/OpenAPI", "Autenticación JWT", "Validaciones estrictas", "Tests automatizados"],
    },
    {
      titulo: "Progressive Web App (PWA)",
      descripcion:
        "Sitio web con experiencia similar a app nativa: instalable, funciona offline, notificaciones push.",
      precio: "Cotizar",
      caracteristicas: ["Instalación en móvil", "Modo offline", "Notificaciones push", "Rendimiento optimizado"],
    },
    {
      titulo: "Aplicaciones Educativas",
      descripcion:
        "Plataformas de e-learning, apps con gamificación, reconocimiento de voz, ejercicios interactivos y seguimiento.",
      precio: "Cotizar",
      caracteristicas: ["Gamificación", "Progreso del usuario", "Integración IA opcional", "Diseño pedagógico"],
    },
    {
      titulo: "Auditoría y Mejora de Accesibilidad Web",
      descripcion:
        "Diagnóstico WCAG 2.2 + implementación de correcciones. Cumplimiento normativo y mejor inclusión.",
      precio: "Cotizar",
      caracteristicas: ["Informe detallado", "Niveles A/AA", "Pruebas con lectores de pantalla", "Capacitación básica"],
    },
    {
      titulo: "Despliegue y Puesta en Producción",
      descripcion:
        "Configuración completa: dominio, hosting/VPS, SSL, CI/CD, monitoreo inicial y entrega.",
      precio: "$150.000 CLP + costo dominio/hosting",
      caracteristicas: ["SSL gratuito", "Despliegue continuo", "Optimización rendimiento", "Entrega documentada"],
    },
  ];

  return (
    <main className="min-h-screen pt-16 pb-24 px-5 md:px-8 lg:px-12 bg-slate-950">
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <header className="text-center mb-20 lg:mb-24">
          <h1
            className="
              text-4xl sm:text-5xl lg:text-6xl 
              font-extrabold tracking-tight
              text-white
              drop-shadow-[0_4px_20px_rgba(59,130,246,0.6)]
              mb-6
            "
          >
            Servicios y Precios
          </h1>

          <div className="w-28 h-1 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-400 mx-auto rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)] mb-8" />

          <p className="text-gray-200 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto px-2">
            Soluciones web modernas y personalizadas para emprendedores, profesionales y empresas en Chile.  
            Calidad profesional, accesibilidad y excelente relación precio-valor.
          </p>
        </header>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicios.map((servicio, index) => (
            <article
              key={index}
              className="
                group bg-gradient-to-br from-gray-900/70 to-gray-950/70 
                backdrop-blur-xl border border-white/8 
                rounded-2xl p-7 sm:p-8 lg:p-9
                shadow-xl shadow-black/40
                hover:shadow-blue-900/30 hover:border-blue-500/40
                transition-all duration-400
                flex flex-col h-full
              "
            >
              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors text-center">
                {servicio.titulo}
              </h2>

              <p className="text-gray-300 text-base leading-relaxed mb-6 flex-grow">
                {servicio.descripcion}
              </p>

              {servicio.caracteristicas && (
                <ul className="text-sm text-gray-400 mb-6 space-y-1.5 pl-5 list-disc marker:text-blue-400">
                  {servicio.caracteristicas.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              <div className="mt-auto">
                <p className="text-xl font-bold text-blue-400 mb-2">
                  {servicio.precio}
                </p>
                <p className="text-sm text-gray-500 mb-5">
                  IVA no incluido • Precios referenciales 2026
                </p>

                <Link
                  href="/contacto"
                  className="
                    block w-full text-center
                    py-3.5 px-6
                    font-semibold text-white
                    bg-gradient-to-r from-blue-600 to-blue-700
                    rounded-xl
                    shadow-lg shadow-blue-900/40
                    hover:shadow-blue-700/50 hover:scale-105
                    transition-all duration-300
                  "
                  aria-label={`Cotizar servicio de ${servicio.titulo}`}
                >
                  Cotizar este servicio →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Footer note */}
        <footer className="text-center mt-16 text-gray-400 text-sm">
          <p>Todos los proyectos incluyen asesoría inicial gratuita • Revisiones y ajustes razonables • Soporte post-entrega 30 días</p>
          <p className="mt-2">
            ¿Necesitas algo diferente? <Link href="/contacto" className="text-blue-400 hover:underline">Hablemos de tu proyecto</Link>
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Servicios;