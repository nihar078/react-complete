import React, { useContext, useState } from "react";
import Header from "./components/header/Header";
import Music from "./components/layout/Music";
import Footer from "./components/footer/Footer";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Contact from "./components/contact/Contact";
import AuthContext, { AuthContextProvider } from "./store/AuthContex";
import AuthForm from "./components/Auth/AuthForm";
// import ProductDetails from "./components/layout/ProductDetails";
import ProductDetails from "./components/layout/ProductDetails";

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
    <AuthContextProvider>
      <BrowserRouter>
        <CartProvider>
          <Header onShowCart={showCartHandler} />
          {cartIsShown && <Cart onClose={hideCartHandler} />}
          <Routes>
            <Route path="/" element={<Navigate to="/store" />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/store"
              element={
                <>
                  {authCtx.isLoggedIn && <Music onShowCart={showCartHandler} />}
                  {!authCtx.isLoggedIn && <Navigate to="/auth" />}
                </>
              }
            />
            <Route
              path="store/product-details/:id"
              element={<ProductDetails />}
            />
            <Route path="/Home" element={<Home />} />
            <Route
              path="/contact"
              element={
                <>
                  {authCtx.isLoggedIn && <Contact />}
                  {!authCtx.isLoggedIn && <Navigate to="/auth" />}
                </>
              }
            ></Route>
            <Route path="/auth" element={<AuthForm />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export default App;
