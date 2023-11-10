import React, { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
// import classes from './Header.module.css'
import { Container, Navbar } from "react-bootstrap";

const Header = (props) => {
  return (
    <Fragment>
      {/* <header className={classes.header}>
                <h1>Welcome To Candy Store</h1>
                <HeaderCartButton onShow ={props.onShowCart}/>
            </header> */}
      <Navbar bg ="info" style={{color: "white"}}>
        <Container>
          <h1>Welcome To Candy Shop</h1>
          <HeaderCartButton onShow ={props.onShowCart}/>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Header;
