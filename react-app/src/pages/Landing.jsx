import { Link } from 'react-router-dom';
import { useBodyClass } from '../hooks/useBodyClass.js';
import titleImage from '../assets/Title.svg';
import instagramIcon from '../assets/instagram.svg';
import xIcon from '../assets/x.svg';
import linkedinIcon from '../assets/linkedin.svg';

function Landing() {
  useBodyClass('page-index');

  return (
    <>
      <main className="hero-wrap">
        <section className="hero-card">
          <img
            src={titleImage}
            alt="Ibmec Ideas"
            className="hero-logo brand-logo brand-logo--hero"
          />

          <div className="hero-cta">
            <Link to="/login" className="pill btn-primary">
              Log-in
            </Link>
            <p className="small">
              Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
            </p>
          </div>

          <div className="hero-actions">
            <Link to="/sobre" className="pill">
              Sobre nós
            </Link>
            <Link to="/feedback" className="pill">
              Dê seu feedback
            </Link>
          </div>
        </section>
      </main>

      <footer className="footer-card">
        <div className="contact-list">
          <div className="contact-item">
            <span className="icon">✉️</span> internacional@ibmec.edu.br
          </div>
          <div className="contact-item">
            <span className="icon">💬</span> +55 (21) 99279-9990
          </div>
          <div className="contact-item">
            <span className="icon">📞</span> 0800 771 8020
          </div>
        </div>

        <div className="socials">
          <a href="https://instagram.com" className="social" aria-label="Instagram">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://x.com" className="social" aria-label="X">
            <img src={xIcon} alt="X" />
          </a>
          <a href="https://linkedin.com" className="social" aria-label="LinkedIn">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Landing;
