import React, { Fragment, Suspense, lazy, useContext, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import Header from "./components/header/Header";
// import Music from "./components/layout/Music";
// import Footer from "./components/footer/Footer";
// import Cart from "./components/Cart/Cart";
// import About from "./components/About/About";
// import Home from "./components/Home/Home";
// import Contact from "./components/contact/Contact";
// import ProductDetails from "./components/layout/ProductDetails";
import AuthForm from "./components/Auth/AuthForm";
import AuthContext from "./store/AuthContex";

const Header = lazy(() => import("./components/header/Header"));
const Music = lazy(() => import("./components/layout/Music"));
const Cart = lazy(() => import("./components/Cart/Cart"));
const About = lazy(() => import("./components/About/About"));
const Home = lazy(() => import("./components/Home/Home"));
const Contact = lazy(() => import("./components/contact/Contact"));
const ProductDetails = lazy(() => import("./components/layout/ProductDetails"));
const Footer = lazy(() => import("./components/footer/Footer"));

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
      <Suspense fallback={<p>Loading....</p>}>
        <Header onShowCart={showCartHandler} />
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Routes>
          <Route path="/" element={<Navigate to="/store" />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/store"
            element={
              <div>
                {authCtx.isLoggedIn && <Music onShowCart={showCartHandler} />}
                {!authCtx.isLoggedIn && <Navigate to="/auth" />}
              </div>
            }
          />
          <Route
            path="store/product-details/:id"
            element={<ProductDetails />}
          />
          <Route path="/Home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<AuthForm />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Suspense>
    </Fragment>
  );
};

export default App;
