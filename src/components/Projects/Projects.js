import './Projects.css'

import portfolio1 from '../../assets/projects/portfolio1.jpg'
import portfolio2 from '../../assets/projects/portfolio2.jpg'
import ktm1 from '../../assets/projects/ktm1.jpg'
import ktm2 from '../../assets/projects/ktm2.jpg'
import iphone1 from '../../assets/projects/iPhone1.jpg'
import iphone2 from '../../assets/projects/iPhone2.jpg'
import pinterest1 from '../../assets/projects/pinterest1.jpg'

const projects = [
  {
    title: 'KTM Responsive',
    description:
      'Landing page responsive inspirada en KTM, desarrollada con HTML y CSS, cuidando la estructura visual, la adaptabilidad y los detalles de maquetación.',
    image: ktm1,
    hoverImage: ktm2,
    github: 'https://github.com/Guillepani/ktm-responsive-demo'
  },
  {
    title: 'Tienda de Filtros',
    description:
      'Proyecto de tienda de iPhones con renderizado dinámico desde JavaScript, filtros combinables y una estructura pensada para trabajar el DOM de forma práctica.',
    image: iphone1,
    hoverImage: iphone2,
    github: 'https://github.com/Guillepani/proyecto-2-filtros'
  },
  {
    title: 'Pinterest Async',
    description:
      'Clon visual de Pinterest con Vite y consumo de API de Unsplash, incluyendo búsqueda dinámica, renderizado responsive y mejoras de experiencia visual.',
    image: pinterest1,
    hoverImage: null,
    github: 'https://github.com/Guillepani/proyecto-3-pinterest-async'
  },
  {
    title: 'Portfolio Personal',
    description:
      'Portfolio desarrollado con Vite, JavaScript modular y un diseño visual moderno para presentar mis proyectos, habilidades y perfil profesional.',
    image: portfolio1,
    hoverImage: portfolio2,
    github: 'https://github.com/Guillepani/proyecto-4-portfolio'
  }
]

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
