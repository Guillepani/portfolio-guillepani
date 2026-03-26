export const ButtonLink = (text, href) => {
  const link = document.createElement('a')

  link.className = 'button-link'
  link.href = href
  link.target = '_blank'
  link.rel = 'noopener noreferrer'
  link.textContent = text

  return link
}
