const KEY = "6e3c74debd9bb52776febdf82d6af4d2";

export const getInfo = async (latitude, longitude) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${KEY}`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
};
