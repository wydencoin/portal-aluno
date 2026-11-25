
import { Link } from "react-router-dom";
import "./Catalogo.css";

const beneficios = [
  {
    id: "cantina",
    nome: "Voucher de 20% na cantina",
    descricao: "Garanta um desconto especial para aproveitar na cantina.",
    preco: 100,
    categoria: "Alimentação",
    icone: "☕",
    estoque: "Disponível",
    quantidade: 20,
  },
  {
    id: "mentoria",
    nome: "Mentoria de 1 hora",
    descricao: "Uma hora de orientação com a coordenação.",
    preco: 200,
    categoria: "Acadêmico",
    icone: "🎓",
    estoque: "Disponível",
    quantidade: 10,
  },
  {
    id: "cinema",
    nome: "Desconto em ingresso de cinema",
    descricao: "Aproveite um benefício especial para seu lazer.",
    preco: 250,
    categoria: "Entretenimento",
    icone: "🎬",
    estoque: "Disponível",
    quantidade: 4,
  },
  {
    id: "kit",
    nome: "Kit agenda, caneta e brindes",
    descricao: "Um kit especial para acompanhar sua rotina acadêmica.",
    preco: 300,
    categoria: "Produtos",
    icone: "🎁",
    estoque: "Disponível",
    quantidade: 8,
  },
  {
    id: "aws",
    nome: "AWS Community Day",
    descricao: "Participe de um evento sobre tecnologia e inovação.",
    preco: 400,
    categoria: "Eventos",
    icone: "☁️",
    estoque: "Esgotado",
    quantidade: 0,
  },
  {
    id: "mensalidade",
    nome: "Desconto na mensalidade",
    descricao: "Utilize suas moedas para obter desconto na mensalidade.",
    preco: 800,
    categoria: "Acadêmico",
    icone: "💚",
    estoque: "Disponível",
    quantidade: 5,
  },
];

export default function Catalogo() {
  return (
    <section className="catalogo-page">
      <header className="catalogo-header">
        <span>WYDENCOIN / BENEFÍCIOS</span>
        <h1>Catálogo de benefícios</h1>
        <p>Suas conquistas podem virar experiências. Escolha seu próximo benefício!</p>
      </header>

      <div className="catalogo-saldo">
        <div>
          <span>Seu saldo disponível</span>
          <h2>460 WC</h2>
        </div>
        <Link to="/extrato">Ver meu extrato →</Link>
      </div>

      <div className="catalogo-filtros">
        <span>Todos os benefícios</span>
        <span>Alimentação</span>
        <span>Acadêmico</span>
        <span>Entretenimento</span>
        <span>Eventos</span>
      </div>

      <div className="catalogo-grid">
        {beneficios.map((beneficio) => (
          <article className="produto-card" key={beneficio.id}>
            <div className="produto-visual">
              <span className="produto-icone">{beneficio.icone}</span>
              <span className={beneficio.quantidade > 0 ? "produto-status" : "produto-status esgotado"}>
                {beneficio.estoque}
              </span>
            </div>

            <div className="produto-conteudo">
              <span className="produto-categoria">{beneficio.categoria}</span>
              <h2>{beneficio.nome}</h2>
              <p>{beneficio.descricao}</p>

              <div className="produto-rodape">
                <div>
                  <strong>{beneficio.preco} WC</strong>
                  <span>{beneficio.quantidade > 0 ? `${beneficio.quantidade} disponíveis` : "Sem estoque"}</span>
                </div>

                <Link
                  to={`/catalogo/${beneficio.id}`}
                  className={beneficio.quantidade > 0 ? "produto-botao" : "produto-botao desativado"}
                  aria-disabled={beneficio.quantidade === 0}
                  onClick={(event) => {
                    if (beneficio.quantidade === 0) event.preventDefault();
                  }}
                >
                  {beneficio.quantidade > 0 ? "Ver benefício" : "Indisponível"}
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
