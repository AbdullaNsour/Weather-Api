


window.onload = function () {
    getWeatherForCity("Amman");
    document.getElementById("city").innerHTML = "Amman";
  };

function getDayName(date = new Date(), locale = "en-US") {
  return date.toLocaleDateString(locale, { weekday: "long" });
}
console.log(getDayName());

const date = new Date();
const formattedDate = date
  .toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
  .replace(/ /g, "-");



function change() {
  const selectedCity = document.getElementById("locations").value;

  getWeatherForCity(selectedCity);

  document.getElementById("city").innerHTML = `${selectedCity}`;
}

function getWeatherForCity(name) {
  let api_key = "c583928db9680b82487dde28f2c14e5d";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${api_key}`
  )
    .then((response) => response.text())
    .then((result) => updateUIForecast(result));
}

function updateUIForecast(jsonString) {
  const data = JSON.parse(jsonString);
  const temp = data.main.temp;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;
  const pressure = data.main.pressure;
  const monthTime = formattedDate;
  const dayTime = getDayName();

  document.getElementById("temp").innerText = `${temp}`;
  document.getElementById("humidity").innerText = `${humidity}`;
  document.getElementById("windspeed").innerText = `${windSpeed}`;
  document.getElementById("pressure").innerText = `${pressure}`;
  document.getElementById("monthTime").innerHTML = `${monthTime}`;
  document.getElementById("dayTaim").innerHTML = `${dayTime}`;
}


