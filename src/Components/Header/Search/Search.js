import React, { useState } from "react";
import classes from "./Search.module.scss";

import { Form, Input, Button } from "antd";

const Search = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const [inputValue, setInputValue] = useState("");

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

export default Search;
