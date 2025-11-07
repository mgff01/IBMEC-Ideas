import { useNavigate, Link } from 'react-router-dom';
import { useBodyClass } from '../hooks/useBodyClass.js';

function Login() {
  useBodyClass('page-auth');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/projetos');
  };

  return (
    <>
      <header>
        <h1>Ibmec Ideas</h1>
      </header>

      <main>
        <div>
          <Link to="/">
            <img src="/assets/Logo.svg" alt="Logo Ibmec Ideas" className="brand-logo" />
          </Link>
        </div>

        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <legend>Acesso</legend>

          <div>
            <label htmlFor="usuario">CNPJ, E-mail ou Nome da empresa</label>
            <input
              id="usuario"
              name="usuario"
              placeholder="Insira CNPJ, E-mail ou Nome"
              required
            />
          </div>

          <div>
            <label htmlFor="senha">Senha</label>
            <input id="senha" name="senha" type="password" placeholder="Insira sua senha" required />
          </div>

          <p>
            <a href="#recuperar-senha">Esqueci minha senha</a>
          </p>

          <button type="submit">Sign in</button>
          <button type="button" onClick={() => navigate('/login-hubs')}>
            Ibmec HUBs
          </button>
        </form>
      </main>

      <footer>
        <p>
          <Link to="/cadastro">Não tem conta? Cadastre-se</Link>
        </p>
      </footer>
    </>
  );
}

export default Login;
