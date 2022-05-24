
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

// // funktion för infomrationen om staden
// function getCityInformation (inCity) {
//   return CITIES.filter(city => city.id === inCity)
// }

function getCityEntertainmentPlaces (inCity) {
  return ENTERTAINMENT_PLACES.filter(entplaces => entplaces.cityID === inCity)
}

function getCityComments (inCity) {
  return COMMENTS_CITY.filter(comments => comments.cityID === inCity)
}

function getCityRating (inCity) {
  return COMMENTS_CITY.filter(comments => comments.cityID === inCity)
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
      <div id="programmeInfoText">PROGRAMME INFORMATION</div> 
      <br>
      <div id="programmeInfoContainer">
      <div id="level"><b>Level:</b> ${inUniversity.level}</div>
      <div id="exchangeStudents"><b>Exchange Students:</b> ${inUniversity.exchangeStudents}</div> 
      <div id="localStudents"><b>Local Students:</b> ${inUniversity.localStudents}</div> 
      <div id="successRate"><b>Success Rate:</b> ${inUniversity.successRate}</div> 
      <div id="entryGardes"><b>Entry Grades:</b> ${inUniversity.entryGrades}</div> 
      </div>
      `
      container.appendChild(universityName)
      // Information om programmet.
      // Kommentar om programmet //
      getCommentsById(inUniversity.id).forEach(program => {
        let countryBanner = document.createElement('div')
        countryBanner.classList = 'country-comment'
        countryBanner.innerHTML = `<br> <b>Comments:</b> 
        <br>
        <br>
        ${program.text}`
        programLevel.appendChild(countryBanner)
        container.appendChild(programLevel)
      })
    })
  })

  // få fram information om staden, gå igenom univeritet först för att se vilken stad som ska visas
  getCityIdByUniversityID(inUniversity.universityID).forEach(cityInfo => {
    getCityNameByCityID(cityInfo.cityID).forEach(cityInfo => {
      let cityInformation = document.createElement('div')
      cityInformation.classList.add('programmeCityInformation')
      cityInformation.innerHTML = ` 
      <div class="cityInfoContainer">
      <div class="aboutCity">About ${cityInfo.name}</div><div id="alwaysShow"></div>
      <div class="infoCityText"><span id="more">${cityInfo.text}</span></div>
      </div>
      `
      container.appendChild(cityInformation)
    })

  let readMoreButtonContainer = document.createElement('div')
  readMoreButtonContainer.classList.add('readMoreButtonContainer')
  readMoreButtonContainer.innerHTML = `
  <button onclick="readMoreButton()" id="moreButton">Read more</button>
  `
  container.appendChild(readMoreButtonContainer)
  })

  // getCityIdByUniversityID(inUniversity.universityID).forEach(cityInfo => {
  //   getCityNameByCityID(cityInfo.cityID).forEach(cityInfo => {
  //     getCityEntertainmentPlaces(entplace => {
  //       let cityEntertainment = document.createElement('div')
  //       cityEntertainment.classList.add('cityEntertainmentPlaces')
  //       cityEntertainment.innerHTML = ` 
  //       <div class="entertainmentPlace">${entplace.name}</div>
  //       `
  //     })
  //   })
  // })

}

//read more button
function readMoreButton() {
  let alwaysShow = document.getElementById("alwaysShow")
  let moreText = document.getElementById("more")
  let buttonText = document.getElementById("moreButton")

  if (alwaysShow.style.display === "none") {
    alwaysShow.style.display = "inline"
    buttonText.innerHTML = "Read more"
    moreText.style.display = "none"
  } else {
    alwaysShow.style.display = "none"
    buttonText.innerHTML = "Read less"
    moreText.style.display = "inline"
  }
}

// Kommentarer om programmet //

// filter & append & render funktion för alla programmes universitet [3]

