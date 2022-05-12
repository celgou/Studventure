function renderCities (cities) {
  container.innerHTML = ''

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
