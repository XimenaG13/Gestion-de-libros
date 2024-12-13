import React from "react";

const Card = () => {
  const data = [
    {
      id: 1,
      title: "Título 1",
      description: "Descripción breve del contenido.",
      image: "/images/placeholder1.jpg",
    },
    {
      id: 2,
      title: "Título 2",
      description: "Descripción breve del contenido.",
      image: "/images/placeholder2.jpg",
    },
    {
      id: 3,
      title: "Título 3",
      description: "Descripción breve del contenido.",
      image: "/images/placeholder3.jpg",
    },
    {
      id: 4,
      title: "Título 4",
      description: "Descripción breve del contenido.",
      image: "/images/placeholder4.jpg",
    },
    {
      id: 5,
      title: "Título 5",
      description: "Descripción breve del contenido.",
      image: "/images/placeholder5.jpg",
    },
    {
      id: 6,
      title: "Título 6",
      description: "Descripción breve del contenido.",
      image: "/images/placeholder6.jpg",
    },
  ];

  return (
    <div className="p-6 md:p-12 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md flex items-center p-4 hover:shadow-lg transition-shadow"
          >
            {/* Imagen a la izquierda */}
            <div className="w-1/3">
              <img
                src={item.image}
                alt={`Imagen de ${item.title}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* Contenido a la derecha */}
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

export default Card;
