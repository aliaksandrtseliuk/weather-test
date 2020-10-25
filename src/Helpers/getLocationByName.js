const MAIN_PATH_GEOCODE = "https://geocode-maps.yandex.ru/1.x";
const API_KEY = "?apikey=b82a7343-eaf0-4883-8bea-632ce8cfde1a&";

export const getLocationByName = async (city) => {
  const url = `${MAIN_PATH_GEOCODE}${API_KEY}geocode=${city}`;
  const response = await fetch(url);
  const dataInfo = await response.text();

  if (dataInfo.Error) {
    throw new Error(dataInfo.Error);
  }

  const data = new window.DOMParser().parseFromString(dataInfo, "text/xml");

  const lat = data.querySelector("pos").textContent.split(" ")[1];
  const lon = data.querySelector("pos").textContent.split(" ")[0];
  return { lat, lon };
};
