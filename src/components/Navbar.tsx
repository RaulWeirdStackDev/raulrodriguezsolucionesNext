"use client"; // Importante: Navbar usa hooks (useState/useEffect)

import Link from 'next/link'; // Cambio: Link de Next.js
import Image from 'next/image'; // Cambio: Componente Image de Next.js
import { usePathname } from 'next/navigation'; // Para detectar la ruta activa
import { useState, useEffect } from 'react';
import { BotonVoz } from '../lib/BotonVoz'; // Ajusta la ruta si es necesario

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Hook para saber en qué página estamos

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Pacifico&family=Dancing+Script:wght@600;700&family=Great+Vibes&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const closeNavbar = () => setIsOpen(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: '/', label: 'Inicio' },
    { to: '/sobre-mi', label: 'Sobre Mí' },
    { to: '/servicios', label: 'Servicios' },
    { to: '/portafolio', label: 'Proyectos' },
    { to: '/contacto', label: 'Contacto' }
  ];

  return (
    <>
      <nav className="sticky top-0 z-[1000] bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 backdrop-blur-lg border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
        <div className="absolute inset-0 bg-white/5 pointer-events-none" />
        
        <div className="container mx-auto px-5 py-4 relative z-[2]">
          <div className="flex items-center justify-between">
            {/* Brand Section */}
            <Link href="/">
            <div className="flex items-center gap-3 sm:gap-2">
              {/* CORRECCIÓN: Image con width y height requeridos */}
              <Image
                src="/logo.png"
                alt="Raúl Rodríguez Soluciones Informáticas Logo"
                width={64}  // Equivale a w-16
                height={64} // Equivale a h-16
                className="rounded-full border-2 border-white/20 bg-white p-1.5 object-contain transition-all duration-300 hover:scale-105 hover:border-blue-400/60 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] sm:w-14 sm:h-14"
              />
              <div>
                <h1 className="text-white font-bold tracking-tight text-xl leading-tight mb-0 sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                  Raúl Rodríguez 
                </h1>
                <p className="text-blue-50 font-medium tracking-wider text-sm mb-0 sm:text-xs md:text-xl lg:text-xl">
                  Soluciones Informáticas
                </p>
                <p className="text-sky-50 tracking-wide text-xs mt-0.5 sm:text-[10px] md:text-xl lg:text-xl" style={{ fontFamily: "'Pacifico', cursive" }}>
                  The Sky is The Limit
                </p>
              </div>
            </div>
</Link>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    href={link.to}
                    className={`relative group font-semibold text-base px-5 py-2.5 rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'text-white bg-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span className="relative z-[1]">{link.label}</span>
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full transition-all duration-300 ${isActive ? 'w-3/4' : 'w-0 group-hover:w-3/4'}`} />
                  </Link>
                );
              })}
            </div>

            {/* Mobile Toggle Button */}
            <button
              onClick={toggleNavbar}
              className="lg:hidden p-2.5 bg-white/10 rounded-lg backdrop-blur-lg hover:bg-white/15 focus:ring-2 focus:ring-blue-400/50 transition-all duration-300"
              aria-label="Toggle navigation"
            >
              <div className="w-6 h-[18px] relative">
                <span className={`block absolute h-0.5 w-full bg-white rounded-full transition-all duration-300 ${isOpen ? 'top-2 rotate-45' : 'top-0'}`} />
                <span className={`block absolute top-2 h-0.5 w-full bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`} />
                <span className={`block absolute h-0.5 w-full bg-white rounded-full transition-all duration-300 ${isOpen ? 'top-2 -rotate-45' : 'top-4'}`} />
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mt-4 pt-4 border-t border-white/10' : 'max-h-0'}`}>
            <div className="flex flex-col gap-2 px-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    href={link.to}
                    onClick={closeNavbar}
                    className={`relative font-semibold text-base px-6 py-3 rounded-lg text-center transition-all duration-300 ${
                      isActive
                        ? 'text-white bg-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span className="relative z-[1]">{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
      <BotonVoz />
    </>
  );
};