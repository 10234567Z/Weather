/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */

let locName = "";
async function GetWeather(url) {
  try {
    if (locName === null || locName.trim() === "") {
      throw new Error("Empty Location name submitted");
    }
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) {
      throw new Error("Not a valid location");
    }
    const responseJson = await response.json();
  } catch (error) {
    document.querySelector(".errors").innerHTML = error.message;
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
