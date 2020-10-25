import React from "react";
import classes from "./App.module.scss";
import "antd/dist/antd.css";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Background from "./Components/Background/Background";

const App = () => {
  return (
    <div className={classes.App}>
      <Background />
      <Header />
      <Content />
    </div>
  );
};

export default App;
