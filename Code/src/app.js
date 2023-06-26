function showTemp(response) {
  celTemp = response.data.temperature.current;
  let updateTemp = document.querySelector("#temperature");
  updateTemp.innerHTML = Math.round(celTemp);

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

  getForecast(response.data.coordinates);
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return days[day];
}

function displayWeeklyForecast(response) {
  let listForecast = response.data.daily;
  let updateForecast = document.querySelector("#week");

  let forecastHtml = `<div class="row">`;

  listForecast.forEach(function (forecastDay, index) {
    if (index < 6) {
      forecastHtml =
        forecastHtml +
        `<div class="col text-center" id="day">
              ${formatDay(forecastDay.time)}
              <br />
              <img
                src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${
                  forecastDay.condition.icon
                }.png"
                alt=""
                width="50"
              />
               <div class="weekly-temp">
                <span class="maxtemp">${Math.round(
                  forecastDay.temperature.maximum
                )} </span><span class="mintemp">${Math.round(
          forecastDay.temperature.minimum
        )}</span>
              </div>
            </div>`;
    }
  });

  forecastHtml = forecastHtml + `</div>`;
  updateForecast.innerHTML = forecastHtml;
}

function getForecast(coordinates) {
  let apiKey = "605tfadf3cb16c3770fb6d9dc43a237o";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${coordinates.longitude}&lat=${coordinates.latitude}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeeklyForecast);
}

function search(city) {
  let apiKey = "605tfadf3cb16c3770fb6d9dc43a237o";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

function submitBtn(event) {
  event.preventDefault();
  let cityUpdate = document.querySelector("#place-Input");
  search(cityUpdate.value);
}

let celTemp = null;

function showFahrenheit(event) {
  event.preventDefault();
  let fahrenheiTemp = (celTemp * 9) / 5 + 32;
  let updateTemp = document.querySelector("#temperature");
  updateTemp.innerHTML = Math.round(fahrenheiTemp);
}

function showCelcius(event) {
  event.preventDefault();
  let updateTemp = document.querySelector("#temperature");
  updateTemp.innerHTML = Math.round(celTemp);
}

search("Silang");

let form = document.querySelector("#search-form");
form.addEventListener("submit", submitBtn);

let fahrenheit = document.querySelector("#fah");
fahrenheit.addEventListener("click", showFahrenheit);

let celcius = document.querySelector("#cel");
celcius.addEventListener("click", showCelcius);
