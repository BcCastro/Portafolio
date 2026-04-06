import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition duration-300 ${
        scrolled
          ? "bg-slate-900/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-xl font-bold text-cyan-400">
          Camilo.dev
        </h1>

        <ul className="hidden md:flex gap-8">
          <li><a href="#home" className="hover:text-cyan-400">Inicio</a></li>
          <li><a href="#projects" className="hover:text-cyan-400">Proyectos</a></li>
          <li><a href="#contact" className="hover:text-cyan-400">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}