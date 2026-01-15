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

export default function Home() {
  return (
    <>
      <div className="w-full">
        <Slider />
      </div>
      <main id="contenido-principal" className="flex-1 flex flex-col items-center w-full bg-slate-950 text-white font-['Inter',sans-serif] leading-relaxed">
        {/* Hero Section */}
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-blue-700/40 backdrop-blur-sm border border-white/10 py-12 rounded-lg my-8 shadow-xl">
          <div className="flex flex-wrap items-center min-h-[75vh]">
            <div className="w-full lg:w-7/12 mb-8 lg:mb-0 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Convierto tus ideas en{" "}
                <span className="text-blue-400">experiencias web</span> innovadoras y efectivas.
              </h1>
              <p className="text-lg md:text-xl mb-6 text-blue-100/90">
                Desarrollador Full Stack especializado en crear sitios web
                accesibles y funcionales que realmente generen resultados para tu
                emprendimiento, empresa o ejercicio profesional.
              </p>

              <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
                <Link
                  href="/portafolio"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-md transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] no-underline"
                >
                  <Rocket className="mr-2" size={20} />
                  Ver mis proyectos
                </Link>
                <a
                  href="https://wa.me/56972033734"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border-2 border-blue-400/50 text-white font-semibold rounded-md transition-all duration-300 hover:bg-blue-400/20 hover:border-blue-400 no-underline"
                >
                  <MessageCircle className="mr-2" size={20} />
                  Hablemos
                </a>
              </div>
            </div>

            <div className="w-full lg:w-5/12 text-center mt-8 lg:mt-0">
              <div className="relative inline-block">
                <Image
                  src="/hero.jpg"
                  alt="Raúl Rodríguez - Desarrollador Web Full Stack"
                  width={300}
                  height={300}
                  className="w-4/5 max-w-[300px] mx-auto rounded-full border-4 border-blue-400/30 shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-transform duration-300 hover:scale-105 hover:border-blue-400/60"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Value Propositions */}
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="w-full lg:w-8/12 mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-white">¿Por qué elegir mis servicios?</h2>
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
              <div key={i} className="h-full text-center bg-gradient-to-br from-blue-900/30 to-blue-800/20 backdrop-blur-sm border border-blue-400/20 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(59,130,246,0.3)] hover:bg-blue-900/40 hover:border-blue-400/40 p-6">
                <div className="mb-3">{item.icon}</div>
                <h4 className="text-xl font-semibold mb-2 text-white">{item.title}</h4>
                <p className="text-blue-100/80">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio Preview */}
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="w-full lg:w-8/12 mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-white">Algunos proyectos destacados</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
            <div className="text-center transition-transform duration-300 hover:-translate-y-1">
              <MessageCircle size={40} className="text-blue-400 mb-3 mx-auto" />
              <p className="text-blue-100/90">Herramienta de comunicación aumentativa para personas no verbales utilizando tecnologías de síntesis de voz</p>
            </div>
            <div className="text-center transition-transform duration-300 hover:-translate-y-1">
              <Brain size={40} className="text-blue-400 mb-3 mx-auto" />
              <p className="text-blue-100/90">Aplicaciones educativas con inteligencia artificial y gamificación para diferentes asignaturas y niveles</p>
            </div>
            <div className="text-center transition-transform duration-300 hover:-translate-y-1">
              <Layers size={40} className="text-blue-400 mb-3 mx-auto" />
              <p className="text-blue-100/90">Plataformas fullstack con funcionalidades avanzadas como autentificación de usuarios y gestión de contenidos</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/portafolio"
              className="inline-flex items-center px-6 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-md transition-all duration-300 hover:bg-blue-400 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] no-underline"
            >
              <ArrowRight className="mr-2" size={20} />
              Ver todos mis proyectos
            </Link>
          </div>
        </div>

        {/* Mis Clientes */}
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-blue-700/40 backdrop-blur-sm border border-white/10 py-8 rounded-lg mb-8 shadow-xl">
          <div className="w-full lg:w-8/12 mx-auto text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-white">Mis Clientes</h2>
            <p className="text-lg text-blue-100/90 mb-0">
              Profesionales, empresas y emprendimientos que han confiado en mi trabajo
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 justify-items-center items-stretch max-w-4xl mx-auto">
            <div className="h-full w-full">
              <a
                href="https://sangomtaekwondo.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex flex-col items-center text-center p-4 h-full min-h-[180px] justify-center
                  bg-blue-900/30 backdrop-blur-sm border border-blue-400/20 rounded-xl
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(59,130,246,0.3)]
                  hover:bg-blue-900/40 hover:border-blue-400/50
                  no-underline hover:no-underline
                "
              >
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center p-2 mb-3 shadow-lg">
                  <Image
                    src="/sangomLogo.png"
                    alt="Sangom Taekwondo Center"
                    width={80}
                    height={80}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h5 className="text-base font-semibold mb-1 text-white transition-colors duration-300 hover:text-blue-300">
                  Sangom Taekwondo Center
                </h5>
                <p className="text-sm text-blue-100/80 mb-0 leading-tight">
                  Academia de Taekwondo en Villa Alemana
                </p>
              </a>
            </div>

            <div className="h-full w-full">
              <a
                href="https://aylana.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex flex-col items-center text-center p-4 h-full min-h-[180px] justify-center
                  bg-blue-900/30 backdrop-blur-sm border border-blue-400/20 rounded-xl
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(59,130,246,0.3)]
                  hover:bg-blue-900/40 hover:border-blue-400/50
                  no-underline hover:no-underline
                "
              >
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center p-2 mb-3 shadow-lg">
                  <Image
                    src="/aylanaLogo.png"
                    alt="Ay Lana!"
                    width={80}
                    height={80}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h5 className="text-base font-semibold mb-1 text-white transition-colors duration-300 hover:text-blue-300">
                  Ay Lana!
                </h5>
                <p className="text-sm text-blue-100/80 mb-0 leading-tight">
                  Figuras conmemorativas de mascotas con lana
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-900 to-blue-800 text-white py-12 rounded-lg text-center mb-5 shadow-2xl">
          <div className="w-full lg:w-8/12 mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">¿Llevemos tu idea al siguiente nivel?</h2>
            <p className="text-lg md:text-xl mb-6 text-blue-50">
              Hablemos sobre cómo puedo ayudarte a crear una presencia digital gracias a un sitio web
              que realmente genere los resultados que buscas.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a
                href="https://wa.me/56972033734"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-md transition-all duration-300 hover:bg-blue-50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] no-underline"
              >
                <Phone className="mr-2" size={20} />
                Conversemos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}