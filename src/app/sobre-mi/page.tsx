"use client";

import Link from "next/link"
import Image from "next/image"
import { 
  Server, 
  Globe, 
  Layers, 
  Bot, 
  Zap, 
  GitBranch,
  Code2
} from "lucide-react"

const About = () => {
  const techStack = [
    {
      category: "Frontend",
      icon: <Code2 className="w-6 h-6 text-sky-400" />,
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap", "MUI"]
    },
    {
      category: "Backend & Bases de Datos",
      icon: <Server className="w-6 h-6 text-emerald-400" />,
      skills: ["Node.js", "Express", "PostgreSQL", "Prisma ORM", "WebSockets"]
    },
    {
      category: "Especialidades",
      icon: <Bot className="w-6 h-6 text-purple-400" />,
      skills: ["Integración Google AI", "Web Speech API", "PWA", "Electron", "SEO", "WCAG (Accesibilidad)"]
    },
    {
      category: "Metodologías & herramientas",
      icon: <GitBranch className="w-6 h-6 text-orange-400" />,
      skills: ["Git", "GitHub", "Agile", "Scrum"]
    }
  ];

  return (
    <main id="contenido-principal" className="min-h-screen pt-16 pb-24 px-5 md:px-8 lg:px-12 bg-slate-950">
      <div className="mx-auto w-full max-w-7xl">
        
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_20px_rgba(56,189,248,0.6)] mb-6">
            Acerca de Mí
          </h1>
          <div className="w-28 h-1 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-400 mx-auto rounded-full shadow-[0_0_20px_rgba(14,165,233,0.5)] mb-8" />
          <p className="text-gray-200 text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto px-2">
            Soy <span className="text-white font-semibold">Raúl Rodríguez Clavero</span>, desarrollador Fullstack, analista programador, profesor de inglés y apasionado por la innovación y las tecnologías educativas.
          </p>
        </header>

        {/* Sección de Stack Tecnológico */}
        <section className="mb-24">
          <div className="flex flex-col items-center gap-3 mb-10 justify-center">
            <div className="flex items-center gap-3">
              <Zap className="w-8 h-8 text-yellow-400 fill-yellow-400" />
              <h2 className="text-3xl font-bold text-white tracking-tight">Stack Tecnológico</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((item, idx) => (
              <div 
                key={idx} 
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-500/50 hover:bg-white/10 transition-all duration-300 shadow-xl flex flex-col items-center text-center"
              >
                <div className="flex flex-col items-center mb-4">
                  <div className="p-3 rounded-xl bg-slate-900/50 mb-3 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-white text-lg tracking-wide">{item.category}</h3>
                </div>

                <div className="flex flex-wrap justify-center gap-2">
                  {item.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-md bg-sky-500/10 text-sky-300 border border-sky-500/20 group-hover:border-sky-500/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Grid de Perfil y Trayectoria */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Columna Izquierda: Perfil Profesional */}
          <div className="lg:col-span-5 space-y-10">
            <div className="relative group mx-auto lg:mx-0 w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/about.jpg" 
                  alt="Raúl Rodríguez Clavero"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-sky-400" />
                </span>
                Perfil Profesional
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Fundador de <strong className="text-sky-400">Raúl Rodríguez - Soluciones Informáticas</strong>. 
                Mi enfoque une el desarrollo web fullstack moderno con la capacidad pedagógica 
                de un docente experto, permitiéndome crear software que no solo es funcional, 
                sino también innovador, intuitivo y centrado en el usuario.
              </p>
              <div className="flex gap-4">
                <Link 
                  href="/contacto" 
                  className="px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-sky-900/20"
                >
                  Contáctame
                </Link>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Trayectoria Experimental y Educativa */}
          <div className="lg:col-span-7 space-y-10">
             <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-emerald-400" />
                </span>
                Experiencia y Formación
              </h3>

            <div className="relative border-l-2 border-sky-500/30 pl-8 ml-4 space-y-12">
              
              {/* Item 1 */}
              <div className="relative group">
                <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-slate-950 border-4 border-sky-500 group-hover:scale-125 transition-transform" />
                <span className="text-sky-400 font-bold text-sm uppercase tracking-wider">2024 - Presente</span>
                <h4 className="text-xl font-bold text-white mt-1">Fundador - Raúl Rodríguez Soluciones Informáticas</h4>
                <p className="text-gray-400 mt-2">
                  Liderando el desarrollo de software a medida, aplicaciones web e integración de soluciones basadas en IA para potenciar negocios y emprendimientos.
                </p>
              </div>

              {/* Item 2 */}
              <div className="relative group">
                <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-slate-950 border-4 border-blue-500 group-hover:scale-125 transition-transform" />
                <span className="text-blue-400 font-bold text-sm uppercase tracking-wider">2019 - 2024</span>
                <h4 className="text-xl font-bold text-white mt-1">Fundador, Director & Docente - Instituto Online Radical English</h4>
                <p className="text-gray-400 mt-2">
                  Gestión integral de plataforma educativa, liderazgo pedagógico y aplicación de tecnologías de aprendizaje acelerado para la enseñanza del inglés.
                </p>
              </div>

              {/* Item 3 (Educación Detallada) */}
              <div className="relative group">
                <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-slate-950 border-4 border-indigo-500 group-hover:scale-125 transition-transform" />
                <span className="text-indigo-400 font-bold text-sm uppercase tracking-wider">Formación Académica</span>
                <h4 className="text-xl font-bold text-white mt-1">Hibridación Técnica y Pedagógica</h4>
                <div className="text-gray-400 mt-2 space-y-3">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                    <p className="text-white font-medium"> Bootcamp de Desarrollo Fullstack Javascript (Desafío Latam, Chile, 2025)</p>
                    <p className="text-xs text-emerald-300 ml-3">Desarrollo de aplicaciones web fullstack con tecnologías modernas.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                    <p className="text-white font-medium"> TNS Analista Programador (CFT Cenco, Chile, 2025)</p>
                    <p className="text-xs text-green-500 ml-3">Arquitectura de software, bases de datos, gestión de proyectos y paradigmas de programación.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                    <p className="text-white font-medium"> Magíster en TESOL (Teaching English to Speakers of Other Languages) (UNAB, Chile, 2020)</p>
                    <p className="text-xs text-sky-300 ml-3">Especialización en metodologías de enseñanza internacional.</p>
                  </div>

                  <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                    <p className="text-white font-medium"> Licenciado en Educación y Profesor de Inglés (PUCV, Chile, 2016)</p>
                    <p className="text-xs text-indigo-300 ml-3">Bases fundamentales para la creación de tecnologías educativas.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;