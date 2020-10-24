import React from "react";
import classes from "./Background.module.scss";

import { connect } from "react-redux";

const Background = (props) => {
  const { imageUrl } = props;
  return (
    <div
      className={classes.Background}
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
  );
};

function mapStateToProps(state) {
  return {
    imageUrl: state.info.imageUrl,
  };
}

export default connect(mapStateToProps)(Background);
