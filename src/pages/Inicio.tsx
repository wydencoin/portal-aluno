
import { Link } from "react-router-dom";
import "./Inicio.css";

export default function Inicio() {
  return (
    <section className="inicio-page">

      <header>
        <p>Portal do Aluno / WydenCoin</p>
        <h1>Olá, Estudante!</h1>
        <p>
          Ciclo atual: 16 a 30 de novembro.
          A próxima emissão de moedas sai em 1º de dezembro.
        </p>
      </header>

      <div className="saldo-cards">

        <article>
          <p>Saldo disponível</p>
          <h2>460 WC</h2>
          <span>Pronto para trocar no catálogo</span>
        </article>

        <article>
          <p>Reservado em vouchers</p>
          <h2>300 WC</h2>
          <span>2 vouchers aguardando uso</span>
        </article>

        <article>
          <p>Ganhos neste semestre</p>
          <h2>1.340 WC</h2>
          <span>+80 WC no último ciclo</span>
        </article>

      </div>

      <div className="atalhos">
        <h2>Acesse rapidamente</h2>

        <div className="atalhos-grid">
          <Link to="/catalogo" className="atalho-card">
            <span>🎁</span>
            <h3>Ver catálogo</h3>
            <p>6 benefícios ativos</p>
          </Link>

          <Link to="/como-ganhar" className="atalho-card">
            <span>⭐</span>
            <h3>Como ganhar</h3>
            <p>Regras e valores</p>
          </Link>

          <Link to="/resgates" className="atalho-card">
            <span>🎟️</span>
            <h3>Meus resgates</h3>
            <p>2 vouchers ativos</p>
          </Link>
        </div>
      </div>

      <div className="movimentacoes">
        <div className="secao-header">
          <h2>Últimas movimentações</h2>
          <Link to="/extrato">Ver extrato →</Link>
        </div>

        <div className="movimentacao-item">
          <div>
            <h3>Você teve 100% de presença nas últimas 2 semanas</h3>
            <p>15/11 · Presença</p>
          </div>
          <strong className="valor-positivo">+40 WC</strong>
        </div>

        <div className="movimentacao-item">
          <div>
            <h3>Você acessou o ambiente virtual nos últimos 15 dias</h3>
            <p>15/11 · Ambiente virtual</p>
          </div>
          <strong className="valor-positivo">+20 WC</strong>
        </div>

        <div className="movimentacao-item">
          <div>
            <h3>Você acessou o SIA nos últimos 15 dias</h3>
            <p>15/11 · SIA</p>
          </div>
          <strong className="valor-positivo">+20 WC</strong>
        </div>

        <div className="movimentacao-item">
          <div>
            <h3>Resgate: Voucher de 20% na cantina</h3>
            <p>13/11 · Catálogo</p>
          </div>
          <strong className="valor-negativo">−100 WC</strong>
        </div>
      </div>

      <div className="beneficios">
        <div className="secao-header">
          <h2>Dá para resgatar agora</h2>
          <Link to="/catalogo">Ver catálogo →</Link>
        </div>

        <p>Seu saldo: <strong>460 WC</strong></p>

        <div className="beneficio-item">
          <div>
            <h3>Voucher de 20% na cantina</h3>
            <p>Desconto para aproveitar na cantina</p>
          </div>
          <strong>100 WC</strong>
        </div>

        <div className="beneficio-item">
          <div>
            <h3>Mentoria de 1 hora</h3>
            <p>Uma hora de mentoria com a coordenação</p>
          </div>
          <strong>200 WC</strong>
        </div>

        <div className="beneficio-item">
          <div>
            <h3>Desconto em ingresso de cinema</h3>
            <p>Um benefício para aproveitar seu lazer</p>
          </div>
          <strong>250 WC</strong>
        </div>

        <div className="beneficio-item">
          <div>
            <h3>Kit agenda, caneta e brindes</h3>
            <p>Um kit especial para sua rotina acadêmica</p>
          </div>
          <strong>300 WC</strong>
        </div>
      </div>

    </section>
  );
}
