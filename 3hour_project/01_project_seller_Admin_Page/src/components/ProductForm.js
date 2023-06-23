import React, {useState} from "react";
import './ProductForm.css'

const ProductForm = (props) => {
  const [productId, setProductId] = useState('');
  const [sellingPrice, setSellingPrice] = useState("");
  const [productName, setProductName] = useState('');

  const productIdHandler = (event) => {
    setProductId(event.target.value);
  };

  const sellingPriceHandler = (event) => {
    setSellingPrice(event.target.value);
  };

  const productNameHandler = (event) => {
    setProductName(event.target.value);
  };

  const productFormHandler = () => {
    const product = {
      id: productId,
      name: productName,
      price: sellingPrice
    };
    props.onAddProduct(product)
  }


  return (
    <form onSubmit={productFormHandler}>
      <div className="input">
        <div>
          <label>Product ID:</label>
          <input type="text" value={productId} onChange={productIdHandler}></input>
        </div>
        <div>
          <label>Selling Price:</label>
          <input type="number" value={sellingPrice} onChange={sellingPriceHandler}></input>
        </div>
        <div>
          <label>Product Name:</label>
          <input type="text" value={productName} onChange={productNameHandler}></input>
        </div>
        <div className="button">
            <button type="submit">Add Product</button>
        </div>
      </div>
    </form>
  );
};

export default ProductForm;
