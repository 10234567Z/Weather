/* eslint-disable no-alert */
const locName = prompt("Enter the location", "");

async function GetWeather(url) {
  try {
    if (locName === null || locName.trim() === "") {
      throw new Error("Empty Location name submitted");
    }
    const response = await fetch(url, { mode: "cors" });
    const responseJson = await response.json();
    document.querySelector(".location").innerHTML = JSON.stringify(responseJson.location);
    document.querySelector(".currentWeather").innerHTML = JSON.stringify(responseJson.current);
  } catch (error) {
    console.error(error);
  }
}

GetWeather(`http://api.weatherapi.com/v1/current.json?key=a4c6435f1e1c492d88311257232208&q=${locName}`);
