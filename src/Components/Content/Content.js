import React from "react";
import classes from "./Content.module.scss";

import Map from "./Map/Map";
import Weather from "./Weather/Weather";

const Content = () => {
  return (
    <div className={classes.Content}>
      <div className={classes.Content__Wrapper}>
        <Weather />
        <Map />
      </div>
    </div>
  );
};

export default Content;
