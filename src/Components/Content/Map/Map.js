import React, { useEffect, useRef } from "react";
import classes from "./Map.module.scss";
import mapboxgl from "mapbox-gl";

import { connect } from "react-redux";
import { ACCESS_TOKEN } from "../../../Helpers/accessToken";
import Coors from "./Coors/Coors";

mapboxgl.accessToken = ACCESS_TOKEN;

const Map = (props) => {
  const { latitude, longitude } = props;
  const mapContainerRef = useRef(null);

  useEffect(() => {
    new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [longitude, latitude],
      zoom: 10,
    });
  }, [longitude, latitude]);

  return (
    <div className={classes.Map}>
      <Coors />
      <div ref={mapContainerRef} className={classes.Map__Wrapper}></div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    ...state,
    latitude: state.coors.lat,
    longitude: state.coors.lon,
  };
}

export default connect(mapStateToProps)(Map);
