import React, { useEffect } from "react";
import classes from "./Coors.module.scss";
import { connect } from "react-redux";
import { getCurrentLocation } from "../../../../Helpers/getCurrentLocation";
import { recalculateCoor } from "../../../../Helpers/recalculateCoor";
import {
  START_LOADING,
  SET_COORS,
  STOP_LOADING,
} from "../../../../Actions/actionTypes";
import Loader from "../../../Loader/Loader";

const Coors = (props) => {
  const {
    setCurrentCoors,
    latitude,
    longitude,
    loading,
    startLoading,
    stopLoading,
  } = props;

  useEffect(() => {
    const getLocation = async () => {
      startLoading();
      const coors = await getCurrentLocation();
      setCurrentCoors(coors);
      stopLoading();
    };

    getLocation();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={classes.Coors}>
      <p>Latitude: {recalculateCoor(latitude)}</p>
      <p>Longitude: {recalculateCoor(longitude)}</p>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    latitude: state.coors.lat,
    longitude: state.coors.lon,
    loading: state.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    startLoading: () => dispatch({ type: START_LOADING }),
    setCurrentCoors: (coors) => dispatch({ type: SET_COORS, coors }),
    stopLoading: () => dispatch({ type: STOP_LOADING }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Coors);
