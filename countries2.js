function renderCities (cities) {
  container.innerHTML = ''

  let countryButton = document.createElement('div')
  countryButton.classList.add('back-button')
  countryButton.innerHTML = `&#8249;`
  countryButton.addEventListener('click', () => renderCountries())
  container.appendChild(countryButton)

  // lägger in landets namn
  let countryHeaderText = document.createElement('div')
  countryHeaderText.id = 'country-banner-text'
  countryHeaderText.innerHTML = `${cities.name}`
  container.appendChild(countryHeaderText)

  // lägger in bilden för landet
  let countryHeaderImage = document.createElement('div')
  countryHeaderImage.id = 'country-banner'
  countryHeaderImage.innerHTML = `
  <img src="images/${cities.imagesBig[0]}" class="countryImage"/> `
  container.appendChild(countryHeaderImage)

  // skapa en box för informtion om landet 
  // visar vilket land och information om landet
  let countryName = document.createElement('div')
  countryName.classList.add('info-box-country')
  countryName.innerHTML = ` 
  <div class="country-name"> About ${cities.name} </div>
  <div class="country-info">${cities.text}</div>`
  container.appendChild(countryName)

  let city = document.createElement('div')
  city.classList.add('city')
  getCitiesByCountryId(cities.id).forEach(cities => {
    let cityElement = document.createElement('div')
    cityElement.classList.add('city-element');
    cityElement.innerHTML = `<img src="images/${cities.imagesNormal[1]}" class="cityImage "/>
    <span class="place-name">${cities.name} ${cities.sun}☀️</span>`
    city.append(cityElement)
    cityElement.addEventListener('click', () => displaySubCities(cities))
  })
  container.append(city)
}

function getCitiesByCountryId (inID) {
  return CITIES.filter(city => city.countryID === inID)
}

