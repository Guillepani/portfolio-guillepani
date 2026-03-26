import './Experience.css'

export const Experience = () => {
  const section = document.createElement('section')
  section.className = 'experience'
  section.id = 'experience'

  // HEADER (tabs)
  const header = document.createElement('div')
  header.className = 'experience-header'

  const tabExp = document.createElement('button')
  tabExp.className = 'experience-tab active'
  tabExp.dataset.tab = 'exp'
  tabExp.textContent = 'Experiencia'

  const tabEdu = document.createElement('button')
  tabEdu.className = 'experience-tab'
  tabEdu.dataset.tab = 'edu'
  tabEdu.textContent = 'Formación'

  header.append(tabExp, tabEdu)

  // CONTENIDO
  const content = document.createElement('div')
  content.className = 'experience-content'

  // PANEL EXPERIENCIA
  const panelExp = document.createElement('div')
  panelExp.className = 'experience-panel active'
  panelExp.id = 'exp'

  const introExp = document.createElement('p')
  introExp.className = 'experience-intro'
  introExp.textContent =
    'Mi camino profesional ha sido una evolución constante hasta llegar al punto en el que decidí apostar de verdad por la tecnología.'

  panelExp.appendChild(introExp)

  const expItems = [
    {
      title: 'Primeras etapas laborales',
      text: `Comencé trabajando como <strong>operario en distintas fábricas</strong>, una etapa en la que desarrollé disciplina, responsabilidad y capacidad para adaptarme a entornos exigentes.`
    },
    {
      title: 'Reinvención profesional',
      text: `Con el tiempo sentí la necesidad de <strong>dar un giro a mi trayectoria</strong>. La tecnología siempre me había llamado la atención, así que decidí orientar mi camino hacia un sector que realmente me motivaba.`
    },
    {
      title: 'Etapa de transición',
      text: `Para poder compaginar trabajo y estudio, obtuve la <strong>TIP de Vigilante de Seguridad</strong>, una decisión estratégica que me permitió mantener estabilidad laboral mientras avanzaba en mi formación.`
    },
    {
      title: 'Objetivo actual',
      text: `Hoy sigo construyendo ese cambio: trabajo, estudio programación y desarrollo proyectos con la meta de dedicarme profesionalmente al <strong>desarrollo web y de software</strong>.`
    }
  ]

  expItems.forEach((item) => {
    const article = document.createElement('article')
    article.className = 'experience-item'

    const h3 = document.createElement('h3')
    h3.textContent = item.title

    const p = document.createElement('p')
    p.innerHTML = item.text

    article.append(h3, p)
    panelExp.appendChild(article)
  })

  // PANEL EDUCACIÓN
  const panelEdu = document.createElement('div')
  panelEdu.className = 'experience-panel'
  panelEdu.id = 'edu'

  const introEdu = document.createElement('p')
  introEdu.className = 'experience-intro'
  introEdu.textContent =
    'Mi formación ha pasado por distintas etapas, pero todas han aportado algo a la disciplina y mentalidad con la que afronto hoy mi camino en tecnología.'

  panelEdu.appendChild(introEdu)

  const eduItems = [
    {
      title: 'RockTheCode Full Stack Web',
      text: `Actualmente cursando el programa <strong>Full Stack Web</strong> de <strong>ThePower Education</strong>, enfocado en tecnologías web modernas y creación de proyectos reales.`
    },
    {
      title: 'Grado Superior en Actividades Físico-Deportivas',
      text: `Una etapa que reforzó hábitos como la constancia, la planificación y la disciplina. Y ya no solo eso, es que no puedo evitar que el deporte me acompañe durante mi día a día.`
    },
    {
      title: 'Grado Medio en Actividades Físicas en el Medio Natural',
      text: `Formación orientada a la adaptación, la organización y el trabajo en diferentes contextos.`
    },
    {
      title: 'FP de Informática',
      text: `Mi primer contacto académico con el mundo tecnológico, que con el tiempo ha vuelto a convertirse en el eje principal de mi desarrollo profesional.`
    }
  ]

  eduItems.forEach((item) => {
    const article = document.createElement('article')
    article.className = 'experience-item'

    const h3 = document.createElement('h3')
    h3.textContent = item.title

    const p = document.createElement('p')
    p.innerHTML = item.text

    article.append(h3, p)
    panelEdu.appendChild(article)
  })

  content.append(panelExp, panelEdu)
  section.append(header, content)

  return section
}
