import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Medicines from "./components/Layout/Medicines";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <Medicines />
    </CartProvider>
  );
};

export default App;
