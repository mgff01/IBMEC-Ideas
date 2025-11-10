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
              Fale Conosco
            </Link>
          </nav>
        </div>
      </header>

      <main className="feedback-main-bg">
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
