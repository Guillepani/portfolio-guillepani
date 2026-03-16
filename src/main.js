import './style.css'
import { Header } from './components/Header/Header.js'
import { Hero } from './components/Hero/Hero.js'
import { About } from './components/About/About.js'
import { Skills } from './components/Skills/Skills.js'
import { Projects } from './components/Projects/Projects.js'
import { Contact } from './components/Contact/Contact.js'
import { Footer } from './components/Footer/Footer.js'

const app = document.querySelector('#app')

app.innerHTML = `
  ${Header()}
  ${Hero()}
  ${About()}
  ${Skills()}
  ${Projects()}
  ${Contact()}
  ${Footer()}
`
