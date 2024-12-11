import React, { useState } from "react";
import fondo from "../images/fondo.jpg";

function Login() {
    const [isRegistering, setIsRegistering] = useState(false);

    const toggleForm = () => {
        setIsRegistering(!isRegistering);
    };

    return (
        <div className="h-screen flex items-center justify-center ">
            <div className="relative flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-5xl">
                {/* Imagen Dinámica */}
                <div
                    className={`w-full md:w-1/2 bg-cover bg-center transition-transform duration-700 ease-in-out ${isRegistering
                            ? "translate-x-0 md:translate-x-0 order-last"
                            : "translate-x-full md:translate-x-0 order-first"
                        }`}
                    style={{
                        backgroundImage: `url(${fondo})`,
                    }}
                ></div>

                {/* Formulario Dinámico */}
                <div
                    className={`w-full md:w-1/2 p-8 flex flex-col justify-center transition-all duration-700 ease-in-out ${isRegistering
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-full opacity-100 md:translate-x-0"
                        }`}
                >
                    <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#162A40] to-[#4ED9B2] mb-4 text-center">
                        {isRegistering
                            ? "Llene todos los datos para poder registrarse"
                            : "BIENVENIDO AL SISTEMA"
                            }
                    </h1>
                    <h1 className="mb-4 text-xl font-semibold">Libreria escolar</h1>
                    <h1 className="mb-6">Ingrese sus datos</h1>


                    {/* Formulario de Inicio de Sesión */}
                    {!isRegistering && (
                        <form className="space-y-6">
                            <div>

                                <input
                                    id="login-username"
                                    type="text"
                                    placeholder="Usuario"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4ED9B2]"
                                />
                            </div>

                            <div>

                                <input
                                    id="login-password"
                                    type="password"
                                    placeholder="Contraseña"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4ED9B2]"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#162A40] hover:bg-[#4ED9B2] text-white py-3 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#162A40]"
                            >
                                Iniciar Sesión
                            </button>
                        </form>
                    )}

                    {/* Formulario de Registro */}
                    {isRegistering && (
                        <form className="space-y-6">
                            <div>

                                <input
                                    id="username"
                                    type="text"
                                    placeholder="Usuario"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4ED9B2]"
                                />
                            </div>

                            <div>

                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Contraseña"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4ED9B2]"
                                />
                            </div>

                            <div>

                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Correo institucional"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4ED9B2]"
                                />
                            </div>

                            <div>

                                <input
                                    id="controlNumber"
                                    type="text"
                                    placeholder="No. de control"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4ED9B2]"
                                />
                            </div>

                            <div>

                                <select
                                    id="role"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4ED9B2]"
                                >
                                    <option value="">Seleccione un rol</option>
                                    <option value="admin">Administrador</option>
                                    <option value="user">Usuario</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#162A40] hover:bg-[#133034] text-white py-3 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#162A40]"
                            >
                                Registrarme
                            </button>
                        </form>
                    )}

                    {/* Botón Cambiar Formulario */}
                    <div className="mt-4 text-center">
                        <button
                            onClick={toggleForm}
                            className="text-[#4ED9B2] hover:underline font-medium"
                        >
                            {isRegistering
                                ? "¿Ya tienes cuenta? Inicia Sesión"
                                : "¿No tienes cuenta? Regístrate"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
