import './Header.css'

export const Header = () => {
  const header = document.createElement('header')

  const nav = document.createElement('nav')

  const title = document.createElement('h1')
  title.textContent = 'Guillem Paniagua'

  const ul = document.createElement('ul')

  const links = [
    { text: 'Sobre mí', href: '#about' },
    { text: 'Proyectos', href: '#projects' },
    { text: 'Contacto', href: '#contact' }
  ]

  links.forEach((linkData) => {
    const li = document.createElement('li')

    const a = document.createElement('a')
    a.href = linkData.href
    a.textContent = linkData.text

    li.appendChild(a)
    ul.appendChild(li)
  })

  nav.append(title, ul)
  header.appendChild(nav)

  return header
}
