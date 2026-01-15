"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// Usamos el alias @ que Next.js configura por defecto para apuntar a /src
import portafolioData from "@/data/portafolio.json";

// 1. Interfaces para TypeScript
interface Proyecto {
  id: string;
  img: string;
  title: string;
  desc: string;
  link: string;
  category: string | string[];
  technologies: string[];
}

interface CategoriaInfo {
  name: string;
  icon: string;
  count: number;
}

// Casteo de datos
const portafolio = portafolioData as Proyecto[];

const PortafolioPage = () => {
  const [filteredProjects, setFilteredProjects] = useState<Proyecto[]>(portafolio);
  const [activeCategory, setActiveCategory] = useState<string>("todos");
  const [isAnimating, setIsAnimating] = useState(false);

  // Función para contar proyectos
  const countProjectsByCategory = (categoryKey: string): number => {
    if (categoryKey === "todos") return portafolio.length;
    return portafolio.filter((p) => {
      if (Array.isArray(p.category)) {
        return p.category.includes(categoryKey);
      }
      return p.category === categoryKey;
    }).length;
  };

  // Mapa de categorías
  const categories: Record<string, CategoriaInfo> = {
    todos: { name: "Todos", icon: "🌟", count: portafolio.length },
    ia: { name: "I.A.", icon: "🤖", count: countProjectsByCategory("ia") },
    fullstack: { name: "Full Stack", icon: "⚡", count: countProjectsByCategory("fullstack") },
    educativo: { name: "Educativo", icon: "📚", count: countProjectsByCategory("educativo") },
    laboral: { name: "Laboral", icon: "💼", count: countProjectsByCategory("laboral") },
    accesibilidad: { name: "Accesibilidad", icon: "♿", count: countProjectsByCategory("accesibilidad") },
    juegos: { name: "Juegos", icon: "🎮", count: countProjectsByCategory("juegos") },
    web: { name: "Sitios Web", icon: "🌐", count: countProjectsByCategory("web") }
  };

  const handleCategoryChange = (category: string) => {
    if (category === activeCategory) return;
    
    setIsAnimating(true);
    setActiveCategory(category);

    setTimeout(() => {
      if (category === "todos") {
        setFilteredProjects(portafolio);
      } else {
        setFilteredProjects(portafolio.filter((proyecto) => {
          if (Array.isArray(proyecto.category)) {
            return proyecto.category.includes(category);
          }
          return proyecto.category === category;
        }));
      }
      setIsAnimating(false);
    }, 150);
  };

  return (
    <main className="min-h-screen pt-16 pb-24 px-5 md:px-8 lg:px-12 bg-slate-950">
      <div className="mx-auto w-full max-w-7xl">
        
        <header className="text-center mb-16 lg:mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_20px_rgba(59,130,246,0.5)] mb-6">
            Mi Portafolio
          </h1>
          <div className="w-28 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 mx-auto rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)] mb-8" />
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto px-2">
            Proyectos que reflejan mi pasión por la tecnología y la educación.
          </p>
        </header>

        {/* Filtros */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {Object.entries(categories).map(([key, cat]) => (
              <button
                key={key}
                onClick={() => handleCategoryChange(key)}
                disabled={cat.count === 0}
                className={`
                  px-4 py-2.5 rounded-xl font-semibold transition-all duration-300
                  flex items-center gap-2 border whitespace-nowrap
                  ${activeCategory === key 
                    ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-900/40 scale-105' 
                    : 'bg-gray-900/50 border-white/10 text-gray-400 hover:border-blue-500/50 hover:text-white'
                  }
                  ${cat.count === 0 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer hover:scale-105'}
                `}
              >
                <span className="text-lg">{cat.icon}</span>
                <span className="text-sm">{cat.name}</span>
                <span className="text-xs bg-black/30 px-2 py-0.5 rounded-full">{cat.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Proyectos */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          {filteredProjects.map((proyecto, index) => {
            const mainCatKey = Array.isArray(proyecto.category) ? proyecto.category[0] : proyecto.category;
            const mainCat = categories[mainCatKey] || categories.todos;

            return (
              <article
                key={proyecto.id}
                className="group flex flex-col h-full bg-gray-900/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <div className="absolute top-3 left-3 z-10 bg-blue-600/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-lg">
                    <span>{mainCat.icon}</span>
                    <span className="uppercase tracking-wider">{mainCat.name}</span>
                  </div>
                  <Image
                    src={proyecto.img}
                    alt={proyecto.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {proyecto.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {proyecto.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {proyecto.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-[10px] font-bold uppercase tracking-widest bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded-md border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {proyecto.link && proyecto.link !== "#" ? (
                    <a
                      href={proyecto.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-center transition-all shadow-lg flex items-center justify-center gap-2 group/btn"
                    >
                      Ver Proyecto
                      <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  ) : (
                    <span className="w-full py-3 bg-gray-800 text-gray-500 rounded-xl font-bold text-center border border-white/5 cursor-not-allowed">
                      Próximamente
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl text-white font-bold">No se encontraron proyectos</h3>
            <button 
              onClick={() => handleCategoryChange('todos')}
              className="mt-4 px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-500 transition-all"
            >
              Ver todos
            </button>
          </div>
        )}

        {/* Call to Action */}
        <section className="mt-24 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-blue-900/20 to-transparent border border-white/10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Tienes una idea en mente?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Estoy disponible para nuevos proyectos y colaboraciones.
          </p>
          <Link 
            href="/contacto" 
            className="inline-block px-10 py-4 bg-white text-blue-950 font-bold rounded-2xl hover:bg-blue-50 transition-all scale-100 hover:scale-105 shadow-xl"
          >
            Empezar un Proyecto
          </Link>
        </section>

      </div>
    </main>
  );
};

export default PortafolioPage;