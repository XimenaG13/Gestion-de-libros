import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#162A40] text-white h-20 flex items-center sticky top-0 z-50 shadow-md">
      <nav className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-[#4ED9B2]">Libreria escolar</div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            <a
              href="#inicio"
              className="text-white font-medium hover:text-[#4ED9B2] transition duration-300"
            >
              Inicio
            </a>
            <a
              href="#estudiantes"
              className="text-white font-medium hover:text-[#4ED9B2] transition duration-300"
            >
              Estudiantes
            </a>
            <a
              href="#libros"
              className="text-white font-medium hover:text-[#4ED9B2] transition duration-300"
            >
              Libros
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="block lg:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-[#162A40] text-white flex flex-col items-start pl-6 pt-20 space-y-6 transition-transform duration-300 ease-in-out ${
            menuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
          } lg:hidden`}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl focus:outline-none"
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>
          <a
            href="#inicio"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-medium hover:text-[#4ED9B2] transition duration-300"
          >
            Inicio
          </a>
          <a
            href="#estudiantes"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-medium hover:text-[#4ED9B2] transition duration-300"
          >
            Estudiantes
          </a>
          <a
            href="#libros"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-medium hover:text-[#4ED9B2] transition duration-300"
          >
            Libros
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
