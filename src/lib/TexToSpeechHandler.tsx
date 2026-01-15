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

    // PRIORIDAD 1: Buscar por ID específico (el que pusimos en el Home)
    // PRIORIDAD 2: Buscar por etiqueta <main>
    const mainContent = document.getElementById('contenido-principal') || document.querySelector('main');

    if (!mainContent) {
      console.warn("No se encontró el contenedor de lectura");
      return;
    }

    // Solo extraemos texto de los descendientes DIRECTOS o hijos del contenido
    // Esto evita que "salte" hacia arriba al Slider por error de burbujeo
    const elementos = mainContent.querySelectorAll('h1, h2, h3, h4, p, li');
    let textoCompleto = "";

    elementos.forEach(el => {
      // Verificamos que el elemento sea realmente hijo de nuestro contenedor principal
      // Esto es un doble check de seguridad para Next.js
      if (mainContent.contains(el)) {
        const clone = el.cloneNode(true) as Element;
        
        // Eliminamos elementos que no deben leerse (iconos, botones, navs)
        clone.querySelectorAll('svg, i, button, .slider, [class*="slider"], nav').forEach(item => item.remove());
        
        const texto = clone.textContent?.trim();
        
        if (texto && texto.length > 2) {
          // Limpieza de caracteres especiales
          const textoLimpio = texto.replace(/[^\w\sáéíóúñÁÉÍÓÚÑ.,;:¿?¡!-]/g, '').trim();
          
          // Filtro para no leer opciones de filtrado si están en el portafolio
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
      className={`
        group fixed bottom-[90px] right-5 z-[1000]
        w-[50px] h-[50px] rounded-full
        flex items-center justify-center
        border-2 backdrop-blur-md
        transition-all duration-300 ease-out
        hover:scale-110
        ${isReading ? 'bg-red-600 text-white' : 'bg-sky-600 text-white'}
      `}
    >
      {isReading ? <VolumeX /> : <Volume2 />}
    </button>
  );
};