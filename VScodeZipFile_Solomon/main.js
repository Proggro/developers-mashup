// // // fetch the Weatherdata
async function getCurrentWeather() {
  const response = await fetch("http://api.weatherapi.com/v1/current.json?key=28ec16b97de640a3aae234209221912&q=Ghent&aqi=no");
  const data = await response.json();
  displayWeather(data.current);
}

getCurrentWeather();

function displayWeather(weather) {
  document.getElementById("weather").innerHTML = `
    ${Object.values(weather).map(function () {
      return `${weather.temp_c}°c`
    }).join('-')}
  `
}

//fetch Amount of Dogtoilets in Ghent
async function getDogToilets() {
  const response = await fetch("https://data.stad.gent/api/records/1.0/search/?dataset=hondentoilletten-gent&q=&rows=1000&facet=soort&facet=bestaand");
  const data = await response.json();
  displayDogToilets(data.parameters)
}

getDogToilets()

function displayDogToilets(dogtoilets) {
  document.getElementById("dogtoilets").innerHTML = `
  ${Object.values(dogtoilets).map(function () {
    return `${dogtoilets.dataset}`
  }).join('_')}
  `
}

//Do not delete


// fetch('http://api.weatherapi.com/v1/current.json?key=28ec16b97de640a3aae234209221912&q=Ghent&aqi=no').then((data) => {
//   return data.json();
// }).then((completedata) => {
//   document.getElementById("weather").innerHTML= Object.keys(completedata);
// })

// 2f304395275f4b16b9b174317221612