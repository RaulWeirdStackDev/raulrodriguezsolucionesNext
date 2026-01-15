"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Slides data
  const slides = [
    {
      id: "landing-pages",
      title: "LANDING PAGES",
      subtitle: "Diseños atractivos que convierten visitantes en clientes",
      cta: "Solicitar Cotización →",
      gradient: "from-gray-700 to-teal-400",
      accentColor: "bg-teal-400",
      buttonBg: "bg-teal-400 hover:bg-teal-500",
      buttonText: "text-gray-800"
    },
    {
      id: "sitios-web",
      title: "SITIOS WEB",
      subtitle: "COMERCIALES Y PROFESIONALES",
      description: "Presencia digital que impulsa tu profesión o negocio al siguiente nivel",
      cta: "Ver Portafolio →",
      gradient: "from-gray-700 to-gray-600",
      accentColor: "bg-teal-400",
      buttonBg: "bg-teal-400 hover:bg-teal-500",
      buttonText: "text-gray-800"
    },
    {
      id: "educativas",
      title: "APLICACIONES",
      subtitle: "EDUCATIVAS",
      description: "Herramientas interactivas e innovadoras que revolucionan el aprendizaje",
      cta: "Cotizar Herramienta Pedagógica →",
      gradient: "from-gray-700 to-amber-500",
      accentColor: "bg-amber-500",
      buttonBg: "bg-amber-500 hover:bg-amber-600",
      buttonText: "text-gray-800"
    },
    {
      id: "full-stack",
      title: "APLICACIONES",
      subtitle: "FULL-STACK",
      description: "Soluciones completas desde el frontend hasta la base de datos",
      cta: "explorar_proyectos() →",
      gradient: "from-gray-800 to-gray-700",
      accentColor: "bg-teal-400",
      buttonBg: "bg-teal-400 hover:bg-teal-500",
      buttonText: "text-gray-800"
    },
    {
      id: "pwa",
      title: "APLICACIONES WEB",
      subtitle: "PROGRESIVAS",
      description: "La experiencia de una app móvil con la flexibilidad de la web",
      cta: "Desarrollar PWA →",
      gradient: "from-gray-700 to-teal-400",
      accentColor: "bg-teal-400",
      buttonBg: "bg-teal-400 hover:bg-teal-500",
      buttonText: "text-gray-800"
    },
    {
      id: "accesibilidad",
      title: "ASESORÍAS",
      subtitle: "ACCESIBILIDAD WEB",
      description: "Páginas web inclusivas para todo los tipos de usuarios",
      cta: "Solicitar Asesoría →",
      gradient: "from-gray-700 to-teal-400",
      accentColor: "bg-teal-400",
      buttonBg: "bg-teal-400 hover:bg-teal-500",
      buttonText: "text-gray-800"
    }
  ];

  const handleSelect = (selectedIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex(selectedIndex);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handlePrev = () => {
    const newIndex = index === 0 ? slides.length - 1 : index - 1;
    handleSelect(newIndex);
  };

const handleNext = useCallback(() => {
  setIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
}, [slides.length]);


useEffect(() => {
  const timer = setInterval(handleNext, 5000);
  return () => clearInterval(timer);
}, [handleNext]);

  return (
<div className="w-full max-w-full m-0 p-4 md:p-8 bg-slate-950">
      <div
        className="relative w-full overflow-visible"
        role="region"
        aria-label="Promotional carousel"
        aria-roledescription="carousel"
      >
        {/* Carousel Items */}
        <div className="relative w-full min-h-96 overflow-hidden">
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`${idx === index ? 'block' : 'hidden'} w-full transition-opacity duration-600`}
              style={{ opacity: idx === index ? 1 : 0 }}
            >
              <div className={`w-full min-h-96 relative rounded-xl overflow-hidden bg-gradient-to-br ${slide.gradient} flex justify-center items-center text-center shadow-2xl border border-white/10`}>
                <div className="relative w-full min-h-full p-8 z-10">
                  <div className="flex-1 max-w-2xl text-gray-100 mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 leading-tight">
                      {slide.title}
                    </h1>
                    {slide.subtitle && (
                      <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 ${slide.id === 'landing-pages' ? 'text-gray-200' : slide.accentColor.replace('bg-', 'text-')}`}>
                        {slide.subtitle}
                      </h2>
                    )}
                    {slide.description && (
                      <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6">
                        {slide.description}
                      </p>
                    )}
                    <button
                      className={`inline-flex items-center px-6 py-3 ${slide.buttonBg} ${slide.buttonText} rounded-full font-semibold text-sm md:text-base transition-all duration-300 hover:-translate-y-0.5`}
                    >
                      {slide.cta}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute top-0 bottom-0 left-0 w-1/12 flex items-center justify-center z-10 opacity-70 hover:opacity-100 transition-opacity duration-300 bg-transparent border-0 cursor-pointer"
          aria-label="Previous slide"
          disabled={isAnimating}
        >
          <ChevronLeft size={30} className="text-gray-100 drop-shadow-md p-2" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute top-0 bottom-0 right-0 w-1/12 flex items-center justify-center z-10 opacity-70 hover:opacity-100 transition-opacity duration-300 bg-transparent border-0 cursor-pointer"
          aria-label="Next slide"
          disabled={isAnimating}
        >
          <ChevronRight size={30} className="text-gray-100 drop-shadow-md p-2" />
        </button>

        {/* Indicators */}
        <div className="absolute -bottom-12 left-0 right-0 flex justify-center items-center gap-3 p-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              className={`w-3 h-3 rounded-full border-0 transition-colors duration-300 cursor-pointer ${
                idx === index ? "bg-teal-400" : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={idx === index ? "true" : "false"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;