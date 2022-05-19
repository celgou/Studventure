// filter & append & render funktion för FIELDS [1]
function renderSubjects () {
  container.innerHTML = ''
  let fieldContainer = document.createElement('div')
  fieldContainer.id = 'subject-container'
  FIELDS.forEach(subject => {
    let fieldBox = document.createElement('div')
    fieldBox.classList.add('subject-box')
    fieldBox.innerHTML = `${subject.name}`
    fieldContainer.appendChild(fieldBox)
    container.appendChild(fieldContainer)

    fieldBox.addEventListener('click', () => {
      displayProgrammes(subject)
    })
  })
}
renderSubjects()
// filter & append & render funktion för FIELDS [1]
