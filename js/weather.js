const API_KEY = "4a23499457b977a946b51d44d5f03b14";
const weatherBox = document.querySelector("#weather-box");
const city = weatherBox.querySelector("#city");
const weather = weatherBox.querySelector("#weather");
const temp = weatherBox.querySelector("#temp");
const tempMin = weatherBox.querySelector("#tempMin");
const tempMax = weatherBox.querySelector("#tempMax");
const tempFeel = weatherBox.querySelector("#tempFeel");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      temp.innerText = data.main.temp;
      tempMin.innerText = data.main.temp_min;
      tempMax.innerText = data.main.temp_max;
      tempFeel.innerText = data.main.feels_like;
    });
}
function onGeoError() {
  console.log("onGeoError");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
