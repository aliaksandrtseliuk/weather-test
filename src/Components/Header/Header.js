import React from "react";
import classes from "./Header.module.scss";
import { Switch } from "antd";
import Search from "./Search/Search";

const Header = () => {
  return (
    <div className={classes.Header}>
      <Switch checkedChildren="°C" unCheckedChildren="°F" defaultChecked />
      <Search />
    </div>
  );
};

export default Header;
