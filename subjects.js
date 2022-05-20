'use strict'

// funktion spm går igenom alla subjects
function renderSubjects() {
    container.innerHTML = ''
    // skapa en subject container under #container
    let subjectContainer = document.createElement('div')
    subjectContainer.id = 'subject-container'

    // forEach som går igenom fields arrayen med olika subjects
    FIELDS.forEach(subject => {
        let subjectBox = document.createElement('div')
        subjectBox.classList.add('subject-box')
        subjectBox.innerHTML = `
        ${subject.name}
        `
        subjectContainer.appendChild(subjectBox)
        container.appendChild(subjectContainer)

        subjectBox.addEventListener('click', () => {
            displayProgrammes(subject)
        })
    })
}
renderSubjects()

