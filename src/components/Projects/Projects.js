import './Projects.css'
import { projects } from '../../data/projectsData'

export const Projects = () => {
  const section = document.createElement('section')
  section.className = 'projects'
  section.id = 'projects'

  section.innerHTML = `
    <div class="projects__container">
      <div class="projects__heading">
        <span class="projects__tag">Portfolio</span>
        <h2>Proyectos</h2>
        <p>
          Estos son algunos de los proyectos en los que he trabajado durante mi formación,
          combinando diseño, lógica, maquetación responsive y consumo de APIs.
        </p>
      </div>
      <div class="projects-scroll-zone">
        <div class="projects-track">
          ${projects
            .map(
              (project) => `
                <article class="project-card">
                  <div class="project-card__image-wrapper">
                    <img
                      src="${project.image}"
                      alt="Captura del proyecto ${project.title}"
                      class="project-card__image project-card__image--main"
                    />
                    ${
                      project.hoverImage
                        ? `
                          <img
                            src="${project.hoverImage}"
                            alt="Segunda captura del proyecto ${project.title}"
                            class="project-card__image project-card__image--hover"
                          />
                        `
                        : ''
                    }
                  </div>
                  <div class="project-card__content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-card__buttons">
                      ${
                        project.demo
                          ? `
                            <a href="${project.demo}" target="_blank" rel="noopener noreferrer">
                              Probar demo
                            </a>
                          `
                          : ''
                      }
                      <a href="${project.github}" target="_blank" rel="noopener noreferrer">
                        Ver en GitHub
                      </a>
                    </div>
                  </div>
                </article>
              `
            )
            .join('')}
        </div>
      </div>
    </div>
  `

  return section
}
