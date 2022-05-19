
function getCitiesByEntertainmentPlaces (inID) {
  return ENTERTAINMENT_PLACES.filter(entplaces => entplaces.cityID === inID)
}

function getCitiesByCommentsCity (inID) {
  return COMMENTS_CITY.filter(comments => comments.cityID === inID)
}

function getCitiesByRating (inID) {
  return COMMENTS_CITY.filter(comments => comments.cityID === inID)
}


function displaySubCities (cities) {
  
  container.innerHTML = ''

  // få fram bilden till staden
  let countryBanner = document.createElement('div')
  countryBanner.id = 'country-banner'
  countryBanner.innerHTML = `
  <img src="images/${cities.imagesBig[0]}" class="CountryImage"/> `
  container.appendChild(countryBanner)

  // stadens namn 
  let cityNameText = document.createElement('div')
  cityNameText.id = 'city-banner-text'
  cityNameText.innerHTML = `${cities.name}`
  container.appendChild(cityNameText)
 
  let countryName = document.createElement('div')
  countryName.classList.add('country-text')
  countryName.classList.add('more')
  countryName.innerHTML = `
  About ${cities.name}
  <div class="country-info">${cities.text}<span id="alwaysShow"></span></div>`
  container.appendChild(countryName)

  // funktion för read more knappen
  let readMoreButtonDiv = document.createElement('div')
  readMoreButtonDiv.classList.add('readMoreButtonDiv')
  readMoreButtonDiv.innerHTML = `
  <button onclick="readMoreButton()" id="moreButton">Read more</button>
  `
  container.appendChild(readMoreButtonDiv)

  
  /*
  // en funktion för rating (kolla denna nested funktion??)
  let rating = document.createElement('div')
  rating.classList.add('commentsrating')
  getCitiesByRating(cities.date).forEach(cities => {
    let ratingElement = document.createElement('div')
    ratingElement.innerHTML = `${cities.year}`
    rating.append(ratingElement)
    ratingElement.addEventListener('click', () => displaySubCities(cities))
    countryName.append(rating)
  })
*/

  // en funktion för kommentarer
  let entertainment = document.createElement('div')
  entertainment.classList.add('commentsEntertainment')
  getCitiesByEntertainmentPlaces(cities.id).forEach(cities => {
    let entertainmentElement = document.createElement('div')
    entertainmentElement.innerHTML = `<div class="comments-entertainment"><span class="more">${cities.name}</span></div>`
    entertainment.append(entertainmentElement)
    entertainmentElement.addEventListener('click', () =>
      displaySubCities(cities)
    )
    countryName.append(entertainment)
  })

  // en funktion för kommentarer
  let commentsCity = document.createElement('div')
  commentsCity.classList.add('commentsCity')
  commentsCity.classList.add('more')
  getCitiesByCommentsCity(cities.id).forEach(cities => {
    let commentElement = document.createElement('div')
    commentElement.innerHTML = `
    
    <div class="date"><span class="more">
    ${cities.alias}
    <br>
    (${cities.date.year}
    0${cities.date.month}&nbsp;/
    ${cities.date.day})</span></div>
    
    <br>
    
    <div class="rating"><span class="more">
    Stars:${cities.stars.out}<br>
    Food:${cities.stars.food}<br>
    Accomodation:${cities.stars.accomodation}</span></div>
    
    <br>
    <div class="comments-city"><span class="more">${cities.text}</span></div><br>
   

   
    `
    commentsCity.append(commentElement)
    countryName.append(commentsCity)
  })

  // H1 COUNTRIES TILL CITY klar
  let h1 = document.getElementsByTagName('h1')[0]
  h1.innerHTML = 'Cities'
}

// funktion till read more och less knappen
function readMoreButton() {
  let alwaysShow = document.getElementById("alwaysShow")
  let moreText = document.getElementsByClassName("more")
  let buttonText = document.getElementById("moreButton")



  // for (let i = 0; i < moreText.length; i++) {
  // moreText[i].style.display = "none";
  // }

  if (alwaysShow.style.display === "none") {
    alwaysShow.style.display = "inline"
    buttonText.innerHTML = "Read more"
    // foor loop för att gå igenom moreText som är en array
    for (let i = 0; i < moreText.length; i++) {
    moreText[i].style.display = "none";
    }
  } else {
    alwaysShow.style.display = "none"
    buttonText.innerHTML = "Read less"
    // foor loop för att gå igenom moreText som är en array
    for (let i = 0; i < moreText.length; i++) {
    moreText[i].style.display = "inline";
    }
  }

  let countryButton = document.createElement('div')
  countryButton.classList.add('back-button')
  countryButton.innerHTML = `&#8249;`
  countryButton.addEventListener('click', () => renderCountries())
  container.appendChild(countryButton)
  currentCityID = cities.id; 
  let h1 = document.getElementsByTagName('h1')[0]
  h1.innerHTML = 'Cities'

  // skapa en box för informtion om stade
  // visar vilken stad och information om staden
  let cityName = document.createElement('div')
  cityName.classList.add('info-box')
  cityName.innerHTML = ` 
  <div class="country-name"> About ${cities.name} </div>
  <div class="country-info">${cities.text}</div>`
  container.appendChild(cityName)

}

let program = PROGRAMMES;

function renderProgram (PROG) {
  let programmesElement = document.getElementById("result");
  console.log(PROG);
  for (let program of PROG) {
      let programElement = document.createElement('div');
      programElement.innerHTML = `${program.name}`;
      programmesElement.appendChild(programElement);
  }
}

let input = document.getElementById("programSearch");

function searchProgramBox() {
  let input = document.getElementById("programSearch");
  
    return input.value.toLowerCase();
}

input.addEventListener("keyup", programSearch);


function programSearch() {
    let programsArray = []
    
    for (let i = 0; i < PROGRAMMES.length; i++){
        if ("" == searchProgramBox()) {
            document.getElementById("result").innerHTML = ""
        } else if (PROGRAMMES[i].name.toLowerCase().includes(searchProgramBox()) && findCityByUni(PROGRAMMES[i].universityID, currentCityID)) {
            document.getElementById("result").innerHTML = ""
            programsArray.push(PROGRAMMES[i]);
        }
    }

    renderProgram(programsArray); 
}

function findCityByUni(uniID, cityID) {
  for (let uni of UNIVERSITIES) {
    if (uni.id == uniID && uni.cityID == cityID) { //bara få programmen som finns i staden, kolla igenom alla uni och hitta programmet i det, har redan city id) 
      return true; 

    }
  }


}


