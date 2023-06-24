function showTemp(response) {
  let updateTemp = document.querySelector("#temperature");
  updateTemp.innerHTML = Math.round(response.data.temperature.current);

  let updateCity = document.querySelector("#city");
  updateCity.innerHTML = response.data.city;

  let updateDesc = document.querySelector("#description");
  updateDesc.innerHTML = response.data.condition.description;

  let updateWindsp = document.querySelector("#weather-Wind");
  updateWindsp.innerHTML = Math.round(response.data.wind.speed);

  let updatePress = document.querySelector("#weather-Press");
  updatePress.innerHTML = response.data.temperature.pressure;

  let updateHumi = document.querySelector("#weather-Humi");
  updateHumi.innerHTML = response.data.temperature.humidity;

  let updateIcon = document.querySelector("#icon");
  updateIcon.setAttribute("src", response.data.condition.icon_url);

  let currentTime = new Date(response.data.time * 1000);
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
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;

axios.get(apiUrl).then(showTemp);
