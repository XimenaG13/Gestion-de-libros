import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import librosdetexto from "../images/librosdetexto.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselAutor from "../components/CarouselAutor";
import nash from "../images/nash.jpg";
import victoria from "../images/victoria.png";
import fun from "../images/fun.png";
import clan from "../images/clan.png";
import cien from "../images/cien.jpeg";
import lucia from "../images/lucia.jpg";

const CardAdmin = () => {
  const data = [
    {
      id: 1,
      title: "Las que no duermen NASH",
      description: "Esta novela negra ha capturado la atención de los lectores por su intrincada trama y profundidad de personajes.",
      image: nash,
    },
    {
      id: 2,
      title: "Victoria",
      description: "Ganadora del Premio Planeta 2024, esta novela histórica explora temas de amor y traición en un contexto histórico detallado.",
      image: victoria,
    },
    {
      id: 3,
      title: "Una Navidad muy fun, fun, fun",
      description: "Una novela romántica que añade un toque festivo a las historias de amor contemporáneas, perfecta para la temporada navideña.",
      image: fun,
    },
    {
      id: 4,
      title: "El Clan (Inspectora Elena Blanco 5)",
      description: "La quinta entrega de la serie de la Inspectora Elena Blanco, que continúa cautivando a los aficionados al thriller y la novela negra.",
      image: clan,
    },
    {
      id: 5,
      title: "Mi querida Lucía",
      description: "Una novela que combina humor y romance, reflejando el estilo característico de su autora y su popularidad en redes sociales.",
      image: lucia,
    },
    {
      id: 6,
      title: "Cien años de soledad",
      description: "na obra maestra de la literatura latinoamericana, que narra la historia de la familia Buendía en el pueblo ficticio de Macondo, explorando temas de amor, soledad y el paso del tiempo. ",
      image: cien,
    },
  ];

  return (
    <div className="p-6 md:p-12 bg-white">
      <div className="relative z-10 text-center">
        <h1 className="text-2xl md:text-4xl font-bold mt-24 mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#162A40] to-[#4ED9B2]">
          Libros recientes
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md flex items-center p-4 hover:shadow-lg hover:scale-105 transition-transform"
          >
            <div className="w-1/3">
              <img
                src={item.image}
                alt={`Imagen de ${item.title}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-2/3 pl-4">
              <h2 className="text-lg font-bold text-[#162A40] mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Carousel = () => {
  const books = [
    { id: 1, title: "Don Quijote de la Mancha", description: "Publicada en el siglo XVII, esta obra maestra de la literatura española narra las aventuras del ingenioso hidalgo Don Quijote y su fiel escudero Sancho Panza." },
    { id: 2, title: "El Corán", description: "Texto sagrado del Islam, se considera la palabra de Dios revelada al profeta Mahoma. Es una guía espiritual y legal para millones de musulmanes." },
    { id: 3, title: "Citas del Presidente Mao Tse-Tung (El Libro Rojo)", description: "Compilación de discursos y escritos del líder chino Mao Zedong." },
    { id: 4, title: "Harry Potter y la piedra filosofal", description: "Primera entrega de la exitosa saga de Harry Potter, que introduce a los lectores en el mundo mágico de Hogwarts y las aventuras del joven mago." },
    { id: 5, title: "Cien años de soledad", description: "Una obra maestra de la literatura latinoamericana, que narra la historia de la familia Buendía en el pueblo ficticio de Macondo" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-6 bg-white">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#162A40] to-[#4ED9B2] ">
        Libros más leídos
      </h2>
      <Slider {...settings}>
        {books.map((book) => (
          <div key={book.id} className="p-4">
            <div className="bg-[#4ED9B2] rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-[#162A40]">{book.title}</h3>
              <p className="text-gray-800">{book.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

function Principal() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Section */}
      <div className="relative bg-[#162A40] text-white">
        {/* Imagen de fondo con texto centrado */}
        <div
          className="relative h-96 bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${librosdetexto})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Cada página que lees es una puerta abierta a nuevos mundos
            </h1>
            <p className="text-gray-300 mb-6">
              Atrévete a descubrir lo que te espera en nuestra librería
            </p>
          </div>

          {/* Tarjetas sobre la imagen */}
          <div className="absolute top-[80%] left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="h-40 bg-[#4ED9B2] bg-opacity-90 rounded-md shadow-md flex items-center justify-center hover:scale-105 transition-transform">
                <p className="text-xl font-bold text-[#162A40]">Conocimiento</p>
              </div>
              <div className="h-40 bg-[#4ED9B2] bg-opacity-90 rounded-md shadow-md flex items-center justify-center hover:scale-105 transition-transform">
                <p className="text-xl font-bold text-[#162A40]">Aventura</p>
              </div>
              <div className="h-40 bg-[#4ED9B2] bg-opacity-90 rounded-md shadow-md flex items-center justify-center hover:scale-105 transition-transform">
                <p className="text-xl font-bold text-[#162A40]">Inspiración</p>
              </div>
            </div>
          </div>
        </div>

        <CardAdmin />

        {/* Carrusel de libros más leídos */}
        <Carousel />

        {/* Carrusel de autores más leídos */}
        <CarouselAutor />
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default Principal;
