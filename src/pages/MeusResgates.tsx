
import { useState } from "react";
import "./MeusResgates.css";

type Status = "ativo" | "utilizado" | "cancelado";

type Resgate = {
  id: number;
  nome: string;
  categoria: string;
  codigo: string;
  data: string;
  validade: string;
  status: Status;
};

const resgatesIniciais: Resgate[] = [
  {
    id: 1,
    nome: "Voucher 20% na cantina",
    categoria: "Alimentação",
    codigo: "WC-2026-8F2K",
    data: "13/11/2026",
    validade: "30/11/2026",
    status: "ativo",
  },
  {
    id: 2,
    nome: "Desconto no cinema",
    categoria: "Entretenimento",
    codigo: "WC-2026-9X4M",
    data: "10/11/2026",
    validade: "10/12/2026",
    status: "utilizado",
  },
  {
    id: 3,
    nome: "Mentoria de 1 hora",
    categoria: "Educação",
    codigo: "WC-2026-3A7P",
    data: "05/11/2026",
    validade: "20/11/2026",
    status: "cancelado",
  },
];

export default function MeusResgates() {
  const [resgates, setResgates] = useState(resgatesIniciais);
  const [filtro, setFiltro] = useState<Status | "todos">("todos");

  const resgatesFiltrados = resgates.filter((resgate) => {
    return filtro === "todos" || resgate.status === filtro;
  });

  function cancelarResgate(id: number) {
    const confirmar = window.confirm(
      "Tem certeza que deseja cancelar este resgate?"
    );

    if (!confirmar) return;

    setResgates((anteriores) =>
      anteriores.map((resgate) =>
        resgate.id === id
          ? { ...resgate, status: "cancelado" }
          : resgate
      )
    );
  }

  function nomeStatus(status: Status) {
    if (status === "ativo") return "Ativo";
    if (status === "utilizado") return "Utilizado";
    return "Cancelado";
  }

  return (
    <section className="resgates-page">
      <header className="resgates-header">
        <div>
          <span className="resgates-etiqueta">MINHA CARTEIRA</span>
          <h1>Meus resgates</h1>
          <p>Acompanhe seus benefícios e vouchers.</p>
        </div>

        <div className="resgates-contador">
          <strong>{resgates.filter((r) => r.status === "ativo").length}</strong>
          <span>resgates ativos</span>
        </div>
      </header>

      <div className="resgates-filtros">
        <button
          className={filtro === "todos" ? "selecionado" : ""}
          onClick={() => setFiltro("todos")}
        >
          Todos
        </button>

        <button
          className={filtro === "ativo" ? "selecionado" : ""}
          onClick={() => setFiltro("ativo")}
        >
          Ativos
        </button>

        <button
          className={filtro === "utilizado" ? "selecionado" : ""}
          onClick={() => setFiltro("utilizado")}
        >
          Utilizados
        </button>

        <button
          className={filtro === "cancelado" ? "selecionado" : ""}
          onClick={() => setFiltro("cancelado")}
        >
          Cancelados
        </button>
      </div>

      <div className="resgates-lista">
        {resgatesFiltrados.length === 0 ? (
          <div className="resgates-vazio">
            <span>🎟️</span>
            <h2>Nenhum resgate por aqui</h2>
            <p>Seus vouchers aparecerão nesta área.</p>
          </div>
        ) : (
          resgatesFiltrados.map((resgate) => (
            <article className="resgate-card" key={resgate.id}>
              <div className="resgate-conteudo">
                <div className="resgate-topo">
                  <span className="resgate-categoria">
                    {resgate.categoria}
                  </span>

                  <span className={`resgate-status ${resgate.status}`}>
                    {nomeStatus(resgate.status)}
                  </span>
                </div>

                <h2>{resgate.nome}</h2>

                <div className="resgate-datas">
                  <p>Resgatado em: <strong>{resgate.data}</strong></p>
                  <p>Validade: <strong>{resgate.validade}</strong></p>
                </div>

                {resgate.status === "ativo" && (
                  <div className="resgate-voucher">
                    <div>
                      <span>Código do voucher</span>
                      <strong>{resgate.codigo}</strong>
                    </div>

                    <div className="qr-ilustrativo" aria-label="QR Code ilustrativo">
                      <svg viewBox="0 0 21 21" role="img">
                        <rect width="21" height="21" fill="white" />
                        {[
                          [1,1],[2,1],[3,1],[4,1],[5,1],[1,2],[5,2],
                          [1,3],[3,3],[5,3],[1,4],[5,4],[1,5],[2,5],
                          [3,5],[4,5],[5,5],[9,1],[11,1],[13,1],[8,3],
                          [10,3],[12,3],[14,3],[8,5],[9,6],[11,5],[13,6],
                          [15,5],[1,9],[3,8],[5,10],[7,8],[9,9],[11,8],
                          [13,10],[15,8],[17,9],[19,8],[2,12],[4,11],
                          [6,13],[8,11],[10,13],[12,11],[14,13],[16,11],
                          [18,13],[1,15],[3,15],[5,15],[1,16],[5,16],
                          [1,17],[3,17],[5,17],[9,15],[11,15],[13,16],
                          [15,15],[17,17],[19,15],[9,19],[11,18],[13,19],
                          [15,18],[18,19]
                        ].map(([x, y], i) => (
                          <rect key={i} x={x} y={y} width="1" height="1" fill="#25251f" />
                        ))}
                      </svg>
                    </div>
                  </div>
                )}

                {resgate.status === "ativo" && (
                  <button
                    className="resgate-cancelar"
                    onClick={() => cancelarResgate(resgate.id)}
                  >
                    Cancelar resgate
                  </button>
                )}
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
