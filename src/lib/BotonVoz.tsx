"use client";

import { useEffect, useState } from "react";
import { FaMicrophone } from "react-icons/fa";

declare global {
  interface Window {
    startVoice?: () => void;     // opcional con ?
    stopVoice?: () => void;
    recognitionActiva?: boolean;
  }
}

export {};

export const BotonVoz = () => {
  const [activo, setActivo] = useState(false);


  
  const manejarClick = () => {
    if (activo) {
      window.stopVoice?.();
      setActivo(false);
    } else {
      window.startVoice?.();
      setActivo(true);
    }
  };

  // Mantener estado si el reconocimiento se detiene
  useEffect(() => {
    const intervalo = setInterval(() => {
      if (!window.recognitionActiva) setActivo(false);
    }, 1000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <button
      onClick={manejarClick}
      className={`
        group fixed bottom-5 right-5 z-[1000]
        w-[50px] h-[50px] rounded-full
        flex items-center justify-center
        border-2 backdrop-blur-md
        transition-all duration-300 ease-out
        hover:scale-110 focus-visible:scale-110
        focus-visible:outline-none focus-visible:ring-4
        sm:w-[45px] sm:h-[45px]
        ${
          activo
            ? 'bg-gradient-to-br from-red-500 to-red-600 border-red-400/50 text-white shadow-[0_4px_20px_rgba(239,68,68,0.4)] hover:shadow-[0_6px_30px_rgba(239,68,68,0.5)] focus-visible:ring-red-400/50'
            : 'bg-gradient-to-br from-blue-500 via-blue-500 to-blue-600 border-blue-400/50 text-white shadow-[0_4px_20px_rgba(16,185,129,0.4)] hover:shadow-[0_6px_30px_rgba(16,185,129,0.5)] focus-visible:ring-blue-400/50'
        }
      `}
      title={activo ? "Desactivar navegación por voz" : "Activar navegación por voz"}
      aria-label={activo ? "Desactivar navegación por voz" : "Activar navegación por voz"}
    >
      <FaMicrophone className={`text-xl sm:text-lg ${activo ? 'animate-pulse' : ''}`} />
      
      {/* Tooltip */}
      <span className="
        absolute bottom-[60px] right-1/2 translate-x-1/2
        bg-gray-900 text-white text-sm
        px-3 py-1.5 rounded-lg
        whitespace-nowrap text-center
        opacity-0 pointer-events-none
        transition-all duration-300
        group-hover:opacity-100 group-hover:-translate-y-1
        group-focus-visible:opacity-100 group-focus-visible:-translate-y-1
        shadow-lg
        sm:text-xs sm:bottom-[50px]
      ">
        {activo ? "Detener voz" : "Navegación por voz"}
      </span>
    </button>
  );
};