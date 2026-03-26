import './Hero.css'

export const Hero = () => {
  const section = document.createElement('section')
  section.className = 'hero'
  section.id = 'hero'

  const content = document.createElement('div')
  content.className = 'hero-content'

  const code = document.createElement('p')
  code.className = 'hero-code'
  code.textContent =
    'console.log("Construyendo mi futuro en el desarrollo web");'

  const title = document.createElement('h2')
  title.innerHTML = `
    Desarrollo interfaces modernas y convierto ideas en
    <span>proyectos reales</span>
  `

  const text = document.createElement('p')
  text.className = 'hero-text'
  text.textContent =
    'Actualmente compagino trabajo y formación mientras construyo mi camino como desarrollador web, con foco en diseño, funcionalidad y evolución constante.'

  const buttons = document.createElement('div')
  buttons.className = 'hero-buttons'

  const btnProjects = document.createElement('a')
  btnProjects.href = '#projects'
  btnProjects.className = 'hero-btn primary'
  btnProjects.textContent = 'Ver proyectos'

  const btnContact = document.createElement('a')
  btnContact.href = '#contact'
  btnContact.className = 'hero-btn secondary'
  btnContact.textContent = 'Contactar'

  buttons.append(btnProjects, btnContact)

  content.append(code, title, text, buttons)
  section.appendChild(content)

  return section
}
