const MAIN_PATH = "https://api.unsplash.com/photos/random/";
const ACCESS_KEY =
  "&client_id=652e1531e0191753dccb73757017b1ef2793f9e582b840542ded8e0e85c766a5";

export const getImageUrl = async (city) => {
  const query = `?query=town,${city}`;
  const url = MAIN_PATH + query + ACCESS_KEY;

  const response = await fetch(url);
  const data = await response.json();
  const imageUrl = await data.urls.regular;
  return imageUrl;
};
