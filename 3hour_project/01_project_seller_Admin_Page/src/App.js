import React, { useState, useEffect} from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

const App = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProductList(JSON.parse(storedProducts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(productList));
  }, [productList]);

  const saveProductHandler = (product) => {
    setProductList([...productList, product]);
  };

  const deleteProductHandler = (productId) => {
    const updatedList = productList.filter((product) => product.id !== productId);
    setProductList(updatedList);
  };

  return (
    <div>
      <ProductForm onAddProduct={saveProductHandler} />
      <ProductList items={productList} onDeleteProduct={deleteProductHandler} />
    </div>
  );
};

export default App;


