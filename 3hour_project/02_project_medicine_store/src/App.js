import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Medicine from "./Components/Layout/Medicine";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false)
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <Medicine />
    </CartProvider>

  );
};

export default App;
