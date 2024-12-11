import React from "react";

const CarouselAutor = () => {
  const authors = [
    { id: 1, name: "Autor 1", description: "Descripción breve del autor 1." },
    { id: 2, name: "Autor 2", description: "Descripción breve del autor 2." },
    { id: 3, name: "Autor 3", description: "Descripción breve del autor 3." },
    { id: 4, name: "Autor 4", description: "Descripción breve del autor 4." },
    { id: 5, name: "Autor 5", description: "Descripción breve del autor 5." },
  ];

  return (
    <div className="p-10 bg-white">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 mt-10 text-[#162A40] bg-clip-text bg-gradient-to-r from-[#162A40] to-[#4ED9B2] text-transparent">
        Autores más leídos
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {authors.map((author) => (
          <div key={author.id} className="flex flex-col items-center text-center">
            <div className="h-32 w-32 bg-[#162A40] rounded-full flex items-center justify-center text-white text-lg font-bold">
              {author.name}
            </div>
            <p className="text-sm mt-4 text-gray-600">{author.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselAutor;
