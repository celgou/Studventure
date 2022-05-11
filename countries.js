'use strict'

function renderCountries () {
  container.innerHTML = ''
  // Skapar en country-container under #container //
  let countryContainer = document.createElement('div')
  countryContainer.id = 'container'

  /* Väljer COUNTRIES från databasen och använder metoden forEach() 
    som exekvererar tillhandhållen funktion en fång för varje array element 
    */
  COUNTRIES.forEach(country => {
    // genom att använda den döpta parametern (country)
    // sedan lägger vi in country.flag med hjälp av <img tag
    // och slutligen en span med class som verifierar visa är true eller false
    // och väljer sedan från css antingen green-visa-cirle eller red-visa-circle

    // skapar en countryBox div
    let countryBox = document.createElement('div')
    // Döper den till country-box
    countryBox.classList.add('country-box')
    // sedan använder vi countryBox.innerHTML för att lägga saker i diven
    //.name från databasen för att få ut namnet
    //.flag för att få flaggan
    //. visa med ? : om true eller false väljer den ut detta och selectar green eller red visa circle.
    countryBox.innerHTML = `${country.name}`
    // Nu appendar vi countryBox till countryContainer
    // Därefter apendar vi countryContainer till container som den heter nu i html
    countryContainer.appendChild(countryBox)
    container.appendChild(countryContainer)

    countryBox.addEventListener('click', () => displayCities(country))
  })
}
renderCountries()
