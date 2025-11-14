import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useBodyClass } from '../hooks/useBodyClass.js';
import logoBackground from '../assets/Logo_BG.svg';
import professionalImage from '../assets/Projetos.png';


const projects = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  title: `Projeto ${index + 1}`,
  image: professionalImage,
}));

function Projects() {
  useBodyClass('page-projects');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="page-projects">
      <aside
        id="projectSidebar"
        className={`sidebar${isSidebarOpen ? ' is-open' : ''}`}
      >
        <div>
          <Link to="/">
            <img src={logoBackground} alt="Logo Ibmec Ideas" className="brand-logo brand-logo--hero" />
          </Link>
        </div>

        <p className="sidebar-title">Meus projetos:</p>

        <nav className="sidebar-nav">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href="#"
              className={`nav-item${index === 0 ? ' active' : ''}`}
              onClick={closeSidebar}
            >
              {project.title}
            </a>
          ))}
          <Link to="/enviar-projeto" className="nav-item new-project" onClick={closeSidebar}>
            + Criar projeto
          </Link>
        </nav>
      </aside>
      <div
        className={`sidebar-overlay${isSidebarOpen ? ' is-visible' : ''}`}
        onClick={closeSidebar}
        aria-hidden="true"
      />

      <main className="content-area">
        <header className="main-header">
          <button
            type="button"
            className="mobile-nav-toggle"
            onClick={toggleSidebar}
            aria-controls="projectSidebar"
            aria-expanded={isSidebarOpen}
          >
            {isSidebarOpen ? 'Fechar menu' : 'Menu'}
          </button>
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
