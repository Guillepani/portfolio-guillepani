export const SectionHeading = (titleText, descriptionText, tagText) => {
  const heading = document.createElement('div')
  heading.className = 'section-heading'

  if (tagText) {
    const tag = document.createElement('span')
    tag.className = 'projects__tag'
    tag.textContent = tagText
    heading.appendChild(tag)
  }

  const title = document.createElement('h2')
  title.className = 'section-title'
  title.textContent = titleText

  const description = document.createElement('p')
  description.className = 'section-description'
  description.textContent = descriptionText

  heading.append(title, description)

  return heading
}
