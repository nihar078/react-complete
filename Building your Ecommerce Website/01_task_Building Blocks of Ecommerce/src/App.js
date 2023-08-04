import React, { Fragment, useContext, useState } from "react";
import {Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Music from "./components/layout/Music";
import Footer from "./components/footer/Footer";
import Cart from "./components/Cart/Cart";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Contact from "./components/contact/Contact";
import AuthForm from "./components/Auth/AuthForm";
import ProductDetails from "./components/layout/ProductDetails";
import AuthContext from "./store/AuthContex";

const App = () => {
  const authCtx = useContext(AuthContext);
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      <Header onShowCart={showCartHandler} />
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Routes>
        <Route path="/" element={<Navigate to="/store" />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/store"
          element={
            <div>
              {authCtx.isLoggedIn && <Music onShowCart={showCartHandler}/>}
              {!authCtx.isLoggedIn && <Navigate to="/auth" />}
            </div>
          }
        />
        <Route path="store/product-details/:id" element={<ProductDetails />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<AuthForm />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
