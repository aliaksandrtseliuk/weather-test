import React from "react";

import { Form, Input, Button } from "antd";

const Search = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <Form name="basic" onFinish={onFinish}>
      <Form.Item name="city">
        <Input placeholder="Enter city name" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Search;
