import React from "react";
import { Button } from "antd";
import { connect } from "react-redux";

import {
  START_LOADING,
  SET_IMAGE_URL,
  STOP_LOADING,
} from "../../../Actions/actionTypes";

import { getImageUrl } from "../../../Helpers/getImageUrl";
import Loader from "../../Loader/Loader";

const UpdateButton = (props) => {
  const { city, loading, startLoading, stopLoading, setImageUrl } = props;

  const getNewBackground = async () => {
    startLoading();
    const newUrl = await getImageUrl(city);
    setImageUrl(newUrl);
    stopLoading();
  };

  if (loading) return <Loader />;

  return (
    <Button type="primary" onClick={() => getNewBackground()}>
      UB
    </Button>
  );
};

function mapStateToProps(state) {
  return {
    city: state.city,
    loading: state.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    startLoading: () => dispatch({ type: START_LOADING }),
    setImageUrl: (url) => dispatch({ type: SET_IMAGE_URL, url }),
    stopLoading: () => dispatch({ type: STOP_LOADING }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateButton);
