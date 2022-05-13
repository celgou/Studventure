// skapa en box för informtion om landet 
// visar vilket land och information om landet
let countryName = document.createElement('div')
countryName.classList.add('info-box')
countryName.innerHTML = ` 
<div class="country-name"> About ${cities.name} </div>
<div class="country-info"><br>${cities.text}</div>`
container.appendChild(countryName)

function renderCities (cities) {
  container.innerHTML = ''

  let countryButton = document.createElement('div')
countryButton.classList.add('back-button')
countryButton.innerHTML = `&#8249;`
countryButton.addEventListener('click', () => renderCountries())
container.appendChild(countryButton)

  let city = document.createElement('div')
  city.classList.add('city')
  getCitiesByCountryId(cities.id).forEach(cities => {
    let cityElement = document.createElement('div')
    cityElement.innerHTML = `<img src="images/${cities.imagesNormal[1]}" class="cityImage"/>
    <span class="place-name">${cities.name} ${cities.sun}☀️</span>`
    city.append(cityElement)
    cityElement.addEventListener('click', () => displaySubCities(cities))
  })
  container.append(city)
}

function getCitiesByCountryId (inID) {
  return CITIES.filter(city => city.countryID === inID)
}

 
