import { Link } from 'react-router-dom';
import { useBodyClass } from '../hooks/useBodyClass.js';

function About() {
  useBodyClass('page-about');

  return (
    <>
      <header className="feedback-header">
        <div className="feedback-header-content">
          <div>
            <Link to="/">
              <img src="/assets/Logo.svg" alt="Logo Ibmec Ideas" style={{ width: 120, height: 120 }} />
            </Link>
          </div>
          <nav className="feedback-nav">
            <Link to="/feedback" className="feedback-nav-btn">
              Dê seu feedback
            </Link>
            <Link to="/" className="feedback-nav-btn">
              Fale Conosco
            </Link>
          </nav>
        </div>
      </header>

      <main className="about-main-bg">
        <section className="about-card">
          <div className="about-card-content">
            <h2 className="about-title">Sobre Nós</h2>
            <p>
              No Ibmec, acreditamos que a tecnologia é uma aliada essencial no aprendizado e no
              desenvolvimento acadêmico. Pensando nisso, criamos uma plataforma exclusiva para nossa
              comunidade acadêmica, que permite armazenar, organizar e compartilhar materiais e
              projetos de forma simples, prática e segura.
            </p>
            <p>
              Nosso objetivo é oferecer aos alunos, professores, parceiros e colaboradores um
              ambiente digital que facilite a colaboração, incentive a produtividade e fortaleça a
              troca de conhecimento.
            </p>
            <p>
              Com design intuitivo e funcionalidades pensadas para o dia a dia acadêmico, a
              plataforma é mais do que um repositório de arquivos: é um espaço para conectar pessoas,
              ideias e projetos, reforçando o compromisso do Ibmec com a inovação e a excelência
              educacional.
            </p>
          </div>
          <div className="about-card-image">
            <img
              src="/assets/professional.png"
              alt="Profissional utilizando a plataforma"
              className="about-img-rounded"
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
