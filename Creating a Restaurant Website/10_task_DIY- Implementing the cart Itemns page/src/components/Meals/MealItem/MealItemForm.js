import React, {useContext} from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../store/cart-contex";
//or
// import CartCtx from "../../../store/cart-contex"   // we can put any value because it is default

const MealItemForm = (props) => {
  const cartcntx = useContext(CartContext)
  //or
  // const cartcntx = useContext(CartCtx)
  console.log('reinitialized cartcntx', cartcntx)
  const addItemToCart = (event) => {
    event.preventDefault()
    //update the cartcntx.Items
    // cartcntx.items.push(props.item)
    const quantity = document.getElementById("amount_" + props.id).value
    cartcntx.addItem({...props.item, quantity: quantity})
    console.log('after addItemToCart',cartcntx)

  }
  return (
    <form className={classes.form}>
      {console.log('inside render',cartcntx.items)}
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemToCart}>+ Add</button>
    </form>
  );
};
export default MealItemForm;
