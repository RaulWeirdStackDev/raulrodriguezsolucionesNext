'use client';

import { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { FaWhatsapp, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

export default function ContactForm() {
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
                Nombre <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="Ejemplo: Juan Pérez"
                required
                aria-required="true"
                className="w-full px-4 py-3 border border-white/8 rounded-xl text-base bg-gray-900/50 text-white transition-all duration-300 focus:outline-none focus:border-blue-500/60 focus:shadow-[0_0_0_3px_rgba(16,185,129,0.2)] placeholder:text-gray-400 hover:border-blue-500/40"
              />
            </div>

            {/* Campo Correo */}
            <div className="mb-6">
              <label htmlFor="email" className="block font-semibold text-white text-base mb-2">
                Correo Electrónico <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="Ejemplo: juan.perez@miempresa.com"
                required
                aria-required="true"
                className="w-full px-4 py-3 border border-white/8 rounded-xl text-base bg-gray-900/50 text-white transition-all duration-300 focus:outline-none focus:border-blue-500/60 focus:shadow-[0_0_0_3px_rgba(16,185,129,0.2)] placeholder:text-gray-400 hover:border-blue-500/40"
              />
            </div>

            {/* Campo Teléfono */}
            <div className="mb-6">
              <label htmlFor="phone" className="block font-semibold text-white text-base mb-2">
                Teléfono <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="user_phone"
                placeholder="Ejemplo: +56912345678"
                required
                aria-required="true"
                className="w-full px-4 py-3 border border-white/8 rounded-xl text-base bg-gray-900/50 text-white transition-all duration-300 focus:outline-none focus:border-blue-500/60 focus:shadow-[0_0_0_3px_rgba(16,185,129,0.2)] placeholder:text-gray-400 hover:border-blue-500/40"
              />
            </div>

            {/* Campo Asunto */}
            <div className="mb-6">
              <label htmlFor="subject" className="block font-semibold text-white text-base mb-2">
                ¿Qué servicio necesitas? <span className="text-red-400">*</span>
              </label>
              <select
                id="subject"
                name="user_subject"
                defaultValue=""
                required
                aria-required="true"
                className="w-full px-4 py-3 border border-white/8 rounded-xl text-base bg-gray-900/50 text-white transition-all duration-300 focus:outline-none focus:border-blue-500/60 focus:shadow-[0_0_0_3px_rgba(16,185,129,0.2)] hover:border-blue-500/40 appearance-none cursor-pointer"
              >
                <option value="" disabled className="text-gray-400 bg-gray-900">
                  Selecciona el tipo de proyecto
                </option>
                <option value="DesarrolloLandingPage" className="bg-gray-800 text-white">
                  Landing Page Profesional
                </option>
                <option value="DesarrolloWeb" className="bg-gray-800 text-white">
                  Sitio Web Comercial
                </option>
                <option value="DesarrolloFullstack" className="bg-gray-800 text-white">
                  Aplicación Web FullStack
                </option>
                <option value="DesarrolloAPI" className="bg-gray-800 text-white">
                  Desarrollo de API
                </option>
                <option value="DesarrolloPWA" className="bg-gray-800 text-white">
                  Progressive Web App (PWA)
                </option>
                <option value="DesarrolloAplicacionEducativa" className="bg-gray-800 text-white">
                  Aplicación Educativa
                </option>
                <option value="AsesoríaAccesibilidad" className="bg-gray-800 text-white">
                  Auditoría de Accesibilidad Web
                </option>
                <option value="Otro" className="bg-gray-800 text-white">
                  Otro servicio
                </option>
              </select>
            </div>

            {/* Campo Mensaje */}
            <div className="mb-8">
              <label htmlFor="message" className="block font-semibold text-white text-base mb-2">
                Cuéntame sobre tu proyecto <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Describe tu idea, objetivos, plazos estimados y cualquier detalle relevante..."
                required
                aria-required="true"
                className="w-full px-4 py-3 border border-white/8 rounded-xl text-base bg-gray-900/50 text-white transition-all duration-300 focus:outline-none focus:border-blue-500/60 focus:shadow-[0_0_0_3px_rgba(16,185,129,0.2)] placeholder:text-gray-400 hover:border-blue-500/40 resize-y min-h-[140px]"
              />
            </div>

            {/* Botón Enviar */}
            <div className="w-full">
              <button
                type="submit"
                className="w-full py-3.5 px-6 font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg shadow-blue-900/40 hover:shadow-blue-700/50 hover:scale-[1.02] transition-all duration-300 text-lg"
                aria-label="Enviar formulario de contacto"
              >
                Enviar Mensaje →
              </button>
            </div>
          </form>

          {/* Info adicional */}
          <footer className="mt-8 pt-8 border-t border-white/8">
            <p className="text-center text-gray-400 text-sm">
              ⏱️ Respondo todos los mensajes en un plazo de 24-48 horas
            </p>
          </footer>
        </div>

        {/* Información de contacto alternativa */}
        <section className="mt-12 text-center" aria-labelledby="contact-alternatives">
          <h2 id="contact-alternatives" className="text-gray-300 text-base mb-4">
            ¿Prefieres otro medio de contacto?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:contacto@raulrodriguez.cl"
              className="px-6 py-2 bg-gray-900/70 text-blue-400 border border-white/8 rounded-lg hover:border-blue-500/40 hover:shadow-blue-900/20 transition-all duration-300"
              aria-label="Enviar email a contacto@raulrodriguez.cl"
            >
              <FaEnvelope className="inline mr-2" aria-hidden="true" /> Email
            </a>

            <a
              href="https://wa.me/56972033734"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gray-900/70 text-blue-400 border border-white/8 rounded-lg hover:border-blue-500/40 hover:shadow-blue-900/20 transition-all duration-300"
              aria-label="Contactar por WhatsApp (abre en nueva ventana)"
            >
              <FaWhatsapp className="inline mr-2" aria-hidden="true" /> WhatsApp
            </a>

            <a
              href="https://www.linkedin.com/in/raulrodriguezdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gray-900/70 text-blue-400 border border-white/8 rounded-lg hover:border-blue-500/40 hover:shadow-blue-900/20 transition-all duration-300"
              aria-label="Ver perfil de LinkedIn (abre en nueva ventana)"
            >
              <FaLinkedinIn className="inline mr-2" aria-hidden="true" /> LinkedIn
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}