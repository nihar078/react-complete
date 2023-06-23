import React, { useEffect, useState } from "react";
import "./ProductList.css";

const ProductList = (props) => {
  const [totalValue, setTotalValue] = useState();

  useEffect(() => {
    const calTotalValue = () => {
      let total = 0;
      props.items.forEach((item) => {
        total += Number(item.price);
      });
      setTotalValue(total);
    };
    calTotalValue();
  }, [props.items]);

  const deleteHandler = (productId, price) => {
    props.onDeleteProduct(productId);
    setTotalValue((prevTotal) => prevTotal - price);
  };

  return (
    <div className="items">
      <h2>Products</h2>
      <ul>
        {props.items.map((item) => (
          <li key={item.id}>
            {item.price} - {item.name}
            <button onClick={() => deleteHandler(item.id)}>
              Delete Product
            </button>
          </li>
        ))}
      </ul>
      <h3>Total Value Worth Of Products: Rs{totalValue}</h3>
    </div>
  );
};

export default ProductList;
