import React from "react";
import WSH from "../images/WSH.jpeg";
import Agatha from "../images/Agatha.jpg";
import jk from "../images/jk.jpg";
import gabriel from "../images/gabriel.jpg.webp";
import paulo from "../images/paulo.jpg";

const CarouselAutor = () => {
  const authors = [
    {
      id: 1,
      name: "William Shakespeare",
      description: "Obras destacadas: Hamlet, Romeo y Julieta, Macbeth",
      image: WSH, 
    },
    {
      id: 2,
      name: "Agatha Christie",
      description: "Obras destacadas: Asesinato en el Orient Express, Diez negritos",
      image: Agatha,
    },
    {
      id: 3,
      name: "J.K. Rowling",
      description: "Obras destacadas: Serie Harry Potter",
      image: jk,
    },
    {
      id: 4,
      name: "Gabriel García Márquez",
      description: "Obras destacadas: Cien años de soledad, El amor en los tiempos del cólera",
      image: gabriel,
    },
    {
      id: 5,
      name: "Paulo Coelho",
      description: "Obras destacadas: El alquimista, Brida, Veronika decide morir",
      image: paulo,
    },
  ];

  return (
    <div className="p-10 bg-white">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 mt-10 text-[#162A40] bg-clip-text bg-gradient-to-r from-[#162A40] to-[#4ED9B2] text-transparent">
        Autores más leídos
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {authors.map((author) => (
          <div key={author.id} className="flex flex-col items-center text-center">
            <div
              className="h-32 w-32 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center shadow-md"
            >
              <img
                src={author.image}
                alt={`Imagen de ${author.name}`}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-lg font-bold mt-4 text-[#162A40]">{author.name}</p>
            <p className="text-sm mt-2 text-gray-600">{author.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselAutor;
