"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// 1. Definimos interfaces detalladas para evitar 'any'
interface SpeechRecognitionEvent extends Event {
  readonly results: SpeechRecognitionResultList;
}

interface SpeechRecognitionErrorEvent extends Event {
  readonly error: string;
  readonly message: string;
}

// Interfaz para la clase/constructor
interface SpeechRecognitionConstructor {
  new (): SpeechRecognition;
}

interface SpeechRecognition extends EventTarget {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  start(): void;
  stop(): void;
  onresult: (event: SpeechRecognitionEvent) => void;
  onend: () => void;
  onerror: (event: SpeechRecognitionErrorEvent) => void;
}

// 2. Extensión de Window usando tipos específicos en lugar de 'any'
declare global {
  interface Window {
    SpeechRecognition: SpeechRecognitionConstructor | undefined;
    webkitSpeechRecognition: SpeechRecognitionConstructor | undefined;
    recognitionActiva?: boolean;
    startVoice?: () => void;
    stopVoice?: () => void;
  }
}

export const VoiceHandler = () => {
  const router = useRouter();

  useEffect(() => {
    // Verificación segura sin 'any'
    const SpeechRecognitionClass = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognitionClass) {
      console.warn("Este navegador no soporta Speech Recognition.");
      return;
    }

    const recognition = new SpeechRecognitionClass();
    recognition.lang = "es-ES";
    recognition.continuous = false;
    recognition.interimResults = false;

    let estaActivo = false;
    let detenidoManualmente = false;

    const iniciarReconocimiento = () => {
      if (!estaActivo && !detenidoManualmente) {
        try {
          recognition.start();
          estaActivo = true;
          window.recognitionActiva = true;
        } catch {
          // Error ignorado intencionalmente
        }
      }
    };

    const detenerReconocimiento = () => {
      try {
        recognition.stop();
        estaActivo = false;
        detenidoManualmente = true;
        window.recognitionActiva = false;
      } catch {
        console.warn("Error al detener");
      }
    };

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      
      const rutas: Record<string, string> = {
        "inicio": "/",
        "sobre mí": "/sobre-mi",
        "servicios": "/servicios",
        "proyectos": "/portafolio",
        "contacto": "/contacto"
      };

      // Buscamos si el transcript contiene alguna de las llaves
      const rutaEncontrada = Object.keys(rutas).find(key => transcript.includes(key));
      
      if (rutaEncontrada) {
        router.push(rutas[rutaEncontrada]);
      }

      estaActivo = false;
      window.recognitionActiva = false;
      recognition.stop();
    };

    recognition.onend = () => {
      estaActivo = false;
      window.recognitionActiva = false;
      if (!detenidoManualmente) iniciarReconocimiento();
    };

    window.startVoice = iniciarReconocimiento;
    window.stopVoice = detenerReconocimiento;

    return () => {
      recognition.stop();
      window.startVoice = undefined;
      window.stopVoice = undefined;
      window.recognitionActiva = false;
    };
  }, [router]);

  return null;
};