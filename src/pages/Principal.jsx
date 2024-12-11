import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import librosdetexto from "../images/librosdetexto.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselAutor from "../components/CarouselAutor";

const CardAdmin = () => {
  const data = [
    { id: 1, title: "Título 1", description: "Descripción breve del contenido." },
    { id: 2, title: "Título 2", description: "Descripción breve del contenido." },
    { id: 3, title: "Título 3", description: "Descripción breve del contenido." },
    { id: 4, title: "Título 4", description: "Descripción breve del contenido." },
    { id: 5, title: "Título 5", description: "Descripción breve del contenido." },
    { id: 6, title: "Título 6", description: "Descripción breve del contenido." },
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
            className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-lg font-bold text-[#162A40] mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
            </div>
            <div className="flex justify-between">
              <button className="px-4 py-2 bg-[#4ED9B2] text-white rounded-md shadow hover:bg-[#3bb09a] transition">
                Editar
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600 transition">
                Borrar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Carousel = () => {
  const books = [
    { id: 1, title: "Libro 1", description: "Libro más leído 1" },
    { id: 2, title: "Libro 2", description: "Libro más leído 2" },
    { id: 3, title: "Libro 3", description: "Libro más leído 3" },
    { id: 4, title: "Libro 4", description: "Libro más leído 4" },
    { id: 5, title: "Libro 5", description: "Libro más leído 5" },
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
            <button className="px-6 py-3 bg-[#4ED9B2] text-black font-medium rounded-lg hover:bg-[#3bb09a] transition">
              Explorar
            </button>
          </div>

          {/* Tarjetas sobre la imagen */}
          <div className="absolute top-[80%] left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-4">
            <div className=" grid-cols-1 md:grid-cols-3 gap-6 hidden md:grid">
              <div className="h-40 bg-[#4ED9B2] rounded-md shadow-md flex items-center justify-center">
                <p className="text-xl font-bold text-[#162A40]">Opción 1</p>
              </div>
              <div className="h-40 bg-[#4ED9B2] rounded-md shadow-md flex items-center justify-center">
                <p className="text-xl font-bold text-[#162A40]">Opción 2</p>
              </div>
              <div className="h-40 bg-[#4ED9B2] rounded-md shadow-md flex items-center justify-center">
                <p className="text-xl font-bold text-[#162A40]">Opción 3</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tarjetas adicionales debajo */}
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
