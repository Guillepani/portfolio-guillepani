import './style.css'
import { Header } from './components/Header/Header.js'
import { Hero } from './components/Hero/Hero.js'
import { About } from './components/About/About.js'
import { Skills } from './components/Skills/Skills.js'
import { Projects } from './components/Projects/Projects.js'
import { Contact } from './components/Contact/Contact.js'
import { Footer } from './components/Footer/Footer.js'
import { Experience } from './components/Experience/Experience.js'

const app = document.querySelector('#app')

app.append(
  Header(),
  Hero(),
  About(),
  Experience(),
  Skills(),
  Projects(),
  Contact(),
  Footer()
)

// SCROLL PROYECTOS
const projectsZone = document.querySelector('.projects-scroll-zone')

if (projectsZone) {
  let animationFrameId = null
  let currentSpeed = 0

  const maxSpeed = 6
  const deadZone = 0.2

  const updateScroll = () => {
    projectsZone.scrollLeft += currentSpeed

    if (Math.abs(currentSpeed) > 0.1) {
      animationFrameId = requestAnimationFrame(updateScroll)
    } else {
      animationFrameId = null
    }
  }

  projectsZone.addEventListener('mousemove', (event) => {
    const rect = projectsZone.getBoundingClientRect()
    const mouseX = event.clientX - rect.left
    const percent = mouseX / rect.width
    const centered = (percent - 0.5) * 2

    if (Math.abs(centered) < deadZone) {
      currentSpeed = 0
    } else {
      currentSpeed = centered * maxSpeed
    }

    if (!animationFrameId) {
      animationFrameId = requestAnimationFrame(updateScroll)
    }
  })

  projectsZone.addEventListener('mouseleave', () => {
    currentSpeed = 0
  })
}

// TABS EXPERIENCE
const experienceTabs = document.querySelectorAll('.experience-tab')
const experiencePanels = document.querySelectorAll('.experience-panel')

experienceTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab

    experienceTabs.forEach((item) => item.classList.remove('active'))
    experiencePanels.forEach((panel) => panel.classList.remove('active'))

    tab.classList.add('active')
    document.getElementById(target).classList.add('active')
  })
})
