

// skapa en box för informtion om landet 
// visar vilket land och information om landet
let countryName = document.createElement('div')
countryName.classList.add('info-box')
countryName.innerHTML = ` 
<div class="country-name"> About ${cities.name} </div>
<div class="country-info"><br>${cities.text}</div>`
container.appendChild(countryName)