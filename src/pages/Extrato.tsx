
import { useState } from "react";
import "./Extrato.css";

const movimentacoes = [
  {
    titulo: "Você teve 100% de presença nas últimas 2 semanas",
    categoria: "Presença",
    data: "15/11",
    valor: "+40 WC",
    tipo: "ganho",
  },
  {
    titulo: "Você acessou o ambiente virtual",
    categoria: "Ambiente virtual",
    data: "15/11",
    valor: "+20 WC",
    tipo: "ganho",
  },
  {
    titulo: "Você acessou o SIA",
    categoria: "Acesso ao SIA",
    data: "15/11",
    valor: "+20 WC",
    tipo: "ganho",
  },
  {
    titulo: "Voucher de 20% na cantina",
    categoria: "Resgate",
    data: "13/11",
    valor: "−100 WC",
    tipo: "resgate",
  },
];

export default function Extrato() {
  const [filtro, setFiltro] = useState("todos");

  const movimentacoesFiltradas = movimentacoes.filter((item) => {
    if (filtro === "todos") return true;
    return item.tipo === filtro;
  });

  return (
    <section className="extrato-page">
      <header className="extrato-header">
        <div>
          <span className="extrato-identificacao">WYDENCOIN / FINANCEIRO</span>
          <h1>Meu extrato</h1>
          <p>Acompanhe suas moedas e todas as suas movimentações.</p>
        </div>
      </header>

      <div className="extrato-resumo">
        <article className="extrato-saldo">
          <span>Saldo disponível</span>
          <h2>460 WC</h2>
          <p>Disponível para novos resgates</p>
        </article>

        <article>
          <span>Moedas reservadas</span>
          <h2>300 WC</h2>
          <p>Em vouchers aguardando uso</p>
        </article>

        <article>
          <span>Ganhos em novembro</span>
          <h2>+80 WC</h2>
          <p>Moedas recebidas no mês</p>
        </article>

        <article>
          <span>Resgates em novembro</span>
          <h2>−300 WC</h2>
          <p>Moedas utilizadas no mês</p>
        </article>
      </div>

      <div className="extrato-historico">
        <div className="extrato-titulo">
          <div>
            <h2>Histórico de movimentações</h2>
            <p>Confira os detalhes de cada movimentação.</p>
          </div>
        </div>

        <div className="extrato-filtros">
          <button
            className={filtro === "todos" ? "selecionado" : ""}
            onClick={() => setFiltro("todos")}
          >
            Tudo
          </button>

          <button
            className={filtro === "ganho" ? "selecionado" : ""}
            onClick={() => setFiltro("ganho")}
          >
            Ganhos
          </button>

          <button
            className={filtro === "resgate" ? "selecionado" : ""}
            onClick={() => setFiltro("resgate")}
          >
            Resgates
          </button>
        </div>

        <div className="extrato-lista">
          {movimentacoesFiltradas.map((item, index) => (
            <article className="extrato-item" key={index}>
              <div className="extrato-icone">
                {item.tipo === "ganho" ? "↗" : "↙"}
              </div>

              <div className="extrato-descricao">
                <h3>{item.titulo}</h3>
                <p>{item.data} · {item.categoria}</p>
              </div>

              <strong className={item.tipo === "ganho" ? "ganho" : "resgate"}>
                {item.valor}
              </strong>
            </article>
          ))}

          {movimentacoesFiltradas.length === 0 && (
            <p className="extrato-vazio">Nenhuma movimentação encontrada.</p>
          )}
        </div>
      </div>
    </section>
  );
}
