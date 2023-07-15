import React from "react";
import NavigationBar from "./NavigationBar";
import Title from "./Title";

const Header = (props) => {
  return (
    <header>
      <NavigationBar onOpenCart={props.onShowCart}/>
      <Title/>
    </header>
  );
};

export default Header;
