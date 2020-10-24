import React, { useEffect } from "react";
import classes from "./Coors.module.scss";
import { connect } from "react-redux";
import { getCurrentLocation } from "../../../../Helpers/getCurrentLocation";
import { recalculateCoor } from "../../../../Helpers/recalculateCoor";
import { SET_CURRENT_COORS } from "../../../../Actions/actionTypes";

const Coors = (props) => {
  const { setCurrentCoors, latitude, longitude } = props;

  useEffect(() => {
    const getLocation = async () => {
      const coors = await getCurrentLocation();
      setCurrentCoors(coors);
    };

    getLocation();
  }, []);

  return (
    <div className={classes.Coors}>
      <p>Latitude: {recalculateCoor(latitude)}</p>
      <p>Longitude: {recalculateCoor(longitude)}</p>
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

function mapDispatchToProps(dispatch) {
  return {
    setCurrentCoors: (coors) => dispatch({ type: SET_CURRENT_COORS, coors }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Coors);
