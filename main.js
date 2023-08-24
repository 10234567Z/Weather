/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */

const locName = "";
async function GetWeather(url) {
  try {
    if (locName === null || locName.trim() === "") {
      throw new Error("Empty Location name submitted");
    }
    const response = await fetch(url, { mode: "cors" });
    const responseJson = await response.json();
    console.log(responseJson);
  } catch (error) {
    console.error(error);
  }
}
