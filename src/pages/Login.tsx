
import { useState, type FormEvent } from "react";
import "./Login.css";

type LoginProps = {
  onLogin: (manterConectado: boolean) => void;
};

export default function Login({ onLogin }: LoginProps) {
  const [manterConectado, setManterConectado] = useState(false);

  function enviarFormulario(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onLogin(manterConectado);
  }

  return (
    <section className="login-page">
      <div className="login-card">
        <h1>WydenCoin</h1>
        <p>Seu engajamento vale moeda.</p>

        <div className="login-benefits">
          <p>Moedas a cada ciclo de 15 dias</p>
          <p>Cantina, mentorias, eventos e descontos</p>
          <p>Cada moeda registrada em blockchain</p>
        </div>

        <h2>Entrar</h2>
        <p>Use o seu e-mail institucional da Wyden.</p>

        <form onSubmit={enviarFormulario}>
          <label htmlFor="email">E-mail institucional</label>

          <input
            id="email"
            type="email"
            placeholder="seuemail@aluno.faculdadeideal.edu.br"
            required
          />

          <div className="login-remember">
            <label>
              <input
                type="checkbox"
                name="manterConectado"
                checked={manterConectado}
                onChange={(event) =>
                  setManterConectado(event.target.checked)
                }
              />
              Manter-me conectado
            </label>
          </div>

          <button type="submit">Entrar no portal</button>
        </form>

        <p>Primeiro acesso?</p>

      </div>
    </section>
  );
}
