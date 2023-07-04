"use strict";

let cityName;
const searchBtn = document.getElementById("searchBtn");
var apiKey = config.weatherApi;

searchBtn.addEventListener("click", function () {
  cityName = document.getElementById("search").value;
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  function setIcon(description) {
    const icon = document.getElementById("icon");
    if (description === "Clear") {
      icon.src = "./images/sunny.png";
    } else if (description === "Clouds") {
      icon.src = "./images/clouds-30.png";
    } else if (description === "Rain") {
      icon.src = "./images/rain.png";
    } else if (description === "Haze" || description === "Mist") {
      icon.src = "./images/haze.png";
    } else {
      icon.src = "./images/thunder.png";
    }
  }
  fetch(apiURL)
    .then((res) => res.json())
    .then((data) => {
      const temp = Math.floor(data.main.temp) + `°C`;
      const city = data.name;
      const description = data.weather[0].main;
      const wind = data.wind.speed;
      const humidity = data.main.humidity;

      document.getElementById("city").textContent = city;
      document.getElementById("temp").textContent = temp;
      document.getElementById("description").textContent = description;
      document.getElementById("humidity").textContent = humidity;
      document.getElementById("wind").textContent = wind;

      setIcon(description);
    });
});
