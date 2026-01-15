import { 
  FaWhatsapp, 
  FaLinkedinIn, 
  FaGithub,
  FaEnvelope,
  FaCode,
  FaMobileAlt,
  FaDatabase,
  FaCloud,
  FaMapMarkerAlt
} from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 pt-16 pb-10 px-8 overflow-hidden border-t-2 border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.3)]">
      {/* Background overlay gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.05)_0%,transparent_50%),radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.08)_0%,transparent_50%)] pointer-events-none"></div>

      {/* Background decorations with inline animation */}
      <div className="absolute -top-[30%] -right-[15%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,255,255,0.03)_0%,transparent_70%)] rounded-full animate-[float_8s_ease-in-out_infinite]"></div>
      <div className="absolute -bottom-[20%] -left-[10%] w-[350px] h-[350px] bg-[radial-gradient(circle,rgba(59,130,246,0.06)_0%,transparent_70%)] rounded-full animate-[float_10s_ease-in-out_infinite_reverse]"></div>

      <div className="relative z-[2] max-w-7xl mx-auto text-center">
        {/* Header Section */}
        <div className="mb-8">
          <h3 className="text-4xl font-bold text-white mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] tracking-tight md:text-[2rem] sm:text-[1.75rem]">
            Raúl Rodríguez Clavero
          </h3>
          <p className="text-lg text-blue-50 font-light tracking-wider opacity-95 md:text-base">
            Desarrollador Full Stack & Analista Programador
          </p>
        </div>

        {/* Decorative divider with pulse animation */}
        <div className="w-[120px] h-[5px] bg-gradient-to-r from-blue-400 via-blue-300 to-sky-400 mx-auto mb-12 rounded-sm shadow-[0_0_20px_rgba(59,130,246,0.4)] animate-pulse"></div>

        {/* Contact & Social Section */}
        <div className="mb-12">
          {/* Email Section */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-6 bg-white/10 backdrop-blur-lg py-6 px-10 rounded-[20px] border border-white/20 transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:bg-white/15 hover:shadow-[0_15px_50px_rgba(0,0,0,0.3)] hover:border-blue-400/60 max-md:flex-col max-md:gap-4 max-md:py-6 max-md:px-5 max-md:mx-4 max-sm:py-5 max-sm:px-5 max-sm:mx-4">
              <div className="w-[60px] h-[60px] bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-[0_5px_20px_rgba(59,130,246,0.4)]">
                <FaEnvelope className="text-2xl text-white" />
              </div>
              <div className="flex flex-col items-start text-left max-md:items-center max-md:text-center">
                <span className="text-sm text-blue-50 mb-1 font-medium tracking-wider opacity-90">
                  Correo Electrónico
                </span>
                <a
                  href="mailto:contacto@raulrodriguez.cl"
                  className="text-xl text-white no-underline font-semibold transition-all duration-300 relative hover:text-blue-300 focus-visible:outline-2 focus-visible:outline-blue-400/60 focus-visible:outline-offset-2 after:content-[''] after:absolute after:w-0 after:h-0.5 after:-bottom-0.5 after:left-0 after:bg-gradient-to-r after:from-blue-300 after:to-blue-400 after:transition-[width] after:duration-300 hover:after:w-full max-sm:text-lg max-sm:break-all"
                  aria-label="Enviar correo"
                >
                  contacto@raulrodriguez.cl
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 flex-wrap max-sm:flex-col max-sm:items-center max-sm:gap-3">
            <a
              href="https://wa.me/56972033734"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center no-underline text-white transition-all duration-[400ms] py-5 px-4 rounded-[20px] bg-white/10 backdrop-blur-lg border border-white/10 min-w-[130px] relative overflow-hidden hover:-translate-y-2.5 hover:scale-105 hover:bg-white/15 hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)] focus-visible:outline-2 focus-visible:outline-blue-400/60 focus-visible:outline-offset-2 before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:transition-[left] before:duration-500 hover:before:left-full max-lg:min-w-[110px] max-lg:py-4 max-sm:flex-row max-sm:justify-start max-sm:min-w-[250px] max-sm:max-w-[320px] max-sm:py-4 max-sm:px-6"
              aria-label="WhatsApp"
            >
              <div className="w-[55px] h-[55px] rounded-full flex items-center justify-center mb-3 transition-all duration-[400ms] bg-white/10 border-2 border-transparent relative group-hover:bg-[rgba(37,211,102,0.2)] group-hover:border-[#25d366] group-hover:shadow-[0_0_25px_rgba(37,211,102,0.4)] max-sm:mb-0 max-sm:mr-4 max-sm:w-[50px] max-sm:h-[50px]">
                <FaWhatsapp className="text-2xl text-white transition-all duration-[400ms] group-hover:text-[#25d366]" />
              </div>
              <span className="text-sm font-semibold tracking-wider opacity-95 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-0.5 max-sm:flex-1 max-sm:text-left">
                WhatsApp
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/raulrodriguezdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center no-underline text-white transition-all duration-[400ms] py-5 px-4 rounded-[20px] bg-white/10 backdrop-blur-lg border border-white/10 min-w-[130px] relative overflow-hidden hover:-translate-y-2.5 hover:scale-105 hover:bg-white/15 hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)] focus-visible:outline-2 focus-visible:outline-blue-400/60 focus-visible:outline-offset-2 before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:transition-[left] before:duration-500 hover:before:left-full max-lg:min-w-[110px] max-lg:py-4 max-sm:flex-row max-sm:justify-start max-sm:min-w-[250px] max-sm:max-w-[320px] max-sm:py-4 max-sm:px-6"
              aria-label="LinkedIn"
            >
              <div className="w-[55px] h-[55px] rounded-full flex items-center justify-center mb-3 transition-all duration-[400ms] bg-white/10 border-2 border-transparent relative group-hover:bg-[rgba(10,102,194,0.2)] group-hover:border-[#0a66c2] group-hover:shadow-[0_0_25px_rgba(10,102,194,0.4)] max-sm:mb-0 max-sm:mr-4 max-sm:w-[50px] max-sm:h-[50px]">
                <FaLinkedinIn className="text-2xl text-white transition-all duration-[400ms] group-hover:text-[#0a66c2]" />
              </div>
              <span className="text-sm font-semibold tracking-wider opacity-95 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-0.5 max-sm:flex-1 max-sm:text-left">
                LinkedIn
              </span>
            </a>

            <a
              href="https://github.com/RaulWeirdStackDev"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center no-underline text-white transition-all duration-[400ms] py-5 px-4 rounded-[20px] bg-white/10 backdrop-blur-lg border border-white/10 min-w-[130px] relative overflow-hidden hover:-translate-y-2.5 hover:scale-105 hover:bg-white/15 hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)] focus-visible:outline-2 focus-visible:outline-blue-400/60 focus-visible:outline-offset-2 before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:transition-[left] before:duration-500 hover:before:left-full max-lg:min-w-[110px] max-lg:py-4 max-sm:flex-row max-sm:justify-start max-sm:min-w-[250px] max-sm:max-w-[320px] max-sm:py-4 max-sm:px-6"
              aria-label="GitHub"
            >
              <div className="w-[55px] h-[55px] rounded-full flex items-center justify-center mb-3 transition-all duration-[400ms] bg-white/10 border-2 border-transparent relative group-hover:bg-white/20 group-hover:border-white group-hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] max-sm:mb-0 max-sm:mr-4 max-sm:w-[50px] max-sm:h-[50px]">
                <FaGithub className="text-2xl text-white transition-all duration-[400ms]" />
              </div>
              <span className="text-sm font-semibold tracking-wider opacity-95 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-0.5 max-sm:flex-1 max-sm:text-left">
                GitHub
              </span>
            </a>
          </div>
        </div>

        {/* Services Preview */}
        <div className="flex justify-center gap-8 mb-12 flex-wrap lg:gap-8 md:gap-6 max-sm:flex-col max-sm:items-center max-sm:gap-3">
          <div className="flex flex-col items-center gap-2 p-4 bg-white/10 rounded-xl border border-white/10 transition-all duration-300 min-w-[120px] hover:bg-white/15 hover:-translate-y-1 lg:min-w-[120px] md:min-w-[100px] max-sm:flex-row max-sm:justify-start max-sm:min-w-[200px] max-sm:max-w-[280px] max-sm:py-3 max-sm:px-4">
            <FaCode className="text-2xl text-blue-300 mb-1 max-sm:mr-3 max-sm:mb-0" />
            <span className="text-xs text-white font-medium text-center tracking-wide max-sm:text-left max-sm:flex-1">
              Desarrollo Full Stack
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 p-4 bg-white/10 rounded-xl border border-white/10 transition-all duration-300 min-w-[120px] hover:bg-white/15 hover:-translate-y-1 lg:min-w-[120px] md:min-w-[100px] max-sm:flex-row max-sm:justify-start max-sm:min-w-[200px] max-sm:max-w-[280px] max-sm:py-3 max-sm:px-4">
            <FaMobileAlt className="text-2xl text-blue-300 mb-1 max-sm:mr-3 max-sm:mb-0" />
            <span className="text-xs text-white font-medium text-center tracking-wide max-sm:text-left max-sm:flex-1">
              PWA
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 p-4 bg-white/10 rounded-xl border border-white/10 transition-all duration-300 min-w-[120px] hover:bg-white/15 hover:-translate-y-1 lg:min-w-[120px] md:min-w-[100px] max-sm:flex-row max-sm:justify-start max-sm:min-w-[200px] max-sm:max-w-[280px] max-sm:py-3 max-sm:px-4">
            <FaDatabase className="text-2xl text-blue-300 mb-1 max-sm:mr-3 max-sm:mb-0" />
            <span className="text-xs text-white font-medium text-center tracking-wide max-sm:text-left max-sm:flex-1">
              Desarrollo de APIs
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 p-4 bg-white/10 rounded-xl border border-white/10 transition-all duration-300 min-w-[120px] hover:bg-white/15 hover:-translate-y-1 lg:min-w-[120px] md:min-w-[100px] max-sm:flex-row max-sm:justify-start max-sm:min-w-[200px] max-sm:max-w-[280px] max-sm:py-3 max-sm:px-4">
            <FaCloud className="text-2xl text-blue-300 mb-1 max-sm:mr-3 max-sm:mb-0" />
            <span className="text-xs text-white font-medium text-center tracking-wide max-sm:text-left max-sm:flex-1">
              Despliegues
            </span>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white/10 pt-10 md:pt-8">
          <div className="mb-6">
            <p className="text-base text-white mb-3 font-normal tracking-wide max-sm:text-sm">
              © 2026 <span className="text-blue-300 font-bold drop-shadow-[0_0_15px_rgba(147,197,253,0.4)]">Raúl Rodríguez</span> - Todos los derechos reservados
            </p>
            <p className="text-sm text-blue-50 flex items-center justify-center gap-2 mb-0 opacity-95 max-sm:text-xs">
              <FaMapMarkerAlt className="text-blue-300" />
              Viña del Mar, Chile
            </p>
          </div>
          <div className="flex justify-center gap-3 flex-wrap md:gap-2">
            <span className="bg-blue-500/20 text-white py-1 px-3 rounded-[20px] text-xs font-medium border border-blue-400/20 tracking-wider transition-all duration-300 hover:bg-blue-500/30 hover:scale-105 max-sm:text-[0.7rem] max-sm:py-0.5 max-sm:px-2.5">
              React
            </span>
            <span className="bg-blue-500/20 text-white py-1 px-3 rounded-[20px] text-xs font-medium border border-blue-400/20 tracking-wider transition-all duration-300 hover:bg-blue-500/30 hover:scale-105 max-sm:text-[0.7rem] max-sm:py-0.5 max-sm:px-2.5">
              Node.js
            </span>
            <span className="bg-blue-500/20 text-white py-1 px-3 rounded-[20px] text-xs font-medium border border-blue-400/20 tracking-wider transition-all duration-300 hover:bg-blue-500/30 hover:scale-105 max-sm:text-[0.7rem] max-sm:py-0.5 max-sm:px-2.5">
              PostgreSQL
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};