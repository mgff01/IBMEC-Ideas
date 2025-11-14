import { Link } from 'react-router-dom';
import { useBodyClass } from '../hooks/useBodyClass.js';
import logo from '../assets/Logo.svg';

function SubmitIdea() {
  useBodyClass('page-auth page-submit');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Formulário enviado!');
  };

  return (
    <>
      <main className="auth-layout">
        <section className="auth-intro">
          <Link to="/">
            <img src={logo} alt="Logo Ibmec Ideas" className="brand-logo brand-logo--auth" />
          </Link>
          <div className="submit-intro-card">
            <h1>Envie sua ideia para o Ibmec Ideas</h1>
            <p>
              Compartilhe o contexto, objetivo e prazo da sua iniciativa. Nossa equipe vai analisar e
              retornar com os próximos passos.
            </p>
            <p className="small">
              Antes de enviar, confira os <a href="#termos">Termos de uso</a>.
            </p>
          </div>
        </section>

        <form className="auth-form submit-form" onSubmit={handleSubmit}>
          <h2>Novo projeto</h2>
          <fieldset>
            <legend>Detalhes do Projeto</legend>
            <div className="form-grid">
              <div>
                <label htmlFor="nomeProjeto">Nome do Projeto</label>
                <input id="nomeProjeto" name="nomeProjeto" placeholder="Ex: Plataforma X" required />
              </div>
              <div>
                <label htmlFor="descricao">Descreva seu negócio ou ideia em poucas frases</label>
                <input
                  id="descricao"
                  name="descricao"
                  placeholder="Resumo rápido do problema e da solução"
                  required
                />
              </div>
              <div>
                <label htmlFor="objetivo">Objetivo principal</label>
                <input
                  id="objetivo"
                  name="objetivo"
                  placeholder="Qual impacto você espera gerar?"
                  required
                />
              </div>
              <div>
                <label htmlFor="usuariosPrincipais">Usuários principais</label>
                <input
                  id="usuariosPrincipais"
                  name="usuariosPrincipais"
                  placeholder="Quem será beneficiado?"
                  required
                />
              </div>
            </div>

            <div className="form-grid">
              <div>
                <label htmlFor="acaoMaisImportante">
                  Ação mais importante esperada do usuário
                </label>
                <input
                  id="acaoMaisImportante"
                  name="acaoMaisImportante"
                  placeholder="Ex: completar cadastro, solicitar contato etc."
                  required
                />
              </div>
              <div>
                <label htmlFor="prazo">Prazo final ou data estimada de lançamento</label>
                <input id="prazo" name="prazo" type="date" required />
              </div>
            </div>
          </fieldset>

          <button type="submit">Enviar Formulário</button>
        </form>
      </main>

      <footer className="auth-footer">
        <p>Dúvidas? Fale com o time Ibmec Ideas.</p>
      </footer>
    </>
  );
}

export default SubmitIdea;
