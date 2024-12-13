import React from "react";
import Header from "../components/Header";

const Estudiantes = () => {
  // Datos de ejemplo de estudiantes registrados
  const studentsData = [
    { id: 1, user: "Juan Pérez", email: "juanperez@example.com", noControl: "12345223" },
    { id: 2, user: "María García", email: "mariagarcia@example.com", noControl: "20120987" },
    { id: 3, user: "Carlos López", email: "carloslopez@example.com", noControl: "24213456" },
  ];

  // Manejo de acciones (editar o eliminar)
  const handleEdit = (id) => {
    alert(`Editar estudiante con ID: ${id}`);
  };

  const handleDelete = (id) => {
    alert(`Eliminar estudiante con ID: ${id}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <Header />

      {/* Contenido principal */}
      <div className="flex-grow mt-16 p-6">
        <h1 className="text-3xl font-bold text-center text-[#162A40] mb-6">
          Estudiantes Registrados
        </h1>

        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="w-full table-auto border-collapse">
            <thead className="bg-[#4ED9B2] text-white">
              <tr>
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">Usuario</th>
                <th className="px-4 py-2 text-left">Correo</th>
                <th className="px-4 py-2 text-left">No de Control</th>
                <th className="px-4 py-2 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {studentsData.map((student) => (
                <tr key={student.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{student.id}</td>
                  <td className="px-4 py-2">{student.user}</td>
                  <td className="px-4 py-2">{student.email}</td>
                  <td className="px-4 py-2">{student.noControl}</td>
                  <td className="px-4 py-2 text-center">
                    <button
                      onClick={() => handleEdit(student.id)}
                      className="px-4 py-2 bg-[#4ED9B2] text-white rounded-md shadow hover:bg-[#3bb09a] transition mr-2"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(student.id)}
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
    </div>
  );
};

export default Estudiantes;
