import { Link } from 'react-router-dom';
import { useBodyClass } from '../hooks/useBodyClass.js';

const projects = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  title: `Projeto ${index + 1}`,
  image: '/assets/professional.png',
}));

function Projects() {
  useBodyClass('page-projects');

  return (
    <div className="page-projects">
      <aside className="sidebar">
        <div>
          <Link to="/">
            <img src="/assets/Logo_BG.svg" alt="Logo Ibmec Ideas" className="brand-logo brand-logo--hero" />
          </Link>
        </div>

        <p className="sidebar-title">Meus projetos:</p>

        <nav className="sidebar-nav">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href="#"
              className={`nav-item${index === 0 ? ' active' : ''}`}
            >
              {project.title}
            </a>
          ))}
          <a href="#" className="nav-item new-project">
            + Criar projeto
          </a>
        </nav>
      </aside>

      <main className="content-area">
        <header className="main-header">
          <div className="header-title-box">
            <h2>Projetos Recentes:</h2>
          </div>
        </header>

        <section className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <h3>{project.title}</h3>
              <div
                className="project-image"
                style={{ backgroundImage: `url(${project.image})` }}
              />
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Projects;
