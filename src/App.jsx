import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Principal from "./pages/Principal"; 
import Estudiantes from "./pages/Estudiantes";
import Libros from "./pages/Libros";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/estudiantes" element={<Estudiantes />} />
        <Route path="/libros" element={<Libros />} />
      </Routes>
    </Router>
  );
}

export default App;
