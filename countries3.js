function displaySubCities (cities) {
  container.innerHTML = ''

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



