import React from "react";
import classes from "./App.module.scss";
import "antd/dist/antd.css";

import Header from "./Components/Header/Header";

const App = () => {
  return (
    <div className={classes.App}>
      <Header />
    </div>
  );
};

export default App;
