import React from "react";
import emailIcon from "../images/correo-electronico.png";
import phoneIcon from "../images/telefono.png";
import locationIcon from "../images/ubicacion.png";
import instagramIcon from "../images/instagram2.png";
import linkedinIcon from "../images/linkedin-2.png";
import facebookIcon from "../images/facebook-2.png";

const Footer = () => {
  const floatAnimation = {
    animation: "float 3s ease-in-out infinite",
  };

  return (
    <footer className="bg-[#365367] p-10 relative overflow-hidden shadow-inner">
      <div className="container mx-auto flex flex-col items-center space-y-4 text-center">
        {/* Información de Contacto */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-[#ffff] to-[#7ae7c7] bg-clip-text text-transparent">
            Libreria escolar
          </h2>
          <div className="text-[#f1f5f9] flex items-center justify-center">
            <img
              src={emailIcon}
              className="mr-3 h-5 w-5"
              alt="Email Icon"
              style={floatAnimation}
            />
            <a
              href="mailto:libEscolares@morelia.tecnm.mx"
              className="hover:text-[#7ae7c7] transition duration-200"
            >
              libEscolares@morelia.tecnm.mx
            </a>
          </div>
          <div className="text-[#f1f5f9] flex items-center justify-center">
            <img
              src={phoneIcon}
              className="mr-3 h-5 w-5"
              alt="Phone Icon"
              style={floatAnimation}
            />
            <p>+52 123 455 2344</p>
          </div>
          <div className="text-[#f1f5f9] flex items-center justify-center">
            <img
              src={locationIcon}
              className="mr-3 h-5 w-5"
              alt="Location Icon"
              style={floatAnimation}
            />
            <p>Morelia, Michoacán</p>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="flex space-x-6 pt-4 justify-center">
          <a
            href="#"
            className="hover:scale-110 transition transform duration-200"
          >
            <img
              src={instagramIcon}
              alt="Instagram Icon"
              className="h-6 w-6 hover:opacity-80"
              style={floatAnimation}
            />
          </a>
          <a
            href="#"
            className="hover:scale-110 transition transform duration-200"
          >
            
          </a>
          <a
            href="#"
            className="hover:scale-110 transition transform duration-200"
          >
            <img
              src={facebookIcon}
              alt="Facebook Icon"
              className="h-6 w-6 hover:opacity-80"
              style={floatAnimation}
            />
          </a>
        </div>

        {/* Línea decorativa */}
        <div className="border-t border-[#7ae7c7] w-full mt-4"></div>

        {/* Derechos reservados */}
        <div className="text-[#f1f5f9] text-sm opacity-80 pt-4">
          <p>© 2024 Desarrollo web. Todos los derechos reservados.</p>
        </div>
      </div>

      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-8px);
            }
            100% {
              transform: translateY(0);
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
