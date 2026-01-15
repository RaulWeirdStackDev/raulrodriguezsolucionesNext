"use client";

import { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export const TextToSpeechHandler = () => {
  const [isReading, setIsReading] = useState(false);
  
  const leerContenido = () => {
    const synthesis = window.speechSynthesis;

    if (isReading) {
      synthesis.cancel();
      setIsReading(false);
      return;
    }

    const mainContent = document.getElementById('contenido-principal') || document.querySelector('main');

    if (!mainContent) {
      console.warn("No se encontró el contenedor de lectura");
      return;
    }

    const elementos = mainContent.querySelectorAll('h1, h2, h3, h4, p, li');
    let textoCompleto = "";

    elementos.forEach(el => {
      if (mainContent.contains(el)) {
        const clone = el.cloneNode(true) as Element;
        clone.querySelectorAll('svg, i, button, .slider, [class*="slider"], nav').forEach(item => item.remove());
        const texto = clone.textContent?.trim();
        
        if (texto && texto.length > 2) {
          const textoLimpio = texto.replace(/[^\w\sáéíóúñÁÉÍÓÚÑ.,;:¿?¡!-]/g, '').trim();
          const frasesExcluidas = ['explorar por categoría', 'todos', 'ver todos', 'ia', 'fullstack'];
          const esExcluido = frasesExcluidas.some(frase => 
            textoLimpio.toLowerCase() === frase
          );

          if (!esExcluido) {
            textoCompleto += textoLimpio + ". ";
          }
        }
      }
    });

    if (textoCompleto) {
      const enunciado = new SpeechSynthesisUtterance(textoCompleto);
      enunciado.lang = 'es-ES';
      enunciado.rate = 1;

      enunciado.onstart = () => setIsReading(true);
      enunciado.onend = () => setIsReading(false);
      enunciado.onerror = () => setIsReading(false);

      synthesis.speak(enunciado);
    }
  };

  useEffect(() => {
    return () => window.speechSynthesis.cancel();
  }, []);

  return (
    <button
      onClick={leerContenido}
      aria-label="Escuchar contenido"
      className={`
        group fixed bottom-[90px] right-5 z-[1000]
        w-[50px] h-[50px] rounded-full
        flex items-center justify-center
        border-2 backdrop-blur-md
        transition-all duration-300 ease-out
        hover:scale-110
        ${isReading ? 'bg-red-600 text-white border-red-400' : 'bg-sky-600 text-white border-sky-400'}
      `}
    >
      {/* Tooltip personalizado */}
      <span className="absolute right-14 scale-0 group-hover:scale-100 transition-all duration-200 origin-right bg-gray-800 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100">
        {isReading ? "Detener lectura" : "Lectura por voz"}
      </span>

      {isReading ? <VolumeX /> : <Volume2 />}
    </button>
  );
};