import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Inicio from "./pages/Inicio";
import Extrato from "./pages/Extrato";
import ComoGanhar from "./pages/ComoGanhar";
import Catalogo from "./pages/Catalogo";
import Resgatar from "./pages/Resgatar";
import MeusResgates from "./pages/MeusResgates";

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: 12, padding: 12 }}>
        <Link to="/login">Login</Link>
        <Link to="/">Inicio</Link>
        <Link to="/extrato">Extrato</Link>
        <Link to="/como-ganhar">ComoGanhar</Link>
        <Link to="/catalogo">Catalogo</Link>
        <Link to="/catalogo/:id">Resgatar</Link>
        <Link to="/resgates">MeusResgates</Link>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Inicio />} />
        <Route path="/extrato" element={<Extrato />} />
        <Route path="/como-ganhar" element={<ComoGanhar />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/catalogo/:id" element={<Resgatar />} />
        <Route path="/resgates" element={<MeusResgates />} />
      </Routes>
    </BrowserRouter>
  );
}
