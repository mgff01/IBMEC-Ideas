import { Link, useNavigate } from 'react-router-dom';
import { useBodyClass } from '../hooks/useBodyClass.js';
import logo from '../assets/Logo.svg';

function SignUp() {
  useBodyClass('page-auth');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Dados de cadastro enviados!');
  };

  return (
    <>
      <header>
        <h1>Ibmec Ideas</h1>
      </header>

      <main>
        <div>
          <Link to="/">
            <img src={logo} alt="Logo Ibmec Ideas" className="brand-logo" />
          </Link>
        </div>

        <form onSubmit={handleSubmit}>
          <h2>Cadastre-se</h2>
          <legend>Informações da Empresa</legend>

          <div>
            <label htmlFor="nomeEmpresa">Nome da Empresa</label>
            <input
              id="nomeEmpresa"
              name="nomeEmpresa"
              placeholder="Insira o nome da empresa"
              required
            />
          </div>

          <div>
            <label htmlFor="cnpj">CNPJ</label>
            <input id="cnpj" name="cnpj" placeholder="XX.XXX.XXX/0000-XX" required />
          </div>

          <div>
            <label htmlFor="areaAtuacao">Área de atuação</label>
            <select id="areaAtuacao" name="areaAtuacao" defaultValue="" required>
              <option value="" disabled>
                Selecione a área de atuação
              </option>
              <option value="tecnologia">Tecnologia</option>
              <option value="financeiro">Financeiro</option>
              <option value="marketing">Marketing</option>
              <option value="outra">Outra</option>
            </select>
          </div>

          <div>
            <label htmlFor="porte">Porte</label>
            <select id="porte" name="porte" defaultValue="" required>
              <option value="" disabled>
                Selecione o porte
              </option>
              <option value="pequeno">Pequeno</option>
              <option value="medio">Médio</option>
              <option value="grande">Grande</option>
            </select>
          </div>

          <div>
            <label htmlFor="tipoDemanda">Tipo de demanda</label>
            <select id="tipoDemanda" name="tipoDemanda" defaultValue="" required>
              <option value="" disabled>
                Selecione a demanda
              </option>
              <option value="inovacao">Inovação</option>
              <option value="consultoria">Consultoria</option>
              <option value="desenvolvimento">Desenvolvimento</option>
              <option value="outra">Outra</option>
            </select>
          </div>

          <legend>Credenciais</legend>

          <div>
            <label htmlFor="email">E-mail</label>
            <input id="email" name="email" type="email" placeholder="username@email.com" required />
          </div>

          <div>
            <label htmlFor="senha">Senha</label>
            <input id="senha" name="senha" type="password" placeholder="Insira sua senha" required />
          </div>

          <label htmlFor="termos">
            <input id="termos" name="termos" type="checkbox" required /> Li e aceito os{' '}
            <a href="#termos">Termos de Uso</a>
          </label>

          <button type="submit">Criar conta</button>
          <button type="button" onClick={() => navigate('/login-hubs')}>
            Ibmec HUBs
          </button>
        </form>
      </main>

      <footer>
        <p>
          <Link to="/login">Já tem conta? Faça Log-in</Link>
        </p>
      </footer>
    </>
  );
}

export default SignUp;
