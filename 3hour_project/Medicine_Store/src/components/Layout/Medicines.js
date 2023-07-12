import React, { Fragment } from "react";
// import React from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
// import { useContext } from "react";
// import CartContext from "../../store/cart-context";

const Medicines = (props) => {
  // const cartCtx = useContext(CartContext);

  return (
    <Fragment>
      <ProductForm />
     <ProductList />
    </Fragment>
  );
};

export default Medicines;
