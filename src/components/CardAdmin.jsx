import React from "react";

const CardAdmin = () => {
  const data = [
    { id: 1, title: "", description: "" },
    { id: 2, title: "Título 2", description: "Descripción breve del contenido." },
    { id: 3, title: "Título 3", description: "Descripción breve del contenido." },
    { id: 4, title: "Título 4", description: "Descripción breve del contenido." },
    { id: 5, title: "Título 5", description: "Descripción breve del contenido." },
    { id: 6, title: "Título 6", description: "Descripción breve del contenido." },
  ];

  return (
    <div className="p-6 md:p-12 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
          >
            {/* Título */}
            <div>
              <h2 className="text-lg font-bold text-[#162A40] mb-2">
                {item.title}
              </h2>
              {/* Descripción */}
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
            </div>
            {/* Botones */}
            <div className="flex justify-between">
              
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

export default CardAdmin;
