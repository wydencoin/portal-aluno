
import { useState } from "react";
import "./App.css";

import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  Navigate,
  useNavigate
} from "react-router-dom";

import {
  Menu, X, House, Receipt, Sparkles,
  ShoppingBag, Ticket, UserRound
} from "lucide-react";

import Login from "./pages/Login";
import Inicio from "./pages/Inicio";
import Extrato from "./pages/Extrato";
import ComoGanhar from "./pages/ComoGanhar";
import Catalogo from "./pages/Catalogo";
import Resgatar from "./pages/Resgatar";
import MeusResgates from "./pages/MeusResgates";
import Perfil from "./pages/Perfil";

function ConteudoApp() {
  const navigate = useNavigate();

  const [autenticado, setAutenticado] = useState(
    localStorage.getItem("wydencoin_auth") === "true" ||
    sessionStorage.getItem("wydencoin_auth") === "true"
  );

  const [menuAberto, setMenuAberto] = useState(true);

  function entrar(manterConectado: boolean) {
    // Limpa qualquer sessão anterior
    localStorage.removeItem("wydencoin_auth");
    sessionStorage.removeItem("wydencoin_auth");

    // Salva conforme a escolha do estudante
    if (manterConectado) {
      localStorage.setItem("wydencoin_auth", "true");
    } else {
      sessionStorage.setItem("wydencoin_auth", "true");
    }

    setAutenticado(true);
    navigate("/", { replace: true });
  }

  function sair() {
    localStorage.removeItem("wydencoin_auth");
    sessionStorage.removeItem("wydencoin_auth");

    setAutenticado(false);
    setMenuAberto(true);

    navigate("/login", { replace: true });
  }

  if (!autenticado) {
    return (
      <Routes>
        <Route path="*" element={<Login onLogin={entrar} />} />
      </Routes>
    );
  }

  return (
    <div className="app portal">

      <header className="topbar">
        <div className="topbar-esquerda">
          <button
            className="menu-toggle"
            onClick={() => setMenuAberto(!menuAberto)}
            aria-label="Abrir ou fechar menu"
          >
            {menuAberto ? <X size={22} /> : <Menu size={22} />}
          </button>

          <Link to="/" className="marca">WydenCoin</Link>
        </div>

        <div className="topbar-direita">
          <div className="usuario-info">
            <span>Olá, estudante</span>
            <small>Portal do Aluno</small>
          </div>

          <div className="usuario-avatar">A</div>
        </div>
      </header>

      <div className="portal-layout">

        <aside className={`sidebar ${menuAberto ? "aberto" : "fechado"}`}>
          <div className="sidebar-titulo">MENU PRINCIPAL</div>

          <nav className="sidebar-links">
            <NavLink to="/" end>
              <House size={19} /> Início
            </NavLink>

            <NavLink to="/extrato">
              <Receipt size={19} /> Extrato
            </NavLink>

            <NavLink to="/como-ganhar">
              <Sparkles size={19} /> Como ganhar
            </NavLink>

            <NavLink to="/catalogo">
              <ShoppingBag size={19} /> Catálogo
            </NavLink>

            <NavLink to="/resgates">
              <Ticket size={19} /> Meus resgates
            </NavLink>

            <NavLink to="/perfil">
              <UserRound size={19} /> Meu perfil
            </NavLink>
          </nav>

          <div className="sidebar-rodape">
            <button onClick={sair}>
              <X size={17} /> Sair da conta
            </button>
            <span>WydenCoin © 2026</span>
          </div>
        </aside>

        <main className="portal-content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/extrato" element={<Extrato />} />
            <Route path="/como-ganhar" element={<ComoGanhar />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/catalogo/:id" element={<Resgatar />} />
            <Route path="/resgates" element={<MeusResgates />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ConteudoApp />
    </BrowserRouter>
  );
}
