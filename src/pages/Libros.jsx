import React, { useState } from "react";
import Header from "../components/Header";

const Libros = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const booksData = [
    { id: 1, title: "El Principito", author: "Antoine de Saint-Exupéry", editorial: "Reynal & Hitchcock" },
    { id: 2, title: "Cien Años de Soledad", author: "Gabriel García Márquez", editorial: "Sudamericana" },
    { id: 3, title: "Don Quijote de la Mancha", author: "Miguel de Cervantes", editorial: "Francisco de Robles" },
  ];

  const handleEdit = (id) => {
    alert(`Editar libro con ID: ${id}`);
  };

  const handleDelete = (id) => {
    alert(`Eliminar libro con ID: ${id}`);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <div className="mt-6 mb-2  h-16 flex items-center justify-end pr-10">
        <button
          onClick={toggleModal}
          className="bg-[#4ED9B2] text-white px-4 py-2 rounded-md shadow hover:bg-[#3bb09a] transition"
        >
          Agregar Nuevo Libro
        </button>
      </div>
      
      <hr className="border-t-2 border-gray-300 mb-6" />

      <div className="p-6">
        <h1 className="text-3xl font-bold text-center text-[#162A40] mb-6">
          Libros Registrados
        </h1>

        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="w-full table-auto border-collapse">
            <thead className="bg-[#4ED9B2] text-white">
              <tr>
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">Título del libro</th>
                <th className="px-4 py-2 text-left">Autor</th>
                <th className="px-4 py-2 text-left">Editorial</th>
                <th className="px-4 py-2 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {booksData.map((book) => (
                <tr key={book.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{book.id}</td>
                  <td className="px-4 py-2">{book.title}</td>
                  <td className="px-4 py-2">{book.author}</td>
                  <td className="px-4 py-2">{book.editorial}</td>
                  <td className="px-4 py-2 text-center">
                    <button
                      onClick={() => handleEdit(book.id)}
                      className="px-4 py-2 bg-[#4ED9B2] text-white rounded-md shadow hover:bg-[#3bb09a] transition mr-2"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(book.id)}
                      className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600 transition"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-xl font-bold text-[#162A40] mb-4">Agregar nuevo libro</h2>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Título del libro"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ED9B2]"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Autor"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ED9B2]"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Editorial"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ED9B2]"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={toggleModal}
                  className="bg-gray-400 text-white px-4 py-2 rounded-md shadow hover:bg-gray-500 transition mr-2"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-[#4ED9B2] text-white px-4 py-2 rounded-md shadow hover:bg-[#3bb09a] transition"
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Libros;
