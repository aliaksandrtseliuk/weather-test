import React from "react";
import classes from "./Header.module.scss";
import Search from "./Search/Search";
import UpdateButton from "./UpdateButton/UpdateButton";

const Header = () => {
  return (
    <div className={classes.Header}>
      <UpdateButton />
      <Search />
    </div>
  );
};

export default Header;
