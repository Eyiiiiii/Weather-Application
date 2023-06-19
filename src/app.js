function showTemp(value) {
  let updateTemp = document.querySelector("#temperature");
  updateTemp.innerHTML = Math.round(value.data.temperature);

  let updateCity = document.querySelector("#city");
  updateCity.innerHTML = value.data.city;

  let updateDesc = document.querySelector("#description");
  updateDesc.innerHTML = value.data.condition.description;

  let updateWindsp = document.querySelector("#weather-Wind");
  updateWindsp.innerHTML = Math.round(value.data.wind.speed);

  let updatePreci = document.querySelector("#weather-Preci");
  updatePreci.innerHTML = value.data.condition.precipitation;

  let updateHumi = document.querySelector("#weather-Humi");
  updateHumi.innerHTML = value.data.temperature.humidity;

  let updateIcon = document.querySelector("#icon");
  updateIcon.setAttribute("src", value.data.condition.icon_url);

  let currentTime = new Date(value.data.time * 1000); // Convert timestamp to milliseconds
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

let apiKey = "605tfadf3cb16c3770fb6d9dc43a237o";
let city = "Lisbon";
let units = "metric";
let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=${units}`;

axios.get(apiUrl).then(showTemp);
