import './About.css'

export const About = () => {
  const section = document.createElement('section')
  section.className = 'about'
  section.id = 'about'

  const content = document.createElement('div')
  content.className = 'about-content'

  // TEXTO
  const text = document.createElement('div')
  text.className = 'about-text'

  const title = document.createElement('h2')
  title.className = 'section-title'
  title.textContent = 'Sobre mí'

  const p1 = document.createElement('p')
  p1.innerHTML = `
    Soy Guillem, pero puedes llamarme Guille. Estoy en constante <strong>aprendizaje</strong> y me
    apasiona el <strong>desarrollo web</strong>, ya sea <strong>frontend</strong> o <strong>backend</strong>.
    ¿Lo mejor de esto? Que nunca dejo de aprender y cualquier desafío o reto es una
    oportunidad perfecta para <strong>crecer</strong>.
  `

  const p2 = document.createElement('p')
  p2.innerHTML = `
    Más abajo encontrarás algunos de los <strong>proyectos</strong> en los que he trabajado,
    y si quieres saber más sobre mí, ¡no dudes en <strong>contactarme</strong>!
  `

  text.append(title, p1, p2)

  // FOTO
  const photo = document.createElement('div')
  photo.className = 'about-photo'

  const img = document.createElement('img')
  img.src = '/guillepani.jpg'
  img.alt = 'Foto de Guillem'

  photo.appendChild(img)

  // MONTAJE
  content.append(text, photo)
  section.appendChild(content)

  return section
}