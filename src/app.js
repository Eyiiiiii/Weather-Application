function showTemp(value) {
  let updateTemp = document.querySelector("#temperature");
  updateTemp.innerHTML = Math.round(value.data.main.temp);

  let updateCity = document.querySelector("#city");
  updateCity.innerHTML = value.data.name;

  let updateDesc = document.querySelector("#description");
  updateDesc.innerHTML = value.data.weather[0].description;

  let updateWindsp = document.querySelector("#weather-Wind");
  updateWindsp.innerHTML = Math.round(value.data.wind.speed);

  let updatePreci = document.querySelector("#weather-Preci");
  updatePreci = value.data.clouds.all;

  let updateHumi = document.querySelector("#weather-Humi");
  updateHumi.innerHTML = value.data.main.humidity;

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
  let day = days[currentTime.getDay()];
  let timeString = `${day} ${hours}:${minutes}`;

  let updatedTime = document.querySelector("#curr-time");
  updatedTime.innerHTML = timeString;
}

let apiKey = "f3887e262c88d1158f7e2ef4998e234c";
let units = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Cebu&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(showTemp);
