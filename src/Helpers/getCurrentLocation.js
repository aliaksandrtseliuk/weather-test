export const getCurrentLocation = async () => {
  const options = {
    maximumAge: 0,
    timeout: 10000,
    enableHighAccurancy: true,
  };
  return new Promise((resolve) => {
    const success = (position) => {
      const lat = position.coords.latitude.toFixed(2);
      const lon = position.coords.longitude.toFixed(2);
      resolve({ lat, lon });
    };

    const error = (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
      throw err;
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  });
};
