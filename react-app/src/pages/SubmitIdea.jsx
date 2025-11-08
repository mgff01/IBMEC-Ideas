import { useBodyClass } from '../hooks/useBodyClass.js';
import logo from '../assets/Logo.svg';

function SubmitIdea() {
  useBodyClass('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Formulário enviado!');
  };

  return (
    <>
      <header>
        <div>
          <img src={logo} alt="Logo Ibmec Ideas" className="brand-logo" />
        </div>
        <h1>Preencha o formulário abaixo</h1>
        <p>
          Antes de enviar, revise os termos de uso: <a href="#termos">Termos de uso</a>
        </p>
      </header>

      <main>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Detalhes do Projeto</legend>
            <div>
              <div>
                <label htmlFor="nomeProjeto">Nome do Projeto:</label>
                <input id="nomeProjeto" name="nomeProjeto" required />
              </div>
              <div>
                <label htmlFor="descricao">
                  Descreva seu negócio ou ideia em poucas frases:
                </label>
                <input id="descricao" name="descricao" required />
              </div>
              <div>
                <label htmlFor="objetivo">Qual é o principal objetivo deste projeto?</label>
                <input id="objetivo" name="objetivo" required />
              </div>
              <div>
                <label htmlFor="usuariosPrincipais">
                  Quem são os usuários principais do seu projeto?
                </label>
                <input id="usuariosPrincipais" name="usuariosPrincipais" required />
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="acaoMaisImportante">
                  Qual é a ação mais importante que você espera que o usuário realize?
                </label>
                <input id="acaoMaisImportante" name="acaoMaisImportante" required />
              </div>
              <div>
                <label htmlFor="prazo">
                  Qual é o prazo final ou uma data estimada para o lançamento?
                </label>
                <input id="prazo" name="prazo" type="date" required />
              </div>
            </div>
          </fieldset>

          <button type="submit">Enviar Formulário</button>
        </form>
      </main>

      <footer />
    </>
  );
}

export default SubmitIdea;
