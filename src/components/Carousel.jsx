import React from "react";
import Slider from "react-slick";

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
        breakpoint: 1024, // Pantallas medianas
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Pantallas pequeñas
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-6 bg-white">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-[#162A40]">
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

export default Carousel;
