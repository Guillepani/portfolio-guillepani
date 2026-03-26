import './Skills.css'

export const Skills = () => {
  const section = document.createElement('section')
  section.className = 'skills'
  section.id = 'skills'

  const title = document.createElement('h2')
  title.className = 'section-title'
  title.textContent = 'Skills'

  const list = document.createElement('ul')
  list.className = 'skills-list'

  const skills = [
    {
      name: 'HTML',
      class: 'html',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    {
      name: 'CSS',
      class: 'css',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    {
      name: 'JavaScript',
      class: 'js',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      name: 'Git',
      class: 'git',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    {
      name: 'React',
      class: 'react',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      name: 'Node.js',
      class: 'node',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    }
  ]

  skills.forEach((skill) => {
    const li = document.createElement('li')
    li.className = `skill-card ${skill.class}`

    const img = document.createElement('img')
    img.src = skill.img
    img.alt = skill.name

    const span = document.createElement('span')
    span.textContent = skill.name

    li.append(img, span)
    list.appendChild(li)
  })

  section.append(title, list)

  return section
}
