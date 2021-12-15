import React from "react";
import { Routes, Route } from 'react-router';
import Ordenes from './components/pages/Ordenes';
import Usuarios from './components/pages/Usuarios';
import Productos from './components/pages/Productos';
import Sidebar from "./components/ui/Sidebar";
import DetalleOrdenes from "./components/pages/DetalleOrdenes";
import DetalleProductos from "./components/pages/DetalleProductos";
import DetalleUsuarios from "./components/pages/DetalleUsuarios";

function App() {
  return (
    <div className="md:flex min-h-screen " >
      <Sidebar />
      <div className="md:w-2/5 xl:w-4/5 p-6">
        <Routes>
          <Route path="/" element={<Ordenes />} />
          <Route path="/Usuarios" element={<Usuarios />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/nueva-orden" element={<DetalleOrdenes />} />
          <Route path="/nuevo-usuario" element={<DetalleUsuarios />} />
          <Route path="/nuevo-producto" element={<DetalleProductos />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
