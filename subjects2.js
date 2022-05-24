// filter funktion för getProgrammesBySubjectID  [2] //
function getProgrammesBySubjectID (inID) {
  return PROGRAMMES.filter(prog => prog.subjectID === inID)
}

// kopplad till getCityIdByUniversityID foreach //
function getCityIdByUniversityID (inUniversity) {
  return UNIVERSITIES.filter(university => university.id === inUniversity)
}

// kopplad till getCityNameByCityID foreach //
function getCityNameByCityID (inCity) {
  return CITIES.filter(city => city.countryID === inCity)
}

// kopplad till getCountryByCityID foreach //
function getCountryByCityID (inCity) {
  return COUNTRIES.filter(city => city.id === inCity)
}

// filter & append & render funktion för alla program under FIELDS [2]
function displayProgrammes (inProgram) {
  container.innerHTML = ''

  let countryButton = document.createElement('div')
  countryButton.classList.add('back-button')
  countryButton.innerHTML = `&#8249;`
  countryButton.addEventListener('click', () => history.go(0))
  container.appendChild(countryButton)

  let subjectTitle = document.createElement('div')
  subjectTitle.classList.add('subject-title')
  subjectTitle.innerHTML = `${inProgram.name}`
  container.appendChild(subjectTitle)

  // Vi hämtar saker från Fields subjects 1 //
  let programmes = document.createElement('div')
  ProgramName = document.createElement('div')
  
  programmes.appendChild(ProgramName)
  programmes.classList.add('programmes')
  getProgrammesBySubjectID(inProgram.id).forEach(program => {
    let programElement = document.createElement('div')
    programElement.classList.add('program-sub-name')
    programElement.addEventListener('click', () => displayUniversities(program))
    programElement.innerHTML = `${program.name}
    `

    programmes.appendChild(programElement)
    container.appendChild(programmes)

    getCityIdByUniversityID(program.universityID).forEach(cityInfo => {
      getCityNameByCityID(cityInfo.cityID).forEach(cityInfo => {
        getCountryByCityID(cityInfo.countryID).forEach(countryInfo => {
          let programCityFlag = document.createElement('div')
          programCityFlag.classList.add('program-sub-name-city')
          programCityFlag.style.color = 'black'
          programCityFlag.addEventListener('click', () =>
            displayUniversities(program)
          )
          programCityFlag.innerHTML = `${cityInfo.name}  <img src="images/${countryInfo.flag}" class="cityImage"/>
            `

          programElement.appendChild(programCityFlag)
        })
      })
    })
  })
}

// Filter & append & render funktion för alla program under FIELDS [2]
