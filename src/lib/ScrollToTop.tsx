'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation"; // Cambiamos la librería

export const ScrollToTop = () => {
  const pathname = usePathname(); // En Next.js, pathname es un string directo

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname]); // Se dispara cada vez que cambia la ruta

  return null;
};