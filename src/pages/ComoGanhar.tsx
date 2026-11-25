
import "./ComoGanhar.css";

const regrasCiclo = [
  { titulo: "Acesso ao SIA", descricao: "Acesse o sistema acadêmico durante o ciclo.", moedas: 20, icone: "📚" },
  { titulo: "Acesso ao ambiente virtual", descricao: "Entre no ambiente virtual de aprendizagem.", moedas: 20, icone: "💻" },
  { titulo: "100% de presença", descricao: "Mantenha presença em todas as aulas do período.", moedas: 40, icone: "⭐" },
  { titulo: "Presença entre 60% e 99%", descricao: "Mantenha uma frequência de pelo menos 60%.", moedas: 20, icone: "📅" },
  { titulo: "Estudante digital", descricao: "Utilize o ambiente digital de estudos.", moedas: 40, icone: "🌐" },
  { titulo: "Retorno ao ambiente virtual", descricao: "Volte a acessar após 30 dias sem atividade.", moedas: 50, icone: "🔄" },
  { titulo: "Melhora na frequência", descricao: "Aumente sua faixa de frequência em relação ao ciclo anterior.", moedas: 20, icone: "📈" },
];

const regrasExtras = [
  { titulo: "Simulado completo", descricao: "Conclua todas as etapas do simulado.", moedas: 100 },
  { titulo: "Simulado parcial", descricao: "Conclua parte das atividades do simulado.", moedas: 50 },
];

const regrasCR = [
  { faixa: "CR igual ou superior a 9,0", moedas: 150 },
  { faixa: "CR entre 8,0 e 8,99", moedas: 100 },
  { faixa: "CR entre 7,0 e 7,99", moedas: 50 },
];

const acoesESG = [
  { titulo: "Plantio de mudas", data: "22/11 · 9h", descricao: "Participe de uma ação de plantio." },
  { titulo: "Doação de alimentos", data: "29/11", descricao: "Contribua com uma campanha solidária." },
  { titulo: "Coleta seletiva", data: "06/12 · 8h", descricao: "Ajude na separação de materiais recicláveis." },
];

export default function ComoGanhar() {
  return (
    <section className="como-page">
      <header className="como-header">
        <span>WYDENCOIN / RECOMPENSAS</span>
        <h1>Como ganhar moedas?</h1>
        <p>Seu engajamento faz a diferença. Participe das atividades e acumule WydenCoins!</p>
      </header>

      <div className="ciclo-info">
        <div className="ciclo-icone">🗓️</div>
        <div>
          <h2>Recompensas a cada 15 dias</h2>
          <p>As atividades são avaliadas por ciclo. As moedas são calculadas e emitidas após a validação dos seus registros.</p>
        </div>
      </div>

      <section className="regras-secao">
        <div className="regras-titulo">
          <h2>Engajamento acadêmico</h2>
          <p>Pequenas atitudes que fazem sua carteira crescer.</p>
        </div>

        <div className="regras-grid">
          {regrasCiclo.map((regra) => (
            <article className="regra-card" key={regra.titulo}>
              <span className="regra-icone">{regra.icone}</span>
              <h3>{regra.titulo}</h3>
              <p>{regra.descricao}</p>
              <strong>+{regra.moedas} WC</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="regras-secao">
        <div className="regras-titulo">
          <h2>Desempenho acadêmico</h2>
          <p>Seu esforço nos estudos também vale recompensas.</p>
        </div>

        <div className="regras-lista">
          {regrasExtras.map((regra) => (
            <article className="regra-linha" key={regra.titulo}>
              <div>
                <h3>{regra.titulo}</h3>
                <p>{regra.descricao}</p>
              </div>
              <strong>+{regra.moedas} WC</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="regras-secao">
        <div className="regras-titulo">
          <h2>Coeficiente de rendimento (CR)</h2>
          <p>Uma recompensa pelo seu desempenho ao longo do semestre.</p>
        </div>

        <div className="regras-lista">
          {regrasCR.map((regra) => (
            <article className="regra-linha" key={regra.faixa}>
              <h3>{regra.faixa}</h3>
              <strong>+{regra.moedas} WC</strong>
            </article>
          ))}
        </div>
        <p className="observacao">O CR é considerado uma vez por semestre, conforme validação acadêmica.</p>
      </section>

      <section className="regras-secao">
        <div className="regras-titulo">
          <h2>Faça a diferença com ações ESG 🌱</h2>
          <p>Participe de iniciativas ambientais e sociais da instituição.</p>
        </div>

        <article className="esg-destaque">
          <div>
            <h3>Ação ESG validada</h3>
            <p>Participe de uma ação e receba sua recompensa após a validação.</p>
          </div>
          <strong>+60 WC</strong>
        </article>

        <h3 className="proximas-titulo">Próximas ações</h3>
        <div className="acoes-grid">
          {acoesESG.map((acao) => (
            <article className="acao-card" key={acao.titulo}>
              <span>{acao.data}</span>
              <h3>{acao.titulo}</h3>
              <p>{acao.descricao}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
