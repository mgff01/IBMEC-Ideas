import { Link } from 'react-router-dom';
import { useBodyClass } from '../hooks/useBodyClass.js';
import titleImage from '../assets/Title.svg';
import instagramIcon from '../assets/instagram.svg';
import xIcon from '../assets/x.svg';
import linkedinIcon from '../assets/linkedin.svg';
import projectOneImage from '../assets/Project_1.png';
import projectTwoImage from '../assets/Project_2.png';
import projectThreeImage from '../assets/Project_3.jpg';
import projectOneLogo from '../assets/Logo Project_1.svg';
import projectTwoLogo from '../assets/Logo Project_2.png';
import projectThreeLogo from '../assets/Logo Project_3.png';

const showcaseProjects = [
  {
    title: 'Hotel Continental',
    description:
      'Website do Hotel Continental',
    status: 'Finalizado',
    image: projectOneImage,
    titleImage: projectOneLogo,
  },
  {
    title: 'Agile Team Builder',
    description:
      'Sistema desenvolvido para gerar, estruturar e otimizar equipes ageis conforme os requisitos do projeto.',
    status: 'Finalizado',
    image: projectTwoImage,
    titleImage: projectTwoLogo,
  },
  {
    title: 'Kroma',
    description:
      'Dispositivo detector de cores capaz de executar comandos no computador de acordo com a cor identificada durante a leitura.',
    status: 'Finalizado.',
    image: projectThreeImage,
    titleImage: projectThreeLogo,
  },
];

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

      <section className="projects-gallery">
        <div className="projects-gallery__header">
          <h2>Nossos projetos</h2>
          <p>
            Estamos construindo iniciativas para aproximar empresas, alunos e mentores. Confira o que
            ja saiu do papel e o que esta chegando nas proximas semanas.
          </p>
        </div>

        <div className="projects-gallery__grid">
          {showcaseProjects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-card__media">
                <img
                  src={project.image}
                  alt={`Projeto ${project.title}`}
                  className="project-card__img"
                />
                <div className="project-card__overlay">
                  {project.titleImage ? (
                    <img
                      src={project.titleImage}
                      alt={`Logo do projeto ${project.title}`}
                      className="project-card__title-image"
                    />
                  ) : (
                    <h3>{project.title}</h3>
                  )}
                  <p>{project.description}</p>
                  <p className="project-card__status">{project.status}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

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
