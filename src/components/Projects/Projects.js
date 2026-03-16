import './Projects.css'

export const Projects = () => {
  return `
    <section class="projects">
      <h2>Proyectos</h2>

      <div class="projects-grid">

        <article class="project-card">
          <h3>Proyecto 1 - KTM Responsive</h3>
          <p>Mi primera landing, creada con HTML y CSS.</p>
        </article>

        <article class="project-card">
          <h3>Proyecto 2 - Tienda de iPhone</h3>
          <p>Tienda ficticia de iPhone con filtros de búsqueda, creada con HTML, CSS y JavaScript.</p>
        </article>

        <article class="project-card">
          <h3>Proyecto 3 - Réplica de Pinterest</h3>
          <p>Versión simplificada de Pinterest que consume una API para mostrar imágenes, creada con HTML, CSS y JavaScript.</p>
        </article>

      </div>
    </section>
  `
}
