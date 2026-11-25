
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Resgatar.css";

const beneficios = [
  {
    id: "cantina",
    nome: "Voucher de 20% na cantina",
    descricao: "Garanta um desconto especial para aproveitar na cantina.",
    preco: 100,
    quantidade: 20,
    validade: "30 dias após a emissão",
    icone: "☕",
  },
  {
    id: "mentoria",
    nome: "Mentoria de 1 hora",
    descricao: "Uma hora de orientação com a coordenação.",
    preco: 200,
    quantidade: 10,
    validade: "Agendamento conforme disponibilidade",
    icone: "🎓",
  },
  {
    id: "cinema",
    nome: "Desconto em ingresso de cinema",
    descricao: "Aproveite um benefício especial para seu lazer.",
    preco: 250,
    quantidade: 4,
    validade: "30 dias após a emissão",
    icone: "🎬",
  },
  {
    id: "kit",
    nome: "Kit agenda, caneta e brindes",
    descricao: "Um kit especial para acompanhar sua rotina acadêmica.",
    preco: 300,
    quantidade: 8,
    validade: "Retirada conforme orientação da instituição",
    icone: "🎁",
  },
  {
    id: "aws",
    nome: "AWS Community Day",
    descricao: "Participe de um evento sobre tecnologia e inovação.",
    preco: 400,
    quantidade: 0,
    validade: "Conforme calendário do evento",
    icone: "☁️",
  },
  {
    id: "mensalidade",
    nome: "Desconto na mensalidade",
    descricao: "Utilize suas moedas para obter desconto na mensalidade.",
    preco: 800,
    quantidade: 5,
    validade: "Conforme regras da instituição",
    icone: "💚",
  },
];

export default function Resgatar() {
  const { id } = useParams();
  const [confirmado, setConfirmado] = useState(false);

  const beneficio = beneficios.find((item) => item.id === id);

  const saldo = 460;
  const saldoRestante = beneficio ? saldo - beneficio.preco : saldo;

  if (!beneficio) {
    return (
      <section className="resgatar-page">
        <h1>Benefício não encontrado</h1>
        <p>Não conseguimos localizar esse benefício.</p>
        <Link to="/catalogo" className="voltar-catalogo">
          Voltar ao catálogo
        </Link>
      </section>
    );
  }

  const saldoInsuficiente = saldo < beneficio.preco;
  const esgotado = beneficio.quantidade === 0;

  return (
    <section className="resgatar-page">
      <Link to="/catalogo" className="voltar-catalogo">
        ← Voltar ao catálogo
      </Link>

      <header className="resgatar-header">
        <span>WYDENCOIN / RESGATE</span>
        <h1>Confirmar resgate</h1>
        <p>Confira os detalhes antes de trocar suas moedas.</p>
      </header>

      {confirmado ? (
        <div className="resgate-sucesso">
          <span>✓</span>
          <h2>Resgate realizado!</h2>
          <p>Seu pedido de resgate foi registrado neste protótipo.</p>
          <p>O saldo demonstrativo restante seria de <strong>{saldoRestante} WC</strong>.</p>
          <Link to="/resgates">Ver meus resgates</Link>
        </div>
      ) : (
        <div className="resgate-layout">
          <article className="resgate-produto">
            <div className="resgate-visual">
              <span>{beneficio.icone}</span>
            </div>

            <div className="resgate-detalhes">
              <span className="resgate-categoria">BENEFÍCIO SELECIONADO</span>
              <h2>{beneficio.nome}</h2>
              <p>{beneficio.descricao}</p>

              <div className="resgate-informacao">
                <span>Validade / utilização</span>
                <strong>{beneficio.validade}</strong>
              </div>

              <div className="resgate-informacao">
                <span>Disponibilidade</span>
                <strong>
                  {beneficio.quantidade > 0
                    ? `${beneficio.quantidade} unidades disponíveis`
                    : "Esgotado"}
                </strong>
              </div>
            </div>
          </article>

          <aside className="resgate-resumo">
            <h2>Resumo do resgate</h2>

            <div className="resumo-linha">
              <span>Seu saldo atual</span>
              <strong>{saldo} WC</strong>
            </div>

            <div className="resumo-linha">
              <span>Custo do benefício</span>
              <strong className="custo-resgate">−{beneficio.preco} WC</strong>
            </div>

            <div className="resumo-total">
              <span>Saldo após o resgate</span>
              <strong>{saldoRestante} WC</strong>
            </div>

            {saldoInsuficiente && (
              <div className="resgate-alerta">
                Você não possui moedas suficientes para esse benefício.
              </div>
            )}

            {esgotado && (
              <div className="resgate-alerta">
                Esse benefício está esgotado no momento.
              </div>
            )}

            <button
              className="confirmar-resgate"
              disabled={saldoInsuficiente || esgotado}
              onClick={() => setConfirmado(true)}
            >
              Confirmar resgate
            </button>

            <p className="resgate-aviso">
              Ao confirmar, você autoriza a utilização das moedas indicadas.
            </p>
          </aside>
        </div>
      )}
    </section>
  );
}
