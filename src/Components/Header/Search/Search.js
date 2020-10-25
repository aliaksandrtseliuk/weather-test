import React, { useState } from "react";
import classes from "./Search.module.scss";
import { connect } from "react-redux";
import { Form, Input, Button, Alert } from "antd";
import { getLocationByName } from "../../../Helpers/getLocationByName";
import Loader from "../../Loader/Loader";

import {
  START_LOADING,
  SET_COORS,
  STOP_LOADING,
} from "../../../Actions/actionTypes";

const Search = (props) => {
  const { loading, startLoading, stopLoading, setSearchCoors } = props;
  const regexp = /[0-9, !@#$%^&*'"/?`)(-=+|<>;:{}]/i;

  const getNewInfo = async (city) => {
    try {
      startLoading();
      const coors = await getLocationByName(city);
      setSearchCoors(coors);
    } catch (e) {
      setError(true);
      stopLoading();
    }
  };

  const onFinish = (value) => {
    setInputValue("");
    if (regexp.test(value.city)) return setError(true);

    let cities = JSON.parse(localStorage.getItem("cities")) || [];
    cities.unshift(value.city);
    localStorage.setItem("cities", JSON.stringify(cities));

    getNewInfo(value.city);
  };

  const [inputValue, setInputValue] = useState("");
  const [isError, setError] = useState(false);

  if (isError) {
    return (
      <div className={classes.Message}>
        <div className={classes.Message__Wrapper}>
          <div style={{ cursor: "pointer" }}>
            <Alert
              message="Error"
              description="Please! Enter correct city name"
              type="error"
              showIcon
              onClick={() => {
                setError(false);
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <Form className={classes.Search} name="basic" onFinish={onFinish}>
      <Form.Item className={classes.Search__Item} name="city">
        <Input
          placeholder="Enter city name"
          onChange={(event) => setInputValue(event.target.value)}
        />
      </Form.Item>
      <Form.Item className={classes.Search__Item}>
        <Button type="primary" htmlType="submit" disabled={!inputValue}>
          Send
        </Button>
      </Form.Item>
    </Form>
  );
};

function mapStateToProps(state) {
  return {
    loading: state.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    startLoading: () => dispatch({ type: START_LOADING }),
    setSearchCoors: (coors) => dispatch({ type: SET_COORS, coors }),
    stopLoading: () => dispatch({ type: STOP_LOADING }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
