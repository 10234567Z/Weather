/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */

let locName = "";
async function GetWeather(url) {
  document.querySelector(".weatherContainer").style.opacity = 0;
  document.querySelector(".weatherContainer").style.visibility = "hidden";

  document.querySelector(".errors").textContent = "";
  try {
    if (locName === null || locName.trim() === "") {
      throw new Error("Empty Location name submitted");
    }
    const response = await fetch(url, { mode: "cors" });
    if (response.status === 400) {
      throw new Error("Not a valid location");
    } else {
      const responseJson = await response.json();
      console.log(responseJson);
      updateUI(responseJson);
    }
  } catch (error) {
    document.querySelector(".errors").textContent = error.message;
  }
}

document.querySelector("input").addEventListener("change", (e) => {
  locName = e.target.value;
  GetWeather(`https://api.weatherapi.com/v1/forecast.json?key=a4c6435f1e1c492d88311257232208&q=${locName}&days=10&aqi=no&alerts=no`);
});

document.querySelector(".searchIco").addEventListener("mousedown", () => {
  locName = document.querySelector("input").value;
  GetWeather(`https://api.weatherapi.com/v1/forecast.json?key=a4c6435f1e1c492d88311257232208&q=${locName}&days=10&aqi=no&alerts=no`);
});

function updateUI(responseJson) {
  document.querySelector(".name").textContent = responseJson.location.name;
  document.querySelector(".countryName").textContent = responseJson.location.country;
  document.querySelector(".inC").textContent = responseJson.current.temp_c;
  document.querySelector(".inF").textContent = responseJson.current.temp_f;
  document.querySelector(".conditions").textContent = responseJson.current.condition.text;
  document.querySelector(".currentCondIMG").src = responseJson.current.condition.icon;

  document.querySelector(".inTmrwC").textContent = responseJson.forecast.forecastday[1].day.avgtemp_c;
  document.querySelector(".inTmrwF").textContent = responseJson.forecast.forecastday[1].day.avgtemp_f;
  document.querySelector(".tmrwConditions").textContent = responseJson.forecast.forecastday[1].day.condition.text;
  document.querySelector(".tmrwCondIMG").src = responseJson.forecast.forecastday[1].day.condition.icon;
  document.querySelector(".rainChance").textContent = responseJson.forecast.forecastday[1].day.daily_chance_of_rain;
  document.querySelector(".weatherContainer").style.opacity = 1;
  document.querySelector(".weatherContainer").style.visibility = "visible";
}
