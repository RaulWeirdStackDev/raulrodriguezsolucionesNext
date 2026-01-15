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
    hover:scale-110
    ${
      activo
        ? 'bg-gradient-to-br from-red-500 to-red-600 border-red-400/50 text-white shadow-[0_4px_20px_rgba(239,68,68,0.4)]'
        : 'bg-gradient-to-br from-blue-500 via-blue-500 to-blue-600 border-blue-400/50 text-white shadow-[0_4px_20px_rgba(59,130,246,0.4)]'
    }
  `}
>
  <FaMicrophone className={`text-xl ${activo ? 'animate-pulse' : ''}`} />
  
  {/* Tooltip a la izquierda (Simétrico al de arriba) */}
  <span className="
    absolute right-[60px] top-1/2 -translate-y-1/2
    bg-gray-900/90 text-white text-xs px-3 py-1.5 rounded-lg
    opacity-0 pointer-events-none transition-all duration-300
    group-hover:opacity-100 group-hover:-translate-x-2
    whitespace-nowrap shadow-xl border border-white/10
  ">
    {activo ? "Detener voz" : "Navegación por voz"}
  </span>
</button>
  );
};