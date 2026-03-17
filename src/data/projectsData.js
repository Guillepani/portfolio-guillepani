import portfolio1 from '../assets/projects/portfolio1.jpg'
import portfolio2 from '../assets/projects/portfolio2.jpg'
import ktm1 from '../assets/projects/ktm1.jpg'
import ktm2 from '../assets/projects/ktm2.jpg'
import iphone1 from '../assets/projects/iPhone1.jpg'
import iphone2 from '../assets/projects/iPhone2.jpg'
import pinterest1 from '../assets/projects/pinterest1.jpg'

export const projects = [
  {
    title: 'KTM Responsive',
    description:
      'Landing page responsive inspirada en KTM, desarrollada con HTML y CSS, cuidando la estructura visual, la adaptabilidad y los detalles de maquetación.',
    image: ktm1,
    hoverImage: ktm2,
    github: 'https://github.com/Guillepani/ktm-responsive-demo',
    demo: 'https://ktmresponsive.netlify.app/'
  },
  {
    title: 'Tienda de Filtros',
    description:
      'Proyecto de tienda de iPhones con renderizado dinámico desde JavaScript, filtros combinables y una estructura pensada para trabajar el DOM de forma práctica.',
    image: iphone1,
    hoverImage: iphone2,
    github: 'https://github.com/Guillepani/proyecto-2-filtros',
    demo: 'https://iphonemodal.netlify.app/'
  },
  {
    title: 'Pinterest Async',
    description:
      'Clon visual de Pinterest con Vite y consumo de API de Unsplash, incluyendo búsqueda dinámica, renderizado responsive y mejoras de experiencia visual.',
    image: pinterest1,
    hoverImage: null,
    github: 'https://github.com/Guillepani/proyecto-3-pinterest-async',
    demo: 'https://pinterestreplik.netlify.app/'
  },
  {
    title: 'Portfolio Personal',
    description:
      'Portfolio desarrollado con Vite, JavaScript modular y un diseño visual moderno para presentar mis proyectos, habilidades y perfil profesional.',
    image: portfolio1,
    hoverImage: portfolio2,
    github: 'https://github.com/Guillepani/proyecto-4-portfolio',
    demo: 'https://guillepani.netlify.app/'
  }
]
