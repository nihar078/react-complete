import React, { Fragment } from "react";
import Header from "./components/header/Header";
import Music from "./components/layout/Music";
import Footer from "./components/footer/Footer";
// import ProductList from "./components/ProductList";

function App() {
  return (
    <Fragment>
      <Header/>
      <Music/>
      <Footer/>
    </Fragment>
  );
}

export default App;
