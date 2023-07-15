import React, { Fragment, useState } from "react";
import Header from "./components/header/Header";
import Music from "./components/layout/Music";
import Footer from "./components/footer/Footer";
import Cart from "./components/Cart/Cart";
// import ProductList from "./components/ProductList";

const App = () => {

  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      <Header onShowCart={showCartHandler}/>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Music/>
      <Footer/>
    </Fragment>
  );
}

export default App;
