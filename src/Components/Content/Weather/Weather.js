import React, { useEffect } from "react";
import classes from "./Weather.module.scss";

import { connect } from "react-redux";
import {
  SET_CURRENT_WEATHER_INFO,
  SET_CURRENT_TIME,
} from "../../../Actions/actionTypes";
import { COUNTRIES as countries } from "../../../Helpers/countries";
import { days, months } from "../../../Helpers/calendar";

import Forecast from "./Forecast/Forecast";

const Weather = (props) => {
  const {
    latitude,
    longitude,
    currentTime,
    currentWeatherInfo,
    setCurrentWeatherInfo,
    setCurrentTime,
  } = props;
  const KEY = "6e3c74debd9bb52776febdf82d6af4d2";
  const MAIN_PATH = "https://api.unsplash.com/photos/random/";
  const ACCESS_KEY =
    "&client_id=652e1531e0191753dccb73757017b1ef2793f9e582b840542ded8e0e85c766a5";

  const getImageUrl = async (city) => {
    const query = `?query=town,${city}`;
    const url = MAIN_PATH + query + ACCESS_KEY;

    const response = await fetch(url);
    const data = await response.json();
    const imageUrl = await data.urls.regular;
    return imageUrl;
  };

  const getCurrentTime = () => {
    const newDate = new Date();
    const date = newDate.getDate();
    const day = days[newDate.getDay()];
    const month = months[newDate.getMonth()];
    const hour = newDate.getHours();
    const min = `0${newDate.getMinutes()}`;
    const seconds = `0${newDate.getSeconds()}`;
    const currentTime = `${day} ${date} ${month} ${hour}:${min.substr(
      -2
    )}:${seconds.substr(-2)}`;

    return currentTime;
  };

  useEffect(() => {
    const getWeatherInfo = async (latitude, longitude) => {
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${KEY}`;

      const response = await fetch(url);
      const data = await response.json();
      const countryIndex = data.city.country;

      const currentInfo = {
        locationName: `${data.city.name}, ${countries[countryIndex].en}`,
        tempC: data.list[0].main.temp.toFixed(0),
        weatherIcon: `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`,
        weatherText: data.list[0].weather[0].description,
        feelsLikeC: data.list[0].main.feels_like.toFixed(0),
        windSpeed: data.list[0].wind.speed.toFixed(1),
        humidity: data.list[0].main.humidity,
      };

      const forecast = {
        day_1st: {
          day: days[new Date().getDay() + 1],
          tempC: data.list[1].main.temp.toFixed(0),
          icon: `http://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@2x.png`,
        },
        day_2nd: {
          day: days[new Date().getDay() + 2],
          tempC: data.list[2].main.temp.toFixed(0),
          icon: `http://openweathermap.org/img/wn/${data.list[2].weather[0].icon}@2x.png`,
        },
        day_3rd: {
          day: days[new Date().getDay() + 3],
          tempC: data.list[3].main.temp.toFixed(0),
          icon: `http://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@2x.png`,
        },
      };

      const imageUrl = await getImageUrl(`${data.city.name}`);

      setCurrentWeatherInfo({ currentInfo, forecast, imageUrl });
    };

    getWeatherInfo(latitude, longitude);
  }, [latitude, longitude]);

  useEffect(() => {
    setInterval(() => {
      const time = getCurrentTime();
      setCurrentTime(time);
    }, 1000);
  }, []);

  return (
    <div className={classes.Weather}>
      <p className={classes.Weather__Location}>
        {currentWeatherInfo.locationName}
      </p>
      <p className={classes.Weather__Time}>{currentTime}</p>
      <span className={classes.Weather__CurrentTemp}>
        {currentWeatherInfo.tempC}°
      </span>
      <span
        className={classes.Weather__CurrentImage}
        style={{ backgroundImage: `url(${currentWeatherInfo.weatherIcon})` }}
      ></span>
      <div className={classes.Weather__CurrentInfo}>
        <p>{currentWeatherInfo.weatherText}</p>
        <p>Feels like: {currentWeatherInfo.feelsLikeC}°</p>
        <p>Humidity: {currentWeatherInfo.humidity}%</p>
        <p>Wind: {currentWeatherInfo.windSpeed} m/s</p>
      </div>

      <Forecast />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    ...state,
    latitude: state.coors.lat,
    longitude: state.coors.lon,
    currentTime: state.currentTime,
    currentWeatherInfo: state.info.currentInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentWeatherInfo: (info) =>
      dispatch({ type: SET_CURRENT_WEATHER_INFO, info }),
    setCurrentTime: (time) => dispatch({ type: SET_CURRENT_TIME, time }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
