let apiKey = "ebef9ca4a8de66ed586fac628fade056";
let units = "metric";

function getWeatherByCity(city) {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showWeather);
}

function showWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  let city = response.data.name;
  let description = response.data.weather[0].description;
  let windSpeed = response.data.wind.speed;
  let precipitation = response.data.clouds.all;

  let temp = document.querySelector("#temperature");
  temp.innerHTML = `${temperature}`;

  let updatedCity = document.querySelector(".top");
  updatedCity.innerHTML = city;

  let updatedDesc = document.querySelector("#description");
  updatedDesc.innerHTML = description;

  let updatedWind = document.querySelector("#weather-Wind");
  updatedWind.innerHTML = `${windSpeed} km/h`;

  let updatedPrecipitation = document.querySelector("#weather-Preci");
  updatedPrecipitation.innerHTML = `${precipitation}%`;

  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[Date.getDay()];
  let timeString = `${day + hours}:${minutes}`;

  let updatedTime = document.querySelector("#curr-time");
  updatedTime.innerHTML = timeString;
}

let srchButton = document.querySelector("#btn-srch");
srchButton.addEventListener("click", function (event) {
  event.preventDefault();
  let cityInput = document.querySelector("#place-input");
  let city = cityInput.value;
  getWeatherByCity(city);
});
