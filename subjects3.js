// Filter funktion för getProgrammesByUniversityID [3]

function getProgrammesByUniversityID (inUniversity) {
  return CITIES.filter(university => university.id === inUniversity)
}

// Filter funktion för getCityIdByUniversityID foreach //
function getCityIdByUniversityID (inUniversity) {
  return UNIVERSITIES.filter(university => university.id === inUniversity)
}

// Filter funktion för getCityNamesByCityID   //
function getCityNameByCityID (inCity) {
  return CITIES.filter(city => city.id === inCity)
}

// Filter funktion för getCommentsById kommentarer för städer  [3]
function getCommentsById (inID) {
  return COMMENTS_PROGRAMME.filter(city => city.id === inID)
}

// filter & append & render funktion för alla programmes universitet [3]
function displayUniversities (inUniversity) {
  container.innerHTML = ''

  let countryButton = document.createElement('div')
  countryButton.classList.add('back-button')
  countryButton.innerHTML = `&#8249;`
  countryButton.addEventListener('click', () => history.go(0))
  container.appendChild(countryButton)

  let universityName = document.createElement('h2')
  universityName.classList.add('university-name')
  universityName.innerHTML = `<span class="university-sub-banner-name">${inUniversity.name}</span>`
  container.appendChild(universityName)

  getCityIdByUniversityID(inUniversity.universityID).forEach(cityInfo => {
    getCityNameByCityID(cityInfo.cityID).forEach(cityInfo => {
      let programElement = document.createElement('span')
      programElement.classList.add('program-sub-name-city')
      programElement.style.color = 'black'
      /*programElement.addEventListener('click', () =>
        displayUniversities(inUniversity)
      )*/
      programElement.innerHTML = `

      <div class="city-banner-name">${cityInfo.name}</div> 
      </div>
      <img src="images/${cityInfo.imagesBig[0]}" class="city-banner"/>
          `

      container.appendChild(programElement)

      let programLevel = document.createElement('div')
      programLevel.classList.add('country-text')
      programLevel.innerHTML = `
      <br>
      INFORMATION <br>
      Level:${inUniversity.level} <br>
      Exchange Students:${inUniversity.exchangeStudents} <br>
      Local Students:${inUniversity.localStudents} <br>
      Success Rate:${inUniversity.successRate} <br>
      Entry Grades: ${inUniversity.entryGrades} <br>
      `
      container.appendChild(universityName)
      // Information om programmet.
      // Kommentar om programmet //
      getCommentsById(inUniversity.id).forEach(program => {
        let countryBanner = document.createElement('div')
        countryBanner.classList = 'country-comment'
        countryBanner.innerHTML = ` <br> Comments:
        ${program.text}`
        programLevel.appendChild(countryBanner)
        container.appendChild(programLevel)
      })
    })
  })
}
// Kommentarer om programmet //

// filter & append & render funktion för alla programmes universitet [3]
