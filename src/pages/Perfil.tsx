
import { useNavigate } from "react-router-dom";
import "./Perfil.css";

export default function Perfil() {
  const navigate = useNavigate();

  function sairDaConta() {
    const confirmar = window.confirm(
      "Deseja realmente sair da sua conta?"
    );

    if (confirmar) {
      navigate("/login");
    }
  }

  return (
    <section className="perfil-page">
      <header className="perfil-header">
        <span className="perfil-etiqueta">MINHA CONTA</span>
        <h1>Meu perfil</h1>
        <p>Suas informações acadêmicas e sua carteira WydenCoin.</p>
      </header>

      <article className="perfil-card">
        <div className="perfil-identificacao">
          <div className="perfil-avatar">A</div>

          <div>
            <h2>Aluno Wyden</h2>
            <p>aluno@aluno.wyden.com.br</p>
            <span className="perfil-status">Estudante ativo</span>
          </div>
        </div>

        <div className="perfil-informacoes">
          <div>
            <span>Matrícula</span>
            <strong>00000000</strong>
          </div>

          <div>
            <span>Curso</span>
            <strong>Sistemas de Informação</strong>
          </div>

          <div>
            <span>Instituição</span>
            <strong>FACI Wyden</strong>
          </div>

          <div>
            <span>Campus</span>
            <strong>Belém - PA</strong>
          </div>
        </div>
      </article>

      <section className="perfil-carteira">
        <div>
          <span>MINHA CARTEIRA</span>
          <h2>Seu engajamento vale moeda.</h2>
          <p>Acompanhe seu saldo e continue participando!</p>
        </div>

        <div className="perfil-saldo">
          <strong>460 WC</strong>
          <span>Saldo disponível</span>
        </div>
      </section>

      <section className="perfil-seguranca">
        <div>
          <h2>Segurança</h2>
          <p>Encerre seu acesso ao portal neste dispositivo.</p>
        </div>

        <button onClick={sairDaConta}>
          Sair da conta
        </button>
      </section>
    </section>
  );
}
