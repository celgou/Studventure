let currentCityID 

function displaySubCities (cities) {
  container.innerHTML = ''

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


