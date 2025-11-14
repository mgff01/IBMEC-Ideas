import { Link } from 'react-router-dom';
import { useBodyClass } from '../hooks/useBodyClass.js';
import logo from '../assets/Logo.svg';
import logoHeader from '../assets/Ideas.svg';
import professionalImage from '../assets/professional.png';

const feedbacks = [
  'Experiência Incrível e Intuitiva!',
  'Interface amigável e suporte rápido.',
  'Facilitou a colaboração entre equipes.',
];

function Feedback() {
  useBodyClass('');
  const handleFeedbackSubmit = (event) => {
    event.preventDefault();
    alert('Feedback enviado!');
  };

  return (
    <>
      <header className="feedback-header">
        <div className="feedback-header-content">
          <div>
            <Link to="/">
              <img src={logoHeader} alt="Logo Ibmec Ideas" style={{ width: 138.5,  height: 91 }} />
            </Link>
          </div>
          <nav className="feedback-nav">
            <Link to="/sobre" className="feedback-nav-btn">
              Sobre nós
            </Link>
            <Link to="/" className="feedback-nav-btn">
              Home
            </Link>
          </nav>
        </div>
      </header>

      <main className="feedback-main-bg">
        <section className="feedback-form-card">
          <div className="feedback-form-card__intro">
            <h2>Envie seu feedback</h2>
            <p>
              Compartilhe sugestões, elogios ou pontos de melhoria. Seu feedback é essencial para
              melhorarmos continuamente a experiência no Ibmec Ideas.
            </p>
          </div>

          <form className="feedback-form" onSubmit={handleFeedbackSubmit}>
            <div>
              <label htmlFor="feedbackNome">Seu nome</label>
              <input id="feedbackNome" name="feedbackNome" placeholder="Como devemos te chamar?" />
            </div>
            <div>
              <label htmlFor="feedbackMensagem">Seu feedback</label>
              <textarea
                id="feedbackMensagem"
                name="feedbackMensagem"
                rows="4"
                placeholder="Conte sua experiência ou sugestão"
                required
              />
            </div>
            <button type="submit">Enviar feedback</button>
          </form>
        </section>

        <section className="feedback-card">
          <div className="feedback-list-block">
            <div className="feedback-list">
              {feedbacks.map((text, index) => (
                <div className="feedback-item" key={index}>
                  <div className="feedback-avatar">
                    <img src={professionalImage} alt="Avatar" />
                  </div>
                  <div className="feedback-content">
                    <span className="feedback-stars">★★★★★</span>
                    <span className="feedback-text">{text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="feedback-card-icon">
            <img src={logo} alt="Logo de Fundo" />
          </div>
        </section>
      </main>
    </>
  );
}

export default Feedback;
