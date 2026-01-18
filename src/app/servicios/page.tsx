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
      titulo: "Una Sola Página Web",
      subtitulo: "Landing Page Profesional",
      descripcion:
        "Perfecta para promocionar un producto, captar clientes o lanzar tu negocio. Tu página estará optimizada para verse bien en celulares y computadores.",
      precio: "Desde $250.000 CLP",
      caracteristicas: [
        "Diseño a tu medida",
        "Aparece en Google (SEO básico)",
        "Se ve perfecto en computador, celular y tablet",
        "Formulario para que te contacten",
        "1 ronda de cambios incluida"
      ],
      incluye: "✅ Dominio .cl gratis por 1 año + Publicación incluida",
    },
    {
      titulo: "Sitio Web para tu Negocio",
      subtitulo: "Sitio Web Comercial",
      descripcion:
        "Hasta 6 páginas para mostrar todos tus servicios, productos o portafolio. Podrás actualizar el contenido tú mismo sin necesitar un programador.",
      precio: "Desde $600.000 CLP",
      caracteristicas: [
        "Funciona en todos los dispositivos",
        "Hasta 6 páginas (Inicio, Servicios, Nosotros, etc.)",
        "Podrás editar textos e imágenes tú mismo",
        "Optimizado para aparecer en Google",
        "Conectado a redes sociales y estadísticas"
      ],
      incluye: "✅ Dominio .cl gratis por 1 año + Publicación incluida",
    },
    {
      titulo: "Aplicación Web",
      subtitulo: "Aplicación Web FullStack",
      descripcion:
        "Una aplicación hecha 100% a medida para tu negocio. Con inicio de sesión de usuarios, base de datos segura y panel de control para administrar todo.",
      precio: "Desde $1.200.000 CLP",
      caracteristicas: [
        "Sistema de usuarios con contraseñas seguras",
        "Guarda información de forma segura",
        "Conexión con otras aplicaciones (API)",
        "Panel para administrar todo",
        "Crece con tu negocio"
      ],
      incluye: "✅ Publicación y configuración completa incluida",
    },
    {
  titulo: "Aplicaciones con Inteligencia Artificial",
  subtitulo: "Apps potenciadas con IA",
  descripcion:
    "Aplicaciones que usan inteligencia artificial para dar feedback automático, generar contenido personalizado, y cumplir tus objetivos de negocio o profesionales.",
  precio: "Desde $1.800.000 CLP",
  caracteristicas: [
    "Soluciones con IA para distintas industrias",
    "Integración con modelos de lenguaje avanzados",
    "Generación de textos personalizados",
    "Retroalimentación inteligente en tiempo real",
    "Y más según tus necesidades"
  ],
  incluye: "✅ Publicación y configuración completa incluida",
  destacado: true,
},
    {
      titulo: "Desarrollo de API",
      subtitulo: "Sistema de Conexión para Apps",
      descripcion:
        "Un sistema que permite conectar tu sitio web con apps de celular, otros sistemas o plataformas externas. Todo documentado y seguro.",
      precio: "Desde $750.000 CLP",
      caracteristicas: [
        "Documentación completa de cómo funciona",
        "Sistema de acceso seguro con tokens",
        "Validación de todos los datos",
        "Pruebas automáticas incluidas"
      ],
      incluye: "✅ Publicación y configuración completa incluida",
    },
    {
      titulo: "Aplicación Web Progresiva",
      subtitulo: "Progressive Web App (PWA)",
      descripcion:
        "Tu sitio web se puede instalar como una app en el celular, funciona sin internet y puede enviar notificaciones a tus clientes.",
      precio: "Cotizar",
      caracteristicas: [
        "Se instala en el celular como app",
        "Funciona sin conexión a internet",
        "Envía notificaciones push",
        "Carga súper rápido"
      ],
      incluye: "✅ Publicación y configuración completa incluida",
    },

    {
      titulo: "Revisión de Accesibilidad Web",
      subtitulo: "Auditoría WCAG 2.2",
      descripcion:
        "Revisamos que tu sitio web pueda ser usado por personas con discapacidad visual, auditiva o motriz. Te entregamos un informe y hacemos las correcciones necesarias.",
      precio: "Cotizar",
      caracteristicas: [
        "Informe detallado de problemas",
        "Cumplimiento de estándares internacionales",
        "Pruebas con lectores de pantalla",
        "Capacitación para tu equipo"
      ],
      incluye: "✅ Implementación de mejoras incluida",
    },
    {
      titulo: "Publicación de Proyectos Existentes",
      subtitulo: "Servicio de Rescate Web",
      descripcion:
        "¿Tienes un sitio web terminado pero no está en internet? Publicamos tu proyecto y lo dejamos funcionando.",
      precio: "$150.000 CLP + costos de dominio/hosting",
      caracteristicas: [
        "Certificado de seguridad SSL gratis",
        "Actualizaciones automáticas",
        "Optimización de velocidad",
        "Instrucciones de cómo funciona todo"
      ],
      incluye: "⚡ Servicio ideal si otro desarrollador te dejó solo"
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

          <p className="text-gray-200 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto px-2 mb-6">
            Soluciones web modernas y fáciles de entender para emprendedores, profesionales y empresas en Chile.  
            Calidad profesional, sin letra chica.
          </p>

          {/* Destacado de valor */}
          <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-green-500/30 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-green-300 font-semibold text-lg mb-2">
              🎁 Todos los proyectos incluyen:
            </p>
            <ul className="text-gray-200 text-sm sm:text-base space-y-1">
              <li>✅ Publicación en internet (configuración completa)</li>
              <li>✅ Dominio personalizado .cl gratis por 1 año</li>
              <li>✅ Hosting gratuito para sitios y landing pages</li>
              <li>✅ 30 días de soporte técnico después de la entrega</li>
            </ul>
          </div>
        </header>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicios.map((servicio, index) => (
            <article
              key={index}
              className={`
                group bg-gradient-to-br from-gray-900/70 to-gray-950/70 
                backdrop-blur-xl border 
                ${servicio.destacado ? 'border-yellow-500/40 shadow-yellow-900/30' : 'border-white/8'}
                rounded-2xl p-7 sm:p-8 lg:p-9
                shadow-xl shadow-black/40
                hover:shadow-blue-900/30 hover:border-blue-500/40
                transition-all duration-400
                flex flex-col h-full
                ${servicio.destacado ? 'relative' : ''}
              `}
            >
              {servicio.destacado && (
                <div className="absolute -top-3 right-4 bg-yellow-500 text-gray-900 px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                  🔥 Popular
                </div>
              )}

              <div className="mb-4">
                <h2 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                  {servicio.titulo}
                </h2>
                <p className="text-sm text-blue-400 font-medium">{servicio.subtitulo}</p>
              </div>

              <p className="text-gray-300 text-base leading-relaxed mb-6 flex-grow">
                {servicio.descripcion}
              </p>

              {servicio.caracteristicas && (
                <ul className="text-sm text-gray-400 mb-6 space-y-2 pl-1">
                  {servicio.caracteristicas.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Incluye */}
              <div className="bg-green-950/30 border border-green-700/30 rounded-lg p-3 mb-4">
                <p className="text-green-300 text-xs font-semibold">
                  {servicio.incluye}
                </p>
              </div>

              <div className="mt-auto">
                <p className="text-xl font-bold text-blue-400 mb-2">
                  {servicio.precio}
                </p>
                <p className="text-sm text-gray-500 mb-5">
                  IVA no incluido • Precios 2026
                </p>

                <Link
                  href="/contacto"
                  className={`
                    block w-full text-center
                    py-3.5 px-6
                    font-semibold text-white
                    ${servicio.destacado 
                      ? 'bg-gradient-to-r from-yellow-600 to-yellow-700 shadow-yellow-900/40 hover:shadow-yellow-700/50' 
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 shadow-blue-900/40 hover:shadow-blue-700/50'
                    }
                    rounded-xl
                    shadow-lg
                    hover:scale-105
                    transition-all duration-300
                  `}
                  aria-label={`Cotizar servicio de ${servicio.titulo}`}
                >
                  Cotizar este servicio →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Footer note */}
        <footer className="text-center mt-16 space-y-4">
          <div className="bg-gray-900/50 border border-gray-700/30 rounded-xl p-6 max-w-3xl mx-auto">
            <p className="text-gray-300 text-base mb-3 font-semibold">
              📋 Todos los proyectos incluyen:
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Asesoría inicial gratuita • Ajustes razonables incluidos • Soporte técnico por 30 días después de la entrega • 
              Instrucciones claras de cómo usar tu sitio web
            </p>
          </div>
          
          <p className="text-gray-400 text-base">
            ¿Necesitas algo diferente o tienes dudas? <Link href="/contacto" className="text-blue-400 hover:underline font-semibold">Conversemos sin compromiso</Link>
          </p>

          <p className="text-gray-500 text-xs max-w-2xl mx-auto">
            💡 Nota: A diferencia de otros desarrolladores, <span className="text-green-400 font-semibold">todos mis proyectos incluyen la publicación en internet</span>. 
            No te quedarás con archivos que no sabes cómo usar. Tu sitio estará online y funcionando desde el día 1.
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Servicios;