import React, { useState } from "react";
import Header from "./components/header/Header";
import Music from "./components/layout/Music";
import Footer from "./components/footer/Footer";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import About from "./components/About/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <BrowserRouter>
      <CartProvider>
        <Header onShowCart={showCartHandler} />
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/store" element={<Music onShowCart={showCartHandler}/>} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
