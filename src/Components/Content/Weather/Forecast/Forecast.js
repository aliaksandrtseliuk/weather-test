import React from "react";
import classes from "./Forecast.module.scss";
import { connect } from "react-redux";

const Forecast = (props) => {
  const { forecast } = props;
  return (
    <>
      <div className={classes.Forecast}>
        <span className={classes.Forecast__Day}>{forecast.day_1st.day}</span>
        <span className={classes.Forecast__Temp}>
          {forecast.day_1st.tempC}°
        </span>
        <div
          className={classes.Forecast__Icon}
          style={{ backgroundImage: `url(${forecast.day_1st.icon})` }}
        ></div>
      </div>
      <div className={classes.Forecast}>
        <span className={classes.Forecast__Day}>{forecast.day_2nd.day}</span>
        <span className={classes.Forecast__Temp}>
          {forecast.day_2nd.tempC}°
        </span>
        <div
          className={classes.Forecast__Icon}
          style={{ backgroundImage: `url(${forecast.day_2nd.icon})` }}
        ></div>
      </div>
      <div className={classes.Forecast}>
        <span className={classes.Forecast__Day}>{forecast.day_3rd.day}</span>
        <span className={classes.Forecast__Temp}>
          {forecast.day_3rd.tempC}°
        </span>
        <div
          className={classes.Forecast__Icon}
          style={{ backgroundImage: `url(${forecast.day_3rd.icon})` }}
        ></div>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    ...state,
    forecast: state.info.forecast,
  };
}

export default connect(mapStateToProps)(Forecast);
