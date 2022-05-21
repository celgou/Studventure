let cityID; 
let arrayIndex = 0; 
let programArray;

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
  cityID = cities.id;
  programArray = findProgramInCity();
  let firstProgram = findProgramInCity()[0]; // för att inte behöva loopa igenom flera ggr så sidan laddar snabbare
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
  cityNameText.innerHTML = `Welcome to ${cities.name}`
  container.appendChild(cityNameText)

 
  let countryName = document.createElement('div')
  countryName.classList.add('country-text')
  countryName.classList.add('more')
  countryName.innerHTML = `
  <div id="citieInfoBox">
  <div id="aboutCitieName"> About ${cities.name}</div>
  <div class="country-info">${cities.text}<div id="alwaysShow"></div></div>
  </div>
  `
  container.appendChild(countryName)

  // funktion för read more knappen
  let readMoreButtonDiv = document.createElement('div')
  readMoreButtonDiv.classList.add('readMoreButtonDiv')
  readMoreButtonDiv.innerHTML = `
  <button onclick="readMoreButton()" id="moreButton">Read more</button>
  `
  container.appendChild(readMoreButtonDiv)

  let programContainer = document.createElement('div'); //för att slippa ta bort och rendera om allt, kopplat till renderCarousel
  programContainer.innerHTML = `
  <div id="carouselDiv">
  <div id="leftArrow" onClick='leftArrowClick()'><</div>
  <div id="programName">${firstProgram.name}</div>
  <div id="rightArrow" onClick='rightArrowClick()'>></div>
  </div>


  <div id="programInfo">
  <div><b>Level:</b> <span id="level">${LEVELS[firstProgram.level]}</span></div>
  <div><b>Language:</b> <span id="language">${LANGUAGES[firstProgram.language].name}</span></div>
  </div>

  <div id="readStudentComments">Comments from previous students:</div>

  <div id="comments"></div>
  ` 


  
  container.appendChild(programContainer);
  let commentsDiv = document.getElementById('comments');
  commentsDiv.innerHTML = ''; 
  
  COMMENTS_PROGRAMME.forEach(comment => { 
    if (comment.programmeID == firstProgram.id) {
      let commentDiv = document.createElement('div');
      commentDiv.innerHTML = `

      <div>Comment</div>
      <div>${comment.date.year}/${comment.date.month}/${comment.date.day}</div>
      <div>${comment.alias}</div>

      <p>${comment.text}</p>
      `

      commentsDiv.append(commentDiv);
    }

  })

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

  // en funktion för entertainmentplaces
  let entertainment = document.createElement('div')
  entertainment.classList.add('commentsEntertainment')
  getCitiesByEntertainmentPlaces(cities.id).forEach(cities => {
    let entertainmentElement = document.createElement('div')
    entertainmentElement.innerHTML = `<div class="comments-entertainment"><div class="more">${cities.name}</div></div>`
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
    
    <div class="commentsBox" class"more">
    <div class="date"><div class="more">
    ${cities.alias}
    <br>
    (${cities.date.year}
    0${cities.date.month}&nbsp;/
    ${cities.date.day})</div></div>
    
    <br>
    
    <div class="rating"><div class="more">
    Stars:${cities.stars.out}<br>
    Food:${cities.stars.food}<br>
    Accomodation:${cities.stars.accomodation}</div></div>
    
    <br>
    <div class="comments-city"><div class="more">${cities.text}</div></div><br>
    </div>
   
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
    moreText[i].style.display = "grid";
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

function findProgramInCity() {
  return PROGRAMMES.filter(program => {
    if (findCityByUni (program.universityID, cityID)) {
      return program; 
    }
  })
}

function leftArrowClick() {  //tomma för att arrayIndex är global
  if (arrayIndex == 0) {
    arrayIndex = programArray.length-1;
  } else { 
    arrayIndex--; //hittar värdet och gör minust ett
  } 
  changeCity();
}

function rightArrowClick() {
  if (arrayIndex == programArray.length-1) {
    arrayIndex = 0;
  } else { 
    arrayIndex++;
  } 
  changeCity();
}

function changeCity() {
  let program = findProgramInCity()[arrayIndex];
  let programName = document.getElementById('programName');
  programName.textContent = program.name;


  let commentsDiv = document.getElementById('comments');
  commentsDiv.innerHTML = ''; 

  let level = document.getElementById('level');
  let language = document.getElementById('language');

  level.textContent = LEVELS[programArray[arrayIndex].level];
  language.textContent = LANGUAGES[programArray[arrayIndex].language].name;

  COMMENTS_PROGRAMME.forEach(comment => { 
    if (comment.programmeID == program.id) {
      let commentDiv = document.createElement('div');
      commentDiv.innerHTML = `
      <div>Comment</div>
      <div>${comment.date.year}/${comment.date.month}/${comment.date.day}</div>
      <div>${comment.alias}</div>
      <p>${comment.text}</p>
      `

      commentsDiv.append(commentDiv);
    }

  })

}

