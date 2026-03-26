import './Footer.css'

export const Footer = () => {
  const footer = document.createElement('footer')
  footer.className = 'footer'

  const text = document.createElement('p')
  text.textContent = '© 2026 Guillem Paniagua'

  footer.appendChild(text)

  return footer
}