'use client';

import { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { FaWhatsapp, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

export default function Contacto() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then((result) => {
        console.log('SUCCESS!', result.text);

        Swal.fire({
          title: '¡Mensaje enviado!',
          text: 'Te responderé lo antes posible 🚀',
          icon: 'success',
          confirmButtonColor: '#3b82f6',
          timer: 4000,
          timerProgressBar: true,
        });

        form.current?.reset();
      })
      .catch((error) => {
        console.error('FAILED...', error.text);

        Swal.fire({
          title: 'Ups...',
          text: 'Algo salió mal. Intenta de nuevo o contáctame por WhatsApp.',
          icon: 'error',
          confirmButtonColor: '#ef4444',
        });
      });
  };

  return (
    <main className="min-h-screen pt-16 pb-24 px-5 md:px-8 lg:px-12 bg-slate-950">
      <div className="mx-auto w-full max-w-4xl">
        {/* Header */}
        <header className="text-center mb-16 lg:mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_20px_rgba(16,185,129,0.6)] mb-6">
            Contáctame
          </h1>
          <div className="w-28 h-1 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-400 mx-auto rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)] mb-8" />
          <p className="text-gray-200 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto px-2">
            ¿Tienes un proyecto en mente? Estoy aquí para ayudarte a hacerlo realidad
          </p>
        </header>

        {/* Form Container */}
        <div className="bg-gradient-to-br from-gray-900/70 to-gray-950/70 backdrop-blur-xl border border-white/8 rounded-2xl p-8 sm:p-10 lg:p-12 shadow-xl shadow-black/40 hover:shadow-blue-900/20 transition-all duration-400">
          <form id="contact-form" ref={form} onSubmit={sendEmail}>
            {/* Campo Nombre */}
            <div className="mb-6">
              <label htmlFor="name" className="block font-semibold text-white text-base mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="Ejemplo: Juan Pérez"
                required
                className="w-full px-4 py-3 border border-white/8 rounded-xl text-base bg-gray-900/50 text-white transition-all duration-300 focus:outline-none focus:border-blue-500/60 focus:shadow-[0_0_0_3px_rgba(16,185,129,0.2)] placeholder:text-gray-400 hover:border-blue-500/40"
              />
            </div>

            {/* Campo Correo */}
            <div className="mb-6">
              <label htmlFor="email" className="block font-semibold text-white text-base mb-2">
                Correo
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="Ejemplo: juan.perez@miempresa.com"
                required
                className="w-full px-4 py-3 border border-white/8 rounded-xl text-base bg-gray-900/50 text-white transition-all duration-300 focus:outline-none focus:border-blue-500/60 focus:shadow-[0_0_0_3px_rgba(16,185,129,0.2)] placeholder:text-gray-400 hover:border-blue-500/40"
              />
            </div>

            {/* Campo Teléfono */}
            <div className="mb-6">
              <label htmlFor="phone" className="block font-semibold text-white text-base mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="user_phone"
                placeholder="Ejemplo: +56912345678"
                required
                className="w-full px-4 py-3 border border-white/8 rounded-xl text-base bg-gray-900/50 text-white transition-all duration-300 focus:outline-none focus:border-blue-500/60 focus:shadow-[0_0_0_3px_rgba(16,185,129,0.2)] placeholder:text-gray-400 hover:border-blue-500/40"
              />
            </div>

            {/* Campo Asunto */}
            <div className="mb-6">
              <label htmlFor="subject" className="block font-semibold text-white text-base mb-2">
                Asunto
              </label>
              <select
                id="subject"
                name="user_subject"
                defaultValue=""
                required
                className="w-full px-4 py-3 border border-white/8 rounded-xl text-base bg-gray-900/50 text-white transition-all duration-300 focus:outline-none focus:border-blue-500/60 focus:shadow-[0_0_0_3px_rgba(16,185,129,0.2)] hover:border-blue-500/40 appearance-none"
              >
                <option value="" disabled className="text-gray-400 bg-gray-900">
                  ¿Cómo puedo ayudarte hoy?
                </option>
                <option value="DesarrolloLandingPage" className="bg-gray-800 text-white">
                  Desarrollo de una Landing Page
                </option>
                <option value="DesarrolloWeb" className="bg-gray-800 text-white">
                  Desarrollo de un Sitio Web FrontEnd
                </option>
                <option value="DesarrolloFullstack" className="bg-gray-800 text-white">
                  Desarrollo de una Aplicación Web FullStack
                </option>
                <option value="DesarrolloAPI" className="bg-gray-800 text-white">
                  Desarrollo de una API
                </option>
                <option value="DesarrolloPWA" className="bg-gray-800 text-white">
                  Desarrollo de una Aplicación Web Progresiva
                </option>
                <option value="DesarrolloAplicacionEducativa" className="bg-gray-800 text-white">
                  Desarrollo de una Aplicación Educativa
                </option>
                <option value="AsesoríaAccesibilidad" className="bg-gray-800 text-white">
                  Asesoría en Accesibilidad Web
                </option>
                <option value="Otro" className="bg-gray-800 text-white">
                  Otro
                </option>
              </select>
            </div>

            {/* Campo Mensaje */}
            <div className="mb-8">
              <label htmlFor="message" className="block font-semibold text-white text-base mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Cuéntame sobre tu proyecto..."
                required
                className="w-full px-4 py-3 border border-white/8 rounded-xl text-base bg-gray-900/50 text-white transition-all duration-300 focus:outline-none focus:border-blue-500/60 focus:shadow-[0_0_0_3px_rgba(16,185,129,0.2)] placeholder:text-gray-400 hover:border-blue-500/40 resize-y min-h-[140px]"
              />
            </div>

            {/* Botón Enviar */}
            <div className="w-full">
              <button
                type="submit"
                className="w-full py-3.5 px-6 font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg shadow-blue-900/40 hover:shadow-blue-700/50 hover:scale-[1.02] transition-all duration-300 text-lg"
              >
                Enviar Mensaje →
              </button>
            </div>
          </form>

          {/* Info adicional */}
          <div className="mt-8 pt-8 border-t border-white/8">
            <p className="text-center text-gray-400 text-sm">
              Respondo todos los mensajes en un plazo de 24-48 horas
            </p>
          </div>
        </div>

        {/* Información de contacto alternativa */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 text-base mb-4">
            ¿Prefieres otro medio de contacto?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:contacto@raulrodriguez.cl"
              className="px-6 py-2 bg-gray-900/70 text-blue-400 border border-white/8 rounded-lg hover:border-blue-500/40 hover:shadow-blue-900/20 transition-all duration-300"
            >
              <FaEnvelope className="inline mr-2" /> Email
            </a>

            <a
              href="https://wa.me/56972033734"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gray-900/70 text-blue-400 border border-white/8 rounded-lg hover:border-blue-500/40 hover:shadow-blue-900/20 transition-all duration-300"
            >
              <FaWhatsapp className="inline mr-2" /> WhatsApp
            </a>

            <a
              href="https://www.linkedin.com/in/raulrodriguezdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gray-900/70 text-blue-400 border border-white/8 rounded-lg hover:border-blue-500/40 hover:shadow-blue-900/20 transition-all duration-300"
            >
              <FaLinkedinIn className="inline mr-2" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}