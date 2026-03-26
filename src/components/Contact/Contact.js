import './Contact.css'

export const Contact = () => {
  const section = document.createElement('section')
  section.className = 'contact'
  section.id = 'contact'

  const title = document.createElement('h2')
  title.className = 'section-title'
  title.textContent = 'Contacto'

  const description = document.createElement('p')
  description.textContent =
    '¿Hablamos? Puedes escribirme para colaboraciones, proyectos o cualquier propuesta interesante.'

  const list = document.createElement('ul')
  list.className = 'contact-list'

  // EMAIL
  const emailItem = document.createElement('li')

  const emailStrong = document.createElement('strong')
  emailStrong.textContent = 'Email: '

  const emailLink = document.createElement('a')
  emailLink.href = 'mailto:guillempaniagua@gmail.com'
  emailLink.textContent = 'guillempaniagua@gmail.com'

  emailItem.append(emailStrong, emailLink)

  // LINKEDIN
  const linkedinItem = document.createElement('li')

  const linkedinStrong = document.createElement('strong')
  linkedinStrong.textContent = 'LinkedIn: '

  const linkedinLink = document.createElement('a')
  linkedinLink.href = 'https://www.linkedin.com/in/guillem-paniagua-2ab458358/'
  linkedinLink.target = '_blank'
  linkedinLink.textContent = 'linkedin.com/in/guillem-paniagua'

  linkedinItem.append(linkedinStrong, linkedinLink)

  // GITHUB
  const githubItem = document.createElement('li')

  const githubStrong = document.createElement('strong')
  githubStrong.textContent = 'GitHub: '

  const githubLink = document.createElement('a')
  githubLink.href = 'https://github.com/Guillepani'
  githubLink.target = '_blank'
  githubLink.textContent = 'github.com/Guillepani'

  githubItem.append(githubStrong, githubLink)

  // MONTAJE
  list.append(emailItem, linkedinItem, githubItem)
  section.append(title, description, list)

  return section
}
